import React from 'react';
import { ArrowUpRight, Award, ArrowLeft } from 'lucide-react';

export const KintaroAwwwardsPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white selection:bg-cyan-400 selection:text-black font-body">
      {/* Top Bar */}
      <nav className="p-6 flex items-center justify-between border-b border-slate-800/80">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Showcase Hub</span>
        </button>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300">
          AWWWARDS SITE OF THE DAY • REF 01
        </span>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">Independent Creative Director & Developer</p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight leading-none text-white">
            KINTARO STUDIO
          </h1>
          <p className="text-lg sm:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
            Crafting hyper-kinetic digital experiences, brand worlds, and award-winning interactive platforms.
          </p>
        </div>

        {/* Selected Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {[
            { title: "HYPER-VOID", category: "WebGL / Brand Experience", year: "2026", award: "Site of the Day" },
            { title: "NEURAL HORIZON", category: "Kinetic E-Commerce", year: "2026", award: "Developer Award" },
            { title: "CHRONO MONOLITH", category: "3D Spatial Experience", year: "2025", award: "FWA of the Month" },
            { title: "AURA PROTOCOL", category: "Interactive OS", year: "2025", award: "Site of the Year Nominee" },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-400/80 transition-all group cursor-pointer shadow-xl flex flex-col justify-between h-80 relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-slate-500">0{idx + 1} / 04</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 flex items-center gap-1">
                  <Award className="w-3 h-3 text-cyan-400" />
                  <span>{item.award}</span>
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </h3>
                <p className="text-xs font-mono text-slate-400">{item.category} • {item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
