import React from 'react';
import { ArrowLeft, Activity, HardDrive, Bell, Zap, ShieldCheck } from 'lucide-react';

export const KinfeBentoPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
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
          KINFE HIGH-DESIGN BENTO GRID • REF 26
        </span>
      </div>

      <div className="max-w-5xl mx-auto w-full py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Kinfe Bento Architecture
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            High-density telemetry tiles with asymmetric layout geometry
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Tile 1 (Large) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/60 transition-all shadow-xl flex flex-col justify-between h-72">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                <span>REALTIME TELEMETRY</span>
              </span>
              <span className="text-xs font-mono text-emerald-400">99.99% UPTIME</span>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-extrabold font-heading text-white">1,420,890</div>
              <p className="text-xs text-slate-400 font-mono">Verified Invariant Checks Handled</p>
            </div>
            <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 w-3/4" />
            </div>
          </div>

          {/* Tile 2 */}
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-purple-400/60 transition-all shadow-xl flex flex-col justify-between h-72">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-purple-400 flex items-center gap-1.5">
                <HardDrive className="w-4 h-4" />
                <span>STORAGE</span>
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-extrabold font-heading text-white">0.00 GB</div>
              <p className="text-xs text-slate-400 font-mono">Zero Local Weights Stored</p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Strict Rule Verified</span>
            </div>
          </div>

          {/* Tile 3 */}
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/60 transition-all shadow-xl flex flex-col justify-between h-64">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
                <Bell className="w-4 h-4" />
                <span>EVENT STREAM</span>
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-mono text-slate-300">Live Serverless SSE Connected</p>
              <p className="text-[10px] text-slate-500 font-mono">Channel: godmode-stream-01</p>
            </div>
            <div className="text-xs font-mono text-cyan-400">Sub-second First Token</div>
          </div>

          {/* Tile 4 (Span 2) */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-400/60 transition-all shadow-xl flex flex-col justify-between h-64">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                <span>SPEED & PERFORMANCE</span>
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-extrabold font-heading text-white">60 FPS Hardware Render</div>
              <p className="text-xs text-slate-400 font-mono">GPU-accelerated transforms with automatic canvas disposal</p>
            </div>
            <div className="text-[11px] font-mono text-slate-500">WCAG AA Compliant Contrasts</div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs font-mono text-slate-500">
        Kinfe Modular Bento Grid System
      </div>
    </div>
  );
};
