import Image from 'next/image'
import { NotebookText } from 'lucide-react'
import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'
import Link from 'next/link'
import StatsSection from '@/components/StatsSection'
import ReviewsSection from '@/components/ReviewsSection'


export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center px-10 pt-36 pb-20 overflow-hidden max-md:px-6 max-md:pt-28 max-md:pb-14 max-sm:px-4">
        {/* Background image */}
        <Image
          src="/images/about-bg.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

        {/* Content */}
        <div className="relative z-10 max-w-[680px] mx-auto text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm border border-white/30 mb-6 opacity-0 [animation:fadeUp_0.8s_ease_forwards_0.2s]">
            <NotebookText className="w-4 h-4" /> Our Story
          </div>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-5 opacity-0 [animation:fadeUp_0.9s_ease_forwards_0.4s]">
            We exist because good businesses should not fail for lack of systems.
          </h1>
          <p className="text-[1rem] text-white/70 leading-[1.88] opacity-0 max-w-[420px] mx-auto [animation:fadeUp_0.9s_ease_forwards_0.6s] max-sm:text-[0.93rem]">
            Nestro Stack was built for business owners who are talented, driven, and doing everything right but still feel like they are barely keeping up.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsSection />

      {/* ── REVIEWS ── */}
      <ReviewsSection />

      {/* ── CTA ── */}
      <section className="bg-surface border-t border-line text-center py-24 px-10 max-md:py-16 max-md:px-6 max-sm:px-4">
        <div className="max-w-[1120px] mx-auto">
          <p className="text-center text-blue text-[0.92rem] font-medium tracking-[0.2em] uppercase mb-4">
            Let us Meet
          </p>
          <Reveal>
            <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-5">
              Ready to meet the <em className="text-blue">team behind your systems?</em>
            </h2>
          </Reveal>
          <Reveal delay="d1">
            <p className="text-[1rem] text-ink-muted max-w-[480px] mx-auto mb-10 leading-[1.85]">
              Start with a free Clarity Call. No pressure, no pitch, just a real conversation about your business.
            </p>
          </Reveal>
          <Reveal delay="d2">
            <Link href="/contact" className="bg-blue-bright text-white py-4 px-10 rounded-[5px] no-underline font-medium text-[1rem] transition-[background,transform] duration-[250ms] inline-flex items-center gap-[0.55rem] hover:bg-blue hover:-translate-y-0.5">
              Book Your Free Clarity Call
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
