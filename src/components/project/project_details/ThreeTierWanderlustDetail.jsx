import React from 'react';
import { Lightbulb, Layers, Plane, Cloud, Container, ShieldCheck } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const highlights = [
  {
    title: 'Three-Tier Architecture',
    description: 'Frontend, backend, and database layers are cleanly separated for better scalability and maintainability.',
    icon: Layers,
  },
  {
    title: 'Modern MERN Stack',
    description: 'Built with React.js, Node.js, and MongoDB to deliver a fast and flexible travel platform experience.',
    icon: Plane,
  },
  {
    title: 'Cloud-Ready Deployment',
    description: 'Deployed on AWS with infrastructure designed for reliability, accessibility, and growth.',
    icon: Cloud,
  },
  {
    title: 'Containerized Delivery',
    description: 'Docker-based deployment improves portability, consistency, and release confidence.',
    icon: Container,
  },
  {
    title: 'Production-Focused Setup',
    description: 'The architecture emphasizes smoother operations, predictable deployments, and resilient services.',
    icon: ShieldCheck,
  },
];

export default function ThreeTierWanderlustDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="Three Tier Wanderlust App Deployment"
          badge="MERN on AWS + Docker"
          title="Three Tier Wanderlust App Deployment"
          description="This three-tier travel app, powered by React.js, Node.js, and MongoDB, is your gateway to discovering exciting destinations. Wanderlust is deployed on AWS and Docker to provide a modern, scalable, and reliable application experience."
          goalTitle="Project Overview"
          goalDescription="The project demonstrates how a three-tier MERN application can be structured and deployed with cloud and container best practices, creating a robust foundation for scalable travel-focused platforms."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Why Wanderlust Stands Out</h3>
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
    </main>
  );
}
