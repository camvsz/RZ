import React from 'react';
import { CAREER_PATH } from '../constants';
import { SkillType } from '../types';
import { Sword, ShoppingBag, Server, ShieldCheck, Briefcase, GraduationCap, Bot } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <div className="py-16 px-2 md:px-4 max-w-4xl mx-auto overflow-hidden">
      <h2 className="text-3xl md:text-4xl text-center text-amber-500 mb-12 medieval-font border-b border-amber-500/30 pb-4 mx-4">
        Les Conquêtes du Seigneur
      </h2>

      <div className="relative border-l-4 border-slate-700 ml-4 md:ml-10 space-y-12">
        {CAREER_PATH.map((job, index) => {
          const isCurrent = job.isCurrent;
          let Icon = Briefcase;
          let colorClass = 'text-slate-400 border-slate-600 bg-slate-800';

          if (job.type === SkillType.RETAIL) {
            Icon = ShoppingBag;
          } else if (job.type === SkillType.EDUCATION) {
            Icon = GraduationCap;
            colorClass = 'text-blue-400 border-blue-600 bg-slate-800';
          } else if (job.type === SkillType.PROJECT) {
            Icon = Bot;
            colorClass = 'text-green-400 border-green-600 bg-slate-800';
          } else {
            // Tech & Management
            if (job.title.includes('Head')) Icon = ShieldCheck;
            else if (job.title.includes('Technique') || job.title.includes('Développement')) Icon = Server;
            else if (job.title.includes('Consultant') || job.title.includes('Stagiaire')) Icon = Sword;
            
            if (isCurrent) colorClass = 'bg-amber-500 border-amber-700 text-slate-900 animate-pulse';
          }

          return (
            <div key={job.id} className="relative pl-6 md:pl-12 group pr-2">
              {/* Timeline Dot/Icon */}
              <div className={`absolute -left-[1.3rem] top-0 p-2 rounded-full border-4 ${colorClass} z-10 bg-slate-900`}>
                <Icon size={20} className="md:w-6 md:h-6" />
              </div>

              {/* Content Card */}
              <div className={`
                p-4 md:p-6 rounded-lg border-2 transition-all duration-300 relative
                ${isCurrent 
                  ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]' 
                  : 'bg-slate-900 border-slate-700 hover:border-slate-500'
                }
                ${job.type === SkillType.EDUCATION ? 'border-l-4 border-l-blue-500' : ''}
                ${job.type === SkillType.PROJECT ? 'border-l-4 border-l-green-500' : ''}
              `}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-1">
                  <h3 className={`text-lg md:text-xl font-bold ${isCurrent ? 'text-amber-400' : 'text-slate-200'}`}>
                    {job.title}
                  </h3>
                  <span className="self-start md:self-auto font-mono text-xs md:text-sm text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                
                <h4 className={`text-base md:text-lg font-serif mb-3 flex flex-wrap items-center gap-2 ${job.type === SkillType.EDUCATION ? 'text-blue-400' : 'text-red-400'}`}>
                  {job.company}
                  {job.type === SkillType.RETAIL && <span className="text-xs text-slate-500">(Le début de la légende)</span>}
                </h4>

                <p className="text-slate-300 mb-4 leading-relaxed text-sm md:text-base">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map(skill => (
                    <span key={skill} className={`
                      text-[10px] md:text-xs px-2 py-1 rounded font-bold uppercase tracking-wide
                      ${isCurrent 
                        ? 'bg-amber-900/40 text-amber-300 border border-amber-700' 
                        : job.type === SkillType.EDUCATION 
                          ? 'bg-blue-900/20 text-blue-300 border border-blue-800'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }
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