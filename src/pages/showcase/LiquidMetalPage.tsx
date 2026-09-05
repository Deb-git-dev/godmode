import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';
import { ShaderCanvas } from '../../components/effects/ShaderCanvas';
import { VIBRANT_LIQUID_CHROME } from '../../components/effects/vibrant-shaders';

export const LiquidMetalPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-white font-body overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ShaderCanvas fragment={VIBRANT_LIQUID_CHROME} />
      </div>

      <div className="relative z-10 p-6 flex flex-col justify-between min-h-screen pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:text-white shadow-lg shadow-cyan-950/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          <span className="px-3 py-1.5 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-500/60 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            CHROMATIC QUICKSILVER • REF 15
          </span>
        </div>

        <div className="max-w-xl mx-auto text-center space-y-4 pointer-events-auto p-8 rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono border border-cyan-400/40">
            <Compass className="w-3.5 h-3.5" />
            <span>Ray-Marched SDF Metaballs & Chromatic Fresnel</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold bg-gradient-to-r from-white via-cyan-200 to-pink-300 bg-clip-text text-transparent">
            Chromatic Quicksilver
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            Liquid metal with iridescent thin-film spectral reflections, specular normal-map lighting, and smooth-min fusion. Drag pointer across the canvas to pull the mercury flow.
          </p>

          <p className="text-xs font-mono text-cyan-400">
            Move mouse or touch screen to distort the metallic surface
          </p>
        </div>

        <div className="text-center text-xs font-mono text-cyan-400/70">
          Iridescent Ray-Marching Engine • 60 FPS Client-Side Acceleration
        </div>
      </div>
    </div>
  );
};
