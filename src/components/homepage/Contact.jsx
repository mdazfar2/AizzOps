import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
	return (
		<section id="contact" className="relative overflow-hidden bg-[#f9fafb] text-[#0f172a] py-24 px-6 md:px-12 lg:px-20">
			{/* Soft glow accents */}
			<div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />
			<div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />

			<div className="relative z-10 grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] mx-auto">
				
				{/* LEFT CONTENT */}
				<div className="space-y-8">
					
					{/* STATUS */}
					<div className="flex items-center gap-3 text-sm text-gray-600">
						<span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
							<span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-green-400/30 blur-[2px]" />
							<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
						</span>
						<span className="tracking-wide">Available for work</span>
					</div>

					<h2 className="text-3xl leading-tight text-[#0f172a] sm:text-4xl lg:text-[42px]">
						Let&apos;s write something extraordinary together
						<span className="text-purple-500">.</span>
					</h2>

					<p className="text-lg text-gray-500">And make an impact</p>

					<a
						href="https://cal.com/azfar-alam-4my9ak/30min"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-between gap-4 rounded-full bg-[#0f172a] px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:bg-black hover:shadow-lg hover:shadow-black/30 hover:scale-105"
					>
						<span>Book a call</span>
						<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0f172a]">
							<FontAwesomeIcon icon={faCalendarDays} className="text-base" />
						</span>
					</a>
				</div>

				{/* FORM */}
				<form className="space-y-10">
					<div className="space-y-2">
						<label className="text-lg font-semibold text-[#111827]">
							Get in touch
						</label>
					</div>

					<div className="space-y-8">
						<input
							type="text"
							placeholder="Your name"
							className="block w-full border-b border-gray-300 bg-transparent pb-3 text-base text-[#111827] placeholder:text-gray-400 focus:border-purple-500 focus:outline-none"
						/>

						<input
							type="email"
							placeholder="Your email"
							className="block w-full border-b border-gray-300 bg-transparent pb-3 text-base text-[#111827] placeholder:text-gray-400 focus:border-purple-500 focus:outline-none"
						/>

						<textarea
							rows="3"
							placeholder="Write your message"
							className="block w-full border-b border-gray-300 bg-transparent pb-3 text-base text-[#111827] placeholder:text-gray-400 focus:border-purple-500 focus:outline-none"
						/>
					</div>

					<div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
						<a
							href="mailto:azfaralam.ops@gmail.com"
							className="group inline-flex items-center gap-3 text-sm font-medium text-gray-600 transition hover:text-purple-500"
						>
							<span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-base">
								<FontAwesomeIcon icon={faEnvelope} />
							</span>
							<span className="underline decoration-dotted underline-offset-4 group-hover:decoration-purple-500">
								azfaralam.ops@gmail.com
							</span>
						</a>

						<button
							type="submit"
							className="inline-flex items-center justify-center rounded-full bg-[#0f172a] px-7 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-black"
						>
							Submit
						</button>
					</div>
				</form>

			</div>
		</section>
	);
};

export default Contact;