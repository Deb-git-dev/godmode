import React from 'react';
import { ArrowLeft, Waves, Droplets } from 'lucide-react';
import { ShaderCanvas } from '../../components/effects/ShaderCanvas';
import { VIBRANT_OCEANIC_CAUSTICS } from '../../components/effects/vibrant-shaders';

export const OceanicShimmerPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ShaderCanvas fragment={VIBRANT_OCEANIC_CAUSTICS} />
      </div>

      <div className="relative z-10 p-6 flex flex-col justify-between min-h-screen pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-teal-500/30 text-xs font-mono text-teal-300 hover:text-white shadow-lg shadow-teal-950/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          <span className="px-3 py-1.5 rounded-full bg-teal-950/80 backdrop-blur-md border border-teal-500/60 text-teal-300 text-xs font-mono shadow-[0_0_15px_rgba(20,184,166,0.3)]">
            OCEANIC BIOLUMINESCENCE • REF 23
          </span>
        </div>

        <div className="max-w-xl mx-auto text-center space-y-4 pointer-events-auto p-8 rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-teal-500/30 shadow-[0_0_40px_rgba(20,184,166,0.15)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-mono border border-teal-400/40">
            <Waves className="w-3.5 h-3.5 text-teal-400" />
            <span>Multi-Octave Caustic Light Wave Interference</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold bg-gradient-to-r from-teal-300 via-cyan-200 to-sky-400 bg-clip-text text-transparent">
            Oceanic Shimmer
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
            Deep Caribbean turquoise, glowing bioluminescent cyan, and crystalline seafoam caustics modeled with high-frequency procedural wave harmonic simulation.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-900/40 border border-teal-500/30 text-xs font-mono text-teal-300">
            <Droplets className="w-3.5 h-3.5" />
            <span>Refractive Index: 1.333 (Water Caustic Matrix)</span>
          </div>
        </div>

        <div className="text-center text-xs font-mono text-teal-400/70">
          Hardware Shader Caustic Surface • Procedural Dispersion
        </div>
      </div>
    </div>
  );
};
