import React from 'react';
import { Lightbulb, Users, Wrench, BookOpenCheck, Globe, Target } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const benefits = [
  {
    title: 'Community-Driven Q&A',
    description: 'Ask DevOps questions and discover practical answers across tools, pipelines, and deployment workflows.',
    icon: Users,
  },
  {
    title: 'Blogs and Articles',
    description: 'Read concise tutorials and expert-written resources focused on real implementation outcomes.',
    icon: BookOpenCheck,
  },
  {
    title: 'Topic-Specific Threads',
    description: 'Join organized discussions by tool, framework, and DevOps best practices for faster learning.',
    icon: Target,
  },
  {
    title: 'In-Depth Guides',
    description: 'Follow step-by-step how-to guides for setup, configuration, optimization, and troubleshooting.',
    icon: Wrench,
  },
  {
    title: 'Global Open-Source Reach',
    description: 'HelpOps-Hub contributes through Product Hunt, Hacktoberfest, and GSSoC to grow community impact.',
    icon: Globe,
  },
];

export default function HelpOpsHubDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="HelpOps-Hub"
          badge="Open Source DevOps Platform"
          title="HelpOps-Hub"
          description="HelpOps-Hub is an open-source DevOps platform designed to help developers quickly find solutions to real-world DevOps issues. It works as a centralized hub where users can explore errors, fixes, guides, and practical implementations across multiple DevOps tools and technologies."
          goalTitle="Goal of the Project"
          goalDescription="The main goal is to reduce the time developers spend troubleshooting DevOps problems by providing ready-to-use solutions, real-world fixes, and a collaborative space for knowledge sharing. HelpOps-Hub is built to grow a strong community where learners and professionals contribute together and improve faster."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Why HelpOps-Hub Matters</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-[#dbe7ff] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#a8c5ff] hover:shadow-[0_16px_40px_-28px_rgba(29,78,216,0.55)]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] p-2.5 text-[#0f1020]">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-[#142a4b]">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#486182]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
