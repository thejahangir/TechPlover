import React from 'react';
import { TrendingUp, Zap, Target, Users } from 'lucide-react';

export const StaffingTrendsBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-tp-dark text-white overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tp-blue/20 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tp-purple/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Block */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-tp-yellow font-bold text-xs uppercase tracking-widest mb-4">
              <TrendingUp size={14} />
              <span>Market Intelligence</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              The Talent Landscape Has <span className="text-transparent bg-clip-text bg-gradient-to-r from-tp-blue via-tp-purple to-tp-pink">Shifted Forever.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              In a world where technical skills have a 2.5-year half-life, the ability to access specialized talent on-demand is no longer a luxury—it's a survival mechanism. We help you transition from rigid hiring to fluid, high-performance team assembly.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
                  <Zap size={16} className="text-tp-blue" /> Agility Over Overhead
               </div>
               <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
                  <Target size={16} className="text-tp-pink" /> Precision Matching
               </div>
            </div>
          </div>

          {/* Right Stats/Trends Block */}
          <div className="lg:w-1/2 w-full">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Stat Card 1 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform origin-left inline-block">40<span className="text-tp-blue text-2xl">%</span></div>
                <h4 className="font-semibold text-slate-200 mb-2">Cost Efficiency</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Reduction in operational costs by utilizing hybrid staffing models vs traditional full-time headcount.
                </p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform origin-left inline-block">2.5<span className="text-tp-pink text-2xl">x</span></div>
                <h4 className="font-semibold text-slate-200 mb-2">Faster Deployment</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Speed to market acceleration when deploying pre-vetted dedicated teams for critical initiatives.
                </p>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors sm:col-span-2 group">
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-tp-blue/20 rounded-xl text-tp-blue group-hover:bg-tp-blue group-hover:text-white transition-colors">
                       <Users size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-white text-lg mb-1">The "Skills-First" Era</h4>
                       <p className="text-sm text-slate-400 leading-relaxed">
                         Leading enterprises are shifting from role-based hiring to skills-based architecture. Our staffing solutions are designed to inject specific competencies—like GenAI, Rust, or Kubernetes Security—exactly when you need them.
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};