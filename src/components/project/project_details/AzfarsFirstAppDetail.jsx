import React from 'react';
import {
  Lightbulb,
  Target,
  ShieldCheck,
  FileText,
  Heart,
  Users,
  Database,
  Smartphone,
  QrCode,
} from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const keyFeatures = [
  {
    title: 'User Authentication',
    description: 'Secure signup and login flow for personalized access and safe account usage.',
    icon: ShieldCheck,
  },
  {
    title: 'Post Sharing',
    description: 'Users can create and share thoughts, emotions, and daily experiences with others.',
    icon: FileText,
  },
  {
    title: 'Like and Comment System',
    description: 'Community members can react with likes and engage through comments.',
    icon: Heart,
  },
  {
    title: 'Community Interaction',
    description: 'Posts are visible to users across the app, encouraging open social engagement.',
    icon: Users,
  },
  {
    title: 'Realtime Database',
    description: 'Firebase-backed data flow keeps interactions fast, reliable, and synchronized.',
    icon: Database,
  },
  {
    title: 'Mobile-Friendly UI',
    description: 'A smooth and intuitive interface designed specifically for mobile users.',
    icon: Smartphone,
  },
];

const screenshots = [
  {
    src: '/assets/project_images/azfar%20app%20preview-1.webp',
    alt: 'Azfar App preview screen 1',
  },
  {
    src: '/assets/project_images/azfar%20app%20preview-2.webp',
    alt: 'Azfar App preview screen 2',
  },
  {
    src: '/assets/project_images/azfar%20app%20preview-3.webp',
    alt: 'Azfar App preview screen 3',
  },
  {
    src: '/assets/project_images/azfar%20app%20preview-4.webp',
    alt: 'Azfar App preview screen 4',
  },
];

export default function AzfarsFirstAppDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="Azfar's First App"
          badge="Mobile Social App"
          title="Azfar's First App"
          description="Azfar's First App is a simple yet powerful social media mobile application built to help users express their thoughts, emotions, and daily experiences in a safe and interactive environment. Users can create accounts, log in securely, post updates, and engage with the community through likes and comments similar to a modern social platform."
          goalTitle="Goal of the Project"
          goalDescription="The goal is to create a personal social sharing platform where users can freely express feelings, connect with others, and have meaningful interactions through posts, comments, and likes."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Key Features</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {keyFeatures.map((item) => {
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
          <div className="mb-6 flex items-center gap-2 text-[#1f4d9b]">
            <Smartphone className="h-5 w-5" />
            <h3 className="text-2xl font-extrabold text-[#10243f]">Application UI Preview</h3>
          </div>

          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-[#486182] sm:text-base">
            These screenshots help users quickly understand the interface, layout, and interaction flow of the app.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((image, index) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-2xl border border-[#dbe7ff] bg-[#f9fbff] p-2"
              >
                <div className="flex aspect-[9/18] items-center justify-center rounded-xl bg-white p-2">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full rounded-lg object-contain transition-transform duration-300 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="px-1 pt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#5a7193]">
                  Screen {index + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <article className="rounded-3xl border border-[#d7e7ff] bg-white p-8 shadow-[0_24px_70px_-35px_rgba(25,60,130,0.18)] sm:p-10">
            <div className="mb-4 flex items-center gap-2 text-[#1f4d9b]">
              <Target className="h-5 w-5" />
              <h3 className="text-2xl font-extrabold text-[#10243f]">Purpose of the Project</h3>
            </div>
            <p className="text-[#365175] leading-relaxed">
              This project was built to explore mobile app development and realtime database integration while creating
              a platform where people can freely share emotions and connect with others. It reflects a lightweight
              social network idea focused on simplicity, expression, and interaction.
            </p>

            <div className="mt-7 rounded-2xl border border-[#e5eefc] bg-[#f9fbff] p-5">
              <h4 className="mb-3 text-base font-bold text-[#153054]">Technologies Used</h4>
              <ul className="space-y-2 text-sm text-[#486182]">
                <li><strong>Language:</strong> Dart</li>
                <li><strong>Framework:</strong> Flutter</li>
                <li><strong>Backend & Database:</strong> Firebase</li>
                <li><strong>Platform:</strong> Mobile Application</li>
              </ul>
            </div>
          </article>

          <article className="rounded-3xl border border-[#d7e7ff] bg-gradient-to-b from-[#ffffff] to-[#f2f8ff] p-8 shadow-[0_24px_70px_-35px_rgba(25,60,130,0.18)] sm:p-10">
            <div className="mb-4 flex items-center gap-2 text-[#1f4d9b]">
              <QrCode className="h-5 w-5" />
              <h3 className="text-2xl font-extrabold text-[#10243f]">Install the App</h3>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-[#486182]">
              Scan the QR code below to download and install Azfar's First App on your mobile device.
            </p>

            <div className="mx-auto max-w-[240px] rounded-2xl border border-[#cfe0ff] bg-white p-3 shadow-sm">
              <img
                src="/assets/project_images/Azfar%20App%20download%20qrcode.webp"
                alt="Azfar App download QR code"
                className="h-full w-full rounded-xl object-contain"
                loading="lazy"
              />
            </div>

            <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#3d5f90]">
              Scan QR To Download
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
