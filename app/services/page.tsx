import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'
import ServiceCards from '@/components/ServiceCards'
import ToolsMarquee from '@/components/ToolsMarquee'
import { BOOKING_URL } from '@/lib/data'

const CalIcon = () => (
  <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
  </svg>
)

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div className="min-h-screen relative overflow-hidden">
        <div className="hero-grid" />
        <div className="relative z-[2] grid grid-cols-2 min-h-screen max-lg:grid-cols-1 max-lg:min-h-[auto]">
          <div className="flex flex-col justify-center pr-16 pl-10 pt-[10rem] pb-20 max-lg:px-10 max-lg:pt-12 max-lg:pb-16">
            <p className="flex items-center gap-[0.8rem] text-blue text-[0.75rem] font-medium tracking-[0.18em] uppercase mb-6 opacity-0 [animation:fadeUp_0.8s_ease_forwards_0.2s] before:content-[''] before:block before:w-7 before:h-px before:bg-blue">
              What We Build
            </p>
            <h1 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-6 opacity-0 [animation:fadeUp_0.9s_ease_forwards_0.4s]">
              We build systems that <em className="text-blue">generate leads and income</em> for your business in your absence.
            </h1>
            <p className="text-[1.05rem] text-ink-muted leading-[1.88] mb-9 max-w-[500px] opacity-0 [animation:fadeUp_0.9s_ease_forwards_0.6s]">
              No fluff, no templates. Every system is purpose-built around your specific business, your clients, and your goals.
            </p>
            <div className="flex gap-4 flex-wrap opacity-0 [animation:fadeUp_0.9s_ease_forwards_0.8s]">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-blue-bright text-white py-[0.9rem] px-8 rounded-[5px] no-underline font-medium text-[0.95rem] transition-[background,transform] duration-[250ms] inline-flex items-center gap-[0.55rem] hover:bg-blue hover:-translate-y-0.5">
                <CalIcon />Book a Free Clarity Call
              </a>
            </div>
          </div>
          <div className="bg-blue-bright dotted-panel flex items-center justify-center rounded-br-[3rem] max-lg:min-h-[260px] max-lg:rounded-none">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
              <rect width="8" height="8" x="3" y="3" rx="2" />
              <path d="M7 11v4a2 2 0 0 0 2 2h4" />
              <rect width="8" height="8" x="13" y="13" rx="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── SERVICE CARDS ── */}
      <section className="py-28 px-10 max-md:py-20 max-md:px-6">
        <div className="max-w-[1120px] mx-auto">
          <Reveal>
            <p className="flex items-center gap-[0.8rem] text-blue text-[0.72rem] font-medium tracking-[0.2em] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-px before:bg-blue before:shrink-0">
              Our Services
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1]">
              Six ways we transform <em className="text-blue">how your business operates.</em>
            </h2>
          </Reveal>
          <ServiceCards />
        </div>
      </section>

      {/* ── TOOLS MARQUEE ── */}
      <div className="bg-surface border-t border-b border-line py-20 overflow-hidden">
        <Reveal className="max-w-[1120px] mx-auto px-10 mb-12">
          <p className="flex items-center gap-[0.8rem] text-blue text-[0.72rem] font-medium tracking-[0.2em] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-px before:bg-blue before:shrink-0">
            Platforms We Work With
          </p>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-5">
            We meet you <em className="text-blue">where you already are.</em>
          </h2>
          <p className="text-[1rem] text-ink-muted max-w-[560px] leading-[1.88]">
            No forcing you into new tools. We build with what works for your business.
          </p>
        </Reveal>
        <ToolsMarquee />
      </div>

      {/* ── CTA ── */}
      <section className="text-center py-36 px-10 max-md:py-20 max-md:px-6">
        <div className="max-w-[1120px] mx-auto">
          <p className="flex justify-center items-center gap-[0.8rem] text-blue text-[0.72rem] font-medium tracking-[0.2em] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-px before:bg-blue after:content-[''] after:block after:w-6 after:h-px after:bg-blue">
            Start Here
          </p>
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-5">
              Not sure which service you need? <em className="text-blue">That is okay.</em>
            </h2>
          </Reveal>
          <Reveal delay="d1">
            <p className="text-[1rem] text-ink-muted max-w-[560px] mx-auto mb-12 leading-[1.88]">
              The Clarity Call is exactly for that. We will map your chaos together and tell you exactly what to build first.
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
