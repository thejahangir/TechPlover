import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="py-32 bg-[#f5f5f7] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
            <div>
               <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
                 Built to <span className="text-tp-blue">Scale.</span>
               </h2>
               <p className="text-lg text-slate-500 font-medium leading-relaxed mb-6">
                 In today's hyper-competitive landscape, speed is nothing without stability. We bridge the gap between complex business requirements and elegant software architecture. 
               </p>
               <p className="text-lg text-slate-500 font-medium leading-relaxed">
                 Our solutions are designed to be the backbone of your enterprise, handling millions of transactions with zero downtime while maintaining the flexibility to pivot as markets evolve.
               </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
                 <div className="flex-1 bg-white p-8 rounded-[32px] shadow-soft hover:scale-[1.02] transition-transform duration-500 border border-slate-100">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Agile Precision</h4>
                    <p className="text-slate-500 leading-relaxed">We employ rapid iteration cycles coupled with rigorous automated testing to deliver value faster without breaking things.</p>
                 </div>
                 <div className="flex-1 bg-white p-8 rounded-[32px] shadow-soft hover:scale-[1.02] transition-transform duration-500 border border-slate-100">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Future Core</h4>
                    <p className="text-slate-500 leading-relaxed">Our architectures are built on cloud-native patterns and microservices, ensuring your tech stack is ready for whatever comes next.</p>
                 </div>
            </div>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-tp-dark p-10 rounded-[40px] text-white flex flex-col justify-between col-span-1 md:col-span-2 relative overflow-hidden group min-h-[300px]">
               <div className="relative z-10">
                   <div className="text-7xl font-semibold tracking-tighter mb-4">250<span className="text-tp-yellow">+</span></div>
                   <div className="text-2xl text-slate-300 font-medium">Enterprise Projects Shipped</div>
                   <p className="mt-4 text-slate-400 max-w-md">From fintech platforms processing billions to healthcare apps saving lives, we've delivered critical infrastructure across industries.</p>
               </div>
               <div className="absolute right-0 bottom-0 w-64 h-64 bg-tp-blue/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 group-hover:bg-tp-blue/30 transition-colors"></div>
           </div>

           <div className="bg-white p-10 rounded-[40px] shadow-soft flex flex-col justify-center items-center text-center hover:shadow-lg transition-shadow duration-300 border border-slate-100">
                <div className="text-6xl font-semibold tracking-tighter text-tp-blue mb-4">98<span className="text-tp-pink">%</span></div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-2">Client Retention</div>
                <p className="text-slate-400 text-sm">Long-term partnerships built on trust.</p>
           </div>

           <div className="bg-white p-10 rounded-[40px] shadow-soft flex flex-col justify-center items-center text-center hover:shadow-lg transition-shadow duration-300 border border-slate-100">
                <div className="text-6xl font-semibold tracking-tighter text-tp-purple mb-4">24/7</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-2">Global Support</div>
                <p className="text-slate-400 text-sm">Always-on reliability for your systems.</p>
           </div>

           <div className="bg-gradient-to-br from-tp-blue to-tp-purple p-10 rounded-[40px] text-white col-span-1 md:col-span-2 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-end h-full gap-6">
                    <div className="max-w-lg">
                        <p className="text-2xl font-medium leading-tight">"TechPlover transformed our legacy systems into a state-of-the-art cloud platform in record time. They are true partners."</p>
                        <p className="mt-4 font-bold text-tp-yellow">— CTO, Global FinTech Giant</p>
                    </div>
                    <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-50 flex-shrink-0">
                        <path d="M0 0 L40 0 L40 40 Z" fill="#ffffff" />
                    </svg>
                </div>
           </div>
        </div>
      </div>
    </section>
  );
};