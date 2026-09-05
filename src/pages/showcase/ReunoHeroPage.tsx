import React from 'react';
import { ArrowLeft, ArrowRight, Zap } from 'lucide-react';

export const ReunoHeroPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-body selection:bg-indigo-600 selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          
          <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            REUNO DEV HERO • REF 19 (@reuno-ui)
          </span>
        </div>
      </header>

      {/* Main Hero */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Autonomous Serverless Gateway</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-heading font-black tracking-tight text-slate-900 leading-[1.05]">
            Infrastructure at the speed of <span className="text-indigo-600">thought</span>.
          </h1>

          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Deploy microservices, manage edge workers, and configure routing with a single CLI command. Zero configuration, zero cold starts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-xl shadow-indigo-200 transition-all hover:scale-105">
              <span>Quickstart Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive CLI Terminal Sandbox */}
        <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden bg-slate-900 text-left border border-slate-800 shadow-2xl p-6 font-mono text-xs text-slate-300 space-y-3">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800 text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="ml-2">bash - reuno-cli v1.4.2</span>
          </div>

          <div className="space-y-2">
            <p className="text-emerald-400">$ npx reuno deploy --prod</p>
            <p className="text-slate-400">✔ Compiling 42 edge functions...</p>
            <p className="text-slate-400">✔ Routing DNS to global anycast mesh...</p>
            <p className="text-cyan-400">✔ Deployment ready at: https://api.reuno.cloud (142ms)</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-xs text-slate-400">
        Reuno Developer Hero • Original Clean Interface by @reuno-ui
      </footer>
    </div>
  );
};
