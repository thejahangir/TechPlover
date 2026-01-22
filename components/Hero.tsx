import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Requested corporate office video: Men and women busy working on computers */}
          <source 
            src="https://videos.pexels.com/video-files/3251737/3251737-hd_1920_1080_25fps.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Uniform Overlay: 90% opacity */}
        <div className="absolute inset-0 bg-slate-900/90"></div>
      </div>
      
      {/* Background Graphic Elements - Gradients overlaying the video for brand tint */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-tp-purple to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4 mix-blend-screen opacity-50"></div>
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-tp-blue to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4 mix-blend-screen opacity-30"></div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0 mix-blend-overlay pointer-events-none"></div>

      {/* Decorative Side Element (Absolute Positioned, Vertically Centered) */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center space-y-12 z-20">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-tp-yellow to-transparent shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
          <div className="[writing-mode:vertical-rl] rotate-180 text-sm tracking-[0.3em] uppercase font-semibold text-slate-200 drop-shadow-md">Innovation</div>
          <div className="[writing-mode:vertical-rl] rotate-180 text-sm tracking-[0.3em] uppercase font-semibold text-slate-200 drop-shadow-md">Engineering</div>
          <div className="w-px h-32 bg-gradient-to-b from-tp-blue via-transparent to-transparent shadow-[0_0_10px_rgba(30,58,138,0.5)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-20">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-8 drop-shadow-lg">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tp-blue via-tp-pink to-tp-yellow">Digital</span>{' '}
            Velocity.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            We accelerate business growth through high-performance software engineering, cloud modernization, and data-driven intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient">Partner With Us</Button>
            <Button variant="outline" className="border-white text-white hover:border-tp-yellow hover:text-tp-yellow backdrop-blur-sm bg-white/5">Explore Capabilities</Button>
          </div>
        </div>

        {/* Centered Decorative Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none -z-10"></div>
      </div>
    </section>
  );
};