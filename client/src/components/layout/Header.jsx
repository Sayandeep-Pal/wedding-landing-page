import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const headerClass = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md py-2' 
      : 'bg-transparent py-4'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Heart className="h-8 w-8 text-rose-500 dark:text-rose-400" />
          <span className="ml-2 text-2xl font-serif font-bold text-slate-800 dark:text-white">
            Forever<span className="text-rose-500 dark:text-rose-400">Wed</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <ThemeToggle />
        </nav>
        
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button 
            onClick={toggleMenu}
            className="ml-4 p-1 text-slate-800 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-slate-900 shadow-lg transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <NavLinks onClick={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ onClick }) => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];
  
  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="font-medium text-slate-700 hover:text-rose-500 dark:text-slate-200 dark:hover:text-rose-400 transition-colors"
          onClick={onClick}
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default Header;