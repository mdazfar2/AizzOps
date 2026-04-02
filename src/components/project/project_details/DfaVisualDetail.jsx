import React from 'react';
import { Lightbulb, BookOpen, Sparkles, PlayCircle, Moon, GraduationCap, Cuboid } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const benefits = [
  {
    title: 'Learn By Doing',
    description: 'Students can create DFA manually and understand each concept through hands-on interaction.',
    icon: GraduationCap,
  },
  {
    title: 'Regex to DFA Converter',
    description: 'Convert regular expressions into DFA diagrams instantly for faster conceptual clarity.',
    icon: Sparkles,
  },
  {
    title: 'Live Animation',
    description: 'Watch transitions and state changes in real-time like an actual running machine.',
    icon: PlayCircle,
  },
  {
    title: 'Dark Themed UI',
    description: 'A futuristic dark interface keeps sessions engaging and improves visual focus.',
    icon: Moon,
  },
  {
    title: 'Educational Focus',
    description: 'Designed specifically for Theory of Computation classes and self-learners.',
    icon: BookOpen,
  },
  {
    title: '3D Visual Flow',
    description: 'Three.js based visual effects make automata transitions easier to understand.',
    icon: Cuboid,
  },
];

const features = [
  'Interactive DFA Builder for states, alphabets, and transitions',
  'Regex to DFA conversion with working transition graph',
  'Real-time string simulation step by step',
  'Animated transition visuals for better learning retention',
  'Minimal, distraction-free UI for focused practice',
];

export default function DfaVisualDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="DFA Visual Simulator"
          badge="TOC Learning Platform"
          title="DFA Visual Simulator"
          description="DFA-Visual is an interactive platform to learn and simulate Deterministic Finite Automata in real-time. Built for Theory of Computation learners, it helps visualize transitions, states, and regex-to-DFA conversion with animation and a modern UI."
          goalTitle="Goal of DFA-Visual"
          goalDescription="The goal is to help learners understand how DFA works step by step by entering states, alphabets, transition rules, or regular expressions and instantly seeing the automaton come alive."
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
            <BookOpen className="h-5 w-5" />
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
    </main>
  );
}
