import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { NeonOrbs } from '../../components/animations/neon-orbs';

export const NeonOrbsPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-[#07090E] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <NeonOrbs orbCount={6} />
      </div>

      <div className="relative z-10 p-6 flex flex-col justify-between min-h-screen pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          <span className="px-3 py-1.5 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-700 text-cyan-300 text-xs font-mono">
            NEON ORBS BLOOM • REF 04
          </span>
        </div>

        <div className="max-w-lg mx-auto text-center space-y-4 pointer-events-auto p-8 rounded-3xl bg-slate-950/70 backdrop-blur-xl border border-slate-800 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono border border-cyan-400/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multi-Orb Specular Collision</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Kinetic Neon Orbs
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
            Floating luminous spheres with dynamic radial gradient bloom, boundary reflection vectors, and additive color blending.
          </p>
        </div>

        <div className="text-center text-xs font-mono text-slate-500">
          Additive Radial Canvas Render
        </div>
      </div>
    </div>
  );
};
