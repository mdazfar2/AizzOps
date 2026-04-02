import React from 'react';
import { Lightbulb, Rocket, Handshake, Smartphone, Zap, Target, Briefcase } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const benefits = [
  {
    title: 'Strong First Impression',
    description: 'A modern UI builds immediate credibility and trust with potential clients.',
    icon: Rocket,
  },
  {
    title: 'Client Engagement',
    description: 'Makes it easy for visitors to understand services and start collaboration quickly.',
    icon: Handshake,
  },
  {
    title: 'Responsive Design',
    description: 'Smooth browsing experience across mobile and desktop devices.',
    icon: Smartphone,
  },
  {
    title: 'Fast Performance',
    description: 'Optimized pages provide quick loading and fluid navigation.',
    icon: Zap,
  },
  {
    title: 'Clear Service Showcase',
    description: 'Highlights skills, offerings, and expertise in a structured manner.',
    icon: Target,
  },
  {
    title: 'Brand Identity',
    description: 'Establishes a polished digital presence for a freelance agency.',
    icon: Briefcase,
  },
];

export default function RapidGigDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="RapidGig Labs Agency Website"
          badge="Freelance Agency Presence"
          title="RapidGig Labs Agency Website"
          description="RapidGig Labs is a modern freelance agency website designed to showcase services, highlight expertise, and connect potential clients with developers quickly and efficiently. The platform focuses on a clean, fast, responsive experience that creates a strong first impression."
          goalTitle="Goal of the Project"
          goalDescription="To create a professional online presence for a freelance agency that communicates services clearly, builds trust, and converts visitors into potential clients."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Benefits</h3>
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

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#d7e7ff] bg-white p-8 shadow-[0_24px_70px_-35px_rgba(25,60,130,0.18)] sm:p-10">
          <h3 className="text-2xl font-extrabold text-[#10243f] mb-4">Technology Stack</h3>
          <div className="flex flex-wrap gap-3">
            {['React', 'TailwindCSS', 'TypeScript'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#dce9ff] bg-[#f9fbff] px-4 py-2 text-sm font-semibold text-[#365175]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
