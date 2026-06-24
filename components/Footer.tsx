import Link from 'next/link'

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
          <p className="text-[0.8rem] text-ink-dim italic">&ldquo;We build the business behind your business.&rdquo;</p>
        </div>
      </div>
    </footer>
  )
}
