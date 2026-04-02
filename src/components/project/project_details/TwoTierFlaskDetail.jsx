import React from 'react';
import { Lightbulb, Users, ShieldCheck, Container, Workflow, TrendingUp, Database, Cloud } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const features = [
  {
    title: 'Scalability',
    description: 'Designed to support up to 10,000 concurrent users with stable performance.',
    icon: Users,
  },
  {
    title: 'Fault Tolerance',
    description: 'Uses Kubernetes on AWS EKS to improve resilience and service availability.',
    icon: ShieldCheck,
  },
  {
    title: 'Containerization',
    description: 'Dockerized Flask and MySQL stack ensures portability and consistency.',
    icon: Container,
  },
  {
    title: 'Automated Deployment',
    description: 'Helm-driven Kubernetes setup simplifies repeatable and efficient deployment.',
    icon: Workflow,
  },
  {
    title: 'CI/CD Workflow',
    description: 'DockerHub-based versioning and delivery streamline continuous deployment.',
    icon: Cloud,
  },
  {
    title: 'Reduced Downtime',
    description: 'AWS managed EKS setup helped reduce service downtime by nearly 60%.',
    icon: TrendingUp,
  },
];

export default function TwoTierFlaskDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="Two Tier Flask App Deployment"
          badge="Flask + MySQL on EKS"
          title="Two Tier Flask App Deployment"
          description="This project deploys a scalable two-tier Flask and MySQL application with modern DevOps practices. By leveraging Docker, Kubernetes, Helm, and AWS services, the deployment achieves reliable scaling, strong fault tolerance, and production-ready release automation."
          goalTitle="Project Objective"
          goalDescription="The goal is to build and deploy a robust two-tier architecture capable of handling 10,000 concurrent users while maintaining consistency, reliability, and operational efficiency through containerization and cloud-native orchestration."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Feature Highlights</h3>
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
          <div className="mb-5 flex items-center gap-2 text-[#1f4d9b]">
            <Database className="h-5 w-5" />
            <h3 className="text-2xl font-extrabold text-[#10243f]">Architecture Summary</h3>
          </div>
          <p className="text-[#365175] leading-relaxed">
            The application is built as a two-tier system with a Flask service layer and a MySQL data layer. Docker images are deployed on Kubernetes, Helm assists with deployment management, and AWS EKS provides managed orchestration for scalability, reliability, and smooth operations.
          </p>
        </div>
      </section>
    </main>
  );
}
