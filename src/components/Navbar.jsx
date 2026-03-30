import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    // Agar user home page par nahi hai, toh pehle home page par navigate karega
    if (location.pathname !== '/') {
      navigate('/');
      // Timeout isliye taaki page load hone ke baad scroll trigger ho
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[#ffd18a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Logo now acts as Home Link */}
            <Link 
              to="/" 
              className="inline-flex items-center hover:opacity-90 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src="assets/img/azfar-sign.webp"
                alt="Azfar Alam signature"
                className="h-11 sm:h-48 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-800 hover:text-[#ff3b8f] transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-800 hover:text-[#ff3b8f] transition-colors font-medium"
              >
                Skills
              </button>
              <Link
                to="/work"
                className="text-gray-800 hover:text-[#ff3b8f] transition-colors font-medium"
              >
                Work
              </Link>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-800 hover:text-[#ff3b8f] transition-colors font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('interests')}
                className="text-gray-800 hover:text-[#ff3b8f] transition-colors font-medium"
              >
                Interests
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] text-[#0c0a12] px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#ff3b8f] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
            >
              Skills
            </button>
            <Link
              to="/work"
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('interests')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
            >
              Interests
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] text-[#0c0a12] rounded-lg mt-2 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}