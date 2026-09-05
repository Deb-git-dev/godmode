import React from 'react';
import { ArrowLeft, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero3Page: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FFFDF9] via-[#FAF5FF] to-[#F0FDFA] text-slate-900 font-body selection:bg-indigo-600 selection:text-white flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-purple-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-xs font-medium text-purple-900 transition-colors border border-purple-200/60"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          
          <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-semibold">
            HERO 3 CONVERSION STAGE • REF 21 (@ravikatiyar162)
          </span>
        </div>
      </header>

      {/* Main Hero */}
      <main className="max-w-5xl mx-auto px-6 py-16 text-center space-y-12">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold shadow-sm">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span>Rated 4.9/5 by 12,000+ Software Engineers</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-heading font-black tracking-tight text-slate-900 leading-[1.05]">
            Supercharge Your <br />
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Engineering Velocity
            </span>
          </h1>

          <p className="text-lg text-slate-600 font-light max-w-xl mx-auto leading-relaxed">
            The modern autonomous development platform that removes friction between ideas and live production deployments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-white font-semibold text-sm shadow-xl shadow-indigo-200 transition-all hover:scale-105">
              <span>Start Free 14-Day Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-sm transition-all">
              Watch 2-Min Demo
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant Setup</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Local GPU</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 24/7 Support</span>
          </div>
        </div>
      </main>

      <footer className="border-t border-purple-100 bg-white py-6 text-center text-xs text-slate-400">
        Hero 3 Conversion Stage • Original Vibrant Layout by @ravikatiyar162
      </footer>
    </div>
  );
};
