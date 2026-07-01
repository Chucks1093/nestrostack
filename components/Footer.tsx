import Link from 'next/link'

const socials = [
  {
    href: 'https://instagram.com/nestrostack',
    label: 'Instagram',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    href: 'https://linkedin.com/company/nestrostack',
    label: 'LinkedIn',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    href: 'https://facebook.com/nestrostack',
    label: 'Facebook',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    href: 'https://twitter.com/nestrostack',
    label: 'X (Twitter)',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>,
  },
]

const pageLinks = ['/', '/services', '/about', '/contact'] as const
const pageLabels: Record<string, string> = { '/': 'Home', '/services': 'Services', '/about': 'About', '/contact': 'Contact' }
const serviceLinks = ['CRM Setup', 'Automation', 'Lead Generation', 'Sales Funnels']

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line px-10 pt-16 pb-8">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex justify-between items-start gap-12 flex-wrap mb-12 pb-12 border-b border-line max-md:flex-col">
          <div>
            <Link href="/" className="font-display text-[1.8rem] font-semibold text-ink block mb-3 tracking-[-0.01em] no-underline">
              Nestro<span className="text-blue">Stack</span>
            </Link>
            <p className="text-[0.88rem] text-ink-muted max-w-[260px] leading-[1.78]">
              We build the business behind your business.
            </p>
          </div>

          <div>
            <h4 className="text-[0.72rem] tracking-[0.14em] uppercase text-ink-muted mb-5">Pages</h4>
            <ul className="list-none flex flex-col gap-[0.6rem]">
              {pageLinks.map(href => (
                <li key={href}>
                  <Link href={href} className="text-ink-muted text-[0.88rem] no-underline hover:text-blue transition-colors duration-200">
                    {pageLabels[href]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.72rem] tracking-[0.14em] uppercase text-ink-muted mb-5">Services</h4>
            <ul className="list-none flex flex-col gap-[0.6rem]">
              {serviceLinks.map(s => (
                <li key={s}>
                  <Link href="/services" className="text-ink-muted text-[0.88rem] no-underline hover:text-blue transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.72rem] tracking-[0.14em] uppercase text-ink-muted mb-5">Contact</h4>
            <ul className="list-none flex flex-col gap-[0.6rem]">
              <li>
                <a href="mailto:contact@nestrostack.com" className="text-ink-muted text-[0.88rem] no-underline hover:text-blue transition-colors duration-200">
                  contact@nestrostack.com
                </a>
              </li>
              <li>
                <a href="tel:+18302669617" className="text-ink-muted text-[0.88rem] no-underline hover:text-blue transition-colors duration-200">
                  +1 830-266-9617
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-4 max-md:flex-col max-md:text-center">
          <p className="text-[0.8rem] text-ink-dim">2025 Nestro Stack. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socials.map(({ href, svg, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-line text-ink-dim hover:text-blue hover:border-blue transition-colors duration-200">
                {svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
