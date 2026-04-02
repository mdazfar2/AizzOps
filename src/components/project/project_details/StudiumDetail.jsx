import React from 'react';
import { Lightbulb, Target, LineChart, Repeat, Brain, Smartphone } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const benefits = [
  {
    title: 'Progress Tracking',
    description: 'Monitor daily study activity and overall consistency in one place.',
    icon: LineChart,
  },
  {
    title: 'Goal Awareness',
    description: 'Understand current progress versus future goals with clear visibility.',
    icon: Target,
  },
  {
    title: 'Habit Building',
    description: 'Encourages regular study routines and stronger discipline over time.',
    icon: Repeat,
  },
  {
    title: 'Self Evaluation',
    description: 'Review performance trends to see how your study pattern changes.',
    icon: Brain,
  },
  {
    title: 'Productivity Boost',
    description: 'Stay focused and improve learning efficiency with simple tracking.',
    icon: Lightbulb,
  },
  {
    title: 'Simple UI',
    description: 'A clean, distraction-free interface makes daily usage effortless.',
    icon: Smartphone,
  },
];

export default function StudiumDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="Studyrium Study Tracker"
          badge="Study Tracking Web App"
          title="Studyrium Study Tracker"
          description="Studyrium is a simple yet powerful study tracking web application designed to help students stay consistent with their learning journey. It allows users to record their daily study activities and visualize progress over time, making it easier to understand current effort and future needs."
          goalTitle="Goal of the Project"
          goalDescription="To help students build discipline and consistency in their studies by tracking daily progress and encouraging self-awareness about their learning habits."
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
            <Target className="h-5 w-5" />
            <h3 className="text-2xl font-extrabold text-[#10243f]">How It Helps Students</h3>
          </div>
          <p className="text-[#365175] leading-relaxed">
            Students can log their study time, observe consistency patterns, and stay motivated by watching progress build over time. The app is intentionally simple and distraction-free so the focus stays on learning goals.
          </p>
        </div>
      </section>
    </main>
  );
}
