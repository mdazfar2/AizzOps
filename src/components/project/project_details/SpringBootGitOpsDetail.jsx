import React from 'react';
import { Lightbulb, Workflow, ShieldCheck, Cloud, GitBranch, Container } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const overviewItems = [
  {
    title: 'Spring Boot + Maven',
    description: 'Build and package a production-ready Java application with a reliable build lifecycle.',
    icon: Container,
  },
  {
    title: 'Jenkins CI Automation',
    description: 'Automate build, test, and deployment stages through a fully structured CI/CD pipeline.',
    icon: Workflow,
  },
  {
    title: 'SonarQube Quality Gates',
    description: 'Continuously inspect code quality and enforce maintainable standards before deployment.',
    icon: ShieldCheck,
  },
  {
    title: 'Kubernetes + ArgoCD',
    description: 'Use GitOps delivery for declarative, traceable, and consistent cluster deployments.',
    icon: GitBranch,
  },
  {
    title: 'Microsoft Azure Hosting',
    description: 'Run and manage cloud-native workloads with scalable and stable infrastructure support.',
    icon: Cloud,
  },
];

export default function SpringBootGitOpsDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="Spring Boot GitOps CI/CD Pipeline"
          badge="GitOps CI/CD on Kubernetes"
          title="Spring Boot GitOps CI/CD Pipeline"
          description="Deploying Spring Boot App using Kubernetes, ArgoCD, Jenkins and more. This project demonstrates a robust DevOps workflow to deploy a Spring Boot application using Jenkins, SonarQube, Kubernetes, ArgoCD, and Microsoft Azure for scalable and reliable delivery."
          goalTitle="Goal of the Project"
          goalDescription="The goal is to implement a fully automated and dependable CI/CD pipeline for a Spring Boot application, minimizing manual steps while improving deployment consistency, code quality, and release speed in a cloud-native environment."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Project Overview</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {overviewItems.map((item) => {
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
