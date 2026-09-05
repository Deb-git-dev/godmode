import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { NeuralNoise } from '../../components/animations/neural-noise';

export const NeuralNoisePage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [color, setColor] = useState('#6366F1');

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <NeuralNoise color={color} density={35} speed={0.003} />
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
          <span className="px-3 py-1.5 rounded-full bg-indigo-950/80 backdrop-blur-md border border-indigo-700 text-indigo-300 text-xs font-mono">
            NEURAL PERLIN NOISE MESH • REF 03
          </span>
        </div>

        <div className="max-w-md mx-auto text-center space-y-4 pointer-events-auto p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Neural Noise Vector Field
          </h1>
          <p className="text-xs text-slate-300 font-body">
            Mathematical vector field simulation visualizing harmonic wave interference patterns and fluid turbulence.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            {['#6366F1', '#06B6D4', '#10B981', '#F43F5E', '#F59E0B'].map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-7 h-7 rounded-full transition-transform ${color === c ? 'scale-125 ring-2 ring-white' : 'hover:scale-110'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        <div className="text-center text-xs font-mono text-slate-500">
          Procedural 2D Vector Stream • 60 FPS
        </div>
      </div>
    </div>
  );
};
