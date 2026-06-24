"use client";
import React from "react";
import * as LucideIcons from "lucide-react";
import { SERVICES } from "@/lib/data";
import Reveal from "./Reveal";

type IconName = keyof typeof LucideIcons;

export default function ServiceCards() {
	return (
		<div className='flex flex-col gap-5 mt-16'>
			{SERVICES.map((s, i) => {
				const Icon = LucideIcons[s.icon as IconName] as React.ElementType;
				return (
					<Reveal
						key={s.num}
						delay={i % 3 === 1 ? "d1" : i % 3 === 2 ? "d2" : undefined}>
						<div className='relative overflow-hidden bg-blue border border-white/10 rounded-2xl pt-3'>
							{/* Dot texture overlay */}
							<div
								className='absolute inset-0 pointer-events-none z-0'
								style={{
									backgroundImage:
										"radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
									backgroundSize: "20px 20px",
								}}
							/>

							{/* Noise texture overlay */}
							<div
								className='absolute inset-0 pointer-events-none z-[1] hidden'
								style={{
									backgroundImage: "url('/images/noise.png')",
									backgroundRepeat: "repeat",
								}}
							/>

							{/* Accent left edge */}
							<div className='absolute left-0 top-6 bottom-6 w-[3px] bg-white/25 rounded-full z-10' />

							<div className='relative z-10 grid grid-cols-[1fr_1.75fr] max-lg:grid-cols-1'>
								{/* Left: icon + title + tag */}
								<div className='flex flex-col px-12 py-10 max-md:px-7 max-md:py-8 max-lg:border-b max-lg:border-white/10 lg:border-r lg:border-white/10'>
									<div className='mb-5'>
										{Icon && (
											<Icon
												size={52}
												strokeWidth={1.25}
												className='text-white/80'
											/>
										)}
									</div>
									<h3 className='font-display md:text-[2.2rem] text-[1.75rem] font-semibold text-white leading-[1.18] mb-6'>
										{s.title}
									</h3>
									<span className='self-start text-[0.68rem] font-medium tracking-[0.16em] uppercase text-white/65 border border-white/20 rounded-full px-[0.9rem] py-[0.4rem] hidden md:block'>
										{s.tag}
									</span>
								</div>

								{/* Right: description + outcome list */}
								<div className='flex flex-col justify-center px-12 py-10 max-md:px-7 max-md:py-8'>
									<p className='text-[0.97rem] text-white/72 leading-[1.9] mb-6'>
										{s.desc}
									</p>
									<div className='flex flex-col'>
										{s.outcomes.map((item) => (
											<div
												key={item}
												className='flex items-center gap-4 py-[0.78rem] border-t border-white/10 first:border-t-0'>
												<span className='w-[6px] h-[6px] rounded-full bg-white/80 shrink-0' />
												<span className='text-[0.93rem] text-white/85 leading-[1.6]'>
													{item}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</Reveal>
				);
			})}
		</div>
	);
}
