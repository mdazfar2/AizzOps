import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Target } from 'lucide-react';
import { projects } from '../../../data/projects';
import ProjectActionButtons from './ProjectActionButtons';

export default function ProjectDetailHeroCard({
  projectName,
  badge,
  title,
  description,
  goalTitle,
  goalDescription,
}) {
  const location = useLocation();
  const project = projects.find((item) => item.name === projectName);
  const navigationState = location.state || {};

  const backState = project
    ? {
        ...navigationState,
        focusProjectPath: project.detailPath || navigationState.focusProjectPath || '',
      }
    : navigationState;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#d7e7ff] bg-white/90 p-8 shadow-[0_24px_70px_-35px_rgba(25,60,130,0.35)] sm:p-12">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col items-start gap-4">
          <Link
            to="/project"
            state={backState}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff3b8f] hover:text-[#ff7b00] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#bcd4ff] bg-[#eef5ff] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2d4ea8]">
            {badge}
          </div>
        </div>

        <ProjectActionButtons
          projectName={projectName}
          className="justify-end"
        />
      </div>

      <h1 className="text-4xl font-black leading-tight text-[#10243f] sm:text-5xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#3a4f6f] sm:text-lg">
        {description}
      </p>

      <div className="mt-8 rounded-2xl border border-[#dce9ff] bg-gradient-to-r from-[#f9fbff] to-[#eef5ff] p-6">
        <div className="mb-3 inline-flex items-center gap-2 text-[#1f4d9b]">
          <Target className="h-5 w-5" />
          <h2 className="text-xl font-extrabold">{goalTitle}</h2>
        </div>
        <p className="text-[#34507a] leading-relaxed">{goalDescription}</p>
      </div>
    </div>
  );
}
