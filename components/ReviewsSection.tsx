'use client'
import Autoplay from 'embla-carousel-autoplay'
import Reveal from './Reveal'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

const reviews = [
  {
    name: 'Sarah M.',
    role: 'Business Coach',
    quote: 'For the first time in two years, I took a full weekend off and nothing broke. That alone was worth everything.',
  },
  {
    name: 'James T.',
    role: 'Real Estate Agent',
    quote: 'They did not just set up my CRM. They gave me my sanity back. I finally feel like I am running a business instead of just surviving one.',
  },
  {
    name: 'Dana R.',
    role: 'Entrepreneur',
    quote: 'I came in overwhelmed and left with a system I actually understood. The clarity alone was worth the investment.',
  },
  {
    name: 'David Dugger',
    role: '',
    quote: 'Our online presence became consistent for the first time. The strategy, content, and execution gave us a professional brand that people now recognize and engage with.',
  },
  {
    name: 'Grace A.',
    role: 'E-commerce Brand Owner',
    quote: 'We stopped wasting money on campaigns that weren\'t working. Everything became more intentional, and we finally had a clear direction for our marketing.',
  },
  {
    name: 'Michael T.',
    role: 'Operations Manager',
    quote: 'Working with Nestro Stack brought clarity to how our business operates. Everything became easier to manage, and our team now spends more time growing the business instead of fixing problems.',
  },
]

export default function ReviewsSection() {
  return (
    <section className="py-20 border-t border-line bg-surface overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-10 max-md:px-6 max-sm:px-4">
        <Reveal className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-glow border border-line-blue text-blue text-sm mb-4">
            Our Reviews
          </span>
          <h2 className="font-display text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-[1.2] text-ink mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[1rem] text-ink-muted max-w-[520px] mx-auto leading-[1.88]">
            Honest feedback from the teams and founders who use Nestro Stack to make their systems run smoother.
          </p>
        </Reveal>
      </div>

      <div className="relative px-16 max-md:px-12 max-sm:px-10">
        <Carousel
          opts={{ align: 'start', loop: true }}
          plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((r, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="relative bg-white border border-line rounded-2xl p-8 shadow-sm h-full flex flex-col">
                  <span className="text-[3rem] leading-none font-serif text-ink-dim select-none">&ldquo;</span>
                  <p className="text-ink-muted leading-[1.85] text-[0.95rem] italic mt-4 mb-8 flex-1">
                    {r.quote}
                  </p>
                  <div>
                    <h4 className="font-semibold text-ink text-[1rem]">{r.name}</h4>
                    {r.role && <p className="text-sm text-ink-muted mt-0.5">{r.role}</p>}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  )
}
