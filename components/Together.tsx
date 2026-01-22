import React, { useState, useEffect } from 'react';

const portraitImages = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // Woman smiling
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", // Man professional
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop", // Woman professional
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"  // Man office
];

export const Together: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portraitImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-16 text-tp-pink tracking-tight">
          Let's get there together
        </h2>

        <div className="grid lg:grid-cols-3 gap-0 shadow-soft rounded-[32px] overflow-hidden bg-white border border-slate-100">
          {/* Photo Slider Section */}
          <div className="min-h-[400px] relative group overflow-hidden bg-slate-100">
            {portraitImages.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`TechPlover Professional ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
            {/* Overlay */}
            <div className="absolute inset-0 bg-tp-blue/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          </div>

          {/* Brand Block */}
          <div className="min-h-[400px] bg-tp-pink flex items-center justify-center p-12 relative overflow-hidden group">
             {/* Decorative Circle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
             
             <span className="text-white text-5xl font-light tracking-tight relative z-10 selection:bg-white selection:text-tp-pink">
                techplover
             </span>
          </div>

          {/* Links Section */}
          <div className="p-10 lg:p-12 flex flex-col justify-center bg-slate-50/50 border-t lg:border-t-0 lg:border-l border-slate-100">
             {/* Culture Item */}
             <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tp-pink mb-4">Culture</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">
                   Devoted to making the world better and more inclusive for our employees, customers and communities.
                </p>
                <button 
                  onClick={() => scrollTo('culture')}
                  className="px-6 py-2.5 border border-slate-300 rounded-lg hover:bg-tp-pink hover:text-white hover:border-tp-pink transition-all duration-300 text-sm font-medium tracking-wide active:scale-95"
                >
                  Learn more
                </button>
             </div>

             {/* Divider */}
             <div className="w-full h-px bg-slate-200 mb-10"></div>

             {/* Careers Item */}
             <div>
                <h3 className="text-2xl font-semibold text-tp-pink mb-4">Careers</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">
                   Join TechPlover's global network of technology, strategy and implementation consultants.
                </p>
                <button 
                  onClick={() => scrollTo('careers')}
                  className="px-6 py-2.5 border border-slate-300 rounded-lg hover:bg-tp-pink hover:text-white hover:border-tp-pink transition-all duration-300 text-sm font-medium tracking-wide active:scale-95"
                >
                  Explore jobs
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};