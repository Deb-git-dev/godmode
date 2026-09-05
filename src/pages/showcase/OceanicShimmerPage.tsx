import React from 'react';
import { ArrowLeft, Waves } from 'lucide-react';

export const OceanicShimmerPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#050C1A] text-white font-body p-6 flex flex-col justify-between relative overflow-hidden">
      {/* Oceanic Shimmer Wave Canvas */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 25%, #0f172a 60%, #082f49 100%)'
        }}
      />

      <div className="flex items-center justify-between relative z-10">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>
        <span className="px-3 py-1.5 rounded-full bg-sky-950/80 backdrop-blur-md border border-sky-800 text-sky-300 text-xs font-mono">
          OCEANIC SHIMMER GRADIENT • REF 23
        </span>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-6 py-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-mono">
          <Waves className="w-3.5 h-3.5" />
          <span>Deep Sea Specular Waves</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-heading font-extrabold text-white tracking-tight">
          Oceanic Shimmer
        </h1>
        <p className="text-sm sm:text-lg text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
          Deep azure and seafoam reflection layers capturing the tranquil kinetic motion of oceanic swells.
        </p>
      </div>

      <div className="text-center text-xs font-mono text-slate-500 relative z-10">
        Multi-Stop Azure Shimmer Shader
      </div>
    </div>
  );
};
