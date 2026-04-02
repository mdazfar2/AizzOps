import React from 'react';
import { Lightbulb, Smartphone, MonitorSmartphone, Cloud, Cpu, Workflow, Camera } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const highlights = [
  {
    title: 'Android to PC Bridge',
    description: 'FingerConnect creates a seamless connection between a smartphone and a computer for remote interaction.',
    icon: Smartphone,
  },
  {
    title: 'Gesture-Based Control',
    description: 'Finger tracking enables launching applications and instances on the PC through simple hand gestures.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Computer Vision Pipeline',
    description: 'OpenCV and CVZone HandDetector are used to detect and interpret finger movements from the camera feed.',
    icon: Camera,
  },
  {
    title: 'Cloud-Ready Automation',
    description: 'AWS and EC2 are part of the deployment flow to support practical, scalable execution.',
    icon: Cloud,
  },
  {
    title: 'Python Backend Logic',
    description: 'Python coordinates detection, orchestration, and control logic for the end-to-end workflow.',
    icon: Cpu,
  },
];

const workflow = [
  'Capture the gesture input from the Android-connected camera stream.',
  'Detect the finger using OpenCV and HandDetector.',
  'Trigger the matching action on the PC or cloud workflow.',
  'Use boto3 and EC2 orchestration to extend the automation layer.',
];

export default function FingerConnectAiDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="FingerConnect AI Web App"
          badge="AI + Device Integration"
          title="FingerConnect AI Web App"
          description="Introducing FingerConnect: a creative device-integration project that bridges Android mobile and PC through gesture-driven automation. The app uses computer vision and Python-based orchestration to turn finger gestures into real actions, showing how human interaction can control digital workflows naturally."
          goalTitle="Project Vision"
          goalDescription="The goal is to demonstrate a seamless and innovative bridge between mobile input and desktop automation, combining AI-assisted gesture recognition, cloud-ready deployment, and practical open-source collaboration."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">What Makes It Interesting</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => {
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
            <Workflow className="h-5 w-5" />
            <h3 className="text-2xl font-extrabold text-[#10243f]">Workflow</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {workflow.map((step, index) => (
              <div key={step} className="rounded-2xl border border-[#e5eefc] bg-[#f9fbff] p-5">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] text-sm font-black text-[#0f1020]">
                  {index + 1}
                </div>
                <p className="text-[#365175] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
