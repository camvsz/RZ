import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import GeminiBard from './components/GeminiBard';
import { Zap } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-amber-500 selection:text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-amber-500 font-bold medieval-font text-lg md:text-xl tracking-widest flex items-center gap-2">
            <Zap size={20} />
            THALES CORPS
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        <Hero />
        
        <div className="relative">
          {/* Decorative Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
             <svg className="relative block w-[calc(100%+1.3px)] h-[30px] md:h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                 <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-slate-900"></path>
             </svg>
          </div>

          <Timeline />
          
          <div className="py-12 flex justify-center">
             <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>

          <GeminiBard />
        </div>
      </main>

      <footer className="bg-black py-8 text-center border-t border-slate-800 px-4">
        <p className="medieval-font text-amber-600 text-lg">
          "Rageux, mais Juste."
        </p>
        <p className="text-slate-600 text-sm mt-2 font-mono">
          Fait par Dame Pélépé avec l'aide de l'IA
        </p>
      </footer>
    </div>
  );
};

export default App;