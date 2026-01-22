import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className={`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-slate-900/40 backdrop-blur-xl border border-white/10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-tp-blue hover:border-tp-blue hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};