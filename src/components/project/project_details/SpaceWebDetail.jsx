import React from 'react';
import { Lightbulb, Settings2, Github, Webhook, Rocket, CheckCircle2 } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const features = [
  {
    title: 'Effortless Deployment',
    description: 'Deploy a static website with Docker Compose in a predictable and repeatable flow.',
    icon: Rocket,
  },
  {
    title: 'Continuous Integration',
    description: 'Use Jenkins to connect development changes with an automated delivery pipeline.',
    icon: Settings2,
  },
  {
    title: 'Automated Updates',
    description: 'Push changes to GitHub and let the pipeline update the container automatically.',
    icon: CheckCircle2,
  },
  {
    title: 'Webhook Driven Workflow',
    description: 'GitHub Webhooks trigger the deployment process without manual intervention.',
    icon: Webhook,
  },
];

export default function SpaceWebDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="SpaceWeb CI/CD Automation"
          badge="Automated Static Deployment"
          title="SpaceWeb CI/CD Automation"
          description="SpaceWeb is a demonstration project that showcases the simplicity and efficiency of automating the deployment process for a static website using Docker Compose and Jenkins CI/CD pipeline. When a developer pushes changes to GitHub, the updated code is deployed automatically to the container through a webhook-driven workflow."
          goalTitle="Goal of the Project"
          goalDescription="The goal of SpaceWeb is to make static website deployment easier, faster, and fully automatic using Docker Compose, Jenkins, and GitHub Webhooks. It removes repetitive manual steps and turns every code push into a reliable deployment event."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Why SpaceWeb Stands Out</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="mb-5 flex items-center gap-2 text-[#1f4d9b]">
            <Github className="h-5 w-5" />
            <h3 className="text-2xl font-extrabold text-[#10243f]">How It Works</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              'Configure Docker Compose to define the static website service.',
              'Connect the GitHub repository to Jenkins CI/CD pipeline.',
              'Push code changes and let Jenkins build and deploy automatically.',
              'Use GitHub Webhook integration for seamless, hands-free updates.',
            ].map((step, index) => (
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
