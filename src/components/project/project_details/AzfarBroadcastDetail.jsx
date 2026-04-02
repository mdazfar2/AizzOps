import React from 'react';
import { Lightbulb, Link2, Smartphone, Monitor, Video, Gauge, ScreenShare, Users } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const benefits = [
  {
    title: 'Instant Join',
    description: 'Users can enter live group calls with one link, without signup or installation.',
    icon: Link2,
  },
  {
    title: 'Device Optimization',
    description: 'The interface adapts cleanly across mobile and desktop for better usability.',
    icon: Smartphone,
  },
  {
    title: 'Desktop-Only Screen Sharing',
    description: 'Advanced collaboration features like screen sharing are enabled only on desktop.',
    icon: ScreenShare,
  },
  {
    title: 'Real-Time Communication',
    description: 'Video conversations run with low latency for smooth live interaction.',
    icon: Video,
  },
  {
    title: 'Cross-Platform Access',
    description: 'The platform works reliably in both mobile and desktop browsers.',
    icon: Monitor,
  },
  {
    title: 'User-Friendly Design',
    description: 'A clean and minimal interface keeps the experience distraction-free.',
    icon: Gauge,
  },
];

const workflow = [
  'Open a single invite link to join the live group call instantly.',
  'Detect the user device and adapt the UI for mobile or desktop.',
  'Use real-time communication for seamless video interaction.',
  'Enable screen sharing only on desktop for advanced collaboration.',
];

export default function AzfarBroadcastDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="Azfar Broadcast Video Platform"
          badge="Instant Video Communication"
          title="Azfar Broadcast Video Platform"
          description="Azfar Broadcast is a lightning-fast video communication platform that enables users to join live group calls instantly using a single link, with zero sign-ups or downloads. It delivers real-time video interaction through a clean and responsive interface, while intelligently detecting devices to optimize the experience across mobile and desktop."
          goalTitle="Goal of the Project"
          goalDescription="The goal is to create a frictionless communication platform where users can instantly connect via video calls without setup, while delivering optimized experiences across devices."
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
            <Users className="h-5 w-5" />
            <h3 className="text-2xl font-extrabold text-[#10243f]">How It Works</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {workflow.map((item, index) => (
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
