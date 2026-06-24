'use client'
import { useRef, useEffect, ElementType } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: 'd1' | 'd2' | 'd3' | 'd4'
  as?: ElementType
}

export default function Reveal({ children, className = '', delay, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.07 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const classes = ['reveal', delay, className].filter(Boolean).join(' ')
  return <Tag ref={ref as any} className={classes}>{children}</Tag>
}
