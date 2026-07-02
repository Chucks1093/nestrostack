"use client";
import Image from "next/image";
import { TOOLS } from "@/lib/data";

export default function ToolsMarquee() {
  const doubled = [...TOOLS, ...TOOLS];

  return (
    <div className="marquee-fade">
      <div className="flex gap-[2rem] w-max py-2 animate-marquee hover:[animation-play-state:paused]">
        {doubled.map((tool, i) => (
          <div
            key={i}
            className="flex items-center gap-[1.1rem] bg-blue-glow border border-line rounded-full px-[2.2rem] py-[.8rem] whitespace-nowrap shrink-0 transition-all duration-200 hover:border-line-blue hover:bg-[rgba(26,86,219,0.08)] hover:-translate-y-0.5 group"
          >
            <Image
              src={tool.logo}
              alt={tool.name}
              width={tool.iconOnly ? 120 : 32}
              height={tool.iconOnly ? 32 : 32}
              className="shrink-0 object-contain"
            />
            {!tool.iconOnly && (
              <span className="text-[1.1rem] text-ink-muted group-hover:text-ink transition-colors duration-200">
                {tool.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
