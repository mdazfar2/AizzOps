import React from 'react';

const experiences = [
  {
    company: 'Copilotkit',
    role: 'Freelance Technical Writer',
    period: 'Feb 2024 – Present',
    summary:
      'As a technical writer, I have been working closely with the team to create content around Copilotkit and React open source projects. Some of the blogs I have written for CopilotKit have reached over 40k views.',
    links: [
      { label: 'Agents 101: How to build your first AI Agent in 30 minutes!', href: 'https://blog.example.com/agents-101' },
      { label: 'Turn Any React App into an MCP Client in Under 10 Minutes', href: 'https://blog.example.com/react-mcp-client' },
      { label: '30+ MCP Ideas with Complete Source Code', href: 'https://blog.example.com/mcp-ideas' },
      { label: 'Automate 90% of Your Work with AI Agents (Real Examples & Code Inside)', href: 'https://blog.example.com/ai-agents-automation' }
    ],
  },
  {
    company: 'Encore',
    role: 'Contract Technical Writer',
    period: 'Nov 20, 2024 – Present',
    summary:
      'I create content around Encore as an open source backend framework, helping developers understand how to build backends faster while eliminating DevOps complexities.',
    links: [
      { label: '10 common backend tasks and how to automate them', href: 'https://blog.example.com/backend-tasks-automation' },
      { label: 'The perfect Stack for building type-safe applications in 2025', href: 'https://blog.example.com/type-safe-stack' },
      { label: '7 Practical Ways to Build Backends much faster as a Developer', href: 'https://blog.example.com/build-backends-fast' },
      { label: '7 steps to building scalable Backend from scratch', href: 'https://blog.example.com/scalable-backend-steps' }
    ],
  },
  {
    company: 'Composio',
    role: 'Freelance Technical Writer',
    period: 'March 2025 – Present',
    summary:
      'Content and enablement focused on agentic workflows, integrations, and developer productivity.',
    links: [],
  },
  {
    company: 'Requestly (YC 22)',
    role: 'Freelance Technical Writer',
    period: 'Sep 2024 – Feb 2025',
    summary:
      'Created resources to help developers debug, mock, and test APIs faster with Requestly.',
    links: [],
  },
];

export default function Works() {
  return (
    <section className="min-h-screen bg-white pt-28 pb-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Work experience</h1>
          <p className="text-gray-600">A snapshot of my remote-first technical writing journey.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{item.company}</h2>
                  <p className="text-gray-700">{item.role}</p>
                </div>
                <span className="text-sm font-semibold text-indigo-600">{item.period}</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">{item.summary}</p>

              {item.links.length > 0 && (
                <ul className="space-y-2">
                  {item.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" aria-hidden />
                      <a
                        href={link.href}
                        className="text-purple-700 hover:text-purple-900 font-medium underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
