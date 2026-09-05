import React from 'react';
import { ArrowLeft, ArrowUpRight, Zap, Activity, ShieldCheck, Gauge } from 'lucide-react';

export const KinfeBentoPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 font-body selection:bg-indigo-600 selection:text-white">
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
          
          <span className="px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-mono font-semibold">
            ASYMMETRIC BENTO GRID • REF 26 (@kinfe123)
          </span>
        </div>
      </header>

      {/* Main Bento Exhibition */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 font-bold">Kinfe Asymmetric Matrix</span>
          <h1 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-slate-900">
            Multi-Surface Bento Grid
          </h1>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            Each tile is designed with its own distinct visual personality, typography, and vibrant color identity.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Tile 1: Large Gradient Mesh Hero (Span 2 cols) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white shadow-xl shadow-indigo-200 flex flex-col justify-between space-y-8 relative overflow-hidden group">
            <div className="space-y-3 relative z-10">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-mono font-bold">
                RADIAL MESH TILE
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black leading-tight">
                Generative Multi-Stop Energy Mesh
              </h2>
              <p className="text-sm text-white/80 max-w-md font-light">
                Vibrant electric purple and hot magenta fluid gradient reacting to viewport bounds with seamless CSS composition.
              </p>
            </div>
            
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/20">
              <span className="text-xs font-mono text-white/90">60 FPS Hardware Composition</span>
              <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Tile 2: Crisp Minimalist Metric (Span 1 col) */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-heading font-black text-slate-900">99.98%</div>
              <p className="text-xs text-slate-500 font-medium">Global Network Uptime</p>
            </div>
            <span className="text-xs text-emerald-600 font-bold">+0.04% vs last quarter</span>
          </div>

          {/* Tile 3: Vibrant Solar Amber (Span 1 col) */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-lg shadow-amber-100 flex flex-col justify-between space-y-6">
            <span className="w-10 h-10 rounded-2xl bg-black/10 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5 text-slate-950" />
            </span>
            <div className="space-y-1">
              <div className="text-3xl font-heading font-black">1.2ms</div>
              <p className="text-xs text-slate-900 font-medium">Edge Compute Latency</p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold">Ultra-Low TTFT</span>
          </div>

          {/* Tile 4: Deep Cobalt Analytics (Span 2 cols) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-200 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                TELEMETRY RADAR
              </span>
              <Gauge className="w-5 h-5 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-heading font-black">Sub-Second Streaming Infrastructure</h3>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Distributed RPC tunnels routing query requests across multi-cloud edge regions with zero packet drop.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-white/90 pt-2 border-t border-white/20">
              <span>Active Clusters: 148</span>
              <span>•</span>
              <span>Throughput: 84.2k req/sec</span>
            </div>
          </div>

          {/* Tile 5: Clean White Security Attestation (Span 2 cols) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 flex flex-col justify-between space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-heading font-bold text-slate-900">Cryptographic Proofs</h3>
                <p className="text-xs text-slate-500">Continuous statutory verification</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Autonomous verification algorithms validate every deployment invariant against formal specification contracts with tamper-proof signatures.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-violet-700 font-semibold">
              <span>Verified Fact Grounding Registry §19 Passed</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500 font-medium">
        Asymmetric Bento Grid • Distinct Color & Tile Personalities from @kinfe123
      </footer>
    </div>
  );
};
