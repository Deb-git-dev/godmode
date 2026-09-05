import React from 'react';
import { ArrowLeft, Sun } from 'lucide-react';

export const PrismHeroPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9] text-slate-900 font-body selection:bg-purple-600 selection:text-white flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-amber-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-xs font-medium text-amber-900 transition-colors border border-amber-200/60"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          
          <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-semibold">
            PRISM CHROMATIC DISPERSION • REF 10 & 20
          </span>
        </div>
      </header>

      {/* Main Prism Stage */}
      <main className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center space-y-12">
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-red-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100 border border-purple-200/60 text-purple-900 text-xs font-bold">
            <Sun className="w-3.5 h-3.5 text-amber-500" />
            <span>Optical Spectrum Refraction</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-slate-950">
            Radiant Rainbow Prism
          </h1>

          <p className="text-base text-slate-600 font-light leading-relaxed">
            A slow iridescent geometric crystal catching pure daylight and refracting into vibrant spectral bands of red, orange, yellow, emerald, cyan, and violet.
          </p>
        </div>

        {/* 3D Prism Model Stage */}
        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-3xl bg-white border border-amber-100 shadow-2xl shadow-purple-500/10 flex items-center justify-center overflow-hidden">
          {/* Rainbow Caustic Glow in Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),rgba(59,130,246,0.1),transparent_70%)]" />

          {/* 3D Preserved Rotating Facets */}
          <div className="relative h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] [perspective:900px]">
            <div
              className="absolute inset-0 [transform-style:preserve-3d] animate-[spin_16s_linear_infinite]"
            >
              {[
                { rot: "rotateY(0deg)", bg: "from-rose-500/80 to-amber-500/80" },
                { rot: "rotateY(72deg)", bg: "from-amber-400/80 to-emerald-500/80" },
                { rot: "rotateY(144deg)", bg: "from-emerald-400/80 to-cyan-500/80" },
                { rot: "rotateY(216deg)", bg: "from-cyan-400/80 to-blue-500/80" },
                { rot: "rotateY(288deg)", bg: "from-blue-500/80 to-purple-600/80" }
              ].map((face, fi) => (
                <div
                  key={fi}
                  className={`absolute inset-0 m-auto h-[180px] w-[90px] sm:h-[230px] sm:w-[110px] rounded-2xl bg-gradient-to-br ${face.bg} backdrop-blur-md border border-white/80 shadow-xl`}
                  style={{ transform: `${face.rot} translateZ(80px)` }}
                />
              ))}
            </div>
          </div>

          {/* Frosted Lens Accent */}
          <div className="absolute bottom-6 left-6 right-6 p-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 text-xs font-mono text-slate-700 shadow-sm flex items-center justify-between">
            <span>Refraction Index: 1.54 (Crown Glass)</span>
            <span className="text-purple-600 font-bold">5-Facet Dispersion</span>
          </div>
        </div>
      </main>

      <footer className="border-t border-amber-100 bg-white py-6 text-center text-xs text-slate-500">
        Prism & Prisma Hero Component • Authentic Chromatic Dispersion by @bevelui & @rahil1202
      </footer>
    </div>
  );
};
