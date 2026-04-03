import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    // Agar user home page par nahi hai, toh pehle home page par navigate karega
    if (location.pathname !== '/') {
      navigate('/');
      // Timeout isliye taaki page load hone ke baad scroll trigger ho
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'auto' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'auto' });
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
              <Link
                to="/about"
                className="text-gray-800 hover:text-[#ff3b8f] transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/works"
                className="text-gray-800 hover:text-[#ff3b8f] transition-colors font-medium"
              >
                Work
              </Link>
              <Link
                to="/project"
                className="text-gray-800 hover:text-[#ff3b8f] transition-colors font-medium"
              >
                Projects
              </Link>
              <Link
                to="/links"
                className="text-gray-800 hover:text-[#ff3b8f] transition-colors font-medium"
              >
                Links
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-800 hover:text-[#ff3b8f] transition-colors font-medium"
              >
                Contact
              </button>
              
              {/* More Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onMouseLeave={() => setIsMoreOpen(false)}
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="flex items-center gap-2 text-gray-800 hover:text-[#ff3b8f] transition-colors font-medium"
                >
                  More
                  <ChevronDown size={18} className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMoreOpen && (
                  <div 
                    className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                    onMouseEnter={() => setIsMoreOpen(true)}
                    onMouseLeave={() => setIsMoreOpen(false)}
                  >
                    <Link
                      to="/howitworks"
                      className="block px-4 py-2 text-gray-800 hover:bg-[#fff2e6] hover:text-[#ff3b8f] transition-colors font-medium"
                    >
                      Work Process
                    </Link>
                    <button
                      onClick={() => {
                        scrollToSection('testimonials');
                        setIsMoreOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#fff2e6] hover:text-[#ff3b8f] transition-colors font-medium"
                    >
                      Testimonials
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('interests');
                        setIsMoreOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#fff2e6] hover:text-[#ff3b8f] transition-colors font-medium"
                    >
                      Interests
                    </button>
                  </div>
                )}
              </div>
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
            <Link
              to="/about"
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/works"
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              to="/project"
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/links"
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Links
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
            >
              Contact
            </button>
            
            {/* Mobile More Menu */}
            <div>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors font-medium"
              >
                More
                <ChevronDown size={18} className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMoreOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/howitworks"
                    className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
                    onClick={() => {
                      setIsMoreOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Work Process
                  </Link>
                  <button
                    onClick={() => {
                      scrollToSection('testimonials');
                      setIsMoreOpen(false);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
                  >
                    Testimonials
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('interests');
                      setIsMoreOpen(false);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-[#fff2e6] rounded-lg transition-colors"
                  >
                    Interests
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}