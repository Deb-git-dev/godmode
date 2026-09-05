import React from 'react';
import { ArrowLeft, ArrowRight, Zap } from 'lucide-react';

export const ReunoHeroPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
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
          REUNO UI SAAS HERO • REF 19
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 py-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-xs font-mono">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>Modern Developer SaaS Landing</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-heading font-extrabold text-white tracking-tight leading-tight">
          Ship Software Faster <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
            With High Aesthetic Standards
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
          The ultimate developer toolkit designed to eliminate generic template slop and supercharge your frontend delivery.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button className="px-8 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold shadow-lg transition-transform hover:scale-105 flex items-center gap-2">
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 font-mono text-xs hover:bg-slate-800 transition-colors">
            Documentation
          </button>
        </div>
      </div>

      <div className="text-center text-xs font-mono text-slate-500">
        Clean Modern Developer SaaS Conversion Blueprint
      </div>
    </div>
  );
};
