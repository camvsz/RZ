import React, { useState } from 'react';
import { generateCongratulation } from '../services/gemini';
import { Sparkles, ScrollText, Send } from 'lucide-react';

const GeminiBard: React.FC = () => {
  const [generatedText, setGeneratedText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("Réclame mon Tribut de l'Hydromel au Seigneur RZ !");

  const handleGenerate = async () => {
    setLoading(true);
    setGeneratedText(null);
    try {
      const text = await generateCongratulation(prompt);
      setGeneratedText(text);
    } catch (e: any) {
      setGeneratedText("Erreur : Le barde est parti à la taverne sans payer. (Vérifiez la clé API)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-4 bg-slate-950 border-t border-slate-800">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-amber-500/20 p-4 rounded-full">
            <Sparkles className="text-amber-400 w-12 h-12" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl medieval-font text-white mb-6">
          L'Oracle de Dame Pélépé
        </h2>
        
        <p className="text-slate-400 mb-8 font-mono">
          Invoquez l'IA pour rappeler au Seigneur RZ que la gloire ne vaut rien sans le partage de l'Hydromel.
          (Et mentionnez ses biscotos, il aime bien ça).
        </p>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-2xl">
           <div className="flex gap-2 mb-6">
             <input 
                type="text" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 font-mono"
                placeholder="Dis au barde quoi chanter..."
             />
             <button 
              onClick={handleGenerate}
              disabled={loading}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
             >
               {loading ? 'Incantation...' : <><Send size={18} /> INVOQUER</>}
             </button>
           </div>

           {generatedText && (
             <div className="text-left bg-black/50 p-6 rounded-lg border-l-4 border-amber-500 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="flex items-start gap-3">
                 <ScrollText className="text-amber-500 min-w-[24px]" />
                 <div className="prose prose-invert prose-amber max-w-none">
                   <p className="whitespace-pre-line text-lg font-serif italic text-slate-200 leading-8">
                     {generatedText}
                   </p>
                 </div>
               </div>
               <div className="mt-4 text-right text-xs text-slate-600 font-mono">
                 Généré par Gemini 2.5 Flash
               </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default GeminiBard;