import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'
import { BOOKING_URL } from '@/lib/data'

const values = [
  { title: 'Clarity First', body: 'We never start building until you have complete clarity on what is being built and why.', delay: 'd1' as const },
  { title: 'We Are in This Together', body: 'We work alongside you, not above you. Your wins are our wins.', delay: 'd2' as const },
  { title: 'Outcomes Over Deliverables', body: 'We are here to make sure what we build actually changes how you operate.', delay: 'd1' as const },
  { title: 'No Overwhelm Allowed', body: 'Every system we build is designed to simplify, not complicate. If it is confusing, it is not done yet.', delay: 'd2' as const },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div className="min-h-screen relative overflow-hidden">
        <div className="hero-grid" />
        <div className="relative z-[2] grid grid-cols-2 min-h-screen max-lg:grid-cols-1 max-lg:min-h-[auto]">
          <div className="flex flex-col justify-center pr-16 pl-10 pt-[10rem] pb-20 max-lg:px-10 max-lg:pt-12 max-lg:pb-16">
            <p className="flex items-center gap-[0.8rem] text-blue text-[0.75rem] font-medium tracking-[0.18em] uppercase mb-6 opacity-0 [animation:fadeUp_0.8s_ease_forwards_0.2s] before:content-[''] before:block before:w-7 before:h-px before:bg-blue">
              Our Story
            </p>
            <h1 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-6 opacity-0 [animation:fadeUp_0.9s_ease_forwards_0.4s]">
              We exist because <em className="text-blue">good businesses</em> should not fail for lack of systems.
            </h1>
            <p className="text-[1.05rem] text-ink-muted leading-[1.88] max-w-[480px] opacity-0 [animation:fadeUp_0.9s_ease_forwards_0.6s]">
              Nestro Stack was built for the business owners who are talented, driven, and doing everything right — but still feel like they are barely keeping up.
            </p>
          </div>
          <div className="bg-blue-bright dotted-panel flex items-center justify-center rounded-br-[3rem] max-lg:min-h-[260px] max-lg:rounded-none">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── WHY WE EXIST ── */}
      <section className="py-28 px-10 text-center border-b border-line max-md:py-20 max-md:px-6">
        <div className="max-w-[680px] mx-auto">
          <Reveal>
            <p className="flex justify-center items-center gap-[0.8rem] text-blue text-[0.72rem] font-medium tracking-[0.2em] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-px before:bg-blue after:content-[''] after:block after:w-6 after:h-px after:bg-blue">
              Why We Exist
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-6">
              We have seen it<br /><em className="text-blue">too many times.</em>
            </h2>
            <p className="text-[1rem] text-ink-muted leading-[1.85] mb-8">
              Good people, losing business, because of missing systems. That is the only problem we solve.
            </p>
          </Reveal>
          <Reveal delay="d1">
            <p className="text-[1rem] text-ink-muted leading-[2] max-w-[600px] mx-auto">
              A brilliant coach losing leads because her CRM is not set up — a real estate agent missing follow-ups because everything lives in his head — an entrepreneur who cannot take a day off because the business falls apart without her — none of these are people-problems — they are systems problems — systems can be fixed — and that is exactly what we do — we stay until it works.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-surface border-t border-b border-line py-28 px-10 max-md:py-20 max-md:px-6">
        <div className="max-w-[1120px] mx-auto">
          <Reveal>
            <p className="flex items-center gap-[0.8rem] text-blue text-[0.72rem] font-medium tracking-[0.2em] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-px before:bg-blue before:shrink-0">
              What We Stand For
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1]">
              The values that guide <em className="text-blue">everything we build.</em>
            </h2>
          </Reveal>
          <div className="grid gap-8 mt-14 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {values.map(({ title, body, delay }) => (
              <Reveal key={title} delay={delay} className="pt-8 border-t-2 border-line-blue">
                <h3 className="font-display text-[1.35rem] font-semibold mb-3">{title}</h3>
                <p className="text-[0.91rem] text-ink-muted leading-[1.78]">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-surface border-t border-line text-center py-28 px-10 max-md:py-20 max-md:px-6">
        <div className="max-w-[1120px] mx-auto">
          <p className="flex justify-center items-center gap-[0.8rem] text-blue text-[0.72rem] font-medium tracking-[0.2em] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-px before:bg-blue after:content-[''] after:block after:w-6 after:h-px after:bg-blue">
            Let us Meet
          </p>
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-5">
              Ready to meet the <em className="text-blue">team behind your systems?</em>
            </h2>
          </Reveal>
          <Reveal delay="d1">
            <p className="text-[1rem] text-ink-muted max-w-[480px] mx-auto mb-10 leading-[1.85]">
              Start with a free Clarity Call. No pressure, no pitch, just a real conversation about your business.
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
