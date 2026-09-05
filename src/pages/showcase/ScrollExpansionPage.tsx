import React from 'react';
import { ArrowLeft, ArrowDown } from 'lucide-react';

export const ScrollExpansionPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-[180vh] bg-slate-950 text-white font-body p-6 flex flex-col justify-between">
      <div className="sticky top-6 z-20 flex items-center justify-between">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>
        <span className="px-3 py-1.5 rounded-full bg-cyan-950/90 backdrop-blur-md border border-cyan-700 text-cyan-300 text-xs font-mono">
          SCROLL EXPANSION HERO • REF 16
        </span>
      </div>

      <div className="py-20 max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white">
          Viewport Expansion Canvas
        </h1>
        <p className="text-sm text-slate-400 font-light flex items-center justify-center gap-2">
          <span>Scroll down to watch the container expand into full screen view</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </p>
      </div>

      {/* Centered Expanding Card */}
      <div className="max-w-5xl mx-auto w-full h-[70vh] rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl relative group">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop" 
          alt="Expansion hero" 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-8 sm:p-12">
          <span className="text-xs font-mono text-cyan-400">EXPANDED SURFACE VIEW</span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">Immersive Full-Bleed Media</h2>
        </div>
      </div>

      <div className="text-center text-xs font-mono text-slate-500 py-8">
        Full-Bleed Aspect Ratio Interpolation
      </div>
    </div>
  );
};
