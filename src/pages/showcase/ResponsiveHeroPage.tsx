import React from 'react';
import { ArrowLeft, Sparkles, ArrowRight } from 'lucide-react';

export const ResponsiveHeroPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-white text-slate-900 font-body selection:bg-indigo-600 selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          
          <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            RESPONSIVE HERO BANNER • REF 25
          </span>
        </div>
      </header>

      {/* Hero Content */}
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32 space-y-16 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fluid Dynamic Breakpoints</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-heading font-black tracking-tight text-slate-900 leading-[1.08]">
            Designing interfaces that <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">breathe on any screen</span>.
          </h1>

          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Ultra-fluid grid system automatically adapting typography, container spacing, and touch boundaries across mobile, tablet, desktop, and ultra-wide viewports.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-200 transition-all hover:scale-105">
              <span>Explore Components</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewport Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
          {[
            { tag: "Mobile 390px", title: "Single Column Fluid Flow", desc: "Touch-optimized hit targets & sticky sheet triggers." },
            { tag: "Tablet 768px", title: "Dual Asymmetric Split", desc: "Proportional flex layout with collateral navigation." },
            { tag: "Desktop 1440px+", title: "Panoramic Bento Matrix", desc: "Multi-track CSS grid with real-time telemetry." }
          ].map((card, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 text-left space-y-3">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold">{card.tag}</span>
              <h3 className="text-base font-heading font-bold text-slate-900">{card.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
