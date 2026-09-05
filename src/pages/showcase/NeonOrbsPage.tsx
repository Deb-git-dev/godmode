import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { ShaderCanvas } from '../../components/effects/ShaderCanvas';
import { VIBRANT_NEON_ORBS } from '../../components/effects/vibrant-shaders';

export const NeonOrbsPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ShaderCanvas fragment={VIBRANT_NEON_ORBS} />
      </div>

      <div className="relative z-10 p-6 flex flex-col justify-between min-h-screen pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 text-xs font-mono text-emerald-300 hover:text-white shadow-lg shadow-emerald-950/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          <span className="px-3 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/60 text-emerald-300 text-xs font-mono shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            NEON ORBS BLOOM • REF 04
          </span>
        </div>

        <div className="max-w-lg mx-auto text-center space-y-4 pointer-events-auto p-8 rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono border border-emerald-400/40">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Multi-Body Gravitational Cluster</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
            Kinetic Neon Orbs
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
            Four high-voltage luminous plasma bodies: Laser Cyan, Hot Magenta, Radioactive Emerald, and Solar Gold with inverse-square bloom halos and interactive cursor gravity.
          </p>

          <div className="flex items-center justify-center gap-2 pt-1 text-xs font-mono">
            <span className="px-2 py-1 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800">#00F0FF</span>
            <span className="px-2 py-1 rounded-md bg-pink-950/80 text-pink-400 border border-pink-800">#FF007F</span>
            <span className="px-2 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800">#00FF66</span>
            <span className="px-2 py-1 rounded-md bg-amber-950/80 text-amber-400 border border-amber-800">#FFB703</span>
          </div>
        </div>

        <div className="text-center text-xs font-mono text-emerald-400/70">
          Client-Side Inverse-Square Bloom • Dynamic Cursor Attraction
        </div>
      </div>
    </div>
  );
};
