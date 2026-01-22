import React from 'react';
import { Button } from './Button';
import { Heart, Zap, Shield, Users, Trophy, Coffee, Globe, BookOpen } from 'lucide-react';

const values = [
    {
        icon: Zap,
        title: "Relentless Innovation",
        desc: "We reject the status quo. Our teams are empowered to experiment with emerging technologies, turning novel ideas into battle-tested solutions that keep our clients ahead of the curve."
    },
    {
        icon: Users,
        title: "Radical Transparency",
        desc: "We operate with open books and open minds. From salary bands to strategic decisions, information flows freely, fostering an environment of trust and collective ownership."
    },
    {
        icon: Shield,
        title: "Uncompromising Quality",
        desc: "We don't ship 'good enough'. We adhere to rigorous engineering standards, automated testing, and security-first practices to ensure our software stands the test of time."
    },
    {
        icon: Heart,
        title: "Empathy Driven",
        desc: "Technology is for people. We deeply research user needs and business contexts, ensuring every line of code serves a human purpose and solves a real problem."
    }
];

const perks = [
    { icon: Globe, label: "Remote-First", desc: "Work from anywhere in the world." },
    { icon: Trophy, label: "Competitive Equity", desc: "Own a stake in our success." },
    { icon: Coffee, label: "Wellness Stipend", desc: "$200/mo for gym or therapy." },
    { icon: BookOpen, label: "L&D Budget", desc: "$3k/yr for courses & confs." },
];

export const Culture: React.FC = () => {
  return (
    <section id="culture" className="py-32 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Intro Block */}
        <div className="bg-[#f5f5f7] rounded-[40px] p-8 md:p-16 overflow-hidden relative mb-24">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-6">
                    The Human <br/> <span className="text-tp-blue">Code.</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                        At TechPlover, we believe that great software is a byproduct of a great culture. We don't just write code; we cultivate an ecosystem of continuous learning, creative freedom, and psychological safety. 
                        <br/><br/>
                        Our engineers are not ticket-takers; they are product thinkers and problem solvers who own their work from conception to deployment.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="px-6 py-3 bg-white rounded-full text-sm font-semibold shadow-sm text-slate-700">Remote-First</div>
                        <div className="px-6 py-3 bg-white rounded-full text-sm font-semibold shadow-sm text-slate-700">Global Scale</div>
                        <div className="px-6 py-3 bg-white rounded-full text-sm font-semibold shadow-sm text-slate-700">Autonomy</div>
                    </div>
                    <div className="mt-10">
                        <Button variant="primary">Read Our Handbook</Button>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="aspect-square rounded-[32px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img src="https://picsum.photos/seed/culture_meeting/800/800" alt="Team Collaboration" className="w-full h-full object-cover" />
                    </div>
                    {/* Floating pill */}
                    <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur px-8 py-4 rounded-full shadow-lg border border-white/20">
                        <p className="text-slate-900 font-bold">4.9/5 Glassdoor Rating</p>
                    </div>
                </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-tp-blue/10 to-tp-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        </div>

        {/* Values Grid */}
        <div className="mb-24">
            <div className="text-center mb-16">
                <span className="text-tp-blue font-bold tracking-widest uppercase text-xs mb-2 block">Our DNA</span>
                <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">Principles that guide us.</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {values.map((val, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 p-8 rounded-[24px] shadow-sm hover:shadow-glow transition-all duration-300 flex gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-14 h-14 bg-tp-blue/5 rounded-2xl flex items-center justify-center text-tp-blue">
                                <val.icon className="w-7 h-7" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
                            <p className="text-slate-500 leading-relaxed">
                                {val.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Perks Section */}
        <div className="bg-slate-900 rounded-[40px] p-10 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
                <h3 className="text-3xl md:text-4xl font-semibold mb-6">Taking care of the people who build the future.</h3>
                <p className="text-slate-400 text-lg">We provide a comprehensive benefits package designed to support your life, health, and career growth.</p>
            </div>
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                {perks.map((perk, idx) => (
                    <div key={idx} className="text-center group">
                        <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-tp-pink transition-colors duration-300">
                            <perk.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="font-bold text-lg mb-1">{perk.label}</div>
                        <div className="text-sm text-slate-400">{perk.desc}</div>
                    </div>
                ))}
            </div>

            {/* Decorative BG */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-tp-purple/30 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </section>
  );
};