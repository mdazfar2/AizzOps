import React from 'react';
import { Lightbulb, Camera, MousePointer2, Sun, Volume2, Zap, Target, Workflow } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const howItWorks = [
  'The webcam captures hand gestures in real-time.',
  'Computer vision and hand-tracking logic detect finger positions accurately.',
  'Detected gestures are mapped to system actions like cursor movement, brightness control, and volume control.',
  'The interaction loop runs continuously to keep response smooth and natural.',
];

const features = [
  {
    title: 'Gesture-Controlled Cursor',
    description: 'Move the mouse pointer by moving your finger in front of the camera.',
    icon: MousePointer2,
  },
  {
    title: 'Brightness Control',
    description: 'Adjust screen brightness using vertical finger movements.',
    icon: Sun,
  },
  {
    title: 'Volume Control',
    description: 'Control system volume with horizontal gestures.',
    icon: Volume2,
  },
  {
    title: 'Real-Time Tracking',
    description: 'Accurate and responsive hand detection powered by computer vision.',
    icon: Camera,
  },
  {
    title: 'Touchless Interaction',
    description: 'Eliminates dependency on physical mouse and keyboard for core controls.',
    icon: Zap,
  },
];

export default function VirtualAiMouseDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="Virtual AI Mouse"
          badge="AI and Computer Vision Project"
          title="Virtual AI Mouse"
          description="Virtual AI Mouse is an innovative computer vision based system that lets users control a computer using simple hand gestures captured through a webcam. It removes the need for traditional input devices and creates a futuristic touchless interaction experience. With real-time gesture tracking, users can move the cursor, adjust system brightness, and control volume through intuitive finger movements."
          goalTitle="Purpose of the Project"
          goalDescription="This project was built to explore the future of human computer interaction by combining AI and computer vision in daily computing tasks. The goal is to make systems more accessible, intuitive, and interactive while demonstrating the real power of gesture-based automation."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Workflow className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">How It Works</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {howItWorks.map((step, index) => (
            <article
              key={step}
              className="rounded-2xl border border-[#dbe7ff] bg-white p-5 shadow-sm"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] text-sm font-black text-[#0f1020]">
                {index + 1}
              </div>
              <p className="text-sm leading-relaxed text-[#486182]">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Key Features</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
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
          <div className="mb-4 flex items-center gap-2 text-[#1f4d9b]">
            <Target className="h-5 w-5" />
            <h3 className="text-2xl font-extrabold text-[#10243f]">Why This Project Matters</h3>
          </div>
          <p className="leading-relaxed text-[#365175]">
            Virtual AI Mouse demonstrates how natural human gestures can replace conventional input patterns.
            It can improve accessibility, reduce dependency on hardware, and open new possibilities for
            touchless interfaces in education, productivity, and smart environments.
          </p>
        </div>
      </section>
    </main>
  );
}
