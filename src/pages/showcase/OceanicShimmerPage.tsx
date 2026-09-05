import React from 'react';
import { ArrowLeft, Droplets, Waves } from 'lucide-react';
import { ShaderCanvas } from '../../components/effects/ShaderCanvas';
import { VIBRANT_OCEANIC_CAUSTICS } from '../../components/effects/vibrant-shaders';

export const OceanicShimmerPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen text-slate-900 font-body overflow-hidden flex flex-col justify-between">
      {/* Full-bleed Shader Canvas */}
      <div className="absolute inset-0 z-0">
        <ShaderCanvas fragment={VIBRANT_OCEANIC_CAUSTICS} />
      </div>

      {/* Top Header */}
      <header className="relative z-10 p-6 flex items-center justify-between">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 text-xs font-semibold text-slate-900 shadow-xl hover:bg-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>

        <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/40 text-xs font-mono font-bold text-teal-800 shadow-xl">
          OCEANIC SHIMMER • REF 23
        </span>
      </header>

      {/* Floating Center Frost Glass Card */}
      <main className="relative z-10 max-w-xl mx-auto px-6 py-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white/85 backdrop-blur-2xl border border-white/60 shadow-2xl shadow-teal-950/20 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-mono font-bold">
            <Waves className="w-3.5 h-3.5" />
            <span>Tropical Caustic Light Refraction</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-slate-900">
            Oceanic Shimmer
          </h1>

          <p className="text-sm text-slate-700 leading-relaxed font-light">
            Bioluminescent Caribbean turquoise, azure ripples, and sunlight caustics filling the entire viewport. Procedurally computed at 60 FPS on client GPU.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-teal-100/80 text-teal-900 font-mono text-xs font-semibold">
            <Droplets className="w-4 h-4 text-teal-600" />
            <span>Full-Bleed Natural Water Matrix</span>
          </div>
        </div>
      </main>

      <footer className="relative z-10 p-6 text-center text-xs font-semibold text-teal-950/90">
        Original 21st.dev Gradient Shimmer • Vibrant Oceanic Caustic Aesthetics
      </footer>
    </div>
  );
};
