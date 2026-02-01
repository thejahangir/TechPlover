import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileOpen(false);
    }
  };

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Staffing', href: '#staffing' },
    { name: 'Culture', href: '#culture' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center max-w-[1400px]">
        <a href="#" onClick={(e) => { window.scrollTo({ top: 0, behavior: 'smooth' }); e.preventDefault(); }}>
            <Logo className="h-8" lightMode={true} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-2 py-1 flex items-center border border-white/5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs font-medium px-5 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="ml-4 px-6 py-2.5 rounded-full bg-tp-blue text-white text-xs font-bold hover:bg-tp-pink transition-colors shadow-lg shadow-tp-blue/20 cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-slate-900/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white text-2xl font-bold hover:text-tp-blue cursor-pointer"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-8 py-3 bg-tp-blue text-white rounded-full font-bold cursor-pointer"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};