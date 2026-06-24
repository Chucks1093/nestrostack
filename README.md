# Nestro Stack

**We build the business behind your business.**

Nestro Stack is a business automation agency helping coaches, entrepreneurs, and real estate agents replace overwhelming manual work with automated workflows that generate leads and drive income.

---

## What We Do

We build custom systems so your business runs without you holding it together. Our services include:

- **CRM Setup & Optimization** — Every lead tracked, every client remembered, configured for your business
- **Workflow Automation** — Connect your entire stack so information flows automatically
- **Lead Generation Systems** — A pipeline that works while you sleep, from first touch to paying client
- **Sales Funnel Design** — Guide prospects from awareness to decision with every touchpoint automated
- **Marketing Execution** — Consistent content and campaigns without you living on your phone
- **Appointment Booking** — Let clients book themselves, fill intake forms, and pay with no back-and-forth

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, problem statement, services overview, process steps, testimonials |
| `/services` | Full service cards with feature breakdowns and tools we work with |
| `/about` | Our story, why we exist, and the values behind everything we build |
| `/contact` | Clarity call booking form and contact details |

---

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Styling** — Tailwind CSS v4
- **Fonts** — Cormorant Garamond (display) + Outfit (body) via `next/font/google`
- **Language** — TypeScript

## Project Structure

```
app/
  layout.tsx          # Root layout with fonts and Nav
  globals.css         # Tailwind @theme tokens, keyframes, minimal custom classes
  page.tsx            # Home page
  services/page.tsx   # Services page
  about/page.tsx      # About page
  contact/page.tsx    # Contact page

components/
  Nav.tsx             # Fixed nav with mobile hamburger and active link state
  Footer.tsx          # Shared footer
  Reveal.tsx          # Scroll-triggered fade-up animation wrapper
  ServiceCards.tsx    # Service detail cards with feature checklists
  ToolsMarquee.tsx    # Scrolling marquee of platform logos

lib/
  data.ts             # SERVICES, TOOLS arrays and BOOKING_URL
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

**Live site:** [nestrostack.com](https://nestrostack.com)

---

**Contact:** contact@nestrostack.com | +1 830-266-9617
