import { NextRequest, NextResponse } from 'next/server'

const GHL_API_KEY     = process.env.GHL_API_KEY!
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID!
const BASE            = 'https://services.leadconnectorhq.com'

const headers = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  'Content-Type': 'application/json',
  Version: '2021-04-15',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, role, challenge, message, date, time } = body

    // 1 — create or update contact in GHL
    const contactRes = await fetch(`${BASE}/contacts/`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName,
        lastName,
        email,
        phone,
        tags: ['clarity-call', 'website-lead'],
      }),
    })

    if (!contactRes.ok) {
      const err = await contactRes.text()
      console.error('GHL contact error:', err)
      return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 })
    }

    const { contact } = await contactRes.json()

    // 2 — book appointment
    const startTime = new Date(`${date}T${time}:00`)
    const endTime   = new Date(startTime.getTime() + 30 * 60 * 1000) // 30-min slot

    const apptRes = await fetch(`${BASE}/calendars/events/appointments`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        calendarId:        GHL_CALENDAR_ID,
        locationId:        GHL_LOCATION_ID,
        contactId:         contact.id,
        startTime:         startTime.toISOString(),
        endTime:           endTime.toISOString(),
        title:             `Clarity Call — ${firstName} ${lastName}`,
        appointmentStatus: 'new',
        toNotify:          true,
        notes:             `Role: ${role ?? 'N/A'}\nChallenge: ${challenge ?? 'N/A'}\nMessage: ${message ?? 'N/A'}`,
      }),
    })

    if (!apptRes.ok) {
      const err = await apptRes.text()
      console.error('GHL appointment error:', err)
      return NextResponse.json({ error: 'Contact saved but appointment booking failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
