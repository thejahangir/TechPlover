import React from 'react';
import { Search, PenTool, Code, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    subtitle: 'Strategy & Roadmap',
    icon: Search,
    desc: 'We dive deep into your business goals, user needs, and technical constraints to build a concrete roadmap for success.',
    color: 'bg-tp-blue',
    text: 'text-tp-blue',
    border: 'group-hover:border-tp-blue/40',
    shadow: 'shadow-tp-blue/20',
    pattern: (
      <svg className="absolute -bottom-6 -right-6 w-40 h-40 text-tp-blue/5 transform rotate-12 group-hover:scale-110 group-hover:rotate-45 transition-all duration-700 ease-out" viewBox="0 0 100 100" fill="currentColor">
         <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
         <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.8" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'UX & Prototyping',
    icon: PenTool,
    desc: 'We create interactive prototypes and high-fidelity designs, testing early to ensure intuitive and engaging user experiences.',
    color: 'bg-tp-purple',
    text: 'text-tp-purple',
    border: 'group-hover:border-tp-purple/40',
    shadow: 'shadow-tp-purple/20',
    pattern: (
       <svg className="absolute -top-6 -right-6 w-40 h-40 text-tp-purple/5 transform -rotate-12 group-hover:rotate-12 transition-all duration-700 ease-out" viewBox="0 0 100 100" fill="currentColor">
          <rect x="20" y="20" width="60" height="60" rx="10" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6"/>
          <path d="M20 20 L80 80" stroke="currentColor" strokeWidth="4" />
       </svg>
    )
  },
  {
    number: '03',
    title: 'Development',
    subtitle: 'Agile Engineering',
    icon: Code,
    desc: 'We build scalable, secure systems using modern stacks with rigorous automated testing and code quality standards.',
    color: 'bg-tp-pink',
    text: 'text-tp-pink',
    border: 'group-hover:border-tp-pink/40',
    shadow: 'shadow-tp-pink/20',
    pattern: (
       <svg className="absolute bottom-0 right-0 w-40 h-40 text-tp-pink/5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-700 ease-out" viewBox="0 0 100 100" fill="currentColor">
          <path d="M20 50 L40 70 L80 30" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
       </svg>
    )
  },
  {
    number: '04',
    title: 'Deployment',
    subtitle: 'CI/CD & Scale',
    icon: Rocket,
    desc: 'Automated pipelines ensure smooth releases. We monitor performance in real-time and scale infrastructure as you grow.',
    color: 'bg-tp-yellow',
    text: 'text-tp-yellow',
    border: 'group-hover:border-tp-yellow/40',
    shadow: 'shadow-tp-yellow/20',
    pattern: (
       <svg className="absolute -bottom-8 -right-8 w-48 h-48 text-tp-yellow/5 group-hover:-translate-y-4 group-hover:opacity-100 opacity-50 transition-all duration-700 ease-out" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 L90 90 L10 90 Z" opacity="0.6"/>
       </svg>
    )
  }
];

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-32 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-tp-blue/5 rounded-full blur-3xl mix-blend-multiply"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-tp-purple/5 rounded-full blur-3xl mix-blend-multiply"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-tp-blue font-bold tracking-widest uppercase text-xs mb-4 block animate-fadeIn">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">From Concept to Code.</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
                We believe in transparency and rigor. Our agile methodology ensures you are involved at every step, transforming complex challenges into elegant solutions.
            </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className={`bg-white p-8 rounded-[32px] border border-slate-100 shadow-soft transition-all duration-500 relative z-10 h-full flex flex-col overflow-hidden ${step.border} group-hover:-translate-y-3 group-hover:shadow-2xl`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    {step.pattern}
                  </div>

                  {/* Icon/Number Header */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl ${step.color} ${step.shadow} text-white flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <step.icon size={24} className="transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <span className="text-5xl font-black text-slate-100 select-none transition-colors duration-500 group-hover:text-slate-200/80">{step.number}</span>
                  </div>
                  
                  <div className="relative z-10">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-tp-blue transition-colors duration-300">{step.title}</h3>
                      <div className={`text-xs font-bold uppercase tracking-wider ${step.text} mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}>{step.subtitle}</div>
                      
                      <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                        {step.desc}
                      </p>
                  </div>
                </div>

                {/* Arrow Connector for Desktop between cards */}
                {idx < steps.length - 1 && (
                   <div className="hidden lg:flex absolute top-[60px] -right-4 transform -translate-y-1/2 z-20 text-slate-300 bg-white p-1 rounded-full border border-slate-100 shadow-sm group-hover:text-tp-blue group-hover:border-tp-blue/20 transition-all duration-500 delay-100">
                      <ArrowRight size={16} />
                   </div>
                 )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};