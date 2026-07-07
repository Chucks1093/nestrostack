'use client'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

const testimonials = [
  {
    initials: 'SM',
    name: 'Sarah M.',
    role: 'Business Coach',
    quote: 'For the first time in two years, I took a full weekend off and nothing broke. That alone was worth everything.',
  },
  {
    initials: 'JT',
    name: 'James T.',
    role: 'Real Estate Agent',
    quote: 'They did not just set up my CRM. They gave me my sanity back. I finally feel like I am running a business instead of just surviving one.',
  },
  {
    initials: 'DR',
    name: 'Dana R.',
    role: 'Entrepreneur',
    quote: 'I came in overwhelmed and left with a system I actually understood. The clarity alone was worth the investment.',
  },
]

export default function TestimonialsCarousel() {
  return (
    <div className="relative mt-16 px-16 max-md:px-12 max-sm:px-10">
      <Carousel
        opts={{ align: 'start', loop: true }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map(({ initials, name, role, quote }) => (
            <CarouselItem key={name} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white border border-line rounded-[14px] p-8 flex flex-col h-full">
                <span className="text-[3rem] leading-none font-serif text-ink-dim select-none">&ldquo;</span>
                <blockquote className="text-[0.96rem] leading-[1.78] text-ink-muted italic mt-4 mb-8 flex-1">
                  {quote}
                </blockquote>
                <div className="flex items-center gap-[0.9rem] pt-5 border-t border-line">
                  <div className="w-[38px] h-[38px] rounded-full bg-blue-glow border border-line-blue flex items-center justify-center font-semibold text-[0.8rem] shrink-0 text-blue">
                    {initials}
                  </div>
                  <div>
                    <div className="font-medium text-[0.88rem]">{name}</div>
                    <div className="text-[0.76rem] text-ink-muted">{role}</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  )
}
