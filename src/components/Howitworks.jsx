import React from "react";

const steps = [
  {
    phase: "Plan",
    number: "01",
    title: "I understand the problem and design the right solution",
    points: [
      { title: "Initial Understanding", detail: "Analyze requirements and project goals." },
      { title: "Tech Stack Selection", detail: "Choose the right tools." },
      { title: "Architecture Planning", detail: "Design scalable and efficient system flow." }
    ],
    duration: "1-2 days"
  },
  {
    phase: "Build",
    number: "02",
    title: "I develop clean and scalable applications",
    points: [
      { title: "Development", detail: "Build full-stack features with best practices." },
      { title: "Integration", detail: "Connect APIs, databases, and services." },
      { title: "Optimization", detail: "Ensure performance and clean code structure." }
    ],
    duration: "2-3 weeks"
  },
  {
    phase: "Deploy",
    number: "03",
    title: "I deploy applications using DevOps practices",
    points: [
      { title: "CI/CD Pipelines", detail: "Automate build and deployment process." },
      { title: "Containerization", detail: "Use Docker for consistent environments." },
      { title: "Cloud Deployment", detail: "Deploy on AWS or cloud platforms." }
    ],
    duration: "1-2 days"
  },
  {
    phase: "Monitor",
    number: "04",
    title: "I ensure stability and continuous improvement",
    points: [
      { title: "Monitoring", detail: "Track performance and system health." },
      { title: "Fix & Improve", detail: "Resolve issues and optimize systems." },
      { title: "Scaling", detail: "Improve system based on usage and needs." }
    ],
    duration: "Continuous"
  }
];

const stats = [
  {
    value: "20+",
    label: "Projects Built",
    tag: "Work",
    bg: "bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#4c1d95]",
    text: "text-white",
  },
  {
    value: "200+",
    label: "GitHub PRs Reviewed",
    tag: "Open Source",
    bg: "bg-gradient-to-br from-[#0f172a] via-[#020617] to-black",
    text: "text-white",
  },
  {
    value: "40+",
    label: "Developers Collaborated",
    tag: "Community",
    bg: "bg-gradient-to-br from-[#f1f5f9] via-white to-[#e2e8f0]",
    text: "text-[#0f172a]",
  }
];

function StarIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor">
      <path d="M8 1.4 9.5 6l4.6.5-3.5 2.9 1 4.7L8 11.9 4.4 14 5.5 9.3 2 6.5l4.5-.5Z" />
    </svg>
  );
}

export default function Howitworks() {
  return (
    <section className="bg-[#f8f9fc] text-[#111827] px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* HEADER */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#6d5cff]">
            <span className="h-2 w-2 rounded-full bg-[#7c3aed]"></span>
            <span>{"{03} — Process"}</span>
          </div>

          <h2 className="text-[40px] md:text-[52px] font-semibold leading-tight text-[#0f172a]">
            How I Build & Deploy Systems
          </h2>
        </div>

        {/* STEPS */}
        <div className="space-y-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid md:grid-cols-[220px_1fr_140px] gap-10 items-start border-b border-[#e5e7eb] pb-14"
            >
              
              <div className="flex items-center gap-6">
                <span className="border border-[#e5e7eb] bg-white px-4 py-2 rounded-full text-xs uppercase tracking-wide text-[#374151] shadow-sm">
                  {step.phase}
                </span>

                <span className="text-4xl font-semibold text-[#7c3aed]">
                  /{step.number}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-[24px] md:text-[28px] font-semibold text-[#0f172a]">
                  {step.title}
                </h3>

                <ul className="space-y-3">
                  {step.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <StarIcon className="mt-[3px] h-4 w-4 text-[#7c3aed]" />
                      <p className="text-[15px] leading-relaxed">
                        <span className="font-semibold text-[#111827]">
                          {point.title}
                        </span>
                        <span className="text-[#6b7280]">
                          : {point.detail}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start justify-end">
                <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                  <span className="h-4 w-4 rounded-full border border-[#d1d5db]"></span>
                  <span className="text-[#374151]">{step.duration}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid gap-6 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className={`group relative overflow-hidden rounded-3xl px-8 py-10 ${stat.bg} shadow-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-white/10 via-transparent to-white/5" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                
                <h3 className={`text-5xl md:text-6xl font-bold tracking-tight ${stat.text}`}>
                  {stat.value}
                </h3>

                <div className="mt-6 space-y-1">
                  <p className={`text-xs uppercase tracking-widest opacity-70 ${stat.text}`}>
                    {stat.tag}
                  </p>
                  <p className={`text-lg font-medium ${stat.text}`}>
                    {stat.label}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
