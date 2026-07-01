import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { BOOKING_URL } from "@/lib/data";

const EmailIcon = () => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='w-[18px] h-[18px] text-blue'>
		<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
		<polyline points='22,6 12,13 2,6' />
	</svg>
);

const PhoneIcon = () => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='w-[18px] h-[18px] text-blue'>
		<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z' />
	</svg>
);

const ClockIcon = () => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className='w-[18px] h-[18px] text-blue'>
		<circle
			cx='12'
			cy='12'
			r='10'
		/>
		<polyline points='12 6 12 12 16 14' />
	</svg>
);

const inputCls =
	"w-full bg-[#f7f9ff] border border-line rounded-lg px-4 py-[0.8rem] text-ink font-body text-[0.93rem] font-light transition-[border-color,box-shadow] duration-200 outline-none appearance-none placeholder:text-ink-dim focus:border-blue focus:shadow-[0_0_0_3px_rgba(26,86,219,0.1)] focus:bg-white";

export default function ContactPage() {
	return (
		<>
			{/* ── HERO ── */}
			<div className='bg-blue pt-36 pb-20 px-10 border-b border-white/10 max-md:pt-24 max-md:pb-12 max-md:px-6 max-sm:px-4'>
				<div className='max-w-[1120px] mx-auto relative z-[2]'>
					<p className="flex justify-center items-center gap-[0.8rem] text-white/70 text-[0.72rem] font-medium tracking-[0.2em] uppercase mb-4 before:content-[''] before:block before:w-6 before:h-px before:bg-white/40 after:content-[''] after:block after:w-6 after:h-px after:bg-white/40">
						Let us Talk
					</p>
					<h1 className='font-display text-[clamp(2rem,6vw,3.2rem)] font-semibold leading-[1.1] text-white max-w-[680px] mx-auto mb-5 text-center'>
						Your clarity call starts{" "}
						<em className='text-white/70'>right here.</em>
					</h1>
					<p className='text-[1rem] text-white/60 max-w-[500px] mx-auto leading-[1.88] text-center'>
						No pitch. No pressure. Just a real 30-minute conversation
						about your business, where it is, and where you want it to go.
					</p>
				</div>
			</div>

			{/* ── CONTACT SPLIT ── */}
			<div
				className='border-t border-line px-10 pt-20 pb-28 max-md:px-6 max-md:pt-12 max-md:pb-20'
				style={{ backgroundColor: "#f5f5f5" }}>
				<div className='grid grid-cols-[1.5fr_1fr] gap-12 max-w-[1120px] mx-auto items-start max-md:grid-cols-1'>
					{/* Left: form */}
					<Reveal className='bg-white rounded-2xl p-12 shadow-[0_8px_40px_rgba(0,0,0,0.08)] max-md:p-8 max-sm:p-6'>
						<div className='mb-8'>
							<h3 className='font-display text-[1.8rem] font-semibold mb-[0.4rem]'>
								Book Your Free Clarity Call
							</h3>
							<p className='text-[0.88rem] text-ink-muted'>
								Fill this out and we will confirm your time within 24
								hours.
							</p>
						</div>

						<div className='grid grid-cols-2 gap-5 mb-5 max-md:grid-cols-1'>
							<div>
								<label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>
									First Name
								</label>
								<input
									type='text'
									placeholder='Your first name'
									className={inputCls}
								/>
							</div>
							<div>
								<label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>
									Last Name
								</label>
								<input
									type='text'
									placeholder='Your last name'
									className={inputCls}
								/>
							</div>
						</div>

						<div className='mb-5'>
							<label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>
								Email Address
							</label>
							<input
								type='email'
								placeholder='your@email.com'
								className={inputCls}
							/>
						</div>

						<div className='mb-5'>
							<label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>
								Phone Number
							</label>
							<input
								type='tel'
								placeholder='+1 (000) 000-0000'
								className={inputCls}
							/>
						</div>

						<div className='mb-5'>
							<label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>
								What best describes you?
							</label>
							<select className={inputCls}>
								<option
									value=''
									disabled>
									Select your role
								</option>
								<option>Coach or Consultant</option>
								<option>Real Estate Agent</option>
								<option>Entrepreneur or Founder</option>
								<option>Small Business Owner</option>
								<option>Other</option>
							</select>
						</div>

						<div className='mb-5'>
							<label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>
								Your biggest challenge right now?
							</label>
							<select className={inputCls}>
								<option
									value=''
									disabled>
									Select your main challenge
								</option>
								<option>Leads slipping through the cracks</option>
								<option>Tools that do not work together</option>
								<option>
									No time, stuck doing everything manually
								</option>
								<option>Inconsistent marketing and social media</option>
								<option>Cannot scale, everything depends on me</option>
								<option>Not sure where to start</option>
							</select>
						</div>

						<div className='mb-5'>
							<label className='block text-[0.74rem] tracking-[0.07em] uppercase text-ink-muted mb-[0.45rem]'>
								Tell us a little more (optional)
							</label>
							<textarea
								placeholder='What would feel like a win for you in 90 days?'
								className={`${inputCls} resize-y min-h-[110px]`}
							/>
						</div>

						<a
							href={BOOKING_URL}
							target='_blank'
							rel='noopener noreferrer'
							className='block w-full bg-blue-bright text-white text-center py-4 px-8 rounded-lg font-body font-medium text-[1rem] no-underline mt-2 transition-[background,transform] duration-[250ms] hover:bg-blue hover:-translate-y-0.5'>
							Book My Free Clarity Call
						</a>
					</Reveal>

					{/* Right: info + clarity box */}
					<Reveal
						delay='d1'
						className='flex flex-col gap-6 pt-2'>
						<h2 className='font-display text-[2rem] font-semibold leading-[1.2] text-ink'>
							We are genuinely{" "}
							<em className='text-blue'>glad you are here.</em>
						</h2>
						{[
							{
								icon: <EmailIcon />,
								label: "Email",
								content: (
									<a
										href='mailto:contact@nestrostack.com'
										className='text-[0.93rem] text-ink no-underline hover:text-blue transition-colors duration-200'>
										contact@nestrostack.com
									</a>
								),
							},
							{
								icon: <PhoneIcon />,
								label: "Phone",
								content: (
									<a
										href='tel:+18302669617'
										className='text-[0.93rem] text-ink no-underline hover:text-blue transition-colors duration-200'>
										+1 830-266-9617
									</a>
								),
							},
							{
								icon: <ClockIcon />,
								label: "Response Time",
								content: (
									<span className='text-[0.93rem] text-ink'>
										Within 24 hours
									</span>
								),
							},
						].map(({ icon, label, content }) => (
							<div
								key={label}
								className='flex items-start gap-4'>
								<div className='w-[42px] h-[42px] bg-blue-glow border border-line-blue rounded-[10px] flex items-center justify-center shrink-0'>
									{icon}
								</div>
								<div>
									<p className='text-[0.72rem] text-ink-muted uppercase tracking-[0.09em] mb-[0.2rem]'>
										{label}
									</p>
									{content}
								</div>
							</div>
						))}

						{/* Clarity call box */}
						<div className='bg-white border border-line rounded-2xl p-7 mt-2'>
							<h3 className='font-display text-[1.3rem] font-semibold text-ink mb-1'>
								What happens on the Clarity Call?
							</h3>
							<p className='text-[0.83rem] text-ink-muted mb-5 leading-[1.7]'>
								A focused 30 minutes where we map your world together.
							</p>
							<div className='flex flex-col gap-3'>
								{[
									"We listen to where you are and what is not working",
									"We identify the 1 to 2 systems that would make the biggest difference",
									"We tell you exactly what we would build and why",
									"You leave with clarity — whether you work with us or not",
								].map((item) => (
									<div
										key={item}
										className='flex items-start gap-3'>
										<span className='w-[6px] h-[6px] rounded-full bg-blue shrink-0 mt-[0.45rem]' />
										<span className='text-[0.88rem] text-ink-muted leading-[1.65]'>
											{item}
										</span>
									</div>
								))}
							</div>
						</div>
					</Reveal>
				</div>
			</div>

			<Footer />
		</>
	);
}
