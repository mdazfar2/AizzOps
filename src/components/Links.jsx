import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  PenSquare,
  Code,
  Briefcase,
  Heart,
  Trophy,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

const links = [
  { label: 'GitHub', href: 'https://github.com/mdazfar2', icon: Github },
  { label: 'X', href: 'https://x.com', icon: Globe },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-azfar-alam-231a4a22a/', icon: Linkedin },
  { label: 'DEV', href: 'https://dev.to', icon: Code },
  { label: 'Medium', href: 'https://medium.com', icon: PenSquare },
  { label: 'Discord', href: 'https://discord.com', icon: Globe },
  { label: 'Daily', href: 'https://daily.dev', icon: Sparkles },
  { label: 'Contra', href: 'https://contra.com', icon: Briefcase },
  { label: 'HackerNoon', href: 'https://hackernoon.com', icon: Globe },
  { label: 'Hashnode', href: 'https://hashnode.com', icon: Globe },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: Globe },
  { label: 'GitHub Sponsors', href: 'https://github.com/sponsors', icon: Heart },
  { label: 'Leetcode', href: 'https://leetcode.com', icon: Trophy },
  { label: 'Devfolio', href: 'https://devfolio.co', icon: Briefcase },
  { label: 'Coursera', href: 'https://www.coursera.org', icon: Globe },
  { label: 'Peerlist', href: 'https://peerlist.io', icon: Globe },
  { label: 'Email', href: 'mailto:azfaralam.ops@gmail.com', icon: Mail },
];

export default function Links() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f5f8] pt-28 pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
        <div>
          <h1 className="text-5xl font-black tracking-tight text-[#1f2430] sm:text-6xl">
            I&apos;m all over the internet
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-relaxed text-[#3b4558]">
            My curiosity has been my closest friend, leading me to experience software development,
            design, technical writing and everything in between.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center gap-2 border-b border-[#8b93a4] pb-1 text-3xl text-[#303a4d] transition-colors hover:text-[#111827]"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium sm:text-3xl">{item.label}</span>
                  {!item.href.startsWith('mailto:') && <ExternalLink className="h-4 w-4" />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="pointer-events-none relative hidden lg:block">
          <div className="absolute right-8 top-4 h-24 w-24 border border-[#a78bfa]" />
          <div className="absolute right-24 top-20 h-24 w-24 border border-[#a78bfa]" />
          <div className="absolute right-40 top-36 h-24 w-24 border border-[#a78bfa]" />
          <div className="absolute right-8 top-36 h-24 w-24 border border-[#a78bfa]" />
          <div className="absolute right-56 top-4 h-24 w-24 border border-[#a78bfa]" />
          <div className="absolute right-72 top-20 h-24 w-24 border border-[#a78bfa]" />
        </div>
      </div>
    </section>
  );
}
