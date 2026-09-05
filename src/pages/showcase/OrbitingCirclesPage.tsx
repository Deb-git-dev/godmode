import React, { useState } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { OrbitingCircles } from '../../components/animations/orbiting-circles';

export const OrbitingCirclesPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [speed, setSpeed] = useState(1.0);

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 font-body selection:bg-indigo-600 selection:text-white flex flex-col justify-between">
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
          
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
              ORBITING CIRCLES • REF 05 (@dillionverma)
            </span>
          </div>
        </div>
      </header>

      {/* Main Orbit Stage */}
      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center text-center space-y-8">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clean Light Visual Design</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-slate-900">
            Concentric Orbital Rings
          </h1>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            SVG mathematical orbit trajectories with customizable period, radius offsets, and colorful satellite brand nodes on a crisp, bright canvas.
          </p>
        </div>

        {/* Orbit Canvas Card */}
        <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex items-center justify-center overflow-hidden">
          {/* Subtle concentric grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
          
          {/* Central Logo */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center font-heading font-black text-xl shadow-xl shadow-indigo-200">
            GOD
          </div>

          {/* Orbit System */}
          <OrbitingCircles duration={20 / speed} radius={110}  className="text-cyan-600">
            <span className="w-9 h-9 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 flex items-center justify-center text-xs font-bold shadow-md">
              ⚛
            </span>
            <span className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center text-xs font-bold shadow-md">
              TS
            </span>
          </OrbitingCircles>

          <OrbitingCircles duration={32 / speed} radius={170} reverse  className="text-purple-600">
            <span className="w-10 h-10 rounded-full bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center text-xs font-bold shadow-md">
              FG
            </span>
            <span className="w-10 h-10 rounded-full bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center text-xs font-bold shadow-md">
              TW
            </span>
            <span className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center text-xs font-bold shadow-md">
              NX
            </span>
          </OrbitingCircles>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm text-xs font-mono">
          <span className="text-slate-600">Orbit Velocity: {speed.toFixed(1)}x</span>
          <input 
            type="range" 
            min="0.5" 
            max="3.0" 
            step="0.2" 
            value={speed} 
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="accent-indigo-600 cursor-pointer"
          />
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        Orbiting Circles • Original Clean Light Aesthetic by @dillionverma
      </footer>
    </div>
  );
};
