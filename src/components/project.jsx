import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function Work() {
  // Removed the TypeScript type definition <'fullstack' | 'devops'>
  const [activeCategory, setActiveCategory] = useState('fullstack');

  const filteredProjects = projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of full-stack applications and DevOps solutions built with cutting-edge technologies.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveCategory('fullstack')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === 'fullstack'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            FullStack
          </button>
          <button
            onClick={() => setActiveCategory('devops')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === 'devops'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            DevOps
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold rounded-full">
                    {activeCategory === 'fullstack' ? 'Full Stack' : 'DevOps'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text group-hover:opacity-100">
                    View Details →
                  </span>
                  {project.github && (
                    <Github className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}