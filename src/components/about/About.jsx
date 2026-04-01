import React from 'react';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';

export default function About() {
	return (
		<section className="relative min-h-screen bg-[#f8f7fb] text-black pt-28 pb-20 overflow-hidden">
			{/* background glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute left-[-120px] top-20 w-[400px] h-[400px] bg-purple-400/20 blur-[140px]" />
				<div className="absolute right-[-80px] bottom-0 w-[420px] h-[420px] bg-indigo-400/10 blur-[160px]" />
			</div>

			<div className="relative max-w-6xl mx-auto px-6 lg:px-10">
				<div className="grid lg:grid-cols-2 gap-16 items-start">

					{/* LEFT SIDE */}
					<div className="lg:-ml-6 xl:-ml-10">
						{/* main heading */}
						<h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-black">
							About Azfar
						</h1>

						{/* description */}
						<div className="space-y-6 text-[17px] leading-[1.8] text-black/70 max-w-xl">
							<p>
								I am a DevOps-focused engineer with a foundation in full-stack development and interest in AI. My journey began with cloud and DevOps, later expanding into full-stack and open-source. I focus on building scalable systems and continuously improving through real-world projects and collaboration.
							</p>

							<div>
								<h2 className="text-2xl font-semibold text-black mb-3">
									How I reached the Top 5% of GitHub!
								</h2>

								<p>
									In 2022, I decided to hit reset on my life when I found open source. That sparked an obsession that led me to contribute to{' '}
									<span className="text-purple-600 underline cursor-pointer">40+ projects</span>, make{' '}
									<span className="text-purple-600 underline cursor-pointer">200+ pull requests</span>, join{' '}
									<span className="text-purple-600 underline cursor-pointer">500+ discussions</span>, and somehow land in the{' '}
									<span className="text-purple-600 underline cursor-pointer">Top 5% on GitHub</span> in just a couple of years.
								</p>
							</div>

							<p>
								I became an open source maintainer and created an{' '}
								<span className="text-purple-600 underline cursor-pointer">
									open source guide for beginners
								</span>{' '}
								which ended up getting{' '}
								<span className="text-purple-600 underline cursor-pointer">
									featured in the GitHub community
								</span>.
								Thanks to the experience acquired in the last few years, I now work full-time as a freelance technical writer working for international clients.
							</p>
						</div>
					</div>

					{/* RIGHT SIDE */}
					<aside className="relative flex flex-col items-start lg:items-end lg:ml-auto lg:pr-4">
						
						{/* tilted image card */}
						<div className="relative lg:translate-x-4 mt-10">
							<div className="rotate-[3deg] rounded-2xl overflow-hidden shadow-xl border border-black/10 bg-white">
								<img
									src="/assets/img/Azfar Alam.jpg"
									alt="Azfar"
									className="w-[320px] h-[380px] object-cover"
								/>
							</div>
						</div>

						{/* social links */}
						<div className="mt-8 space-y-4 lg:w-[320px] lg:self-end">
							<a
								href="https://github.com/mdazfar2"
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-3 text-black/70 hover:text-black transition"
							>
								<Github size={18} />
								<span>GitHub Profile</span>
							</a>

							<a
								href="https://www.linkedin.com/in/azfar-alam-22486619b/"
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-3 text-black/70 hover:text-black transition"
							>
								<Linkedin size={18} />
								<span>LinkedIn Profile</span>
							</a>

							<a
								href="https://dev.to/mdazfar2"
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-3 text-black/70 hover:text-black transition"
							>
								<FileText size={18} />
								<span>Blog Profile</span>
							</a>

							<div className="pt-4 border-t border-black/10">
								<a
									href="mailto:hi@Azfaralam.com"
									className="flex items-center gap-3 text-black/70 hover:text-black transition"
								>
									<Mail size={18} />
									<span>hi@azfaralam.com</span>
								</a>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}