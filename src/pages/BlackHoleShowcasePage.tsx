import React, { useState } from 'react';
import { ArrowLeft, Compass, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import BlackHole from '@/components/ui/black-hole';

interface BlackHoleShowcasePageProps {
  onBack: () => void;
}

export const BlackHoleShowcasePage: React.FC<BlackHoleShowcasePageProps> = ({ onBack }) => {
  const [showHUD, setShowHUD] = useState(true);

  return (
    <div className="relative w-full min-h-[90vh] bg-black text-slate-100 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      {/* Interactive Top Control Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={onBack}
            className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 backdrop-blur-md transition-all flex items-center gap-2 text-xs font-mono shadow-lg hover:border-cyan-500/50"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
            <span>Return to Portfolio</span>
          </button>

          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-950/70 border border-indigo-700/50 text-indigo-300 text-[11px] font-mono backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>Relativistic Kerr Singularity</span>
          </span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setShowHUD(!showHUD)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border backdrop-blur-md transition-all flex items-center gap-1.5 ${
              showHUD 
                ? 'bg-cyan-950/80 text-cyan-300 border-cyan-600/60' 
                : 'bg-slate-900/70 text-slate-400 border-slate-800'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>{showHUD ? 'Hide Telemetry HUD' : 'Show Telemetry HUD'}</span>
          </button>
        </div>
      </div>

      {/* Embedded High-Performance Black Hole Component */}
      <div className="w-full h-[85vh]">
        <BlackHole />
      </div>

      {/* Telemetry HUD Overlay */}
      {showHUD && (
        <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
          <div className="max-w-4xl mx-auto bg-slate-950/85 backdrop-blur-xl border border-slate-800/80 rounded-xl p-5 shadow-2xl pointer-events-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/60 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <h3 className="font-heading font-bold text-sm tracking-wide text-white uppercase">
                  Singularity Metric Telemetry
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Local GPU • Hardware 2D Canvas</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Black Hole Mass</span>
                <span className="font-semibold text-slate-200 text-sm">4.3 × 10⁶ M☉</span>
                <span className="text-[10px] text-cyan-400/80 block">Supermassive scale</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Spin Parameter (a*)</span>
                <span className="font-semibold text-indigo-300 text-sm">0.94 c</span>
                <span className="text-[10px] text-indigo-400/80 block">Near-extremal Kerr</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Photon Ring Radius</span>
                <span className="font-semibold text-amber-300 text-sm">1.50 Rs</span>
                <span className="text-[10px] text-amber-400/80 block">Light orbit boundary</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Doppler Beaming</span>
                <span className="font-semibold text-emerald-300 text-sm">Active</span>
                <span className="text-[10px] text-emerald-400/80 block">Cyan boost / Red shift</span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
              <p className="font-mono flex items-center gap-1.5">
                <Compass className="w-3 h-3 text-cyan-400" />
                <span>Interact: Move mouse or drag touch to bend relativistic gravitational space.</span>
              </p>
              <button
                onClick={onBack}
                className="hover:text-cyan-300 underline font-mono ml-4"
              >
                Back to Debapriya's Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlackHoleShowcasePage;
