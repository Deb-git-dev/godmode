import React from 'react';
import { ArrowLeft, Code, Cpu, Globe, Sparkles, Terminal } from 'lucide-react';
import { OrbitingCircles } from '../../components/animations/orbiting-circles';

export const OrbitingCirclesPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
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
          CONCENTRIC ORBITING CIRCLES • REF 05
        </span>
      </div>

      {/* Center Orbiting Stage */}
      <div className="relative flex h-[500px] w-full max-w-xl mx-auto flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl">
        <div className="z-10 flex flex-col items-center justify-center gap-2">
          <span className="text-3xl font-heading font-bold text-white tracking-tight">AI ECOSYSTEM</span>
          <span className="text-xs font-mono text-cyan-400">AUTONOMOUS ORBITS</span>
        </div>

        {/* Inner Circle */}
        <OrbitingCircles radius={80} duration={15} speed={1.2}>
          <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-700 text-cyan-400 shadow-lg">
            <Code className="w-4 h-4" />
          </div>
        </OrbitingCircles>
        <OrbitingCircles radius={80} duration={15} delay={7.5} speed={1.2}>
          <div className="p-2 rounded-xl bg-indigo-950 border border-indigo-700 text-indigo-400 shadow-lg">
            <Terminal className="w-4 h-4" />
          </div>
        </OrbitingCircles>

        {/* Middle Circle */}
        <OrbitingCircles radius={140} duration={25} reverse speed={1.0}>
          <div className="p-2.5 rounded-xl bg-purple-950 border border-purple-700 text-purple-400 shadow-lg">
            <Sparkles className="w-4 h-4" />
          </div>
        </OrbitingCircles>
        <OrbitingCircles radius={140} duration={25} delay={12.5} reverse speed={1.0}>
          <div className="p-2.5 rounded-xl bg-emerald-950 border border-emerald-700 text-emerald-400 shadow-lg">
            <Cpu className="w-4 h-4" />
          </div>
        </OrbitingCircles>

        {/* Outer Circle */}
        <OrbitingCircles radius={200} duration={35} speed={0.8}>
          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700 text-white shadow-xl">
            <Globe className="w-5 h-5 text-cyan-300" />
          </div>
        </OrbitingCircles>
      </div>

      <div className="text-center text-xs font-mono text-slate-500">
        CSS Transform GPU Animation • Zero JS Overhead
      </div>
    </div>
  );
};
