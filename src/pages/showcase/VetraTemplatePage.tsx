import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const VetraTemplatePage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0C0D10] text-[#E5E7EB] font-body p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>
        <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">VETRA ARCHITECTURAL STUDIO • REF 11</span>
      </div>

      <div className="max-w-6xl mx-auto w-full py-16 space-y-16">
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Zurich / Tokyo / New York</span>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white leading-tight">
            Monolithic structures carved from light and silence.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {[
            { title: "Pavilion Noir", loc: "Kyoto, Japan", img: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&auto=format&fit=crop" },
            { title: "Glass Monolith", loc: "Reykjavik, Iceland", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop" },
            { title: "Atelier Sol", loc: "Zurich, Switzerland", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop" },
          ].map((proj, i) => (
            <div key={i} className="space-y-3 group cursor-pointer">
              <div className="h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-white group-hover:text-cyan-400 transition-colors">{proj.title}</span>
                <span className="text-slate-500">{proj.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800/80 pt-4 text-center text-xs font-mono text-slate-500">
        Minimalist Editorial Architecture Portfolio
      </div>
    </div>
  );
};
