import React from 'react';
import { Lightbulb, Trophy, Users, Smartphone, CalendarDays, ClipboardList, CreditCard, ShieldCheck, AlertCircle } from 'lucide-react';
import ProjectDetailHeroCard from './ProjectDetailHeroCard';

const benefits = [
  {
    title: 'Boosts Local eSports',
    description: 'Promotes competitive BGMI tournaments in Daudnagar and nearby regions.',
    icon: Trophy,
  },
  {
    title: 'Online Accessibility',
    description: 'Players can register, view schedules, and stay updated from anywhere.',
    icon: Smartphone,
  },
  {
    title: 'Rewards and Recognition',
    description: 'Winners get prize visibility and leaderboard-based motivation.',
    icon: ShieldCheck,
  },
  {
    title: 'Community Engagement',
    description: 'Builds teamwork, fair play, and long-term gaming community participation.',
    icon: Users,
  },
  {
    title: 'Mobile-First Experience',
    description: 'Interface is optimized for fast, smooth usage on mobile devices.',
    icon: Smartphone,
  },
];

const features = [
  {
    title: 'Tournament Listings',
    description: 'Upcoming matches with map, mode (solo/duo/squad), date, and timing.',
    icon: CalendarDays,
  },
  {
    title: 'Easy Registration',
    description: 'Players can register quickly using in-game name and contact details.',
    icon: ClipboardList,
  },
  {
    title: 'Prize Pool Details',
    description: 'Clear prize distribution details for each announced tournament.',
    icon: Trophy,
  },
  {
    title: 'Admin Panel Flow',
    description: 'Admins can manage tournaments, publish room credentials, and track registrations.',
    icon: ShieldCheck,
  },
  {
    title: 'Payment Gateway (Planned)',
    description: 'Seamless Pay Now flow is planned for future implementation.',
    icon: CreditCard,
  },
];

export default function DbgmiTournamentDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#ffffff] to-[#f1f7ff] pt-28 pb-20">
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-16 left-0 h-52 w-52 rounded-full bg-[#19c3ff1f] blur-3xl" />
        <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-[#ff7b001a] blur-3xl" />

        <ProjectDetailHeroCard
          projectName="DBGMI Tournament Platform"
          badge="Competitive BGMI Platform"
          title="DBGMI Tournament Platform"
          description="DBGMI is a competitive gaming platform designed to streamline tournament organization and participation for gamers across India. It supports solo, duo, and squad tournament experiences while giving admins better control over player and match management."
          goalTitle="Goal of the Project"
          goalDescription="The goal is to organize and promote competitive BGMI matches for players in and around Daudnagar by offering tournament schedules, registrations, and prize details in one focused platform."
        />
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <Lightbulb className="h-5 w-5" />
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

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-[#1f4d9b]">
          <ClipboardList className="h-5 w-5" />
          <h3 className="text-2xl font-extrabold text-[#10243f]">Key Features</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
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

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#ffd8a8] bg-[#fff8ef] p-6 text-[#6b4b1f]">
          <div className="mb-3 flex items-center gap-2 font-bold">
            <AlertCircle className="h-5 w-5" />
            Current Implementation Status
          </div>
          <p className="leading-relaxed">
            This project currently showcases the frontend experience only. Backend modules such as full admin automation, secure payment processing, and production APIs are planned for future integration.
          </p>
        </div>
      </section>
    </main>
  );
}
