import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

const SectionLabel = ({
   children,
   center,
}: {
   children: string;
   center?: boolean;
}) => (
   <p
      className={`text-blue text-[0.92rem] font-medium tracking-[0.2em] uppercase mb-4 ${center ? "text-center" : ""}`}
   >
      {children}
   </p>
);

const CalIcon = () => (
   <svg
      className="w-[18px] h-[18px] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
   </svg>
);

const ArrowIcon = () => (
   <svg
      className="w-[18px] h-[18px] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
   </svg>
);

const StarIcon = () => (
   <svg
      viewBox="0 0 24 24"
      className="w-[14px] h-[14px] fill-blue-bright text-blue-bright"
   >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
   </svg>
);

const serviceCards = [
   {
      icon: (
         <>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
         </>
      ),
      title: "CRM Setup & Optimization",
      desc: "Know exactly where every customer is in your sales process. Every conversation tracked. Every opportunity remembered.",
      delay: undefined,
   },
   {
      icon: (
         <>
            <rect width="8" height="8" x="3" y="3" rx="2" />
            <path d="M7 11v4a2 2 0 0 0 2 2h4" />
            <rect width="8" height="8" x="13" y="13" rx="2" />
         </>
      ),
      title: "Workflow Automation",
      desc: "Remove repetitive work by connecting your tools and automating the tasks that slow your business down.",
      delay: "d2" as const,
   },
   {
      icon: (
         <>
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
         </>
      ),
      title: "Lead Generation Systems",
      desc: "Create a predictable pipeline of qualified prospects instead of hoping referrals keep coming.",
      delay: "d3" as const,
   },
   {
      icon: <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />,
      title: "Sales Funnel Design",
      desc: "Turn more visitors into paying customers with conversion-focused funnels built for your business.",
      delay: undefined,
   },
   {
      icon: (
         <>
            <path d="m3 11 18-5v12L3 14v-3z" />
            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
         </>
      ),
      title: "Social Media Management & Marketing",
      desc: "Stay consistently visible with strategic content and campaigns that build trust, generate engagement, and attract qualified leads.",
      delay: "d2" as const,
   },
   {
      icon: (
         <>
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
         </>
      ),
      title: "Appointment & Booking Systems",
      desc: "Let clients book appointments, receive reminders, complete forms, and enter your CRM automatically.",
      delay: "d3" as const,
   },
];

const steps = [
   {
      num: "01",
      title: "Clarity Call",
      body: "We learn about your business, your goals, and the challenges holding you back.",
      delay: "d1" as const,
   },
   {
      num: "02",
      title: "Systems Blueprint",
      body: "We design a custom growth system tailored specifically to your business.",
      delay: "d2" as const,
   },
   {
      num: "03",
      title: "Build & Optimize",
      body: "We build, test, automate, and refine everything until your systems work seamlessly.",
      delay: "d3" as const,
   },
   {
      num: "04",
      title: "Scale with Confidence",
      body: "With the right systems in place, your business grows with less stress and more predictability.",
      delay: "d3" as const,
   },
];

const testimonials = [
   {
      initials: "SM",
      name: "Sarah M.",
      role: "Business Coach",
      quote: "For the first time in two years, I took a full weekend off and nothing broke. That alone was worth everything.",
      delay: "d1" as const,
   },
   {
      initials: "JT",
      name: "James T.",
      role: "Real Estate Agent",
      quote: "They did not just set up my CRM. They gave me my sanity back. I finally feel like I am running a business instead of just surviving one.",
      delay: "d2" as const,
   },
   {
      initials: "DR",
      name: "Dana R.",
      role: "Entrepreneur",
      quote: "I came in overwhelmed and left with a system I actually understood. The clarity alone was worth the investment.",
      delay: "d3" as const,
   },
];

export default function Home() {
   return (
      <>
         {/* ── HERO ── */}
         <div className="min-h-screen relative overflow-hidden ">
            <div className="grid grid-cols-2 min-h-screen max-lg:grid-cols-1 max-lg:min-h-[auto]">
               <div className="flex flex-col justify-center pr-16 pl-10 pt-[10rem] pb-20 max-lg:px-10 max-lg:pt-32 max-lg:pb-12 max-sm:px-6 max-sm:pb-10">
                  <p className="text-blue text-[0.92rem] font-medium tracking-[0.1em] uppercase mb-5 opacity-0 [animation:fadeUp_0.8s_ease_forwards_0.2s]">
                     Systems for Growth Driven Businesses
                  </p>
                  <h1 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-5 opacity-0 [animation:fadeUp_0.9s_ease_forwards_0.4s]">
                     Stop <em className="text-blue">Working Harder.</em> Start
                     Building a Business That{" "}
                     <em className="text-blue">Works Without You.</em>
                  </h1>
                  <p className="text-[1rem] text-ink-muted leading-[1.88] mb-8 opacity-0 [animation:fadeUp_0.9s_ease_forwards_0.6s] max-sm:text-[0.93rem] max-sm:mb-6">
                     We help ambitious businesses build intelligent systems that
                     attract qualified leads, automate operations, streamline
                     marketing, and create predictable growth so you can focus
                     on leading your business instead of constantly running it.
                  </p>
                  <div className="flex gap-3 flex-wrap opacity-0 [animation:fadeUp_0.9s_ease_forwards_0.8s] max-sm:flex-col">
                     <Link
                        href="/contact"
                        className="bg-blue-bright text-white py-[0.9rem] px-8 rounded-[5px] no-underline font-medium text-[0.95rem] transition-[background,transform] duration-[250ms] inline-flex items-center justify-center gap-[0.55rem] hover:bg-blue hover:-translate-y-0.5"
                     >
                        <CalIcon />
                        Book a Free Clarity Call
                     </Link>
                     <Link
                        href="/services"
                        className="bg-[rgba(26,86,219,0.04)] text-ink py-[0.9rem] px-8 rounded-[5px] no-underline font-normal text-[0.95rem] border border-line transition-all duration-[250ms] inline-flex items-center justify-center gap-[0.55rem] hover:border-blue hover:text-blue hover:bg-blue-glow"
                     >
                        See How It Works
                        <ArrowIcon />
                     </Link>
                  </div>
               </div>
               <div className="relative overflow-hidden h-full bg-blue-bright rounded-2xl max-lg:min-h-[240px] max-lg:rounded-xl">
                  <Image
                     src="/images/image.png"
                     alt="Nestro Stack"
                     fill
                     className="object-cover brightness-90 object-top"
                  />
                  <div
                     className="absolute inset-0 z-[5] pointer-events-none"
                     style={{
                        backgroundImage: "url('/images/noise.png')",
                        backgroundRepeat: "repeat",
                     }}
                  />
                  <div
                     className="absolute inset-0 z-[5] pointer-events-none"
                     style={{
                        backgroundImage: "url('/images/noise.png')",
                        backgroundRepeat: "repeat",
                     }}
                  />

                  <div className="absolute inset-0 z-10 flex items-center justify-center hidden">
                     <Image
                        src="/icons/workflow.svg"
                        alt=""
                        width={130}
                        height={130}
                        className="opacity-90"
                     />
                  </div>
               </div>
            </div>
         </div>

         {/* ── PROBLEM ── */}
         <Reveal className="bg-blue-bright text-center py-20 px-10 mt-8 rounded-[2rem] mx-8 max-md:mx-4 max-md:rounded-[1.2rem] max-md:py-14 max-md:px-6 max-sm:mx-3 relative">
            {/* Noise texture overlay */}
            <div
               className="absolute inset-0 pointer-events-none z-[1]"
               style={{
                  backgroundImage: "url('/images/noise.png')",
                  backgroundRepeat: "repeat",
               }}
            />
            <div className="max-w-[730px] mx-auto">
               <p className="text-center text-white/85 text-[0.92rem] font-medium tracking-[0.2em] uppercase mb-4">
                  The Problem We Solve
               </p>
               <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold leading-[1.2] mb-6 text-white">
                  Your business isn't broken. <br />
                  Your{" "}
                  <mark className="bg-white/30 text-white rounded-[4px] px-[6px] italic">
                     systems
                  </mark>{" "}
                  are.
               </h2>
               <p className="text-[0.98rem] text-white/85 leading-[1.85] mb-5">
                  Most businesses don't struggle because they lack ambition.
                  They struggle because growth is being held together by
                  spreadsheets, manual follow-ups, forgotten leads, inconsistent
                  marketing, and disconnected tools. More effort isn't the
                  answer. A better system is. At Nestro Stack, we replace
                  operational chaos with systems that work—even when you're not.
               </p>
               <Link
                  href="/contact"
                  className="bg-white text-blue-bright py-[0.9rem] px-8 rounded-[5px] no-underline font-medium text-[0.95rem] transition-[background] duration-[250ms] mt-4 inline-flex items-center gap-[0.55rem] hover:bg-[#eaf1fb]"
               >
                  <CalIcon />
                  Book a Free Clarity Call
               </Link>
            </div>
         </Reveal>

         {/* ── SERVICES PREVIEW ── */}
         <section className="py-24 px-10 max-md:py-16 max-md:px-6 max-sm:px-4">
            <div className="max-w-[1120px] mx-auto">
               <Reveal>
                  <SectionLabel>What We Build</SectionLabel>
                  <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-5">
                     Everything your business needs to grow working together as <em className="text-blue">one intelligent system.</em>
                  </h2>
                  <p className="text-[1rem] text-ink-muted max-w-[560px] leading-[1.88]">
                     Instead of selling disconnected services, we build complete growth systems designed around your business.
                  </p>
               </Reveal>

               <div className="grid gap-[1.2rem] mt-16 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
                  {serviceCards.map(({ icon, title, desc, delay }) => (
                     <Reveal
                        key={title}
                        delay={delay}
                        className="bg-white border border-line rounded-2xl py-[1.6rem] px-[1.8rem] flex flex-col hover:border-line-blue hover:shadow-[0_4px_24px_rgba(26,86,219,0.08)] transition-[border-color,box-shadow] duration-[250ms]"
                     >
                        <div className="w-11 h-11 bg-surface rounded-[10px] flex items-center justify-center mb-5">
                           <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-[22px] h-[22px] text-ink-muted"
                           >
                              {icon}
                           </svg>
                        </div>
                        <h3 className="font-display text-[1.35rem] font-semibold mb-[0.6rem]">
                           {title}
                        </h3>
                        <p className="text-[0.91rem] text-ink-muted leading-[1.78]">
                           {desc}
                        </p>
                     </Reveal>
                  ))}
               </div>

               <Reveal className="text-center mt-14">
                  <Link
                     href="/services"
                     className="bg-blue-bright text-white py-[0.9rem] px-8 rounded-[5px] no-underline font-medium text-[0.95rem] transition-[background,transform] duration-[250ms] inline-flex items-center gap-[0.55rem] hover:bg-blue hover:-translate-y-0.5"
                  >
                     View All Services
                     <ArrowIcon />
                  </Link>
               </Reveal>
            </div>
         </section>

         {/* ── HOW IT WORKS ── */}
         <Reveal className="grid grid-cols-2 border-t border-b border-line max-lg:grid-cols-1">
            <div className="relative min-h-[480px] max-lg:min-h-[220px] max-sm:min-h-[180px]">
               <Image
                  src="/images/approach.jpg"
                  alt="Our approach"
                  fill
                  className="object-cover"
               />
               <div
                  className="absolute inset-0 z-[5] pointer-events-none"
                  style={{
                     backgroundImage: "url('/images/noise.png')",
                     backgroundRepeat: "repeat",
                  }}
               />
            </div>
            <div className="bg-surface px-[4.5rem] py-20 flex flex-col justify-center max-lg:px-8 max-lg:py-12 max-sm:px-6 max-sm:py-10">
               <SectionLabel>How We Work</SectionLabel>
               <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-5">
                  A simple process designed for <em className="text-blue">clarity.</em>
               </h2>
               <p className="text-[1rem] text-ink-muted max-w-[560px] leading-[1.88] mb-0">
               </p>
               <div className="mt-12 flex flex-col">
                  {steps.map(({ num, title, body, delay }) => (
                     <Reveal
                        key={num}
                        delay={delay}
                        className="py-8 border-b border-line last:border-0 flex gap-6 items-start"
                     >
                        <div className="font-display text-[2.8rem] font-bold text-blue-line leading-none shrink-0 w-[60px]">
                           {num}
                        </div>
                        <div>
                           <h3 className="font-display text-[1.35rem] font-semibold mb-2">
                              {title}
                           </h3>
                           <p className="text-[0.9rem] text-ink-muted leading-[1.78]">
                              {body}
                           </p>
                        </div>
                     </Reveal>
                  ))}
               </div>
            </div>
         </Reveal>

         {/* ── TESTIMONIALS ── */}
         <section className="bg-surface border-t border-line py-24 px-10 max-md:py-16 max-md:px-6 max-sm:px-4">
            <div className="max-w-[1120px] mx-auto">
               <Reveal>
                  <SectionLabel>What It Feels Like After</SectionLabel>
                  <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.8rem)] font-semibold leading-[1.1]">
                     Real outcomes from
                     <br />
                     our best clients.
                  </h2>
               </Reveal>
               <div className="grid gap-6 mt-16 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
                  {testimonials.map(
                     ({ initials, name, role, quote, delay }) => (
                        <Reveal
                           key={name}
                           delay={delay}
                           className="bg-white border border-line rounded-[14px] py-[2.2rem] px-8 flex flex-col hover:border-line-blue transition-colors duration-[250ms]"
                        >
                           <div className="flex gap-[3px] mb-4">
                              {Array.from({ length: 5 }).map((_, i) => (
                                 <StarIcon key={i} />
                              ))}
                           </div>
                           <blockquote className="text-[0.96rem] leading-[1.78] text-ink-muted mb-6 flex-1">
                              {quote}
                           </blockquote>
                           <div className="flex items-center gap-[0.9rem] mt-auto pt-5 border-t border-line">
                              <div className="w-[38px] h-[38px] rounded-full bg-blue-glow border border-line-blue flex items-center justify-center font-semibold text-[0.8rem] shrink-0 text-blue">
                                 {initials}
                              </div>
                              <div>
                                 <div className="font-medium text-[0.88rem]">
                                    {name}
                                 </div>
                                 <div className="text-[0.76rem] text-ink-muted">
                                    {role}
                                 </div>
                              </div>
                           </div>
                        </Reveal>
                     ),
                  )}
               </div>
            </div>
         </section>

         {/* ── CTA ── */}
         <section className="text-center py-28 px-10 max-md:py-16 max-md:px-6 max-sm:px-4">
            <div className="max-w-[1120px] mx-auto">
               <SectionLabel center>Ready to Grow Smarter?</SectionLabel>
               <Reveal>
                  <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-5">
                     Your next level doesn't require <em className="text-blue">more effort.</em> It requires <em className="text-blue">better systems.</em>
                  </h2>
               </Reveal>
               <Reveal delay="d1">
                  <p className="text-[1rem] text-ink-muted max-w-[560px] mx-auto mb-12 leading-[1.88]">
                     Book a free 30-minute Clarity Call, and together we'll identify the one or two changes that will have the biggest impact on your business.
                  </p>
               </Reveal>
               <Reveal delay="d2">
                  <Link
                     href="/contact"
                     className="bg-blue-bright text-white py-4 px-10 rounded-[5px] no-underline font-medium text-[1rem] transition-[background,transform] duration-[250ms] inline-flex items-center gap-[0.55rem] hover:bg-blue hover:-translate-y-0.5"
                  >
                     Book Your Free Clarity Call
                  </Link>
               </Reveal>
            </div>
         </section>

         <Footer />
      </>
   );
}
