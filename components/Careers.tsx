import React from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

const jobs = [
    { 
        title: "Senior Backend Engineer", 
        loc: "Remote", 
        type: "Full-time",
        desc: "Architect scalable APIs and microservices handling millions of requests per second. Experience with Go, gRPC, and Kubernetes is essential for this high-impact role."
    },
    { 
        title: "Lead Product Designer", 
        loc: "London, UK", 
        type: "Hybrid",
        desc: "Define the visual language of our next-gen enterprise tools. You will own the design system and collaborate closely with engineering to ship world-class UX."
    },
    { 
        title: "DevOps Architect", 
        loc: "Bangalore, IN", 
        type: "On-site",
        desc: "Build and maintain our global CI/CD pipelines and cloud infrastructure. Deep knowledge of Terraform, AWS, and security best practices is required."
    },
    { 
        title: "AI/ML Researcher", 
        loc: "San Francisco, US", 
        type: "On-site",
        desc: "Push the boundaries of generative models and LLMs. PhD in Computer Science or related field with a strong publication history is preferred."
    },
];

export const Careers: React.FC = () => {
    return (
        <section id="careers" className="py-32 bg-[#f5f5f7] scroll-mt-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-gradient-to-l from-tp-blue/5 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-tp-blue font-bold tracking-widest uppercase text-xs mb-2 block">Careers</span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-tp-blue to-tp-purple">TechPlover.</span></h2>
                        <p className="text-xl text-slate-500 font-medium mt-4 max-w-xl">
                            We are looking for exceptional minds to help us shape the digital infrastructure of tomorrow.
                        </p>
                    </div>
                    <a href="#" className="hidden md:inline-flex items-center text-slate-900 font-bold hover:text-tp-blue transition-colors">
                        View all 12 open positions <ArrowRight className="ml-2 w-4 h-4"/>
                    </a>
                </div>

                <div className="grid gap-6">
                    {jobs.map((job, idx) => (
                        <div key={idx} className="group bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-slate-100 hover:border-tp-blue/30 hover:shadow-glow transition-all duration-300 flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden">
                            {/* Hover Highlight Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-tp-blue transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                            
                            <div className="flex-1">
                                <div className="flex flex-wrap gap-3 mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                                    <div className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full group-hover:bg-tp-blue/5 group-hover:text-tp-blue transition-colors">
                                        <MapPin className="w-3 h-3" /> {job.loc}
                                    </div>
                                    <div className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-full group-hover:bg-tp-blue/5 group-hover:text-tp-blue transition-colors">
                                        <Clock className="w-3 h-3" /> {job.type}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-tp-blue transition-colors">{job.title}</h3>
                                <p className="text-slate-600 leading-relaxed max-w-3xl">
                                    {job.desc}
                                </p>
                            </div>

                            <div className="flex-shrink-0">
                                <button className="px-6 py-3 rounded-full border border-slate-200 text-slate-900 font-semibold group-hover:bg-tp-blue group-hover:border-tp-blue group-hover:text-white transition-all duration-300 flex items-center gap-2">
                                    Apply Now
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-block text-tp-blue font-semibold hover:underline text-lg">View all 12 open roles</a>
                </div>
            </div>
        </section>
    );
};