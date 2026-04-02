import React from 'react';
import { Lightbulb, Target, Rocket, ShieldCheck, Cloud, ArrowRightLeft } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const benefits = [
  {
    title: 'Automated Deployment',
    description: 'Eliminates manual deployment steps with a reliable CI/CD pipeline.'
  },
  {
    title: 'Containerization',
    description: 'Keeps builds consistent across environments with Docker-based packaging.'
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Runs the application on AWS EKS for high availability and growth.'
  },
  {
    title: 'Continuous Integration',
    description: 'Builds and tests code automatically on every push for faster feedback.'
  },
  {
    title: 'Better Code Quality',
    description: 'Supports quality checks and maintainable delivery with SonarQube-friendly workflows.'
  },
  {
    title: 'Faster Delivery',
    description: 'Speeds up release cycles with repeatable and efficient automation.'
  },
];

export default function MernEksCicdDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="MERN EKS CI/CD Pipeline"
          badge="DevOps Automation Project"
          title="MERN EKS CI/CD Pipeline"
          description="This project aims to streamline the deployment pipeline for a MERN (MongoDB, Express.js, React.js, Node.js) web application using a DevOps approach. By leveraging GitHub Actions, Docker, Terraform, and SonarQube, we've crafted an automated Continuous Integration/Continuous Deployment (CI/CD) pipeline that ensures efficiency, reliability, and quality in deploying your MERN web application to Amazon Elastic Kubernetes Service (EKS)."
          goalTitle="Goal of the Project"
          goalDescription="The goal of this project is to demonstrate how to build a fully automated CI/CD pipeline for a MERN application, reducing manual effort while ensuring faster, consistent, and reliable deployments on a cloud-native Kubernetes environment."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Why This Project Stands Out</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const icons = [Rocket, ArrowRightLeft, Cloud, Target, ShieldCheck, Lightbulb];
            const Icon = icons[benefits.indexOf(item)];
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
