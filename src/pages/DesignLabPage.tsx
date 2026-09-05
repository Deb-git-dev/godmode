import React, { useState } from 'react';
import { 
  Palette, 
  Type, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Box 
} from 'lucide-react';
import { TiltCard3D } from '../components/motion/TiltCard3D';

export const DesignLabPage: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'tokens' | 'typography' | 'components'>('components');
  const [testText, setTestText] = useState('Architecting Zero-Local-GPU AI Systems');

  const tokens = [
    { name: 'Canvas Background', hex: '#0B0F19', label: 'bg-canvas', desc: 'Obsidian Deep foundation' },
    { name: 'Surface Subtle', hex: '#111827', label: 'bg-surface-subtle', desc: 'Void surface container' },
    { name: 'Surface Elevated', hex: '#1E293B', label: 'bg-surface-elevated', desc: 'Interactive card panels' },
    { name: 'Border Subtle', hex: '#1E293B', label: 'border-border-subtle', desc: 'Base separation line' },
    { name: 'Border Prominent', hex: '#334155', label: 'border-border-prominent', desc: 'Double-bezel outer stroke' },
    { name: 'Accent Primary', hex: '#6366F1', label: 'bg-accent-primary', desc: 'Indigo glow interactive' },
    { name: 'Accent Secondary', hex: '#06B6D4', label: 'bg-accent-secondary', desc: 'Cyan pulse highlights' },
    { name: 'Status Success', hex: '#10B981', label: 'bg-accent-success', desc: 'Emerald verified status' }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHex(text);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 md:p-8 bg-surface-subtle border border-border-subtle rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-rose-950/80 border border-rose-700/60 text-rose-300 text-xs font-mono flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-rose-400" />
              <span>Design System & Component Lab</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-xs font-mono">
              21st.dev • Skiper UI • Uiverse
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>WCAG AA Compliant • Anti-Slop Principles</span>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
          Visual Taste & Component Lab
        </h1>
        <p className="text-text-secondary text-xs md:text-sm mt-2 max-w-3xl leading-relaxed font-body">
          Explore the exact concrete design tokens (§18), typography formulas, and high-impact UI primitives synthesized from <span className="text-cyan-300">21st.dev</span>, <span className="text-indigo-300">Skiper UI</span>, and <span className="text-emerald-300">Uiverse</span>.
        </p>

        {/* View Switcher Tabs */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('components')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 border ${
              activeTab === 'components'
                ? 'bg-accent-primary text-white border-accent-primary shadow-lg'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border-slate-800'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Interactive Components (4)</span>
          </button>

          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 border ${
              activeTab === 'tokens'
                ? 'bg-accent-primary text-white border-accent-primary shadow-lg'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border-slate-800'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Design Tokens (§18)</span>
          </button>

          <button
            onClick={() => setActiveTab('typography')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 border ${
              activeTab === 'typography'
                ? 'bg-accent-primary text-white border-accent-primary shadow-lg'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border-slate-800'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Typography Scales</span>
          </button>
        </div>
      </div>

      {/* 1. INTERACTIVE COMPONENTS TAB */}
      {activeTab === 'components' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Component 1: Double-Bezel Card with 3D Tilt */}
          <div className="p-6 bg-surface-subtle border border-border-subtle rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">01 • Double-Bezel Card</span>
              <button
                onClick={() => handleCopy('<TiltCard3D className="p-5 max-w-sm w-full">...</TiltCard3D>')}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedHex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy JSX</span>
              </button>
            </div>

            <div className="h-48 flex items-center justify-center p-4 bg-slate-950/60 rounded-2xl border border-slate-900">
              <TiltCard3D className="p-5 max-w-sm w-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-cyan-400">DOUBLE-BEZEL</span>
                  <Sparkles className="w-3.5 h-3.5 text-accent-primary animate-pulse" />
                </div>
                <h4 className="text-sm font-heading font-bold text-white">Interactive 3D Gyro Tilt</h4>
                <p className="text-xs text-text-secondary mt-1">Move mouse over this surface to inspect layered elevation.</p>
              </TiltCard3D>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              Double-bezel depth: 1px outer stroke (<code className="text-cyan-300">#334155</code>) paired with 1px inner highlight (<code className="text-cyan-300">rgba(255,255,255,0.05)</code>).
            </p>
          </div>

          {/* Component 2: Holographic Glow Button */}
          <div className="p-6 bg-surface-subtle border border-border-subtle rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">02 • Holographic Glow Action</span>
              <button
                onClick={() => handleCopy('<button className="relative group px-6 py-3 rounded-xl bg-slate-950 text-white font-mono...">Action</button>')}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedHex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy JSX</span>
              </button>
            </div>

            <div className="h-48 flex items-center justify-center p-4 bg-slate-950/60 rounded-2xl border border-slate-900">
              <button className="relative group p-0.5 rounded-xl bg-gradient-to-r from-accent-primary via-cyan-400 to-rose-500 hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                <div className="px-6 py-3 rounded-[10px] bg-slate-950 transition-colors group-hover:bg-slate-900 flex items-center gap-2 text-xs font-mono text-white">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300 group-hover:rotate-12 transition-transform" />
                  <span>Execute Neural Gateway</span>
                </div>
              </button>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              Gradient border wrap with hover shadow bloom and smooth transition physics.
            </p>
          </div>

          {/* Component 3: Telemetry Pulse Badge */}
          <div className="p-6 bg-surface-subtle border border-border-subtle rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">03 • Telemetry Pulse Badge</span>
              <button
                onClick={() => handleCopy('<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/60...">Active</div>')}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedHex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy JSX</span>
              </button>
            </div>

            <div className="h-48 flex flex-col items-center justify-center gap-3 p-4 bg-slate-950/60 rounded-2xl border border-slate-900">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-mono shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>NVIDIA NIM SSE Stream: Online</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-xs font-mono shadow-lg">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Zero Local GPU: Enforced</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              Sub-second health beacon with accessible CSS ping and pulse indicators.
            </p>
          </div>

          {/* Component 4: Bento Metric Widget */}
          <div className="p-6 bg-surface-subtle border border-border-subtle rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">04 • Bento Metric Tile</span>
              <button
                onClick={() => handleCopy('<div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">...</div>')}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedHex ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy JSX</span>
              </button>
            </div>

            <div className="h-48 flex items-center justify-center p-4 bg-slate-950/60 rounded-2xl border border-slate-900">
              <div className="w-full max-w-sm p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>PROVENANCE INDEX</span>
                  <span className="text-accent-success font-bold">+100%</span>
                </div>
                <div className="text-2xl font-mono font-bold text-white mt-1">136 Resources</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-cyan-400 h-full w-[94%]" />
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              Bento metric card with high-contrast label hierarchy and progress visualization.
            </p>
          </div>
        </div>
      )}

      {/* 2. DESIGN TOKENS TAB */}
      {activeTab === 'tokens' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tokens.map((token, idx) => (
              <div
                key={idx}
                onClick={() => handleCopy(token.hex)}
                className="p-4 bg-surface-subtle border border-border-subtle hover:border-cyan-400/50 rounded-2xl cursor-pointer transition-all flex flex-col gap-3 group shadow-md"
              >
                <div 
                  className="w-full h-16 rounded-xl border border-slate-700 shadow-inner group-hover:scale-[1.02] transition-transform"
                  style={{ backgroundColor: token.hex }}
                />
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-heading font-bold text-white">{token.name}</h4>
                    <span className="text-[10px] font-mono text-cyan-400">
                      {copiedHex === token.hex ? 'COPIED' : 'CLICK'}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-bold text-slate-200 block mt-0.5">{token.hex}</span>
                  <span className="text-[11px] font-mono text-slate-500 block mt-0.5">{token.label}</span>
                  <span className="text-[11px] text-text-secondary block mt-1">{token.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. TYPOGRAPHY SCALES TAB */}
      {activeTab === 'typography' && (
        <div className="space-y-6 p-6 bg-surface-subtle border border-border-subtle rounded-3xl">
          <div>
            <label className="text-xs font-mono text-slate-400 block mb-2">Live Text Tester</label>
            <input
              type="text"
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm font-mono focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div className="space-y-6 pt-4 border-t border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 block mb-1">Headline Font • Space Grotesk (700)</span>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
                {testText}
              </h1>
            </div>

            <div>
              <span className="text-xs font-mono text-indigo-400 block mb-1">Body Font • Inter (400)</span>
              <p className="text-base font-body text-slate-300 leading-relaxed max-w-3xl" style={{ textWrap: 'pretty' }}>
                {testText} — Grounded strictly in verified facts. Zero local model weights. Clean terminal coding harness orchestrated through Anthropic Claude 3.5 Sonnet and OpenRouter gateways.
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-amber-400 block mb-1">Metrics / Code Font • JetBrains Mono (500)</span>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 leading-relaxed overflow-x-auto">
{`const spec = {
  headline: "Space Grotesk",
  body: "Inter",
  code: "JetBrains Mono",
  audit: "100% Passed",
  status: "${testText}"
};`}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignLabPage;
