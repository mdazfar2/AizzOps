import React from 'react';
import { Code, Server, Cloud, Brain, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'blue',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Vite']
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'purple',
      skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Authentication']
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'green',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins', 'GitHub Actions']
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'pink',
      skills: ['Python', 'ML Models', 'AI Integration', 'Data Analysis', 'Automation', 'NLP']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'orange',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Supabase', 'Database Design']
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'indigo',
      skills: ['Git/GitHub', 'Linux', 'VS Code', 'Postman', 'Nginx', 'Flutter']
    }
  ];

  const colorMap = {
    blue: { bg: 'from-blue-50 to-blue-100', border: 'border-blue-200', icon: 'bg-blue-600', badge: 'bg-blue-100 text-blue-700' },
    purple: { bg: 'from-purple-50 to-purple-100', border: 'border-purple-200', icon: 'bg-purple-600', badge: 'bg-purple-100 text-purple-700' },
    green: { bg: 'from-green-50 to-green-100', border: 'border-green-200', icon: 'bg-green-600', badge: 'bg-green-100 text-green-700' },
    pink: { bg: 'from-pink-50 to-pink-100', border: 'border-pink-200', icon: 'bg-pink-600', badge: 'bg-pink-100 text-pink-700' },
    orange: { bg: 'from-orange-50 to-orange-100', border: 'border-orange-200', icon: 'bg-orange-600', badge: 'bg-orange-100 text-orange-700' },
    indigo: { bg: 'from-cyan-50 to-cyan-100', border: 'border-cyan-200', icon: 'bg-cyan-600', badge: 'bg-cyan-100 text-cyan-700' }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and scaling modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const colors = colorMap[category.color];

            return (
              <div
                key={category.title}
                className={`bg-gradient-to-br ${colors.bg} p-6 rounded-2xl border ${colors.border} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 ${colors.badge} rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-700 font-medium">Full-Stack Development</p>
                <p className="text-gray-600 text-sm">Building complete applications from frontend to backend with modern frameworks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-700 font-medium">DevOps & Automation</p>
                <p className="text-gray-600 text-sm">Implementing CI/CD pipelines and container orchestration for seamless deployment</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-700 font-medium">AI Integration</p>
                <p className="text-gray-600 text-sm">Using AI not just as a tool, but as a teammate in building intelligent solutions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-700 font-medium">Open Source Contribution</p>
                <p className="text-gray-600 text-sm">Active contributor, collaborator, and project manager in the open-source community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}