import React from 'react';
import { Cloud, Code, Database, Globe, Smartphone, Shield, GitBranch, Palette, CheckCircle, ArrowUpRight } from 'lucide-react';

const expertiseItems = [
  { 
      icon: Cloud, 
      title: 'Cloud Native', 
      desc: 'Architecting resilient, self-healing infrastructure on AWS, Azure, and GCP using Kubernetes, Terraform, and Serverless technologies.' 
  },
  { 
      icon: Code, 
      title: 'Full Stack', 
      desc: 'Building blazing fast user interfaces with React and Next.js, supported by high-performance backend systems in Go, Node.js, and Python.' 
  },
  { 
      icon: Database, 
      title: 'Data Engineering', 
      desc: 'Designing sophisticated ETL pipelines and data warehouses (Snowflake, BigQuery) that transform raw data into actionable business intelligence.' 
  },
  { 
      icon: Smartphone, 
      title: 'Mobile First', 
      desc: 'Delivering native-quality experiences across iOS and Android using Flutter and React Native, ensuring accessibility everywhere.' 
  },
  { 
      icon: Shield, 
      title: 'Cybersecurity', 
      desc: 'Integrating security into the DevOps lifecycle (DevSecOps) with automated compliance checks, penetration testing, and identity management.' 
  },
  { 
      icon: Globe, 
      title: 'IoT & Edge', 
      desc: 'Enabling real-time decision making at the edge. We connect sensors and devices to the cloud, processing data locally for immediate response.' 
  },
  { 
      icon: GitBranch, 
      title: 'DevOps & SRE', 
      desc: 'Streamlining software delivery with CI/CD pipelines, GitOps workflows, and Site Reliability Engineering practices to accelerate time-to-market.' 
  },
  { 
      icon: Palette, 
      title: 'UI/UX Design', 
      desc: 'Crafting intuitive, accessibility-first digital experiences. We bridge the gap between aesthetics and functionality using atomic design systems.' 
  },
  { 
      icon: CheckCircle, 
      title: 'QA Automation', 
      desc: 'Implementing rigorous automated testing frameworks and performance engineering strategies to ensure defect-free releases at enterprise scale.' 
  }
];

// Color palette cycle for brand integration
const colors = [
    { text: 'text-blue-400', border: 'group-hover:border-blue-500/50', bg: 'group-hover:bg-blue-500/10', iconBg: 'bg-blue-500/20' },
    { text: 'text-pink-400', border: 'group-hover:border-pink-500/50', bg: 'group-hover:bg-pink-500/10', iconBg: 'bg-pink-500/20' },
    { text: 'text-amber-400', border: 'group-hover:border-amber-500/50', bg: 'group-hover:bg-amber-500/10', iconBg: 'bg-amber-500/20' },
    { text: 'text-purple-400', border: 'group-hover:border-purple-500/50', bg: 'group-hover:bg-purple-500/10', iconBg: 'bg-purple-500/20' },
];

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-32 bg-slate-900 relative overflow-hidden scroll-mt-20">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-tp-blue/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tp-purple/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-tp-pink font-bold tracking-widest uppercase text-xs mb-4 block">Our Stack</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Engineering Excellence.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
                We leverage enterprise-grade technologies to build systems that are secure, scalable, and sustainable for the long haul.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseItems.map((item, idx) => {
                const colorTheme = colors[idx % colors.length];
                return (
                    <div 
                        key={idx} 
                        className={`group relative rounded-[2rem] p-8 transition-all duration-500 bg-white/5 backdrop-blur-xl border border-white/5 hover:-translate-y-2 hover:shadow-2xl ${colorTheme.border} ${colorTheme.bg}`}
                    >
                        {/* Hover Glow Effect */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10`}></div>

                        <div className="flex items-start justify-between mb-8">
                            <div className={`w-14 h-14 rounded-2xl ${colorTheme.iconBg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                <item.icon className={`w-7 h-7 ${colorTheme.text}`} />
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                <ArrowUpRight className={`w-6 h-6 ${colorTheme.text}`} />
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-sm font-medium group-hover:text-slate-300 transition-colors">
                            {item.desc}
                        </p>

                        {/* Bottom Accent Line */}
                        <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-t-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};