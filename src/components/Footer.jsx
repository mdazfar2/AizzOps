import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'auto' });
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <footer className="bg-gray-100 text-gray-600 py-16 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center px-4">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="assets/img/Azfar-fevico.webp"
              alt="logo"
              className="w-10 h-10 object-contain"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-8 text-sm tracking-wide mb-6">
          <Link to="/about" className="hover:text-black transition">ABOUT</Link>
          <Link to="/works" className="hover:text-black transition">WORKS</Link>
          <Link to="/project" className="hover:text-black transition">PROJECTS</Link>
          <button
            type="button"
            onClick={() => scrollToSection('interests')}
            className="hover:text-black transition"
          >
            INTERESTS
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="hover:text-black transition"
          >
            CONTACT
          </button>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {currentYear}{" "}
          <span className="text-blue-600 font-medium">Azfar Alam</span>{" "}
          All rights reserved.
        </p>

      </div>
    </footer>
  );
}
