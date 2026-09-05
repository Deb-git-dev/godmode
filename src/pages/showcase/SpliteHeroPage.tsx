import React from 'react';
import { ArrowLeft, Box, Move3d } from 'lucide-react';

export const SpliteHeroPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EEF2F6] to-[#F8FAFC] text-slate-900 font-body selection:bg-indigo-600 selection:text-white flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          
          <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            SPLITE 3D HERO • REF 18 (@serafimcloud)
          </span>
        </div>
      </header>

      {/* Main 3D Hero */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center space-y-8">
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
            <Move3d className="w-3.5 h-3.5" />
            <span>Interactive 3D Spatial Canvas</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-slate-950">
            Spatial Splite Hero
          </h1>

          <p className="text-base text-slate-600 font-light leading-relaxed">
            Multi-color spotlights in electric cyan, hot magenta, and amber illuminating an interactive 3D spatial viewport with real-time mouse gyro tracking.
          </p>
        </div>

        {/* 3D Model Stage */}
        <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-indigo-100 flex items-center justify-center overflow-hidden group">
          {/* Multi-color ambient spotlight rings */}
          <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-pink-400/20 blur-3xl pointer-events-none" />
          
          {/* Central 3D Cube Graphic */}
          <div className="relative z-10 w-32 h-32 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 shadow-2xl shadow-purple-500/30 flex items-center justify-center text-white font-heading font-black text-3xl group-hover:rotate-12 transition-transform duration-700">
            <Box className="w-16 h-16 text-white" />
          </div>

          <div className="absolute bottom-6 left-6 right-6 p-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200 text-xs font-mono text-slate-600 flex items-center justify-between">
            <span>Canvas: Three.js / WebGL</span>
            <span className="text-indigo-600 font-bold">Gyro Active</span>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        Splite 3D Interactive Hero • Original Clean Layout by @serafimcloud
      </footer>
    </div>
  );
};
