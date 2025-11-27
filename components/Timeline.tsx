import React from 'react';
import { CAREER_PATH } from '../constants';
import { SkillType } from '../types';
import { Sword, ShoppingBag, Server, ShieldCheck, Briefcase } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl text-center text-amber-500 mb-12 medieval-font border-b border-amber-500/30 pb-4">
        Les Conquêtes du Seigneur
      </h2>

      <div className="relative border-l-4 border-slate-700 ml-4 md:ml-10 space-y-12">
        {CAREER_PATH.map((job, index) => {
          const isCurrent = job.isCurrent;
          let Icon = Briefcase;
          if (job.type === SkillType.RETAIL) Icon = ShoppingBag;
          if (job.title.includes('Head')) Icon = ShieldCheck;
          if (job.title.includes('Technique') || job.title.includes('Développement')) Icon = Server;
          if (job.title.includes('Consultant')) Icon = Sword;

          return (
            <div key={job.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot/Icon */}
              <div className={`absolute -left-[1.3rem] top-0 p-2 rounded-full border-4 ${
                isCurrent ? 'bg-amber-500 border-amber-700 text-slate-900 animate-pulse' : 'bg-slate-800 border-slate-600 text-slate-400'
              }`}>
                <Icon size={24} />
              </div>

              {/* Content Card */}
              <div className={`
                p-6 rounded-lg border-2 transition-all duration-300
                ${isCurrent 
                  ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]' 
                  : 'bg-slate-900 border-slate-700 hover:border-slate-500'
                }
              `}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className={`text-xl font-bold ${isCurrent ? 'text-amber-400' : 'text-slate-200'}`}>
                    {job.title}
                  </h3>
                  <span className="font-mono text-sm text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                    {job.period}
                  </span>
                </div>
                
                <h4 className="text-lg text-red-400 font-serif mb-3 flex items-center gap-2">
                  {job.company}
                  {job.type === SkillType.RETAIL && <span className="text-xs text-slate-500">(Le début de la légende)</span>}
                </h4>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map(skill => (
                    <span key={skill} className={`
                      text-xs px-2 py-1 rounded font-bold uppercase tracking-wide
                      ${isCurrent ? 'bg-amber-900/40 text-amber-300 border border-amber-700' : 'bg-slate-800 text-slate-400 border border-slate-700'}
                    `}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;