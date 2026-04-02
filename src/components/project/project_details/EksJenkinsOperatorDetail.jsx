import React from 'react';
import { Lightbulb, Workflow, Boxes, Cloud, Monitor, GitBranch, LineChart } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const highlights = [
  {
    title: 'EKS-Based Jenkins Deployment',
    description: 'Jenkins is deployed on Kubernetes using an operator and CRD-driven workflow.',
    icon: Workflow,
  },
  {
    title: 'Pipeline as Code',
    description: 'Application jobs and CI/CD flow are managed declaratively with repeatable configuration.',
    icon: GitBranch,
  },
  {
    title: 'Dynamic Node Provisioning',
    description: 'Jenkins agents are launched dynamically on Kubernetes pods for flexible execution.',
    icon: Boxes,
  },
  {
    title: 'Observability Stack',
    description: 'Grafana, Loki, Promtail, and Prometheus are used to monitor logs and infrastructure metrics.',
    icon: LineChart,
  },
  {
    title: 'Cloud-Native Automation',
    description: 'AWS EKS provides a managed Kubernetes environment for scalable deployment and operations.',
    icon: Cloud,
  },
];

const tools = [
  'Jenkins Operator',
  'Kubernetes CRD',
  'AWS EKS',
  'Prometheus',
  'Grafana',
  'Loki',
  'Promtail',
];

export default function EksJenkinsOperatorDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="EKS Jenkins Operator CI/CD Pipeline"
          badge="Jenkins on EKS"
          title="EKS Jenkins Operator CI/CD Pipeline"
          description="This project demonstrates a cloud-native way to deploy Jenkins on AWS EKS using the Jenkins Operator. It manages Jenkins pipeline as code, dynamically provisions build nodes, and adds monitoring with Grafana, Loki, Promtail, and Prometheus for a complete DevOps setup."
          goalTitle="Project Objective"
          goalDescription="The goal is to automate Jenkins deployment and make CI/CD execution scalable and observable using Kubernetes-native patterns, operator automation, and infrastructure monitoring tools."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Key Capabilities</h3>
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
            <Monitor className="h-5 w-5" />
            <h3 className="text-2xl font-extrabold text-[#10243f]">Tools Used</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[#dce9ff] bg-[#f9fbff] px-4 py-2 text-sm font-semibold text-[#365175]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
