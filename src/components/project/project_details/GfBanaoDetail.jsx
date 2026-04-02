import React from 'react';
import { Lightbulb, Users, Brain, GraduationCap, Sparkles, Handshake, AlertCircle } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const benefits = [
  {
    title: 'Skill-Based Matching',
    description: 'Users connect based on shared tech interests, learning goals, and knowledge level.',
    icon: Brain,
  },
  {
    title: 'Learn and Grow Together',
    description: 'The platform blends e-learning with meaningful connections and project collaboration.',
    icon: GraduationCap,
  },
  {
    title: 'AI-Powered Matchmaking',
    description: 'Smart match suggestions are planned to align users with their growth objectives.',
    icon: Sparkles,
  },
  {
    title: 'Flexible Connection Types',
    description: 'Users can choose connection intent such as buddy, partner, co-founder, and more.',
    icon: Handshake,
  },
  {
    title: 'Growth-Driven Community',
    description: 'Designed for people focused on learning, mentorship, collaboration, and support.',
    icon: Users,
  },
];

const features = [
  'AI-driven matching based on knowledge and interests',
  'Dual-purpose journey: skill learning + meaningful connections',
  'User-defined connection roles like buddy, partner, co-founder',
  'Clean modern UI with a growth-focused experience',
];

export default function GfBanaoDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="GfBanao Learning & Connection Platform"
          badge="GF = Great Future"
          title="GfBanao Learning & Connection Platform"
          description="GfBanao is a unique tech-driven platform where enthusiasts can connect, learn, and build meaningful relationships. It combines e-learning with collaboration to help users grow through shared knowledge, real-world projects, and authentic connections."
          goalTitle="Goal of the Project"
          goalDescription="The goal is to build a vibrant platform where users can grow personally and professionally by learning tech skills, sharing knowledge, and building genuine connections based on mutual interests and progress."
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
          <div className="mb-5 flex items-center gap-2 text-[#1f4d9b]">
            <GraduationCap className="h-5 w-5" />
            <h3 className="text-2xl font-extrabold text-[#10243f]">Key Features</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((item, index) => (
              <div key={item} className="rounded-2xl border border-[#e5eefc] bg-[#f9fbff] p-5">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] text-sm font-black text-[#0f1020]">
                  {index + 1}
                </div>
                <p className="text-[#365175] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#ffd8a8] bg-[#fff8ef] p-6 text-[#6b4b1f]">
          <div className="mb-3 flex items-center gap-2 font-bold">
            <AlertCircle className="h-5 w-5" />
            Current Implementation Status
          </div>
          <p className="leading-relaxed">
            This project is currently frontend-focused. Core backend modules are not implemented yet. Backend services, advanced matching logic, and production-grade integration are planned for future releases.
          </p>
        </div>
      </section>
    </main>
  );
}
