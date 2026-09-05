import React from 'react';
import { ArrowLeft, Star, ArrowRight } from 'lucide-react';

export const Hero3Page: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
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
        <span className="px-3 py-1.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono">
          HERO 3 METRIC CHIPS • REF 21
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 py-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>Rated #1 Autonomous Workspace</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-heading font-extrabold text-white tracking-tight">
          Supercharge Your Dev Speed
        </h1>

        <p className="text-sm sm:text-lg text-slate-300 max-w-xl mx-auto font-light">
          Trusted by top software engineers to deploy production applications without friction.
        </p>

        <div className="pt-4 flex items-center justify-center gap-3">
          <button className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-mono text-xs font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
            <span>Start Building Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="text-center text-xs font-mono text-slate-500">
        High-Conversion Grid Mesh Hero
      </div>
    </div>
  );
};
