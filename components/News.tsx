import React, { useRef } from 'react';
import { ArrowRight, ArrowUpRight, Clock, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

const insights = [
  {
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    category: 'Artificial Intelligence',
    readTime: '5 min read',
    title: 'Generative AI: Moving Beyond the Hype to Real Business Value',
    excerpt: 'How enterprises are transitioning from experimental pilots to scalable, production-grade AI solutions that drive measurable ROI.',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    category: 'Cloud Modernization',
    readTime: '7 min read',
    title: 'The Hybrid Cloud Paradox: Balancing Agility with Control',
    excerpt: 'Navigating the complexities of multi-cloud environments while ensuring security compliance and cost optimization in a distributed world.',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    category: 'Cyber Resilience',
    readTime: '4 min read',
    title: 'Zero Trust Architecture: The New Standard for Digital Defense',
    excerpt: 'Why traditional perimeter security is obsolete and how identity-centric security models are protecting modern organizations from breach.',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop',
    category: 'Quantum Computing',
    readTime: '6 min read',
    title: 'Preparing for the Post-Quantum Cryptography Era',
    excerpt: 'The quantum leap is coming. Steps CIOs must take today to future-proof their data encryption against tomorrow\'s threats.',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800&auto=format&fit=crop',
    category: 'Sustainability',
    readTime: '5 min read',
    title: 'Green IT: Engineering a Sustainable Digital Future',
    excerpt: 'Reducing carbon footprints through optimized cloud infrastructure, energy-efficient code, and circular hardware lifecycles.',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop',
    category: 'Edge Computing',
    readTime: '4 min read',
    title: 'Intelligence at the Edge: Processing Data Where It Lives',
    excerpt: 'Overcoming latency and bandwidth constraints by moving powerful compute resources closer to the source of data generation.',
    link: '#'
  }
];

export const Insights: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Get width of first card to scroll by exactly one card + gap
      const cardWidth = current.children[0]?.clientWidth || 300;
      const gap = 32; // 2rem gap
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-32 border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
                <span className="text-tp-blue font-bold tracking-widest uppercase text-xs mb-2 block">Thought Leadership</span>
                <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Trends & Insights.</h2>
                <p className="text-lg text-slate-500 font-medium">Deep dives into the technologies reshaping industries. Our experts share their perspectives on what's next.</p>
            </div>
            
            {/* Slider Controls */}
            <div className="flex items-center gap-4">
               <button 
                  onClick={() => scroll('left')}
                  className="w-12 h-12 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-tp-blue hover:border-tp-blue hover:text-white transition-all active:scale-95"
                  aria-label="Previous slide"
               >
                  <ChevronLeft size={24} />
               </button>
               <button 
                  onClick={() => scroll('right')}
                  className="w-12 h-12 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-tp-blue hover:border-tp-blue hover:text-white transition-all active:scale-95"
                   aria-label="Next slide"
               >
                  <ChevronRight size={24} />
               </button>
            </div>
        </div>

        {/* Slider Container */}
        <div 
           ref={scrollRef}
           className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide"
           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {insights.map((item, index) => (
              <div 
                key={index} 
                className="min-w-[85vw] md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] snap-start group flex flex-col h-full cursor-pointer"
              >
                {/* Image Card */}
                <div className="relative overflow-hidden rounded-[24px] mb-6 aspect-[4/3] shadow-soft group-hover:shadow-lg transition-all duration-500 border border-slate-100">
                     <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                     
                     <div className="absolute top-4 left-4 flex gap-2">
                        <span className="backdrop-blur-md bg-white/95 text-tp-blue text-[10px] font-bold uppercase px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                            <Tag size={10} /> {item.category}
                        </span>
                     </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-1">
                    <div className="flex items-center text-xs text-slate-400 font-medium mb-3 gap-2">
                        <Clock size={12} />
                        <span>{item.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-tp-blue transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {item.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-sm font-bold text-slate-900 group-hover:text-tp-pink transition-colors">
                        Read Article <ArrowUpRight className="ml-2 w-4 h-4" />
                    </div>
                </div>
              </div>
            ))}
        </div>
        
        {/* Mobile View All Link */}
        <div className="mt-6 text-center md:hidden">
            <button className="inline-flex items-center font-bold text-tp-blue hover:text-tp-pink transition-colors text-sm">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </button>
        </div>
      </div>
    </section>
  );
};