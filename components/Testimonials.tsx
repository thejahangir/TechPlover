import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "TechPlover didn't just modernize our cloud infrastructure; they completely reimagined how we deliver value to our customers. The velocity at which we now ship features is simply unprecedented in our industry.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "FinGlobal Banking",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    id: 2,
    quote: "The level of engineering rigor TechPlover brings to the table is rare. They tackled our legacy debt with surgical precision, migrating us to a microservices architecture with zero downtime during peak trading hours.",
    author: "David Chen",
    role: "VP of Engineering",
    company: "QuantFlow Systems",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    id: 3,
    quote: "We needed a partner who understood both AI and complex logistics. TechPlover's predictive models have reduced our supply chain waste by 40% in just six months. The ROI has been immediate and substantial.",
    author: "Elena Rodriguez",
    role: "Director of Operations",
    company: "LogiChain Worldwide",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d"
  },
  {
    id: 4,
    quote: "Finding a team that balances innovation with security compliance is difficult. TechPlover delivered a HIPAA-compliant telehealth platform that feels like a consumer app. Our patient engagement scores have doubled.",
    author: "Dr. Marcus Thorne",
    role: "Founder & CEO",
    company: "MediConnect Health",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d"
  },
  {
    id: 5,
    quote: "Their 'Mobile First' approach wasn't just a buzzword. They built a React Native experience that outperforms our native competitors. TechPlover is the secret weapon in our digital strategy.",
    author: "Jessica Wu",
    role: "Head of Product",
    company: "RetailNest",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026709d"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const TRANSITION_DURATION = 500; // ms

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Wait for fade out to complete before changing content
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, TRANSITION_DURATION);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Wait for fade out to complete before changing content
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, TRANSITION_DURATION);
  }, [isAnimating]);

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, TRANSITION_DURATION);
  };

  // Auto-play functionality with Pause on Hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Ambience for Glass Effect */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-tp-blue/30 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-tp-purple/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="text-center mb-16">
          <span className="text-tp-yellow font-bold tracking-widest uppercase text-xs mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Trusted by Industry Leaders.</h2>
        </div>

        {/* Glassmorphism Slider Card */}
        <div 
          className="relative max-w-5xl mx-auto group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Glass Container */}
          <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl relative overflow-hidden min-h-[450px] flex flex-col justify-center transition-all duration-300 hover:bg-white/10 hover:shadow-glow/50">
            
            {/* Decorative Quote Icon */}
            <div className="absolute top-8 left-8 text-white/5 pointer-events-none">
              <Quote size={120} />
            </div>

            <div 
              className={`transition-opacity ease-in-out relative z-10`}
              style={{ transitionDuration: `${TRANSITION_DURATION}ms`, opacity: isAnimating ? 0 : 1 }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-tp-yellow text-tp-yellow" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-10 max-w-4xl">
                  "{activeTestimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-tp-blue to-tp-pink">
                    <img 
                      src={activeTestimonial.avatar} 
                      alt={activeTestimonial.author} 
                      className="w-full h-full rounded-full object-cover border-2 border-slate-900"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">{activeTestimonial.author}</div>
                    <div className="text-slate-400 text-sm font-medium">
                      {activeTestimonial.role}, <span className="text-tp-blue">{activeTestimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls - Visible on hover or always on mobile */}
            <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-0 sm:opacity-100">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-tp-blue/40 border border-white/10 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm shadow-lg"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-0 sm:opacity-100">
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-tp-blue/40 border border-white/10 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm shadow-lg"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-tp-blue shadow-[0_0_10px_rgba(30,58,138,0.5)]' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};