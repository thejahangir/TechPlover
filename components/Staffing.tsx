import React from 'react';
import { Users, Clock, Globe, Briefcase, CheckCircle, Zap, Code, Database, Layout, Server, Shield, Cpu, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Contract Staffing',
    desc: 'Flexible, short-term expert resources to plug immediate skill gaps or scale up for critical project milestones without long-term overhead.',
    icon: Clock
  },
  {
    title: 'Contract-to-Hire',
    desc: 'Evaluate performance and cultural fit on the job before making a permanent commitment. Reduce hiring risk significantly.',
    icon: CheckCircle
  },
  {
    title: 'Permanent Staffing',
    desc: 'Full-cycle executive search and recruitment for core team members. We find the "unfindable" candidates who define your company culture.',
    icon: Users
  },
  {
    title: 'Dedicated Teams',
    desc: 'Spin up a fully managed, cohesive engineering pod (Devs, QA, PM) that acts as an extension of your in-house engineering lab.',
    icon: Briefcase
  },
  {
    title: 'Remote / Offshore',
    desc: 'Tap into global talent pools. We handle compliance, payroll, and logistics to bring you world-class talent at optimized costs.',
    icon: Globe
  },
  {
    title: 'Niche & Emerging Tech',
    desc: 'Specialized hiring for hard-to-find skills in AI/ML, Blockchain, IoT, and Cybersecurity. We speak the language of innovation.',
    icon: Zap
  }
];

const domains = [
  "React & Angular", "Node.js & Python", ".NET & Java", "AWS & Azure", 
  "AI & Machine Learning", "Data Engineering", "Flutter & iOS", 
  "DevSecOps", "QA Automation", "Cybersecurity", "Microservices"
];

const process = [
  { step: '01', title: 'Calibration', desc: 'We dissect your technical needs and cultural DNA.' },
  { step: '02', title: 'Sourcing', desc: 'AI-driven search across our proprietary talent network.' },
  { step: '03', title: 'Vetting', desc: ' rigorous technical assessment and code challenges.' },
  { step: '04', title: 'Selection', desc: 'You interview the top 5%. No noise, just signal.' },
];

export const Staffing: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-tp-purple font-bold tracking-widest uppercase text-xs mb-3 block">Talent Solutions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Elite IT Staffing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tp-blue to-tp-purple">Deployed on Demand.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Whether you are a startup needing a CTO or an enterprise scaling a Digital Center of Excellence, we connect you with the top 1% of engineering talent. Speed, quality, and retention—guaranteed.
          </p>
        </div>

        {/* Tech Domain Marquee */}
        <div className="w-full bg-slate-50 border-y border-slate-100 py-6 mb-20 overflow-hidden relative">
          <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
            {[...domains, ...domains, ...domains].map((domain, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-400 font-semibold text-sm uppercase tracking-wider">
                <div className="w-2 h-2 rounded-full bg-tp-blue/40"></div>
                {domain}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 rounded-[24px] border border-slate-100 bg-white shadow-soft hover:shadow-xl hover:border-tp-blue/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-tp-blue transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-tp-blue mb-6 group-hover:bg-tp-blue group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-tp-blue transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Process & Why Us Split */}
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-slate-900 rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative">
           {/* Background Decor */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-tp-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-tp-pink/10 rounded-full blur-[80px] pointer-events-none"></div>

           <div>
              <h3 className="text-3xl font-bold mb-8">The TechPlover Standard</h3>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-tp-yellow">
                       <Zap size={20} />
                    </div>
                    <div>
                       <h4 className="font-bold text-lg">48-Hour Turnaround</h4>
                       <p className="text-slate-400 text-sm mt-1">Receive qualified profiles within 2 days. We value speed without compromising precision.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-tp-pink">
                       <Shield size={20} />
                    </div>
                    <div>
                       <h4 className="font-bold text-lg">Zero-Risk Replacement</h4>
                       <p className="text-slate-400 text-sm mt-1">If a placement doesn't work out in the first 90 days, we replace them for free. No questions asked.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-tp-blue">
                       <Code size={20} />
                    </div>
                    <div>
                       <h4 className="font-bold text-lg">Technologist-Vetted</h4>
                       <p className="text-slate-400 text-sm mt-1">Candidates are screened by Senior Engineers, not just keyword-matching algorithms.</p>
                    </div>
                 </div>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-tp-blue hover:bg-tp-purple text-white rounded-full font-bold transition-all shadow-lg shadow-tp-blue/25">
                    Find Talent Now
                  </button>
                  <button className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full font-bold transition-all">
                    View Rate Card
                  </button>
              </div>
           </div>

           {/* Process Steps Visual */}
           <div className="relative">
              <div className="grid grid-cols-1 gap-4">
                 {process.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-6 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                       <div className="text-3xl font-black text-white/10">{p.step}</div>
                       <div>
                          <h4 className="font-bold text-white">{p.title}</h4>
                          <p className="text-slate-400 text-xs">{p.desc}</p>
                       </div>
                       {idx !== process.length - 1 && (
                          <div className="ml-auto hidden sm:block opacity-20">
                             <ArrowRight size={16} className="rotate-90 lg:rotate-0" />
                          </div>
                       )}
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};
