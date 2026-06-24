import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Nestro Stack — We Build the Business Behind Your Business',
  description:
    'Nestro Stack helps coaches, entrepreneurs, and real estate agents replace overwhelming manual work with automated business workflows that generate leads and drive income.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="bg-white text-ink font-body font-light leading-[1.7] overflow-x-hidden">
        <Nav />
        {children}
      </body>
    </html>
  )
}
