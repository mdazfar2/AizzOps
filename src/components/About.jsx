import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function About() {

	// track text elements for reveal-on-scroll
	const revealRefs = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('reveal-show');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		revealRefs.current.forEach((el) => el && observer.observe(el));

		return () => observer.disconnect();
	}, []);

	const addRevealRef = (el) => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el);
		}
	};

	// reusable highlight style
	const highlight =
		"bg-purple-200 text-purple-800 px-2 py-1 rounded-md font-medium";

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
						<h1
							ref={addRevealRef}
							className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-black reveal"
						>
							About Azfar
						</h1>

						<div className="space-y-6 text-[17px] leading-[1.8] text-black/70 max-w-xl">
							<p ref={addRevealRef} className="reveal">
								I am a DevOps-focused engineer with a foundation in full-stack development and interest in AI. My journey began with cloud and DevOps, later expanding into full-stack and open-source. I focus on building scalable systems and continuously improving through real-world projects and collaboration.
							</p>
							<div>
								<h2
									ref={addRevealRef}
									className="text-2xl font-semibold text-black mb-3 reveal"
								>
									How I reached the Top 5% of GitHub!
								</h2>

								<p ref={addRevealRef} className="reveal">
									In 2024, I discovered open source and became deeply involved in contributing and reviewing code. I contributed to{' '}
									<span className={highlight}>30+ projects</span>, made{' '}
									<span className={highlight}>200+ pull requests</span>, and participated in{' '}
									<span className={highlight}>500+ discussions</span>, gaining strong real-world experience and somehow landed in the{' '}
									<a
										href="https://github.com/mdazfar2"
										target="_blank"
										rel="noreferrer"
										className="text-purple-800 font-semibold underline underline-offset-2"
									>
										top 5% on GitHub
									</a>{' '}
									within a couple of years.
								</p>
							</div>

							<p ref={addRevealRef} className="reveal">
								I took on leadership roles in open source, mentoring contributors and managing projects like{' '}
								<a
									href="https://github.com/mdazfar2/HelpOps-Hub"
									target="_blank"
									rel="noreferrer"
									className="text-purple-800 font-semibold underline underline-offset-2"
								>
									HelpOps-Hub
								</a>{' '}
								&{' '}
								<a
									href="https://github.com/mdazfar2/ezyshop"
									target="_blank"
									rel="noreferrer"
									className="text-purple-800 font-semibold underline underline-offset-2"
								>
									Ezyshop
								</a>. Working across diverse codebases, I improved code quality through PR reviews and collaboration, gaining deep insight into building, scaling, and maintaining real-world applications.
							</p>

							<div className="pt-4 space-y-4">
								<h2
									ref={addRevealRef}
									className="text-2xl font-semibold text-black reveal"
								>
									Building scalable systems is my passion 🚀
								</h2>
								<p ref={addRevealRef} className="reveal">
									I believe DevOps, full-stack development, and AI together create the most powerful solutions. I started my journey with{' '}
									<span className={highlight}>cloud and DevOps</span>, later expanding into{' '}
									<span className={highlight}>full-stack and open source</span>, where I worked on real-world projects and collaborated with developers across communities.
								</p>
								<p ref={addRevealRef} className="reveal">
									I have gained{' '}
									<span className={highlight}>strong hands-on experience</span>{' '}
									working on real-world systems, focusing on scalability, performance, and clean code practices across different projects and environments.
								</p>
								<p ref={addRevealRef} className="reveal">
									I enjoy solving real-world problems, automating workflows, and deploying scalable applications using{' '}
									<span className={highlight}>modern technologies</span>.
								</p>
								<p ref={addRevealRef} className="reveal">
									While I continue contributing to open source, my main focus is on building, deploying, and scaling impactful systems.
								</p>
								<div>
									<p ref={addRevealRef} className="font-semibold text-black mb-2 reveal">To grow and give back to the community:</p>
									<ul className="list-disc list-outside ml-6 space-y-1 reveal" ref={addRevealRef}>
										<li>I founded <a href="https://github.com/mdazfar2/HelpOps-Hub" target="_blank" rel="noreferrer" className="text-purple-800 font-semibold underline underline-offset-2">HelpOps-Hub</a> to help developers solve DevOps challenges</li>
										<li>I mentored 40+ contributors during GSSoC</li>
										<li>I actively review PRs and collaborate with developers worldwide</li>
									</ul>
								</div>
							</div>

							<div className="pt-4 space-y-4">
								<h2
									ref={addRevealRef}
									className="text-2xl font-semibold text-black reveal"
								>
									The Story Behind HelpOps-Hub
								</h2>
								<p ref={addRevealRef} className="reveal">
									It started with my passion for <span className={highlight}>DevOps</span> and a habit of constantly learning and implementing new tools. To avoid forgetting what I learned, I created a simple repository called <span className={highlight}>“ShellScript-Toolkit”</span> where I stored scripts, automation, and notes for my own reference.
								</p>
								<p ref={addRevealRef} className="reveal">
									Over time, I noticed people were finding it useful, the repository started gaining stars, forks, and appreciation from developers. That’s when I realized it could help others too.
								</p>
								<p ref={addRevealRef} className="reveal">
									I renamed it to <span className={highlight}>HelpOps-Hub</span>, with a vision to create a space where developers can learn, solve problems, and grow together in DevOps.
								</p>
								<p ref={addRevealRef} className="reveal">
									As contributions started coming in, I made it open source. What began as a personal learning repo soon evolved into a collaborative platform, with contributors building features, including the website itself.
								</p>
								<p ref={addRevealRef} className="reveal">
									Today, HelpOps-Hub stands as a growing DevOps community, built with consistency, learning, and the intention to help others.
								</p>
							</div>

							<div className="pt-4 space-y-4">
								<h2
									ref={addRevealRef}
									className="text-2xl font-semibold text-black reveal"
								>
									Working remotely by choice and passion
								</h2>
								<p ref={addRevealRef} className="reveal">
									I am a big supporter of remote work. Working remotely for the past months has given me the{' '}
									<span className={highlight}>time</span>{' '}
									and the <span className={highlight}>freedom</span> to improve my skills. That freedom also helped me to do a lot of side work like growing my community, improving my social presence, and achieving so much more in the process.
								</p>
							</div>

							<div className="pt-4 space-y-4">
								<h2
									ref={addRevealRef}
									className="text-2xl font-semibold text-black reveal"
								>
									Beyond Code
								</h2>
								<p ref={addRevealRef} className="reveal">
									Giving back to the community is an important part of my journey. I actively help developers through open source, PR reviews, and community discussions, sharing knowledge and solving real-world problems.
								</p>
								<p ref={addRevealRef} className="reveal">
									<span className={highlight}>I enjoy mentoring, guiding others, and creating resources that make learning easier and more accessible.</span>
								</p>
								<p ref={addRevealRef} className="reveal">
									Beyond tech, I stay active through sports, explore new ideas, and continuously push myself to grow both personally and professionally.
								</p>
								<p ref={addRevealRef} className="reveal">That's my story.</p>
							</div>
						</div>
					</div>


					{/* RIGHT SIDE */}
					<aside className="relative flex flex-col items-start lg:items-end lg:ml-auto lg:pr-4">
						
						{/* image */}
						<div className="relative lg:translate-x-4 mt-10">
							<div className="rotate-[3deg] rounded-2xl overflow-hidden shadow-xl border border-black/10 bg-white">
								<img
									src="/assets/img/Azfar Alam.webp"
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
								<FontAwesomeIcon icon={faGithub} />
								<span>GitHub Profile</span>
							</a>

							<a
								href="https://www.linkedin.com/in/azfar-alam-22486619b/"
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-3 text-black/70 hover:text-black transition"
							>
								<FontAwesomeIcon icon={faLinkedin} />
								<span>LinkedIn Profile</span>
							</a>

							<a
								href="https://dev.to/mdazfar2"
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-3 text-black/70 hover:text-black transition"
							>
								<FontAwesomeIcon icon={faFileAlt} />
								<span>Blog Profile</span>
							</a>

							<div className="pt-4 border-t border-black/10">
								<a
									href="mailto:azfaralam.ops@gmail.com"
									className="flex items-center gap-3 text-black/70 hover:text-black transition"
								>
									<FontAwesomeIcon icon={faEnvelope} />
									<span>azfaralam.ops@gmail.com</span>
								</a>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}