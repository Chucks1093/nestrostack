import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'
import { BOOKING_URL } from '@/lib/data'

const SectionLabel = ({ children, center }: { children: string; center?: boolean }) => (
  <p className={`flex items-center gap-[0.8rem] text-blue text-[0.72rem] font-medium tracking-[0.2em] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-px before:bg-blue before:shrink-0 ${center ? "justify-center after:content-[''] after:block after:w-6 after:h-px after:bg-blue" : ''}`}>
    {children}
  </p>
)

const CalIcon = () => (
  <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-blue-bright text-blue-bright">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const serviceCards = [
  { icon: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></>, title: 'CRM Setup and Optimization', desc: 'Every lead tracked. Every client remembered. Configured for your business, not a template.', delay: undefined },
  { icon: <><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></>, title: 'Workflow Automation', desc: 'Connect your tools so your business runs like a machine. No more manual handoffs.', delay: 'd2' as const },
  { icon: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>, title: 'Lead Generation Systems', desc: 'A pipeline that works while you sleep. End-to-end lead capture and follow-up automation.', delay: 'd3' as const },
  { icon: <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>, title: 'Sales Funnel Design', desc: 'Map the journey from stranger to paying client then automate every step.', delay: undefined },
  { icon: <><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></>, title: 'Marketing Execution', desc: 'Consistent, strategic social media and campaigns without you living on your phone.', delay: 'd2' as const },
  { icon: <><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></>, title: 'Appointment Booking', desc: 'Let clients book themselves. You just show up. Fully automated booking and onboarding.', delay: 'd3' as const },
]

const steps = [
  { num: '01', title: 'Clarity Call', body: 'We listen first. No pitching, no jargon. Just a real conversation where we map your current chaos and understand exactly what your business needs.', delay: 'd1' as const },
  { num: '02', title: 'Systems Blueprint', body: 'We design your custom automation stack built around your specific business, your tools, and your goals. Nothing generic. Everything intentional.', delay: 'd2' as const },
  { num: '03', title: 'Build and Hand Over', body: 'We build it, test it, and hand you a business that actually runs. Clarity, confidence, and a system that works without you babysitting it.', delay: 'd3' as const },
]

const testimonials = [
  { initials: 'SM', name: 'Sarah M.', role: 'Business Coach', quote: 'For the first time in two years, I took a full weekend off and nothing broke. That alone was worth everything.', delay: 'd1' as const },
  { initials: 'JT', name: 'James T.', role: 'Real Estate Agent', quote: 'They did not just set up my CRM. They gave me my sanity back. I finally feel like I am running a business instead of just surviving one.', delay: 'd2' as const },
  { initials: 'DR', name: 'Dana R.', role: 'Entrepreneur', quote: 'I came in overwhelmed and left with a system I actually understood. The clarity alone was worth the investment.', delay: 'd3' as const },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <div className="min-h-screen relative overflow-hidden">
        <div className="hero-grid" />
        <div className="relative z-[2] grid grid-cols-2 min-h-screen max-lg:grid-cols-1 max-lg:min-h-[auto]">
          <div className="flex flex-col justify-center pr-16 pl-10 pt-[10rem] pb-20 max-lg:px-10 max-lg:pt-12 max-lg:pb-16">
            <p className="flex items-center gap-[0.8rem] text-blue text-[0.75rem] font-medium tracking-[0.18em] uppercase mb-6 opacity-0 [animation:fadeUp_0.8s_ease_forwards_0.2s] before:content-[''] before:block before:w-7 before:h-px before:bg-blue">
              Business Automation Agency
            </p>
            <h1 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-6 opacity-0 [animation:fadeUp_0.9s_ease_forwards_0.4s]">
              Stop Running Your Business on <em className="text-blue">Chaos.</em> Start Running It on <em className="text-blue">Systems.</em>
            </h1>
            <p className="text-[1.05rem] text-ink-muted leading-[1.88] mb-9 opacity-0 [animation:fadeUp_0.9s_ease_forwards_0.6s]">
              Nestro Stack helps coaches, entrepreneurs, and real estate agents replace overwhelming manual work with automated business workflows that generate leads and drive income.
            </p>
            <div className="flex gap-4 flex-wrap opacity-0 [animation:fadeUp_0.9s_ease_forwards_0.8s]">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-blue-bright text-white py-[0.9rem] px-8 rounded-[5px] no-underline font-medium text-[0.95rem] transition-[background,transform] duration-[250ms] inline-flex items-center gap-[0.55rem] hover:bg-blue hover:-translate-y-0.5">
                <CalIcon />Book a Free Clarity Call
              </a>
              <Link href="/services" className="bg-[rgba(26,86,219,0.04)] text-ink py-[0.9rem] px-8 rounded-[5px] no-underline font-normal text-[0.95rem] border border-line transition-all duration-[250ms] inline-flex items-center gap-[0.55rem] hover:border-blue hover:text-blue hover:bg-blue-glow">
                See How It Works<ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="bg-blue-bright dotted-panel flex items-center justify-center rounded-bl-[3rem] max-lg:min-h-[260px] max-lg:rounded-none">
            <svg width="130" height="130" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
              <rect width="8" height="8" x="3" y="3" rx="2" />
              <path d="M7 11v4a2 2 0 0 0 2 2h4" />
              <rect width="8" height="8" x="13" y="13" rx="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <Reveal className="bg-blue-bright text-center py-28 px-10 mt-10 rounded-[2rem] mx-8 max-md:mx-4 max-md:rounded-[1.2rem]">
        <div className="max-w-[760px] mx-auto">
          <p className="flex justify-center items-center gap-[0.8rem] text-white/85 text-[0.72rem] font-medium tracking-[0.2em] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-px before:bg-white/50 after:content-[''] after:block after:w-6 after:h-px after:bg-white/50">
            The Problem We Solve
          </p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold leading-[1.2] mb-6 text-white">
            Your business should not{' '}
            <mark className="bg-white/30 text-white rounded-[4px] px-[6px] not-italic">always</mark>{' '}
            depend on you being in the room.
          </h2>
          <p className="text-[0.98rem] text-white/85 leading-[1.85] mb-5">
            We have seen it happen to the best people. Talented coaches, hardworking real estate agents, driven entrepreneurs held hostage by the very business they built.{' '}
            <strong className="text-white font-semibold">The missing piece is never more effort. It is always a system.</strong>{' '}
            And that is exactly what Nestro Stack builds.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-bright py-[0.9rem] px-8 rounded-[5px] no-underline font-medium text-[0.95rem] transition-[background] duration-[250ms] mt-4 inline-flex items-center gap-[0.55rem] hover:bg-[#eaf1fb]">
            <CalIcon />Book a Free Clarity Call
          </a>
        </div>
      </Reveal>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-28 px-10 max-md:py-20 max-md:px-6">
        <div className="max-w-[1120px] mx-auto">
          <Reveal>
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-5">
              Everything your business needs <em className="text-blue">to run without you</em> holding it together.
            </h2>
            <p className="text-[1rem] text-ink-muted max-w-[560px] leading-[1.88]">
              From CRM setup to full automation stacks, we build systems that work while you focus on what only you can do.
            </p>
          </Reveal>

          <div className="grid gap-[1.2rem] mt-16 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            {serviceCards.map(({ icon, title, desc, delay }) => (
              <Reveal key={title} delay={delay} className="bg-white border border-line rounded-2xl py-[1.6rem] px-[1.8rem] flex flex-col hover:border-line-blue hover:shadow-[0_4px_24px_rgba(26,86,219,0.08)] transition-[border-color,box-shadow] duration-[250ms]">
                <div className="w-11 h-11 bg-surface rounded-[10px] flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] text-ink-muted">
                    {icon}
                  </svg>
                </div>
                <h3 className="font-display text-[1.35rem] font-semibold mb-[0.6rem]">{title}</h3>
                <p className="text-[0.91rem] text-ink-muted leading-[1.78]">{desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-14">
            <Link href="/services" className="bg-blue-bright text-white py-[0.9rem] px-8 rounded-[5px] no-underline font-medium text-[0.95rem] transition-[background,transform] duration-[250ms] inline-flex items-center gap-[0.55rem] hover:bg-blue hover:-translate-y-0.5">
              View All Services<ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <Reveal className="grid grid-cols-2 border-t border-b border-line max-lg:grid-cols-1">
        <div className="min-h-[480px] max-lg:min-h-[260px]">
          <img src="https://www.nestrostack.com/images/approach-img.jpg" alt="Our approach" className="w-full h-full object-cover block" />
        </div>
        <div className="bg-surface px-[4.5rem] py-20 flex flex-col justify-center max-lg:px-8 max-lg:py-14">
          <SectionLabel>The Process</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-5">
            The steps we take to find the <em className="text-blue">right solution.</em>
          </h2>
          <p className="text-[1rem] text-ink-muted max-w-[560px] leading-[1.88] mb-0">
            We made it simple on purpose. You have been overwhelmed long enough.
          </p>
          <div className="mt-12 flex flex-col">
            {steps.map(({ num, title, body, delay }) => (
              <Reveal key={num} delay={delay} className="py-8 border-b border-line last:border-0 flex gap-6 items-start">
                <div className="font-display text-[2.8rem] font-bold text-blue-line leading-none shrink-0 w-[60px]">{num}</div>
                <div>
                  <h3 className="font-display text-[1.35rem] font-semibold mb-2">{title}</h3>
                  <p className="text-[0.9rem] text-ink-muted leading-[1.78]">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-surface border-t border-line py-28 px-10 max-md:py-20 max-md:px-6">
        <div className="max-w-[1120px] mx-auto">
          <Reveal>
            <SectionLabel>What It Feels Like After</SectionLabel>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1]">
              Real outcomes from<br />our best clients.
            </h2>
          </Reveal>
          <div className="grid gap-6 mt-16 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            {testimonials.map(({ initials, name, role, quote, delay }) => (
              <Reveal key={name} delay={delay} className="bg-white border border-line rounded-[14px] py-[2.2rem] px-8 flex flex-col hover:border-line-blue transition-colors duration-[250ms]">
                <div className="flex gap-[3px] mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <blockquote className="text-[0.96rem] leading-[1.78] text-ink-muted mb-6 flex-1">{quote}</blockquote>
                <div className="flex items-center gap-[0.9rem] mt-auto pt-5 border-t border-line">
                  <div className="w-[38px] h-[38px] rounded-full bg-blue-glow border border-line-blue flex items-center justify-center font-semibold text-[0.8rem] shrink-0 text-blue">
                    {initials}
                  </div>
                  <div>
                    <div className="font-medium text-[0.88rem]">{name}</div>
                    <div className="text-[0.76rem] text-ink-muted">{role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="text-center py-36 px-10 max-md:py-20 max-md:px-6">
        <div className="max-w-[1120px] mx-auto">
          <SectionLabel center>Ready When You Are</SectionLabel>
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-5">
              Your business deserves a <em className="text-blue">foundation.</em><br />Let us build it.
            </h2>
          </Reveal>
          <Reveal delay="d1">
            <p className="text-[1rem] text-ink-muted max-w-[560px] mx-auto mb-12 leading-[1.88]">
              Book a free 30-minute Clarity Call. No pitch. No pressure.
            </p>
          </Reveal>
          <Reveal delay="d2">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-blue-bright text-white py-4 px-10 rounded-[5px] no-underline font-medium text-[1rem] transition-[background,transform] duration-[250ms] inline-flex items-center gap-[0.55rem] hover:bg-blue hover:-translate-y-0.5">
              Book Your Free Clarity Call
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
