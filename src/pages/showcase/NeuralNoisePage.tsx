import React, { useState } from 'react';
import { ArrowLeft, Cpu, Sliders } from 'lucide-react';
import { ShaderCanvas } from '../../components/effects/ShaderCanvas';
import { VIBRANT_NEURAL_NOISE } from '../../components/effects/vibrant-shaders';

export const NeuralNoisePage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [pulseSpeed, setPulseSpeed] = useState(1.0);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ShaderCanvas fragment={VIBRANT_NEURAL_NOISE} />
      </div>

      <div className="relative z-10 p-6 flex flex-col justify-between min-h-screen pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-purple-500/30 text-xs font-mono text-purple-300 hover:text-white transition-colors shadow-lg shadow-purple-950/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          <span className="px-3 py-1.5 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-500/60 text-purple-300 text-xs font-mono shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            SYNAPSE NEURAL NOISE • REF 03
          </span>
        </div>

        <div className="max-w-xl mx-auto text-center space-y-4 pointer-events-auto p-8 rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono border border-purple-400/40">
            <Cpu className="w-3.5 h-3.5" />
            <span>Fractal Brownian Motion (FBM) Synapses</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
            Neural Energy Field
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
            Procedural simplex fractal noise simulating bio-electric action potentials. Glowing ultraviolet veins with laser magenta accents reacting to cursor interaction.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4 bg-slate-900/60 p-3 rounded-2xl border border-purple-500/20">
            <Sliders className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-mono text-purple-300">Resonance Scale: {pulseSpeed.toFixed(1)}x</span>
            <input 
              type="range" 
              min="0.5" 
              max="2.5" 
              step="0.1" 
              value={pulseSpeed}
              onChange={(e) => setPulseSpeed(parseFloat(e.target.value))}
              className="accent-purple-400 cursor-pointer" 
            />
          </div>
        </div>

        <div className="text-center text-xs font-mono text-purple-400/70">
          Continuous GPU Procedural Shader • Zero Texture Memory Footprint
        </div>
      </div>
    </div>
  );
};
