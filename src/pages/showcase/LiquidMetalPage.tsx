import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { LiquidMetal } from '../../components/animations/liquid-metal';

export const LiquidMetalPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [tint, setTint] = useState('#06b6d4');

  return (
    <div className="relative min-h-screen bg-[#07090E] text-white font-body overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LiquidMetal tint={tint} />
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
            LIQUID METAL MERCURY • REF 15
          </span>
        </div>

        <div className="max-w-xl mx-auto text-center space-y-4 pointer-events-auto p-8 rounded-3xl bg-slate-950/70 backdrop-blur-xl border border-slate-800 shadow-2xl">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Chrome Specular Displacement</span>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white">
            Liquid Mercury Metal
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            Multi-harmonic sinusoidal wave bands simulating organic fluid surface tension and metallic reflection.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            {['#06b6d4', '#a855f7', '#10b981', '#f43f5e', '#ffffff'].map((c) => (
              <button
                key={c}
                onClick={() => setTint(c)}
                className={`w-7 h-7 rounded-full transition-transform ${tint === c ? 'scale-125 ring-2 ring-white' : 'hover:scale-110'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        <div className="text-center text-xs font-mono text-slate-500">
          Fluid Canvas Harmonic Waves • Interactive Metal Tint
        </div>
      </div>
    </div>
  );
};
