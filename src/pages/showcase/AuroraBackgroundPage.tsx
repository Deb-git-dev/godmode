import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { AuroraBackground } from '../../components/animations/aurora-background';

export const AuroraBackgroundPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen text-slate-900 font-body overflow-hidden flex flex-col justify-between">
      {/* Full-screen Radiant Aurora Background */}
      <div className="absolute inset-0 z-0">
        <AuroraBackground className="h-full w-full opacity-90" />
      </div>

      {/* Top Header */}
      <header className="relative z-10 p-6 flex items-center justify-between">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 text-xs font-semibold text-slate-900 shadow-xl hover:bg-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>

        <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/50 text-xs font-mono font-bold text-violet-900 shadow-xl">
          AURORA BACKGROUND • REF 14 (@manuarora700)
        </span>
      </header>

      {/* Floating Center Frost Glass Card */}
      <main className="relative z-10 max-w-2xl mx-auto px-6 py-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/60 shadow-2xl shadow-violet-950/10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Atmospheric Aurora Borealis</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-slate-900">
            Radiant Aurora Waves
          </h1>

          <p className="text-base text-slate-700 leading-relaxed font-light">
            Vivid multi-stop fluid gradient waves undulating across the viewport with emerald, violet, sky blue, and hot magenta illumination.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2 text-xs font-mono font-semibold">
            <span className="px-3 py-1.5 rounded-xl bg-violet-100 text-violet-800">Violet Wave</span>
            <span className="px-3 py-1.5 rounded-xl bg-teal-100 text-teal-800">Emerald Stream</span>
            <span className="px-3 py-1.5 rounded-xl bg-pink-100 text-pink-800">Magenta Glow</span>
          </div>
        </div>
      </main>

      <footer className="relative z-10 p-6 text-center text-xs font-semibold text-slate-900/80">
        Original Aurora Background by @manuarora700 • Full-Bleed Radiant Atmospheric Mesh
      </footer>
    </div>
  );
};
