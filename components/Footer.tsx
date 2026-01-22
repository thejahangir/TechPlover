import React from 'react';
import { Logo } from './Logo';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 pr-8">
             <Logo className="h-8 mb-6" lightMode />
             <p className="mb-6 text-slate-400 text-sm leading-relaxed">
               Delivering digital transformation at global scale with engineering excellence.
             </p>
             <div className="flex space-x-4">
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={18} /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={18} /></a>
             </div>
          </div>

          <div>
             <h4 className="font-semibold text-white mb-6">Services</h4>
             <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Cloud Native</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI & ML</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Engineering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-semibold text-white mb-6">Company</h4>
             <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#culture" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
             </ul>
          </div>

           <div>
             <h4 className="font-semibold text-white mb-6">Contact</h4>
             <ul className="space-y-3 text-sm text-slate-400">
                <li>#226, 10 M,</li>
                <li>100 Ft Road, HRBR Layout,</li>
                <li>Block 1, Kalyan Nagar,</li>
                <li>Bangalore - 560 043. India.</li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
           <p>© 2025 TechPlover Inc. All rights reserved.</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy</a>
             <a href="#" className="hover:text-white">Terms</a>
             <a href="#" className="hover:text-white">Sitemap</a>
           </div>
        </div>
      </div>
    </footer>
  );
};