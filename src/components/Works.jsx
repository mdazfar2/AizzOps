import React from "react";

const experiences = [
  [
    {
      company: "GitHub PR Expert",
      org: "Magic",
      role: "Part-time",
      period: "Aug 2025 – Jan 2026 · 6 mos",
      location: "Remote",
      logo: "/assets/img/magicdev.webp",
      notes: [
        "Reviewed and annotated GitHub PRs to raise code quality and best practices.",
        "Contributed to training AI models for automated software engineering.",
        "Identified bugs, performance issues, and optimization opportunities in real-world codebases.",
        "Delivered in a flexible, remote AI research environment.",
      ],
    },
    {
      company: "Founder",
      org: "HelpOps-Hub",
      role: "Full-time",
      period: "May 2024 – Apr 2025 · 1 yr",
      location: "Jaipur, Rajasthan, India · Remote",
      logo: "/assets/img/HelpOps-logo.webp",
      notes: [
        "Founded HelpOps-Hub to streamline DevOps processes and common error resolution.",
        "Invited users to share experiences, solutions, and learn to resolve issues quickly.",
        "Created a collaborative platform to prevent wasted time on DevOps errors.",
        "Built leadership, problem-solving, and community-building skills while running the product.",
      ],
    },
  ],
  [
    {
      company: "LinuxWorld Informatics Pvt Ltd",
      org: "Jaipur, Rajasthan, India",
      role: "Progression inside LinuxWorld",
      period: "Sep 2022 – Dec 2024 · 2 yrs 4 mos",
      location: "Hybrid / Remote",
      logo: "/assets/img/LinuxWorld.webp",
      notes: [
        "Grew from trainee to volunteer across ARTH, internship, and technical volunteer roles within LinuxWorld.",
      ],
      entries: [
        {
          title: "Technical Volunteer",
          role: "Part-time",
          period: "Sep 2023 – Dec 2024 · 1 yr 4 mos",
          location: "Remote",
          bullets: [
            "Orchestrated tasks and led a team of 100+ learners in DevOps concepts, CI/CD, and cloud technologies.",
            "Passionately assisted individuals in overcoming technical challenges and enhancing their problem-solving skills.",
            "Collaborated with a dynamic team to provide technical support and guidance, fostering continuous learning and growth.",
          ],
        },
        {
          title: "Summer Internship on Develop Own Cloud Computing with AI Intelligence",
          role: "Full-time",
          period: "Jul 2023 – Sep 2023 · 3 mos",
          location: "Hybrid",
          bullets: [
            "Developed custom machine and deep learning models for cloud computing with AI intelligence, integrating generative AI for enhanced capabilities.",
            "Utilized Python TUI and full stack for DevOps pipeline deployment, enhancing cloud performance.",
            "Contributed to web and mobile app development using Flutter for a comprehensive skill set development.",
          ],
        },
        {
          title: "ARTH - The School Of Technologies",
          role: "Full-time",
          period: "Sep 2022 – Sep 2023 · 1 yr 1 mo",
          location: "Hybrid",
          bullets: [
            "Implemented 10+ technologies to solve real industry use-cases under mentorship from Mr. Vimal Daga.",
            "Troubleshot technical problems, improving productivity and sharpening technical skills.",
            "Connected with diverse professionals, expanding technical expertise and knowledge sharing.",
          ],
        },
      ],
    },
    {
      company: "Project Admin",
      org: "GirlScript Summer of Code",
      role: "Full-time",
      period: "May 2024 – Oct 2024 · 6 mos",
      location: "Remote",
      logo: "/assets/img/gssoc.webp",
      notes: [
        "Managed and led a team of 40+ contributors in the HelpOps-Hub project during GSSoC.",
        "Collaborated with contributors across India to ensure project success.",
        "Implemented project management strategies to streamline workflow and hit goals.",
      ],
    },
  ],
];

export default function Works() {
  return (
    <section className="min-h-screen bg-white pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-900 mb-16">Experience</h1>

        <div className="relative space-y-20">
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gray-200 -translate-x-1/2" aria-hidden />

          {experiences.map((row, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <ExperienceItem item={row[0]} align="right" />
              <ExperienceItem item={row[1]} align="left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ item, align }) {
  const hasEntries = Array.isArray(item.entries) && item.entries.length > 0;

  return (
    <div className={`flex gap-4 ${align === "right" ? "md:justify-end" : ""}`}>
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-[#1a1325] via-[#3f2b63] to-[#6a4fc1] rounded-xl flex items-center justify-center text-white text-sm font-semibold shadow-lg overflow-hidden">
          {item.logo ? (
            <img
              src={item.logo}
              alt={`${item.company} logo`}
              className="w-full h-full object-contain"
            />
          ) : (
            item.company[0]
          )}
        </div>
        <div className={`hidden md:block absolute top-1/2 ${align === "right" ? "right-[-34px]" : "left-[-34px]"} w-8 h-[1px] bg-gray-300`} aria-hidden />
      </div>

      <div className="max-w-md bg-white border border-gray-100 shadow-sm rounded-2xl p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#6d5cff]">{item.company}</p>
            <h3 className="text-lg font-semibold text-gray-900 leading-snug">{item.org}</h3>
            <p className="text-sm text-gray-700">{item.role}</p>
          </div>
          <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-[#f4f2ff] text-[#5b4fdc] whitespace-nowrap">
            {item.period}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-600 mt-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-800">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden />
            {item.location}
          </span>
        </div>

        {item.notes?.length > 0 && (
          <ul className="mt-4 space-y-2">
            {item.notes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#5b4fdc] flex-shrink-0" aria-hidden />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        )}

        {hasEntries && (
          <div className="mt-5 border-t border-gray-100 pt-4 space-y-4">
            {item.entries.map((entry, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-gray-500">{entry.role}</p>
                    <h4 className="text-base font-semibold text-gray-900 leading-snug">{entry.title}</h4>
                    <p className="text-xs text-gray-600">{entry.location}</p>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-gray-100 text-gray-700 whitespace-nowrap">
                    {entry.period}
                  </span>
                </div>
                <ul className="space-y-1">
                  {entry.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#9f7aea] flex-shrink-0" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}