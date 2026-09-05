import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, Palette } from 'lucide-react';

interface GradientPreset {
  id: string;
  name: string;
  subtitle: string;
  css: string;
  tailwind: string;
  tag: string;
}

const PRESETS: GradientPreset[] = [
  {
    id: "sunset-coral",
    name: "Sun-Drenched Coral",
    subtitle: "Warm Mediterranean Sunrise",
    css: "linear-gradient(135deg, #ff6b6b 0%, #ff8e53 50%, #feca57 100%)",
    tailwind: "from-rose-500 via-orange-400 to-amber-300",
    tag: "WARM RADIANCE"
  },
  {
    id: "oceanic-turquoise",
    name: "Caribbean Turquoise",
    subtitle: "Bioluminescent Lagoon",
    css: "linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #00c6ff 100%)",
    tailwind: "from-cyan-400 via-sky-400 to-blue-500",
    tag: "AQUATIC FLOW"
  },
  {
    id: "electric-violet",
    name: "Hyper Violet & Magenta",
    subtitle: "Luminous Cyberpunk Dusk",
    css: "linear-gradient(135deg, #b224ef 0%, #7579ff 50%, #f107a3 100%)",
    tailwind: "from-purple-600 via-indigo-500 to-pink-500",
    tag: "SPECTRUM ENERGY"
  },
  {
    id: "emerald-mint",
    name: "Spring Emerald & Lime",
    subtitle: "Fresh Botanical Energy",
    css: "linear-gradient(135deg, #0ba360 0%, #3cba92 50%, #96e6a1 100%)",
    tailwind: "from-emerald-600 via-teal-500 to-green-300",
    tag: "ORGANIC FRESH"
  },
  {
    id: "aurora-dream",
    name: "Nordic Aurora Dream",
    subtitle: "Multi-Stop Atmospheric Sheen",
    css: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 50%, #fad0c4 100%)",
    tailwind: "from-purple-300 via-pink-200 to-rose-200",
    tag: "PASTEL SOFT"
  }
];

export const GradientRecipePage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const current = PRESETS[activeIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="relative min-h-screen text-slate-900 font-body transition-all duration-700 flex flex-col justify-between p-6 sm:p-10"
      style={{ background: current.css }}
    >
      {/* Top Header */}
      <header className="flex items-center justify-between gap-4">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 text-xs font-semibold text-slate-900 shadow-lg hover:bg-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>

        <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/40 text-xs font-mono font-bold text-slate-900 shadow-lg">
          GRADIENT RECIPE • REF 22
        </span>
      </header>

      {/* Center Floating Glass Card */}
      <main className="max-w-2xl mx-auto w-full my-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/60 shadow-2xl shadow-black/10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold">
            <Palette className="w-3.5 h-3.5" />
            <span>{current.tag}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-slate-950">
            {current.name}
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed font-light">
            {current.subtitle}. Authentic full-bleed radiant gradient cookbook extracted directly from the 21st.dev community recipe collection.
          </p>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {PRESETS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  idx === activeIdx 
                    ? 'bg-slate-950 text-white shadow-md scale-105' 
                    : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Code Copy Box */}
          <div className="pt-4 flex items-center justify-between gap-4 bg-slate-100/90 p-4 rounded-2xl border border-slate-200 font-mono text-xs text-left text-slate-800">
            <code className="truncate max-w-md">{current.css}</code>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 text-white hover:bg-slate-800 font-semibold transition-all flex-shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy CSS'}</span>
            </button>
          </div>
        </div>
      </main>

      <footer className="text-center text-xs font-medium text-slate-900/80">
        Full-Bleed Radiant Gradient Canvas • Zero Black Background
      </footer>
    </div>
  );
};
