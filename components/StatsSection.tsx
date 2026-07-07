'use client'
import { useState, useEffect, useRef } from 'react'

type StatItem =
  | { type: 'number'; value: number; showPlus: boolean; label: string; bg: string; duration: number }
  | { type: 'text'; heading: string; label: string; bg: string }

const stats: StatItem[] = [
  { type: 'text',   heading: 'Purpose Driven',    label: 'Solutions',               bg: 'bg-blue-50'   },
  { type: 'number', value: 1000, showPlus: true,  label: 'Entrepreneurs Supported', bg: 'bg-pink-50',   duration: 2000 },
  { type: 'text',   heading: 'Business',          label: 'Clarity',                 bg: 'bg-purple-50' },
  { type: 'number', value: 10,   showPlus: true,  label: 'Strategic Partnerships',  bg: 'bg-green-50',  duration: 1400 },
]

function useCounter(end: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number
    let frame: number
    const animate = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [end, duration, active])
  return count
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const c1 = useCounter(1000, 2000, visible)
  const c3 = useCounter(10,   1400, visible)

  const animated = [0, c1, 0, c3]

  return (
    <section ref={ref} className="py-20 px-10 border-b border-line max-md:px-6 max-sm:px-4">
      <div className="max-w-[1120px] mx-auto text-center">
        <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.2rem)] font-semibold leading-[1.2] text-ink mb-4">
          We build the business behind your business.
        </h2>
        <p className="text-[1rem] text-ink-muted max-w-[640px] mx-auto mb-14 leading-[1.88]">
          At Nestro Stack, we believe great businesses shouldn't rely on memory, manual work, or constant firefighting. We partner with ambitious business owners to design intelligent systems that simplify operations, improve customer experiences, and create sustainable growth.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className={`${s.bg} rounded-2xl p-8 text-center border-4 border-white shadow-md`}>
              {s.type === 'number' ? (
                <>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <h3 className="text-4xl font-bold text-gray-600">{animated[i]}</h3>
                    {s.showPlus && <span className="text-3xl font-bold text-gray-500">+</span>}
                  </div>
                  <p className="text-gray-500 font-medium text-sm">{s.label}</p>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">{s.heading}</h3>
                  <p className="text-gray-500 font-medium text-sm">{s.label}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
