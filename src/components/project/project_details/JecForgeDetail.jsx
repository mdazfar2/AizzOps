import React from 'react';
import { Lightbulb, Code2, Rocket, Briefcase, GraduationCap, Users, Globe, Wrench } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const aboutCards = [
  {
    title: 'Open-Source Projects',
    description: 'Community-driven projects focused on solving real-world challenges through collaboration.',
    icon: Code2,
  },
  {
    title: 'DevOps Excellence',
    description: 'Hands-on exposure to CI/CD, Docker, and cloud-native engineering practices.',
    icon: Rocket,
  },
  {
    title: 'Career Support',
    description: 'Project-building culture that helps with practical skills and interview readiness.',
    icon: Briefcase,
  },
  {
    title: 'Technical Learning',
    description: 'Peer-driven learning in web, cloud, full-stack development, and system thinking.',
    icon: GraduationCap,
  },
];

const mission = [
  'Collaborate with fellow students on impactful projects.',
  'Innovate by turning fresh ideas into practical solutions.',
  'Solve real-world problems through technology and teamwork.',
  'Build skills and leave a strong impact before graduation.',
];

const platformValue = [
  {
    title: 'Real-World Projects',
    description: 'Build and contribute to practical software with real impact.',
    icon: Wrench,
  },
  {
    title: 'Skill Development',
    description: 'Improve technical depth, communication, and leadership through team work.',
    icon: GraduationCap,
  },
  {
    title: 'Community Support',
    description: 'Learn with like-minded peers, share knowledge, and grow together.',
    icon: Users,
  },
];

export default function JecForgeDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="JEC Forge Community Platform"
          badge="Community-Driven Student Tech Platform"
          title="JEC Forge Community Platform"
          description="Jec-Forge is a community-driven GitHub organization founded by 2025 graduating students of Jaipur Engineering College (JEC). It brings together passionate developers and innovators to solve real-world problems through code, creativity, and collaboration."
          goalTitle="Goal of the Project"
          goalDescription="Jec Forge aims to empower students through collaborative open-source projects, real-world problem solving, and peer-driven learning while building impactful solutions for campus and community."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">About Jec Forge</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {aboutCards.map((item) => {
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
            <Globe className="h-5 w-5" />
            <h3 className="text-2xl font-extrabold text-[#10243f]">Our Mission</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {mission.map((item, index) => (
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

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Users className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">What We Do</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platformValue.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-[#dbe7ff] bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-xl bg-[#eef5ff] p-2.5 text-[#1f4d9b]">
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
