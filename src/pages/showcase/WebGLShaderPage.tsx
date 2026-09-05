import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Activity } from 'lucide-react';
import { ShaderCanvas } from '../../components/effects/ShaderCanvas';
import { VIBRANT_FLOW_FIELD, VIBRANT_NEURAL_NOISE } from '../../components/effects/vibrant-shaders';

export const WebGLShaderPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [shaderMode, setShaderMode] = useState<'flow' | 'neural'>('flow');
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 });

  return (
    <div className="relative min-h-screen bg-[#07090e] text-white overflow-hidden">
      {/* Background WebGL Shader */}
      <div className="absolute inset-0 z-0">
        <ShaderCanvas 
          fragment={shaderMode === 'flow' ? VIBRANT_FLOW_FIELD : VIBRANT_NEURAL_NOISE} 
          onPointerMove={(x, y) => setCoords({ x, y })}
        />
      </div>

      {/* Floating HUD */}
      <div className="relative z-10 p-6 flex flex-col justify-between min-h-screen pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:text-white transition-colors shadow-lg shadow-cyan-950/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-400/60 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              VIBRANT CHROMATIC GLSL • REF 02
            </span>
          </div>
        </div>

        {/* Center Card */}
        <div className="max-w-xl mx-auto text-center space-y-4 pointer-events-auto p-8 rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono border border-cyan-400/40">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>Full-Spectrum Harmonic Interference</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
            Luminous Flow Field
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
            Real-time ray-marched trigonometric wave field executing on client GPU. Responsive to mouse coordinates with saturated cyan, cobalt, and electric ultraviolet wave dynamics.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShaderMode('flow')}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono transition-all ${shaderMode === 'flow' ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'bg-slate-900/80 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400'}`}
            >
              Flow Field Raymarch
            </button>
            <button
              onClick={() => setShaderMode('neural')}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono transition-all ${shaderMode === 'neural' ? 'bg-indigo-500 text-white font-bold shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-slate-900/80 text-indigo-400 border border-indigo-500/30 hover:border-indigo-400'}`}
            >
              Neural Synapse FBM
            </button>
          </div>

          <div className="pt-2 flex items-center justify-center gap-4 text-xs font-mono text-cyan-400/80">
            <Activity className="w-3.5 h-3.5" />
            <span>Pointer: ({coords.x.toFixed(2)}, {coords.y.toFixed(2)})</span>
          </div>
        </div>

        <div className="text-center text-xs font-mono text-cyan-500/70">
          Hardware-Accelerated WebGL Context • Zero Backend GPU Compute
        </div>
      </div>
    </div>
  );
};
