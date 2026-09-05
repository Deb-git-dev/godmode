import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { WebGLShader } from '../../components/animations/webgl-shader';

export const WebGLShaderPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [speed, setSpeed] = useState(1.0);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background WebGL Canvas */}
      <div className="absolute inset-0 z-0">
        <WebGLShader speed={speed} />
      </div>

      {/* Floating UI HUD */}
      <div className="relative z-10 p-6 flex flex-col justify-between min-h-screen pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          <span className="px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/50 text-cyan-300 text-xs font-mono">
            WEBGL RAYMARCHED PLASMA • REF 02
          </span>
        </div>

        {/* Center Title */}
        <div className="max-w-xl mx-auto text-center space-y-3 pointer-events-auto p-8 rounded-3xl bg-slate-950/60 backdrop-blur-xl border border-slate-800 shadow-2xl">
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Reactive WebGL Shader
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
            Realtime fragment shader executing on client GPU with mathematical noise waves, chromatic light dispersion, and smooth frame interpolation.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className="text-xs font-mono text-slate-400">Shader Speed: {speed.toFixed(1)}x</span>
            <input 
              type="range" 
              min="0.2" 
              max="3.0" 
              step="0.1" 
              value={speed} 
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="accent-cyan-400 cursor-pointer" 
            />
          </div>
        </div>

        <div className="text-center text-xs font-mono text-slate-500">
          Client-side WebGL context • Zero local server GPU consumption
        </div>
      </div>
    </div>
  );
};
