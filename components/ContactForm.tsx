'use client'
import { useState } from 'react'
import { BOOKING_URL } from '@/lib/data'

const inputCls =
  'w-full bg-[#f7f9ff] border border-line rounded-lg px-4 py-[0.8rem] text-ink font-body text-[0.93rem] font-light transition-[border-color,box-shadow] duration-200 outline-none appearance-none placeholder:text-ink-dim focus:border-blue focus:shadow-[0_0_0_3px_rgba(26,86,219,0.1)] focus:bg-white'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  role: string
  challenge: string
  message: string
}

export default function ContactForm() {
  const [step, setStep] = useState<1 | 2>(1)
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '',
    role: '', challenge: '', message: '',
  })

  function set(key: keyof FormData, val: string) {
    setForm(f => ({ ...f, [key]: val }))
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault()
    setStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const iframeSrc =
    `${BOOKING_URL}?firstname=${encodeURIComponent(form.firstName)}` +
    `&lastname=${encodeURIComponent(form.lastName)}` +
    `&email=${encodeURIComponent(form.email)}` +
    `&phone=${encodeURIComponent(form.phone)}`

  if (step === 2) {
    return (
      <div>
        {/* Header */}
        <div className='flex items-start gap-4 mb-6 pb-6 border-b border-line'>
          <button
            onClick={() => setStep(1)}
            className='shrink-0 mt-1 text-[0.82rem] text-blue hover:underline flex items-center gap-1 transition-colors'>
            ← Back
          </button>
          <div>
            <h3 className='font-display text-[1.6rem] font-semibold leading-[1.2]'>
              Pick your date &amp; time
            </h3>
            <p className='text-[0.85rem] text-ink-muted mt-1'>
              Your details are already filled in — just choose a slot.
            </p>
          </div>
        </div>

        {/* Step indicator */}
        <div className='flex items-center gap-3 mb-6'>
          <div className='flex items-center gap-2'>
            <span className='w-6 h-6 rounded-full bg-blue/20 text-blue text-[0.72rem] flex items-center justify-center font-semibold'>✓</span>
            <span className='text-[0.82rem] text-ink-muted'>Your Details</span>
          </div>
          <div className='flex-1 h-px bg-line' />
          <div className='flex items-center gap-2'>
            <span className='w-6 h-6 rounded-full bg-blue text-white text-[0.72rem] flex items-center justify-center font-semibold'>2</span>
            <span className='text-[0.82rem] font-medium text-ink'>Pick a Time</span>
          </div>
        </div>

        <iframe
          src={iframeSrc}
          className='w-full border-0 rounded-xl'
          style={{ height: '680px' }}
          loading='lazy'
          title='Book a Free Clarity Call'
        />
      </div>
    )
  }

  return (
    <form onSubmit={handleNext}>
      {/* Step indicator */}
      <div className='flex items-center gap-3 mb-8'>
        <div className='flex items-center gap-2'>
          <span className='w-6 h-6 rounded-full bg-blue text-white text-[0.72rem] flex items-center justify-center font-semibold'>1</span>
          <span className='text-[0.82rem] font-medium text-ink'>Your Details</span>
        </div>
        <div className='flex-1 h-px bg-line' />
        <div className='flex items-center gap-2'>
          <span className='w-6 h-6 rounded-full border border-line text-ink-muted text-[0.72rem] flex items-center justify-center font-semibold'>2</span>
          <span className='text-[0.82rem] text-ink-muted'>Pick a Time</span>
        </div>
      </div>

      <div className='mb-8'>
        <h3 className='font-display text-[1.8rem] font-semibold mb-[0.4rem]'>
          Book Your Free Clarity Call
        </h3>
        <p className='text-[0.88rem] text-ink-muted'>
          Tell us about yourself — then pick a time that works.
        </p>
      </div>

      <div className='grid grid-cols-2 gap-5 mb-5 max-sm:grid-cols-1'>
        <div>
          <label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>First Name</label>
          <input required type='text' placeholder='Your first name' className={inputCls}
            value={form.firstName} onChange={e => set('firstName', e.target.value)} />
        </div>
        <div>
          <label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>Last Name</label>
          <input required type='text' placeholder='Your last name' className={inputCls}
            value={form.lastName} onChange={e => set('lastName', e.target.value)} />
        </div>
      </div>

      <div className='mb-5'>
        <label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>Email Address</label>
        <input required type='email' placeholder='your@email.com' className={inputCls}
          value={form.email} onChange={e => set('email', e.target.value)} />
      </div>

      <div className='mb-5'>
        <label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>Phone Number</label>
        <input required type='tel' placeholder='+1 (000) 000-0000' className={inputCls}
          value={form.phone} onChange={e => set('phone', e.target.value)} />
      </div>

      <div className='mb-5'>
        <label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>What best describes you?</label>
        <select required className={inputCls} value={form.role} onChange={e => set('role', e.target.value)}>
          <option value='' disabled>Select your role</option>
          <option>Coach or Consultant</option>
          <option>Real Estate Agent</option>
          <option>Entrepreneur or Founder</option>
          <option>Small Business Owner</option>
          <option>Other</option>
        </select>
      </div>

      <div className='mb-5'>
        <label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>Your biggest challenge right now?</label>
        <select required className={inputCls} value={form.challenge} onChange={e => set('challenge', e.target.value)}>
          <option value='' disabled>Select your main challenge</option>
          <option>Leads slipping through the cracks</option>
          <option>Tools that do not work together</option>
          <option>No time, stuck doing everything manually</option>
          <option>Inconsistent marketing and social media</option>
          <option>Cannot scale, everything depends on me</option>
          <option>Not sure where to start</option>
        </select>
      </div>

      <div className='mb-7'>
        <label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>Tell us a little more (optional)</label>
        <textarea
          placeholder='What would feel like a win for you in 90 days?'
          className={`${inputCls} resize-y min-h-[90px]`}
          value={form.message} onChange={e => set('message', e.target.value)} />
      </div>

      <button
        type='submit'
        className='block w-full bg-blue-bright text-white text-center py-4 px-8 rounded-lg font-body font-medium text-[1rem] transition-[background,transform] duration-[250ms] hover:bg-blue hover:-translate-y-0.5'>
        Next: Pick Your Time →
      </button>
    </form>
  )
}
