import React from 'react';
import {
  Lightbulb,
  Workflow,
  Container,
  Boxes,
  LineChart,
  ShieldCheck,
  Bell,
  Server,
} from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const overview = [
  {
    title: 'CI/CD with Jenkins',
    description:
      'Jenkins automates build, test, image creation, and Kubernetes deployment for continuous delivery.',
    icon: Workflow,
  },
  {
    title: 'Docker Containerization',
    description:
      'The Netflix clone is packaged as containers for consistent behavior and dependency management across environments.',
    icon: Container,
  },
  {
    title: 'Kubernetes Orchestration',
    description:
      'Kubernetes manages scaling, high availability, and runtime reliability of deployed services.',
    icon: Boxes,
  },
  {
    title: 'Observability Stack',
    description:
      'Prometheus, Grafana, and Node Exporter provide real-time visibility into cluster and pipeline performance.',
    icon: LineChart,
  },
];

const tools = [
  {
    title: 'Jenkins',
    description: 'Automates CI/CD stages and orchestrates deployment flow.',
    icon: Workflow,
  },
  {
    title: 'Docker',
    description: 'Builds container images for portable and repeatable releases.',
    icon: Container,
  },
  {
    title: 'SonarQube + Trivy',
    description: 'Adds code quality checks and container vulnerability scanning.',
    icon: ShieldCheck,
  },
  {
    title: 'Kubernetes',
    description: 'Runs and manages container workloads in a scalable setup.',
    icon: Boxes,
  },
  {
    title: 'Grafana + Prometheus',
    description: 'Collects metrics and creates dashboards for operational monitoring.',
    icon: LineChart,
  },
  {
    title: 'Node Exporter + Email Alerts',
    description: 'Exports host metrics and sends CI/CD notifications from Jenkins Email Extension.',
    icon: Bell,
  },
];

export default function NetflixDevSecOpsDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="Netflix DevSecOps CI/CD Pipeline"
          badge="Secure CI/CD + Monitoring"
          title="Netflix DevSecOps CI/CD Pipeline"
          description="This DevSecOps project deploys a Netflix clone application using modern DevOps practices. It combines Jenkins for CI/CD, Docker for containerization, Kubernetes for orchestration, and observability with Grafana, Prometheus, and Node Exporter to deliver a secure and reliable release workflow."
          goalTitle="Project Overview"
          goalDescription="The objective is to demonstrate an end-to-end DevSecOps workflow where code is built, tested, scanned, containerized, deployed, and monitored continuously. The pipeline integrates quality and security checks while keeping deployments scalable and production oriented."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Workflow Highlights</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {overview.map((item) => {
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
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Server className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Tools Used</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-[#dbe7ff] bg-white p-6 shadow-sm"
              >
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
    </main>
  );
}
