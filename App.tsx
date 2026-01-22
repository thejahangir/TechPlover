import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Expertise } from './components/Expertise';
import { Approach } from './components/Approach';
import { Insights } from './components/News';
import { Solutions } from './components/Solutions';
import { Culture } from './components/Culture';
import { Careers } from './components/Careers';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { ScrollToTop } from './components/ScrollToTop';
import { Together } from './components/Together';
import { Connect } from './components/Connect';

function App() {
  return (
    <div className="font-sans selection:bg-tp-pink selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Expertise />
        <Approach />
        <Solutions />
        <Testimonials />
        <Together />
        <Culture />
        <Careers />
        <Insights />
        <Connect />
      </main>
      <Footer />
      <ScrollToTop />
      
      {/* Persistent CTA Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button className="bg-tp-pink text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;