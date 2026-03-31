const Contact = () => {
	return (
		<section className="relative overflow-hidden bg-[#f9fafb] text-[#0f172a] py-24 px-6 md:px-12 lg:px-20">
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
						href="#"
						className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#9b5cff] via-[#8c4bff] to-[#7d3cff] px-6 py-3 text-lg font-semibold text-white shadow-[0_20px_40px_rgba(124,67,255,0.25)] transition duration-200 hover:scale-[1.03] hover:shadow-[0_24px_46px_rgba(124,67,255,0.35)]"
					>
						<span>Book a call</span>
						<span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#6c3bff] shadow-inner">
							<span className="-translate-y-[1px]">↗</span>
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
								✉
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