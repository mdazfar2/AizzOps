import React from 'react';
import { Lightbulb, ShieldCheck, Zap, PanelTop, Database, Globe, GraduationCap, Building2 } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const audience = [
  {
    title: 'Students and Learners',
    description: 'Helps learners prove certificate authenticity using a unique verification ID.',
    icon: GraduationCap,
  },
  {
    title: 'Recruiters and Organizations',
    description: 'Lets hiring teams verify certificates quickly and reliably before evaluation.',
    icon: Building2,
  },
  {
    title: 'HelpOps-Hub Platform',
    description: 'Maintains trust and credibility of issued certificates through centralized validation.',
    icon: Globe,
  },
];

const benefits = [
  {
    title: 'Authenticity Verification',
    description: 'Instantly check whether a certificate is valid or potentially fake.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast Validation',
    description: 'A simple certificate ID lookup returns results in seconds.',
    icon: Zap,
  },
  {
    title: 'Admin Control Panel',
    description: 'Admins can create, update, and delete certificates from one management layer.',
    icon: PanelTop,
  },
  {
    title: 'Centralized System',
    description: 'All certificate records are managed and verified from a unified platform.',
    icon: Database,
  },
  {
    title: 'Trust and Credibility',
    description: 'Builds confidence among learners, recruiters, and partner organizations.',
    icon: Lightbulb,
  },
];

export default function CertifyDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="Certify Certificate Verification System"
          badge="Secure Certificate Validation"
          title="Certify Certificate Verification System"
          description="Certify is a secure verification system built to validate digital certificates issued by HelpOps-Hub. Users can enter a unique certificate ID and instantly check authenticity, while an admin panel provides full control over certificate lifecycle management."
          goalTitle="Goal of the Project"
          goalDescription="To eliminate fake or unverifiable certificates by providing a trusted platform where anyone can quickly validate authenticity using a unique certificate identifier."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Why and For Whom</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-[#dbe7ff] bg-white p-6 shadow-sm">
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

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <ShieldCheck className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Benefits</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
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
