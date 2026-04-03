import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  PenSquare,
  Heart,
  Trophy,
  Sparkles,
} from 'lucide-react';

const links = [
  { label: 'GitHub', href: 'https://github.com/mdazfar2', icon: Github },
  { label: 'X', href: 'https://x.com/azfarxx_', icon: Globe },
  { label: 'LinkedIn', href: 'http://www.linkedin.com/in/md-azfar-alam', icon: Linkedin },
  { label: 'Medium', href: 'https://medium.com/@azfaralam', icon: PenSquare },
  { label: 'Discord', href: 'https://discordapp.com/users/877531143610708028', icon: Globe },
  { label: 'Daily', href: 'https://app.daily.dev/azfaralam/', icon: Sparkles },
  { label: 'Hashnode', href: 'https://azfaralam.hashnode.dev/', icon: Globe },
  { label: 'Dribbble', href: 'https://dribbble.com/mdazfar2/', icon: Globe },
  { label: 'GitHub Sponsors', href: 'https://github.com/sponsors', icon: Heart },
  { label: 'Leetcode', href: 'https://leetcode.com/u/mdazfar2', icon: Trophy },
  { label: 'Peerlist', href: 'https://peerlist.io/mdazfar2', icon: Globe },
  { label: 'Polywork', href: 'https://www.polywork.com/mdazfar2', icon: Globe },
  { label: 'Showwcase', href: 'https://www.showwcase.com/mdazfar2', icon: Globe },
  { label: 'GeeksforGeeks', href: 'https://auth.geeksforgeeks.org/user/mdazfar2', icon: Globe },
  { label: 'Email', href: 'mailto:azfaralam.ops@gmail.com', icon: Mail },
];

export default function Links() {
  const cubes = [
    [0, 0],
    [80, 40],
    [160, 80],
    [0, 120],
    [160, 0],
    [240, 40],
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f6f9] pt-28 pb-20">
      
      {/* ANIMATION STYLES */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-12px) rotate(45deg); }
        }

        @keyframes fadePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#2b2f3a]">
            I&apos;m all over the internet
          </h1>

          <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-[#5a6475]">
            My curiosity has been my closest friend, leading me to experience software development,
            design, technical writing and everything in between.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="group inline-flex items-center gap-2 border-b border-[#c7ccd6] pb-[2px] text-sm text-[#4b5565] transition-all duration-200 hover:text-black hover:border-black"
                >
                  <Icon className="h-4 w-4 text-[#6b7280] group-hover:text-black" />
                  <span className="font-medium">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT ANIMATED CUBES */}
        <div className="pointer-events-none relative hidden lg:block">
          {cubes.map(([x, y], i) => (
            <div
              key={i}
              className="absolute h-24 w-24 border border-[#a78bfa]/50"
              style={{
                right: `${x}px`,
                top: `${y}px`,
                animation: `
                  float ${4 + i}s ease-in-out infinite,
                  fadePulse ${3 + i}s ease-in-out infinite
                `,
                animationDelay: `${i * 0.5}s`,
                transform: 'rotate(45deg)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}