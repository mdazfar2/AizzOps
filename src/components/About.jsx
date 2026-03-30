import React from 'react';
import { Code2, GitPullRequest, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] mx-auto rounded-full"></div>
        </div>

        {/* Profile and Description Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-[#fff3e0] via-[#ffe8f3] to-[#e6f7ff] rounded-2xl p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-7xl font-bold text-white">MA</span>
                </div>
                <p className="text-gray-700 font-medium">Computer Science Graduate</p>
                <p className="text-gray-600">Rajasthan Technical University</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I completed my B.Tech in Computer Science from Rajasthan Technical University
              in 2025. After that, I focused on building the future with modern technologies,
              working extensively with the MERN Stack, DevOps practices, and AI implementations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I don't just build applications—I build complete solutions. From development
              to deployment, I handle everything using CI/CD pipelines and secure container
              orchestration to solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm very punctual with time—whatever deadline I commit to, I make sure the work
              is delivered exactly on time. I work with full dedication and believe in standing
              by my word. I'm straightforward and believe in building genuine connections with
              people who truly value collaboration.
            </p>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-[#fff5e8] to-[#ffe8f4] p-6 rounded-xl border border-[#ffd18a] hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-lg flex items-center justify-center mb-4 shadow-md">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Full-Stack Developer
            </h3>
            <p className="text-gray-700">
              Building end-to-end applications with MERN stack and modern technologies
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#fff5e8] to-[#e6f7ff] p-6 rounded-xl border border-[#ffb8e2] hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-lg flex items-center justify-center mb-4 shadow-md">
              <GitPullRequest className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              GitHub PR Expert
            </h3>
            <p className="text-gray-700">
              Active open-source contributor with expertise in code reviews and best practices
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#ffe8f4] to-[#e6f7ff] p-6 rounded-xl border border-[#ffb8e2] hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-lg flex items-center justify-center mb-4 shadow-md">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Community Leader
            </h3>
            <p className="text-gray-700">
              Founder of HelpOps-Hub and project admin for open-source initiatives
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#e6f7ff] to-[#fff5e8] p-6 rounded-xl border border-[#9ddfff] hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-lg flex items-center justify-center mb-4 shadow-md">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              DevOps Engineer
            </h3>
            <p className="text-gray-700">
              Expert in CI/CD, Docker, Kubernetes, and cloud infrastructure automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}