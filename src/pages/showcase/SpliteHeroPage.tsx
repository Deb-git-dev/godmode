import React from 'react';
import { ArrowLeft, Box } from 'lucide-react';

export const SpliteHeroPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-body p-6 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between relative z-10">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>
        <span className="px-3 py-1.5 rounded-full bg-purple-950 border border-purple-700 text-purple-300 text-xs font-mono">
          SPLITE 3D INTERACTIVE HERO • REF 18
        </span>
      </div>

      <div className="max-w-5xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Spatial Computing Engine</span>
          <h1 className="text-5xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-none">
            3D Spatial Web Interfaces
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Floating volumetric cards with real-time shadow projection, depth layering, and tactile responsiveness.
          </p>
          <div className="flex items-center gap-3">
            <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold shadow-xl transition-all">
              Initialize Scene
            </button>
          </div>
        </div>

        {/* Floating 3D Card Mockup */}
        <div className="relative h-80 flex items-center justify-center">
          <div className="w-72 h-80 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-500/50 shadow-2xl p-6 flex flex-col justify-between transform rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="flex justify-between items-center">
              <Box className="w-6 h-6 text-cyan-400" />
              <span className="text-[10px] font-mono text-indigo-300">SPLITE 3D</span>
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-heading font-bold text-white">Spatial Layer #01</h4>
              <p className="text-xs font-mono text-slate-400">Interactive Gyro Tilt</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs font-mono text-slate-500 relative z-10">
        Layered 3D Depth Transforms
      </div>
    </div>
  );
};
