import React from 'react';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

export const Connect: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-tp-blue/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-tp-pink/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tp-purple/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="relative rounded-[3rem] p-[1px] bg-gradient-to-br from-white/80 via-white/20 to-white/60 shadow-2xl">
          {/* Glass Card Content */}
          <div className="rounded-[3rem] bg-white/40 backdrop-blur-xl p-10 md:p-16 lg:p-20 relative overflow-hidden">
            
            {/* Inner Sheen */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                  Connect with the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-tp-blue via-tp-purple to-tp-pink">Future of Tech.</span>
                </h2>
                
                <p className="text-lg text-slate-600 mb-10 font-medium leading-relaxed">
                  Do you have a specific IT challenge, interest in a career at TechPlover, or just want to get in touch? We're ready to listen.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#contact" 
                    className="group flex items-center justify-center px-8 py-4 bg-tp-blue text-white rounded-2xl font-bold transition-all hover:bg-tp-purple hover:shadow-lg hover:shadow-tp-blue/30 active:scale-95"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Let's Talk
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                  </a>
                  
                  <a 
                    href="#newsletter" 
                    className="group flex items-center justify-center px-8 py-4 bg-white/60 hover:bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold transition-all hover:text-tp-pink hover:border-tp-pink active:scale-95 backdrop-blur-md"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Subscribe
                  </a>
                </div>
              </div>

              {/* Animated Graphics Side */}
              <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center">
                {/* Rotating Rings */}
                <div className="absolute w-64 h-64 md:w-96 md:h-96 border border-tp-blue/20 rounded-full animate-spin-slow"></div>
                <div className="absolute w-48 h-48 md:w-72 md:h-72 border border-tp-purple/20 rounded-full animate-spin-reverse-slow dashed-border"></div>
                <div className="absolute w-32 h-32 md:w-48 md:h-48 border border-tp-pink/20 rounded-full animate-spin-slow"></div>

                {/* Floating Central Element */}
                <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-tp-blue to-tp-purple rounded-3xl shadow-glow flex items-center justify-center text-white animate-float rotate-12">
                   <div className="absolute inset-0 bg-white/20 blur-lg rounded-3xl"></div>
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                   </svg>
                </div>

                {/* Floating Orbiting Elements */}
                <div className="absolute top-10 right-20 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center text-tp-pink animate-float" style={{ animationDelay: '1s' }}>
                   <Mail size={20} />
                </div>
                <div className="absolute bottom-10 left-20 w-10 h-10 bg-tp-yellow rounded-full shadow-lg flex items-center justify-center text-white animate-float" style={{ animationDelay: '2s' }}>
                   <ArrowRight size={16} className="-rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};