import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { AuroraBackground } from '../../components/animations/aurora-background';

export const AuroraBackgroundPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white font-body overflow-hidden">
      <AuroraBackground className="min-h-screen p-6">
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          <span className="px-3 py-1.5 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-700 text-cyan-300 text-xs font-mono">
            ACETERNITY AURORA BACKGROUND • REF 14
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Shifting Atmospheric Aurora Bands</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white leading-tight">
            Backgrounds That Glow With Life
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl mx-auto">
            Dynamic repeating multi-stop gradients with Gaussian diffusion, mix-blend light difference, and smooth infinite rotation.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <button className="px-8 py-3 rounded-2xl bg-white text-black font-mono text-xs font-bold shadow-xl hover:scale-105 transition-transform">
              Deploy Component
            </button>
            <button className="px-6 py-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 font-mono text-xs hover:bg-slate-800 transition-colors">
              Inspect Tokens
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 text-center text-xs font-mono text-slate-500">
          CSS Repeating Gradient Shader • Smooth Hardware Acceleration
        </div>
      </AuroraBackground>
    </div>
  );
};
