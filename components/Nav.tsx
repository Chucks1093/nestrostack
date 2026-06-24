'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BOOKING_URL } from '@/lib/data'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const nav = document.getElementById('nav-links')
      const btn = document.getElementById('hamburger')
      if (nav && btn && !nav.contains(e.target as Node) && !btn.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const linkCls = (href: string) => {
    const active = pathname === href
    return [
      "relative text-[0.83rem] font-normal tracking-[0.07em] uppercase no-underline transition-colors duration-200",
      "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-px after:bg-blue after:transition-transform after:duration-[250ms]",
      active
        ? 'text-ink after:scale-x-100'
        : 'text-ink-muted after:scale-x-0 hover:text-ink hover:after:scale-x-100',
    ].join(' ')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[500] px-10 py-5 flex items-center justify-between backdrop-blur-[24px] backdrop-saturate-[1.4] bg-white/85 border-b border-line">
      <Link
        href="/"
        className="font-display text-[1.35rem] font-semibold text-ink no-underline tracking-[-0.01em] flex items-center gap-[0.35rem]"
      >
        <span className="w-[7px] h-[7px] bg-blue-bright rounded-full inline-block animate-pulse-dot" />
        Nestro<span className="text-blue">Stack</span>
      </Link>

      <ul
        id="nav-links"
        className={`nav-links list-none flex items-center gap-10 ${open ? 'open' : ''}`}
      >
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={linkCls(href)} onClick={() => setOpen(false)}>
              {label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-bright text-white px-[1.4rem] py-[0.5rem] rounded-[5px] text-[0.83rem] font-medium tracking-[0.07em] uppercase no-underline transition-all duration-200 hover:bg-blue hover:-translate-y-px"
          >
            Book a Call
          </a>
        </li>
      </ul>

      <button
        id="hamburger"
        onClick={() => setOpen(o => !o)}
        className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-0 p-1"
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-[2px] bg-ink rounded-sm" />
        <span className="block w-6 h-[2px] bg-ink rounded-sm" />
        <span className="block w-6 h-[2px] bg-ink rounded-sm" />
      </button>
    </nav>
  )
}
