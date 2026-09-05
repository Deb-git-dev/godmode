import React from 'react';
import { ArrowLeft, Smartphone, Monitor, Tablet } from 'lucide-react';

export const ResponsiveHeroPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-body p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>
        <span className="px-3 py-1.5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-300 text-xs font-mono">
          RESPONSIVE HERO BANNER • REF 25
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 py-16">
        <div className="flex items-center justify-center gap-3 text-slate-400 text-xs font-mono">
          <Smartphone className="w-4 h-4 text-cyan-400" />
          <Tablet className="w-4 h-4 text-indigo-400" />
          <Monitor className="w-4 h-4 text-purple-400" />
          <span>Fluid Adaptability Across Viewports</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-tight">
          Adaptive Responsive Banner
        </h1>

        <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
          Flawless viewport transitions with dynamic type clamping (`clamp()`), fluid padding, and zero horizontal scrollbar overflow.
        </p>

        <div className="pt-4 flex items-center justify-center gap-3">
          <button className="px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold transition-transform hover:scale-105">
            Test Fluid Layout
          </button>
        </div>
      </div>

      <div className="text-center text-xs font-mono text-slate-500">
        CSS Clamp Typography • Mobile First
      </div>
    </div>
  );
};
