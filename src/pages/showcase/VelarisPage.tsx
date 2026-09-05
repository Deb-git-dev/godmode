import React from 'react';
import { ArrowLeft, Moon } from 'lucide-react';

export const VelarisPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#050711] text-white font-body p-6 flex flex-col justify-between relative overflow-hidden">
      {/* Starfield simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="flex items-center justify-between relative z-10">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>
        <span className="px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-700 text-blue-300 text-xs font-mono">
          VELARIS CELESTIAL HERO • REF 12
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 py-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono">
          <Moon className="w-3.5 h-3.5 text-blue-400" />
          <span>The City of Starlight</span>
        </div>
        <h1 className="text-6xl sm:text-8xl font-heading font-extrabold tracking-tight text-white leading-none">
          VELARIS
        </h1>
        <p className="text-sm sm:text-lg text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
          Where dreams are woven into constellations and digital artistry meets the eternal night.
        </p>
      </div>

      <div className="text-center text-xs font-mono text-slate-500 relative z-10">
        Starlight Particle Grid • Celestial Micro-Interactions
      </div>
    </div>
  );
};
