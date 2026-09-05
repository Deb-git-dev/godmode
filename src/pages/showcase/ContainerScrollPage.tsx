import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { ContainerScroll } from '../../components/animations/container-scroll';

export const ContainerScrollPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
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
        <span className="px-3 py-1.5 rounded-full bg-indigo-950 border border-indigo-700 text-indigo-300 text-xs font-mono">
          ACETERNITY 3D CONTAINER SCROLL • REF 17
        </span>
      </div>

      <ContainerScroll
        titleComponent={
          <>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Perspective Tilt Scroll</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white">
              Unleash Studio Power <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                Scroll Into Perspective
              </span>
            </h1>
          </>
        }
      >
        <div className="h-full w-full bg-slate-900 p-6 flex flex-col justify-between rounded-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <span className="text-xs font-mono text-slate-400">GODMODE TELEMETRY DASHBOARD</span>
          </div>
          <div className="grid grid-cols-3 gap-4 py-8">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl font-bold font-heading text-white">100%</div>
              <div className="text-xs text-slate-400 font-mono">Pass Invariants</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl font-bold font-heading text-cyan-400">0 ms</div>
              <div className="text-xs text-slate-400 font-mono">Local GPU Overhead</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <div className="text-2xl font-bold font-heading text-emerald-400">26</div>
              <div className="text-xs text-slate-400 font-mono">Visual Showcases</div>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-500 text-center">
            Interactive Perspective Tablet Card
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
};
