import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'GitHub PR Expert',
      company: 'Magic.dev',
      type: 'Part-time',
      duration: 'Aug 2025 - Jan 2026',
      location: 'Remote',
      color: 'blue',
      responsibilities: [
        'Reviewed and improved GitHub PRs for code quality and best practices',
        'Contributed to AI model training for automated software engineering',
        'Identified bugs and optimized real-world codebases'
      ]
    },
    {
      title: 'Founder',
      company: 'HelpOps-Hub',
      type: 'Full-time',
      duration: 'May 2024 - Apr 2025',
      location: 'Remote',
      color: 'purple',
      responsibilities: [
        'Built a DevOps platform to solve real-world errors and workflows',
        'Created a collaborative community for knowledge sharing',
        'Led platform growth and user engagement'
      ]
    },
    {
      title: 'Technical Volunteer',
      company: 'LinuxWorld Informatics Pvt Ltd',
      type: 'Part-time',
      duration: 'Sep 2023 - Dec 2024',
      location: 'Remote',
      color: 'green',
      responsibilities: [
        'Led and mentored 20+ learners in DevOps, CI/CD, and cloud',
        'Provided technical support and solved real-world issues',
        'Promoted a culture of continuous learning'
      ]
    },
    {
      title: 'Cloud + AI Intern',
      company: 'LinuxWorld Informatics Pvt Ltd',
      type: 'Full-time',
      duration: 'Jul 2023 - Sep 2023',
      location: 'Hybrid',
      color: 'pink',
      responsibilities: [
        'Built AI-powered cloud solutions using Python & ML',
        'Worked on DevOps pipelines and full-stack development',
        'Developed apps and explored the Flutter ecosystem'
      ]
    },
    {
      title: 'DevOps Trainee',
      company: 'ARTH – The School of Technologies',
      type: 'Full-time',
      duration: 'Sep 2022 - Sep 2023',
      location: 'Hybrid',
      color: 'orange',
      responsibilities: [
        'Worked on 10+ real-world DevOps tools and projects',
        'Gained hands-on experience in Docker, Kubernetes, AWS, etc.',
        'Solved complex technical problems and use cases'
      ]
    },
    {
      title: 'Project Admin',
      company: 'GirlScript Summer of Code',
      type: 'Full-time',
      duration: 'May 2024 - Oct 2024',
      location: 'Remote',
      color: 'cyan',
      responsibilities: [
        'Managed 40+ contributors for the HelpOps-Hub project',
        'Streamlined workflow and ensured project success',
        'Coordinated with developers across India'
      ]
    }
  ];

  const colorMap = {
    blue: { bg: 'from-[#fff5e8] to-[#ffe8f4]', border: 'border-[#ffd18a]', dot: 'bg-[#ff7b00]', badge: 'bg-[#fff0e3] text-[#c75b00]' },
    purple: { bg: 'from-[#ffe8f4] to-[#e6f7ff]', border: 'border-[#ffb8e2]', dot: 'bg-[#ff3b8f]', badge: 'bg-[#ffe3f3] text-[#c21873]' },
    green: { bg: 'from-[#e6f7ff] to-[#f0fbff]', border: 'border-[#9ddfff]', dot: 'bg-[#19c3ff]', badge: 'bg-[#e0f7ff] text-[#0b88b5]' },
    pink: { bg: 'from-[#ffe8f4] to-[#fff5e8]', border: 'border-[#ffb8e2]', dot: 'bg-[#ff3b8f]', badge: 'bg-[#ffe3f3] text-[#c21873]' },
    orange: { bg: 'from-[#fff5e8] to-[#ffe8d6]', border: 'border-[#ffd18a]', dot: 'bg-[#ff7b00]', badge: 'bg-[#fff0e3] text-[#c75b00]' },
    cyan: { bg: 'from-[#e6f7ff] to-[#f0fbff]', border: 'border-[#9ddfff]', dot: 'bg-[#19c3ff]', badge: 'bg-[#e0f7ff] text-[#0b88b5]' }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey of continuous learning, building, and contributing to meaningful projects
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff]"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = colorMap[exp.color];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} w-full`}>
                    <div
                      className={`bg-gradient-to-br ${colors.bg} p-6 rounded-2xl border ${colors.border} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                    >
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                        <div className={isEven ? 'md:order-2' : ''}>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-gray-700 mb-2">
                            {exp.company}
                          </p>
                        </div>
                        <span className={`px-3 py-1 ${colors.badge} rounded-full text-sm font-medium ${isEven ? 'md:order-1' : ''}`}>
                          {exp.type}
                        </span>
                      </div>

                      <div className={`flex items-center gap-4 mb-4 flex-wrap text-gray-600 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      <ul className={`space-y-2 ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className={`flex items-start gap-2 text-gray-700 ${isEven ? 'md:flex-row-reverse md:text-right' : ''}`}>
                            <span className={`w-1.5 h-1.5 ${colors.dot} rounded-full mt-2 flex-shrink-0`}></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-gray-200 rounded-full items-center justify-center z-10">
                    <Briefcase className="w-6 h-6 text-gray-600" />
                  </div>

                  <div className="md:w-1/2 w-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}