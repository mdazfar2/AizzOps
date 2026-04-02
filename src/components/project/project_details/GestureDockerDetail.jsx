import React from 'react';
import { Lightbulb, Hand, Zap, Bot, Boxes, Camera, Cpu, Workflow } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const audience = [
  {
    title: 'Developers',
    description: 'Speed up Docker operations without repeatedly typing command-line instructions.',
    icon: Cpu,
  },
  {
    title: 'DevOps Engineers',
    description: 'Experiment with automation-first workflows and interactive infrastructure control.',
    icon: Workflow,
  },
  {
    title: 'Tech Enthusiasts',
    description: 'Explore practical applications of computer vision integrated with DevOps.',
    icon: Bot,
  },
];

const benefits = [
  {
    title: 'Hands-Free Automation',
    description: 'Launch and manage containers directly through recognized hand gestures.',
    icon: Hand,
  },
  {
    title: 'Faster Operations',
    description: 'Removes repetitive command execution and shortens operational workflow.',
    icon: Zap,
  },
  {
    title: 'AI + DevOps Integration',
    description: 'Combines computer vision intelligence with container management tasks.',
    icon: Bot,
  },
  {
    title: 'Efficient Container Control',
    description: 'Quickly perform practical Docker actions in a more interactive way.',
    icon: Boxes,
  },
  {
    title: 'Innovative Workflow',
    description: 'Introduces a modern interaction model for infrastructure operations.',
    icon: Workflow,
  },
  {
    title: 'Real-Time Response',
    description: 'Gesture detection triggers immediate action through webcam input.',
    icon: Camera,
  },
];

export default function GestureDockerDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="Gesture Controlled Docker Launcher"
          badge="Computer Vision + DevOps"
          title="Gesture Controlled Docker Launcher"
          description="Gesture Controlled Docker Launcher is an innovative DevOps automation project that uses computer vision to control Docker containers through hand gestures. Using webcam input and predefined gestures, users can launch and manage containers without typing commands."
          goalTitle="Goal of the Project"
          goalDescription="To simplify and modernize container management by replacing manual command-line operations with intuitive gesture-based automation using computer vision."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Why and For Whom</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((item) => {
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

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Hand className="h-5 w-5" />
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
          <h3 className="text-2xl font-extrabold text-[#10243f] mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Python',
              'OpenCV',
              'CVZone',
              'Docker',
              'Webcam / Camera Input',
            ].map((tech) => (
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
