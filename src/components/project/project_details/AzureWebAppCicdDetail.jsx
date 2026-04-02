import React from 'react';
import { Lightbulb, Workflow, PackageCheck, Cloud, UploadCloud, Download, Boxes } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const workflowSteps = [
  {
    title: 'Build Job',
    description: 'Checks out code, sets up Node.js, installs dependencies, builds and tests with npm.',
    icon: Workflow,
  },
  {
    title: 'Artifact Packaging',
    description: 'Application is zipped and uploaded as build artifact using actions/upload-artifact.',
    icon: PackageCheck,
  },
  {
    title: 'Deploy Job',
    description: 'Pipeline downloads artifact, extracts it, authenticates to Azure, and deploys.',
    icon: UploadCloud,
  },
];

const tools = [
  {
    title: 'actions/checkout + setup-node',
    description: 'Prepares source code and runtime environment for consistent builds.',
    icon: Download,
  },
  {
    title: 'actions/upload-artifact',
    description: 'Stores build outputs to pass safely between workflow jobs.',
    icon: Boxes,
  },
  {
    title: 'azure/login + webapps-deploy',
    description: 'Authenticates with Azure and deploys the Node.js app to Azure Web App.',
    icon: Cloud,
  },
];

export default function AzureWebAppCicdDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="Azure Web App CI/CD Pipeline"
          badge="GitHub Actions + Azure Web App"
          title="Azure Web App CI/CD Pipeline"
          description="This project demonstrates automated deployment of a Node.js application to Azure Web App using GitHub Actions. The workflow ensures repeatable, reliable, and production-friendly deployments with clear separation of build and deploy stages."
          goalTitle="Workflow Overview"
          goalDescription="The pipeline has two major jobs: a Build job that prepares and packages the app artifact, and a Deploy job that retrieves the artifact, logs into Azure, and publishes the app using azure/webapps-deploy."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Pipeline Flow</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((item) => {
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
            <Cloud className="h-5 w-5" />
            <h3 className="text-2xl font-extrabold text-[#10243f]">Key Actions and Tools</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {tools.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-[#e5eefc] bg-[#f9fbff] p-5">
                  <div className="mb-3 inline-flex rounded-lg bg-[#e9f1ff] p-2 text-[#1f4d9b]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="font-bold text-[#142a4b]">{item.title}</h4>
                  <p className="mt-2 text-sm text-[#486182]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
