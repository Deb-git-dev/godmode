import React, { useState } from 'react';
import { 
  Palette, 
  Type, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Box,
  Sliders
} from 'lucide-react';
import { TiltCard3D } from '../components/motion/TiltCard3D';

export const DesignLabPage: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'gradients' | 'components' | 'tokens' | 'typography'>('gradients');
  const [testText, setTestText] = useState('Architecting Studio-Grade Autonomous Web Systems');
  const [selectedGradient, setSelectedGradient] = useState<number>(0);

  const tokens = [
    { name: 'Canvas Background', hex: '#0B0F19', label: 'bg-canvas', desc: 'Obsidian Deep foundation' },
    { name: 'Surface Subtle', hex: '#111827', label: 'bg-surface-subtle', desc: 'Void surface container' },
    { name: 'Surface Elevated', hex: '#1E293B', label: 'bg-surface-elevated', desc: 'Interactive card panels' },
    { name: 'Border Subtle', hex: '#1E293B', label: 'border-border-subtle', desc: 'Base separation line' },
    { name: 'Border Prominent', hex: '#334155', label: 'border-border-prominent', desc: 'Double-bezel outer stroke' },
    { name: 'Accent Primary', hex: '#6366F1', label: 'bg-accent-primary', desc: 'Indigo glow interactive' },
    { name: 'Accent Secondary', hex: '#06B6D4', label: 'bg-accent-secondary', desc: 'Cyan pulse highlights' },
    { name: 'Status Success', hex: '#10B981', label: 'text-accent-success', desc: 'Emerald verified invariant' },
    { name: 'Neon Fuchsia', hex: '#D946EF', label: 'bg-fuchsia-500', desc: 'Vibrant highlight accent' },
    { name: 'Amber Glow', hex: '#F59E0B', label: 'bg-amber-500', desc: 'Warm metric accent' },
  ];

  const gradients = [
    { 
      name: 'Cyberpunk Neon', 
      classes: 'from-cyan-400 via-indigo-500 to-purple-600', 
      css: 'linear-gradient(135deg, #06b6d4, #6366f1, #9333ea)',
      accent: '#06b6d4'
    },
    { 
      name: 'Electric Aurora', 
      classes: 'from-emerald-400 via-teal-500 to-cyan-500', 
      css: 'linear-gradient(135deg, #34d399, #14b8a6, #06b6d4)',
      accent: '#34d399'
    },
    { 
      name: 'Hyper Fuchsia', 
      classes: 'from-fuchsia-500 via-pink-600 to-rose-600', 
      css: 'linear-gradient(135deg, #d946ef, #db2777, #e11d48)',
      accent: '#d946ef'
    },
    { 
      name: 'Solar Flare Gold', 
      classes: 'from-amber-400 via-orange-500 to-red-600', 
      css: 'linear-gradient(135deg, #fbbf24, #f97316, #dc2626)',
      accent: '#fbbf24'
    },
    { 
      name: 'Deep Cosmos', 
      classes: 'from-blue-600 via-indigo-700 to-violet-900', 
      css: 'linear-gradient(135deg, #2563eb, #4338ca, #4c1d95)',
      accent: '#2563eb'
    },
  ];

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedHex(content);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Vibrant Hero Header */}
      <div className="relative overflow-hidden rounded-3xl p-8 border border-slate-700/60 bg-gradient-to-br from-slate-900 via-purple-950/30 to-slate-950 shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 via-emerald-500/15 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/20 to-cyan-500/20 border border-fuchsia-400/40 text-fuchsia-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" />
              <span>Design Taste Engine • Anti-Slop Visual System</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-white">
              Creative Design Lab & Component Playground
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
              Inspect vibrant color palettes, blend multi-stop gradients, test typography scales, and copy interactive components inspired by 21st.dev, Skiper UI, and modern Awwwards design standards.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopy('import { TiltCard3D } from "@/components/motion/TiltCard3D";')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono text-slate-200 flex items-center gap-2 transition-all shadow-md"
            >
              {copiedHex ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>Copy Component Import</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mt-8 border-b border-slate-800 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('gradients')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeTab === 'gradients'
                ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Vibrant Gradients</span>
          </button>

          <button
            onClick={() => setActiveTab('components')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeTab === 'components'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Interactive Components</span>
          </button>

          <button
            onClick={() => setActiveTab('typography')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeTab === 'typography'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Typography Sandbox</span>
          </button>

          <button
            onClick={() => setActiveTab('tokens')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeTab === 'tokens'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Design Tokens (§18)</span>
          </button>
        </div>
      </div>

      {/* TAB 1: VIBRANT GRADIENTS GENERATOR */}
      {activeTab === 'gradients' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Preset Selector */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono text-slate-400">SELECT MESH GRADIENT PRESET</span>
              {gradients.map((grad, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedGradient(i)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all flex items-center justify-between ${
                    selectedGradient === i
                      ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${grad.classes} shadow-md`} />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">{grad.name}</h4>
                      <p className="text-[11px] font-mono text-slate-400">Tailwind: bg-gradient-to-r</p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(grad.css);
                    }}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
                    title="Copy CSS"
                  >
                    {copiedHex === grad.css ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              ))}
            </div>

            {/* Right Column: Dynamic Live Showcase Card with Selected Gradient */}
            <div className="lg:col-span-8 space-y-5">
              <div className="p-8 rounded-3xl border border-slate-700/80 bg-slate-950 relative overflow-hidden shadow-2xl">
                <div 
                  className={`absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br ${gradients[selectedGradient].classes} opacity-30 blur-3xl pointer-events-none`} 
                />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
                      style={{ 
                        backgroundColor: gradients[selectedGradient].accent + '26', 
                        color: gradients[selectedGradient].accent,
                        border: `1px solid ${gradients[selectedGradient].accent}66`
                      }}
                    >
                      {gradients[selectedGradient].name}
                    </span>
                    <button
                      onClick={() => handleCopy(`className="bg-gradient-to-r ${gradients[selectedGradient].classes}"`)}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono text-slate-200 flex items-center gap-1.5 transition-all"
                    >
                      {copiedHex ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy Tailwind Classes</span>
                    </button>
                  </div>

                  <h3 
                    className="text-3xl sm:text-4xl font-heading font-extrabold text-white"
                  >
                    High-End Kinetic Visual Design
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed max-w-xl font-body">
                    Elevating autonomous web interfaces from dull monochrome grids into cinematic digital experiences with multi-stop color grading, soft mesh diffusion, and fluid motion.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      className="px-6 py-3 rounded-xl font-semibold text-xs font-mono text-white shadow-xl hover:opacity-95 transition-all hover:scale-105"
                      style={{ background: gradients[selectedGradient].css }}
                    >
                      Interactive Action Button
                    </button>
                    <div className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                      CSS: {gradients[selectedGradient].css}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 font-mono text-xs text-slate-400 flex items-center justify-between">
                <span>Tailwind Class: <code className="text-cyan-400">bg-gradient-to-r {gradients[selectedGradient].classes}</code></span>
                <button
                  onClick={() => handleCopy(`bg-gradient-to-r ${gradients[selectedGradient].classes}`)}
                  className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>Copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INTERACTIVE COMPONENTS */}
      {activeTab === 'components' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Component 1: Double-Bezel 3D Tilt Card */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">01 • Double-Bezel 3D Card</span>
              <button
                onClick={() => handleCopy('<TiltCard3D className="p-5 max-w-sm w-full">...</TiltCard3D>')}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedHex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy JSX</span>
              </button>
            </div>

            <div className="h-52 flex items-center justify-center p-4 bg-slate-950/80 rounded-2xl border border-slate-900">
              <TiltCard3D className="p-5 max-w-sm w-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-cyan-400">DOUBLE-BEZEL</span>
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                </div>
                <h4 className="text-sm font-heading font-bold text-white">Interactive 3D Gyro Tilt</h4>
                <p className="text-xs text-slate-400 mt-1">Move mouse over this surface to inspect layered elevation and smooth spring easing.</p>
              </TiltCard3D>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              Features subtle inner bezel (#1E293B) and outer structural border (#334155) with gyro perspective tracking.
            </p>
          </div>

          {/* Component 2: Holographic Glow Button */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">02 • Holographic Glow Button</span>
              <button
                onClick={() => handleCopy('<button className="relative group px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-mono text-xs shadow-lg hover:shadow-cyan-500/50">...</button>')}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedHex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy JSX</span>
              </button>
            </div>

            <div className="h-52 flex flex-col items-center justify-center gap-4 p-4 bg-slate-950/80 rounded-2xl border border-slate-900">
              <button className="relative group px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-mono text-xs font-semibold shadow-xl hover:shadow-cyan-500/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Execute Quantum Stream</span>
              </button>

              <button className="px-5 py-2.5 rounded-xl border border-cyan-500/50 hover:border-cyan-400 bg-cyan-950/40 text-cyan-300 font-mono text-xs hover:bg-cyan-900/40 transition-all shadow-md">
                Secondary Neon Ghost
              </button>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              Micro-interaction button with dynamic cyan-indigo glow, hover lift, and click depression.
            </p>
          </div>

          {/* Component 3: Telemetry Pulse Badge */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">03 • Telemetry Pulse Badge</span>
              <button
                onClick={() => handleCopy('<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 font-mono text-xs">...</div>')}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedHex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy JSX</span>
              </button>
            </div>

            <div className="h-52 flex flex-col items-center justify-center gap-3 p-4 bg-slate-950/80 rounded-2xl border border-slate-900">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 font-mono text-xs shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>SYSTEM 100% OPERATIONAL (200 OK)</span>
              </div>

              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 font-mono text-xs shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span>SUB-SECOND FIRST TOKEN SSE</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              Real-time pulsing status beacon for cloud health, sub-second TTFT streaming, and verified invariants.
            </p>
          </div>

          {/* Component 4: Bento Metric Tile */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">04 • Bento Metric Tile</span>
              <button
                onClick={() => handleCopy('<div className="p-5 rounded-2xl bg-surface-subtle border border-border-subtle hover:border-cyan-400/50">...</div>')}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedHex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy JSX</span>
              </button>
            </div>

            <div className="h-52 flex items-center justify-center p-4 bg-slate-950/80 rounded-2xl border border-slate-900">
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400/50 transition-all max-w-xs w-full shadow-lg">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>ACTIVE INVARIANTS</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-heading font-extrabold text-white">14 / 14</div>
                <div className="text-xs text-emerald-400 font-mono mt-1">100% Verified Invariant Pass</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              High-density metric tile with Space Grotesk headline numbers, JetBrains Mono labels, and status highlights.
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: TYPOGRAPHY SANDBOX */}
      {activeTab === 'typography' && (
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
          <div>
            <span className="text-xs font-mono text-cyan-400">STUDIO TYPOGRAPHY SCALE</span>
            <h3 className="text-2xl font-heading font-bold text-white mt-1">Space Grotesk • Inter • JetBrains Mono</h3>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400">Type test text to preview live:</label>
            <input
              type="text"
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-2xl text-sm font-mono text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="space-y-6 pt-4 border-t border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Headline Display (Space Grotesk Bold)</span>
                <span className="text-cyan-400">font-heading font-bold text-3xl</span>
              </div>
              <p className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                {testText}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Body Readable (Inter Regular)</span>
                <span className="text-cyan-400">font-body text-base text-slate-300</span>
              </div>
              <p className="font-body text-base text-slate-300 leading-relaxed max-w-2xl">
                {testText} — Built on a zero-local-GPU hybrid stack delivering serverless sub-second responses with strict statutory truth grounding.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Telemetry & Code (JetBrains Mono)</span>
                <span className="text-cyan-400">font-mono text-xs text-emerald-400</span>
              </div>
              <p className="font-mono text-xs text-emerald-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
                $ {testText} --verify-invariants --strict-type-check
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: DESIGN TOKENS */}
      {activeTab === 'tokens' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>CONCRETE DESIGN TOKEN CONTRACT (§18)</span>
            <span>Click any token card to copy HEX</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tokens.map((token) => (
              <div
                key={token.hex}
                onClick={() => handleCopy(token.hex)}
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/60 transition-all cursor-pointer group shadow-lg"
              >
                <div 
                  className="h-14 w-full rounded-xl mb-3 shadow-inner border border-white/10 flex items-center justify-center text-xs font-mono text-white/80"
                  style={{ backgroundColor: token.hex }}
                >
                  {copiedHex === token.hex ? <Check className="w-4 h-4 text-white" /> : null}
                </div>
                <h4 className="font-heading font-bold text-xs text-white group-hover:text-cyan-300 transition-colors">
                  {token.name}
                </h4>
                <p className="text-[11px] font-mono text-cyan-400 mt-0.5">{token.hex}</p>
                <p className="text-[10px] text-slate-400 mt-1">{token.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
