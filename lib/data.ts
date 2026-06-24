export const SERVICES = [
  {
    icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    badge: "GoHighLevel · HubSpot",
    title: "CRM Setup & Optimization",
    desc: "Every lead tracked. Every client remembered. Configured for your business, not a template.",
    features: [
      { on: true, name: "Full CRM configuration" },
      { on: true, name: "Custom pipeline stages" },
      { on: true, name: "Automated follow-up sequences" },
      { on: false, name: "Data migration support" },
      { on: false, name: "Team training docs" },
    ],
  },
  {
    icon: '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>',
    badge: "Zapier · Make",
    title: "Workflow Automation",
    desc: "Connect your entire stack so information flows automatically. No more cracks things fall through.",
    features: [
      { on: true, name: "Tech stack audit" },
      { on: true, name: "Automated data flows" },
      { on: true, name: "Client onboarding automation" },
      { on: false, name: "Error monitoring" },
      { on: false, name: "System health checks" },
    ],
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    badge: "Pipeline · Nurture",
    title: "Lead Generation Systems",
    desc: "A pipeline that works while you sleep — from first touch to paying client, fully automated.",
    features: [
      { on: true, name: "Lead capture and opt-ins" },
      { on: true, name: "Email & SMS nurture sequences" },
      { on: false, name: "Lead scoring workflows" },
      { on: false, name: "Re-engagement campaigns" },
      { on: false, name: "Conversion reporting" },
    ],
  },
  {
    icon: '<path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>',
    badge: "Funnels · Revenue",
    title: "Sales Funnel Design",
    desc: "Guide prospects from awareness to decision with confidence — every touchpoint automated.",
    features: [
      { on: true, name: "Customer journey mapping" },
      { on: true, name: "Landing and sales pages" },
      { on: false, name: "Checkout flow optimisation" },
      { on: false, name: "A/B testing" },
      { on: false, name: "Monthly funnel review" },
    ],
  },
  {
    icon: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    badge: "Strategy · Content",
    title: "Marketing Execution",
    desc: "Consistent marketing that does not require you to live on your phone. We plan and execute.",
    features: [
      { on: true, name: "Social media strategy" },
      { on: true, name: "Content creation & scheduling" },
      { on: false, name: "Email campaigns" },
      { on: false, name: "Paid ad management" },
      { on: false, name: "Monthly analytics report" },
    ],
  },
  {
    icon: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    badge: "Booking · Onboarding",
    title: "Appointment Booking",
    desc: "Let clients book themselves, fill intake forms, and pay — without a single back-and-forth.",
    features: [
      { on: true, name: "Booking page & calendar setup" },
      { on: true, name: "Confirmation & reminders" },
      { on: false, name: "Pre-call intake forms" },
      { on: false, name: "Payment collection" },
      { on: false, name: "No-show management" },
    ],
  },
]

export const TOOLS = [
  { name: "GoHighLevel", icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>' },
  { name: "HubSpot", icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="2" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="22" y2="12"/>' },
  { name: "Monday.com", icon: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6"/><path d="M9 12h6"/><path d="M9 15h4"/>' },
  { name: "Zapier", icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>' },
  { name: "Make", icon: '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>' },
  { name: "ActiveCampaign", icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>' },
  { name: "Calendly", icon: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>' },
  { name: "Stripe", icon: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>' },
  { name: "Mailchimp", icon: '<path d="m3 11 18-5v12L3 14v-3z"/>' },
  { name: "Notion", icon: '<path d="M4 4h16v16H4z" rx="2"/><path d="M4 8h16"/><path d="M8 4v16"/>' },
  { name: "Slack", icon: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>' },
  { name: "Google Workspace", icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' },
  { name: "Typeform", icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>' },
  { name: "Airtable", icon: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>' },
]

export const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/IKqC5JSvzvRrK3N1qfJ1"
