'use client'
import { SERVICES } from '@/lib/data'
import Reveal from './Reveal'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-ink-dim">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[10px] h-[10px]">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-3 gap-[1.2rem] mt-16 max-lg:grid-cols-2 max-md:grid-cols-1">
      {SERVICES.map((s, i) => (
        <Reveal
          key={s.title}
          delay={i % 3 === 1 ? 'd1' : i % 3 === 2 ? 'd2' : undefined}
          className="bg-white border border-line rounded-2xl py-[1.6rem] px-[1.8rem] flex flex-col hover:border-line-blue hover:shadow-[0_4px_24px_rgba(26,86,219,0.08)] transition-[border-color,box-shadow] duration-[250ms]"
        >
          {/* Top row: icon + badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 bg-surface rounded-[10px] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[22px] h-[22px] text-ink-muted"
                dangerouslySetInnerHTML={{ __html: s.icon }}
              />
            </div>
            <span className="text-[0.72rem] font-medium text-blue bg-blue-glow border border-line-blue rounded-full px-[0.7rem] py-[0.2rem] tracking-[0.04em]">
              {s.badge}
            </span>
          </div>

          <h3 className="font-display text-[1.3rem] font-semibold mb-[0.4rem]">{s.title}</h3>
          <p className="text-[0.88rem] text-ink-muted leading-[1.72] mb-[1.1rem]">{s.desc}</p>

          <hr className="border-0 border-t-[1.5px] border-dashed border-line mb-[1.1rem]" />

          <div className="flex flex-col">
            {s.features.map(f => (
              <div key={f.name} className="flex items-center justify-between py-[0.6rem] border-b border-line last:border-0">
                <div className="flex items-center gap-[0.65rem]">
                  <div className={`w-[22px] h-[22px] rounded-[6px] flex items-center justify-center shrink-0 ${f.on ? 'bg-blue-bright' : 'bg-surface2 border border-line'}`}>
                    {f.on ? <CheckIcon /> : <XIcon />}
                  </div>
                  <span className={`text-[0.88rem] ${f.on ? 'text-ink' : 'text-ink-muted'}`}>{f.name}</span>
                </div>
                <div className="w-5 h-5 rounded-full border border-line flex items-center justify-center text-ink-dim shrink-0">
                  <InfoIcon />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
