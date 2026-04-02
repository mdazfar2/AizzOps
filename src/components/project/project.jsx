import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowUpRight, Code2, Layers, Cpu, Globe, Rocket, GitBranch, ShieldCheck, Cloud } from 'lucide-react';
import { projects } from '../../data/projects';

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubCategory, setActiveSubCategory] = useState('all');

  // Filtering Logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = activeCategory === 'all' || project.category === activeCategory;
      const subCategoryMatch = activeSubCategory === 'all' || 
                               (project.subCategory && project.subCategory === activeSubCategory);
      
      if (activeCategory === 'devops' && activeSubCategory !== 'all') {
        return project.category === 'devops' && subCategoryMatch;
      }
      return categoryMatch;
    });
  }, [activeCategory, activeSubCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Passionate Header Section --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            I’m constantly building new projects that people can actually use. I brainstorm a random idea and start implementing it right away. 
            
          </p>
          
          <a 
            href="https://github.com/mdazfar2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200"
          >
            <Github size={18} />
            My GitHub Profile
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* --- Navigation & Filtering --- */}
        <div className="space-y-6 mb-12">
          {/* Main Categories */}
          <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-6">
            <button
              onClick={() => { setActiveCategory('all'); setActiveSubCategory('all'); }}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all ${activeCategory === 'all' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              All Projects
            </button>
            <button
              onClick={() => { setActiveCategory('devops'); setActiveSubCategory('all'); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all ${activeCategory === 'devops' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              <Cpu size={18} /> DevOps
            </button>
            <button
              onClick={() => { setActiveCategory('fullstack'); setActiveSubCategory('all'); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all ${activeCategory === 'fullstack' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              <Layers size={18} /> Full Stack
            </button>
          </div>

          {/* DevOps Sub-Filtering (Only shows when DevOps is active) */}
          {activeCategory === 'devops' && (
            <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
              {/* Yahan 'Automation' add kar diya hai */}
              {['all', , 'Automation', 'CI/CD Pipeline', 'Monitoring & Logging', 'Cloud Services'].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubCategory(sub)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-semibold border transition-all ${
                    activeSubCategory === sub 
                    ? 'bg-slate-800 text-white border-slate-800' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {sub.charAt(0).toUpperCase() + sub.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* --- Projects Grid (Modern Image-less Cards) --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={project.detailPath || (project.name === 'HelpOps-Hub' ? '/project/helpops-hub' : `/work/${project.slug}`)}
              className="group flex flex-col bg-white border border-slate-200 rounded-[2rem] p-8 transition-all duration-500 hover:border-blue-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${project.category === 'devops' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                   {project.category === 'devops' ? <Rocket size={24} /> : <Code2 size={24} />}
                </div>
                <div className="flex gap-2 text-slate-400">
                   <span className="text-xs font-mono font-medium uppercase tracking-widest">{project.category}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                {project.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md border border-slate-100">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <span className="text-xs font-bold text-slate-900 inline-flex items-center gap-1">
                  VIEW CASE STUDY <ArrowUpRight size={14} />
                </span>
                {project.github && (
                  <Github size={18} className="text-slate-300 group-hover:text-slate-900 transition-colors" />
                )}
              </div>
              
              {/* Subtle Background Decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}