import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import GeminiBard from './components/GeminiBard';
import { Zap } from 'lucide-react';

const App: React.FC = () => {
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  useEffect(() => {
    if (!process.env.API_KEY) {
      setApiKeyMissing(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-amber-500 selection:text-white">
      {/* Disclaimer for User about API Key */}
      {apiKeyMissing && (
        <div className="bg-red-900/50 text-red-200 px-4 py-2 text-center text-sm border-b border-red-700">
          ⚠️ Attention Dame Pélépé: La clé API Gemini (process.env.API_KEY) semble manquante. Le Barde sera muet.
        </div>
      )}

      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-amber-500 font-bold medieval-font text-xl tracking-widest flex items-center gap-2">
            <Zap size={20} />
            THALES CORPS
          </div>
          <div className="text-xs font-mono text-slate-400">
            PROJET: SEIGNEUR RZ
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        <Hero />
        
        <div className="relative">
          {/* Decorative Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
             <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
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

      <footer className="bg-black py-8 text-center border-t border-slate-800">
        <p className="medieval-font text-amber-600 text-lg">
          "Rageux, mais Juste."
        </p>
        <p className="text-slate-600 text-sm mt-2 font-mono">
          Fait avec ❤️ et du code sale par Dame Pélépé
        </p>
      </footer>
    </div>
  );
};

export default App;