import React from 'react';
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'Custom Engineering',
    desc: 'Bespoke platforms tailored to your operational DNA. We build mission-critical software that gives you a competitive edge.',
    img: 'https://picsum.photos/seed/tech1/600/600'
  },
  {
    title: 'Cloud Modernization',
    desc: 'Scalable microservices architecture. We migrate legacy monoliths to resilient, cloud-native environments on AWS, Azure, or GCP.',
    img: 'https://picsum.photos/seed/tech2/600/600'
  },
  {
    title: 'AI Intelligence',
    desc: 'Predictive models and generative workflows. Leverage LLMs and machine learning to automate complex decision-making processes.',
    img: 'https://picsum.photos/seed/tech3/600/600'
  },
  {
    title: 'Enterprise Security',
    desc: 'Fortify your digital assets with Zero Trust architecture, automated compliance auditing, and advanced threat detection systems.',
    img: 'https://picsum.photos/seed/tech4/600/600'
  },
  {
    title: 'IoT Ecosystems',
    desc: 'Connect the physical and digital worlds. We build real-time data pipelines for smart factories, connected fleets, and edge devices.',
    img: 'https://picsum.photos/seed/tech5/600/600'
  },
  {
    title: 'Blockchain Ledger',
    desc: 'Decentralized trust for supply chain and finance. Implement smart contracts and immutable ledgers for absolute transparency.',
    img: 'https://picsum.photos/seed/tech6/600/600'
  }
];

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-32 bg-[#f5f5f7] scroll-mt-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end">
          <div className="max-w-2xl">
            <span className="block text-tp-blue font-bold tracking-widest uppercase text-xs mb-2">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">End-to-End Digital Transformation.</h2>
            <p className="text-lg text-slate-500 font-medium">
                From initial strategy to final deployment and beyond, we provide a full spectrum of engineering services designed to solve your toughest business challenges.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center text-tp-blue font-semibold text-sm hover:underline mt-6 md:mt-0 whitespace-nowrap">
            View all services <ArrowRight className="ml-1 w-4 h-4"/>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <div key={idx} className="group bg-white rounded-[32px] overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-tp-dark/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={sol.img} alt={sol.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-900 tracking-tight">{sol.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm">{sol.desc}</p>
                </div>
                <div className="mt-8 flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center text-slate-900 group-hover:bg-tp-blue group-hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5" />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};