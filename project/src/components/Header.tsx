import { useState, useEffect } from 'react';
import { Menu, X, Shield, ShieldAlert } from 'lucide-react';
import { personalInfo } from '../utils/data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-green-400 mr-2">
              <ShieldAlert className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-xl font-mono font-bold text-white tracking-tight">
                sekhar<span className="text-green-400">@</span>Security
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-green-400 px-3 py-2 font-medium tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors duration-200"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-gray-900/95 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-green-400 block px-3 py-2 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-green-600 hover:bg-green-700 text-white block px-3 py-2 rounded font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;