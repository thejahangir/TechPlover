import React, { useRef, useState } from "react";
import { Button } from "./Button";
import office from "../src/assets/video/office3.mp4";

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fade, setFade] = useState(false);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    // Start fade shortly before loop restart
    if (video.duration - video.currentTime < 0.6) {
      setFade(true);
    } else {
      setFade(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-75" : "opacity-100"
          }`}
        >
          <source src={office} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay to smooth loop + improve readability */}
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      {/* Gradient Effects */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-tp-purple to-transparent rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 mix-blend-screen opacity-50" />
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-tp-blue to-transparent rounded-full blur-3xl translate-x-1/4 -translate-y-1/4 mix-blend-screen opacity-30" />
      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay z-0 pointer-events-none" />

      {/* Left Vertical Labels */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-12 z-20">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-tp-yellow to-transparent shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
        <div className="[writing-mode:vertical-rl] rotate-180 text-sm tracking-[0.3em] uppercase font-semibold text-slate-200">
          Innovation
        </div>
        <div className="[writing-mode:vertical-rl] rotate-180 text-sm tracking-[0.3em] uppercase font-semibold text-slate-200">
          Engineering
        </div>
        <div className="w-px h-32 bg-gradient-to-b from-tp-blue via-transparent to-transparent shadow-[0_0_10px_rgba(30,58,138,0.5)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-20">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-8">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tp-blue via-tp-pink to-tp-yellow">
              Digital
            </span>{" "}
            Velocity.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            We accelerate business growth through high-performance software
            engineering, cloud modernization, and data-driven intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient">Partner With Us</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:border-tp-yellow hover:text-tp-yellow bg-white/5 backdrop-blur-sm"
            >
              Explore Capabilities
            </Button>
          </div>
        </div>

        {/* Decorative Rings */}
        <div className="absolute inset-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full pointer-events-none -z-10" />
        <div className="absolute inset-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full pointer-events-none -z-10" />
      </div>
    </section>
  );
};
