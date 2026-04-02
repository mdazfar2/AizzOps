import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../../data/projects';

export default function ProjectActionButtons({ projectName, className = '' }) {
  const project = projects.find((item) => item.name === projectName);

  if (!project) {
    return null;
  }

  const visitUrl = project.visit || project.link;
  const codeUrl = project.viewCode || project.github;

  if (!visitUrl && !codeUrl) {
    return null;
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {visitUrl && (
        <a
          href={visitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#19c3ff] to-[#4da2ff] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0f1320] transition-all hover:shadow-md"
        >
          Visit
          <ExternalLink className="h-4 w-4" />
        </a>
      )}

      {codeUrl && (
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-all hover:bg-[#1f2a44]"
        >
          View Code
          <Github className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
