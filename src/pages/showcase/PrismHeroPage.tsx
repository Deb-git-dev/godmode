import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';

export const PrismHeroPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-body p-6 flex flex-col justify-between relative overflow-hidden">
      {/* Prism Light Beams Simulation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/20 to-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between relative z-10">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>
        <span className="px-3 py-1.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono">
          BEVEL PRISM HERO • REF 10
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 py-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Chromatic Light Dispersion Architecture</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-heading font-extrabold tracking-tight text-white leading-tight">
          Refracting Intelligence Into Pure Light
        </h1>
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Splitting complex autonomous workflows through high-precision geometric prisms into streamlined, verifiable microservices.
        </p>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 text-white font-mono text-xs font-bold shadow-xl hover:scale-105 transition-transform">
            Explore Prism Engine
          </button>
          <button className="px-6 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-700 text-slate-200 font-mono text-xs hover:bg-slate-800 transition-colors">
            Inspect Dispersion Matrix
          </button>
        </div>
      </div>

      <div className="text-center text-xs font-mono text-slate-500 relative z-10">
        Double-Bezel Glass Dispersion • Ray Refraction
      </div>
    </div>
  );
};
