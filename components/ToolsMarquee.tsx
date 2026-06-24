'use client'
import { TOOLS } from '@/lib/data'

export default function ToolsMarquee() {
  const doubled = [...TOOLS, ...TOOLS]

  return (
    <div className="marquee-fade">
      <div className="flex gap-[1.2rem] w-max py-2 animate-marquee hover:[animation-play-state:paused]">
        {doubled.map((tool, i) => (
          <div
            key={i}
            className="flex items-center gap-[0.7rem] bg-blue-glow border border-line rounded-full px-[1.3rem] py-[0.6rem] whitespace-nowrap shrink-0 transition-all duration-200 hover:border-line-blue hover:bg-[rgba(26,86,219,0.08)] hover:-translate-y-0.5 group"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[18px] h-[18px] text-blue shrink-0"
              dangerouslySetInnerHTML={{ __html: tool.icon }}
            />
            <span className="text-[0.88rem] text-ink-muted group-hover:text-ink transition-colors duration-200">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
