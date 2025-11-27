import React from 'react';
import { Shield, Crown, Terminal, Dumbbell, MapPin, Users, Beer } from 'lucide-react';
import { PERSONAL_STATS } from '../constants';

const Hero: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Dumbbell: <Dumbbell size={24} className="text-amber-500 mb-2" />,
    MapPin: <MapPin size={24} className="text-amber-500 mb-2" />,
    Users: <Users size={24} className="text-amber-500 mb-2" />,
    Beer: <Beer size={24} className="text-amber-500 mb-2" />,
  };

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center text-center p-8 border-b-4 border-amber-600 overflow-hidden bg-slate-900">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-amber-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 border-2 border-red-500 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white opacity-5 select-none medieval-font">
          RZ
        </div>
      </div>

      <div className="z-10 animate-bounce mb-4">
        <Crown size={80} className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
      </div>

      <h1 className="text-5xl md:text-7xl font-black text-white mb-2 medieval-font tracking-wider">
        <span className="cyber-gradient">SEIGNEUR RZ</span>
      </h1>
      
      <h2 className="text-xl md:text-3xl text-amber-500 font-bold mb-8 medieval-font">
        Ridha Ziani
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full max-w-4xl px-4">
        {PERSONAL_STATS.map((stat, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg flex flex-col items-center hover:bg-slate-800 transition-colors">
            {iconMap[stat.icon]}
            <span className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-mono">{stat.label}</span>
            <span className="text-white font-bold medieval-font text-sm md:text-base">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/80 backdrop-blur-sm border border-amber-600 p-6 rounded-xl max-w-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center gap-3 text-red-400 mb-2">
          <Terminal size={20} />
          <span className="font-mono text-sm uppercase tracking-widest">Nouvelle Promotion Débloquée</span>
          <Terminal size={20} />
        </div>
        <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
          Head of Discipline <br/>
          <span className="text-blue-400">Plateforme, Réseau & Cybersécurité</span>
        </p>
        <p className="mt-4 text-slate-400 italic font-serif">
          "De la vente de baskets à la domination des systèmes embarqués."
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Shield size={16} />
          <span>Validé par Dame Pélépé</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;