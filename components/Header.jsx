import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import aleraLogo from '../assets/alera-ai-logo.png';

const Header = ({ onGetStarted, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    onNavigate(section);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img src={aleraLogo} alt="Alera AI" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('home')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Home
            </button>
            <button onClick={() => handleNavClick('services')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Services
            </button>
            <button onClick={() => handleNavClick('courses')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Courses
            </button>
            <button onClick={() => handleNavClick('about')} className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => handleNavClick('blog')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Blog
            </button>
            <button onClick={() => handleNavClick('contact')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-500/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <button onClick={() => handleNavClick('home')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Home
              </button>
              <button onClick={() => handleNavClick('services')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Services
              </button>
              <button onClick={() => handleNavClick('courses')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Courses
              </button>
              <button onClick={() => handleNavClick('about')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                About
              </button>
              <button onClick={() => handleNavClick('blog')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Blog
              </button>
              <button onClick={() => handleNavClick('contact')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Contact
              </button>
              <Button 
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-full mt-4"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

