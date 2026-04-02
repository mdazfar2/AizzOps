import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';

export default function ProjectDetail() {
  const { projectSlug } = useParams();
  const project = projects.find(p => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] text-[#0c0a12] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter(
    p => p.category === project.category && p.id !== project.id
  ).slice(0, 2);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-[#ff3b8f] hover:text-[#ff7b00] font-semibold mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Projects
        </Link>

        <div className="mb-12">
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-5xl font-bold text-gray-900">{project.name}</h1>
            <span className="px-4 py-2 bg-gradient-to-r from-[#fff5e8] to-[#e6f7ff] text-[#c75b00] font-semibold rounded-full">
              {project.category === 'fullstack' ? 'Full Stack' : 'DevOps'}
            </span>
          </div>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {project.fullDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] text-[#0c0a12] rounded-full font-semibold text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.metrics && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Metrics</h2>
                <div className="space-y-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-full"></div>
                        <span className="text-gray-700 font-semibold">{metric}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 pb-12 border-b border-gray-200">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] text-[#0c0a12] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                View Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0c0a12] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1a1224] transition-all transform hover:scale-105"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            )}
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/work/${relatedProject.slug}`}
                  className="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#ff3b8f] transition-colors">
                      {relatedProject.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {relatedProject.description}
                    </p>
                    <div className="mt-4 flex items-center text-[#ff3b8f] font-semibold group-hover:gap-2 transition-all">
                      View Project
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}