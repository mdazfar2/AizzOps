import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/mdazfar2' },
    { label: 'X', href: 'https://twitter.com/azfarxx_' },
    { label: 'LinkedIn', href: 'http://www.linkedin.com/in/md-azfar-alam' },
    { label: 'Blog', href: 'https://medium.com/@azfaralam/' },
    { label: 'Community', href: 'https://discordapp.com/users/877531143610708028' },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-100 px-4 py-8 text-gray-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm md:flex-row md:gap-8">
        <p className="text-center md:text-left">© {currentYear} Azfar Alam</p>

        <Link to="/privacy-policy" className="font-medium hover:text-black transition">
          Privacy Policy
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end md:gap-8">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-700 transition hover:text-black"
            >
              {item.label}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3 opacity-70" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
