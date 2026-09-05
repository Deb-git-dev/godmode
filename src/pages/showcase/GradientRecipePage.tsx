import React, { useState } from 'react';
import { ArrowLeft, Copy, Check } from 'lucide-react';

export const GradientRecipePage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);

  const cssRecipe = `background: radial-gradient(circle at 50% 0%, #06b6d4 0%, #6366f1 40%, #0B0F19 80%);`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssRecipe);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-body p-6 flex flex-col justify-between relative overflow-hidden">
      {/* Background Recipe Canvas */}
      <div 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 10%, #06b6d4 0%, #6366f1 35%, #0B0F19 75%)' }}
      />

      <div className="flex items-center justify-between relative z-10">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>
        <span className="px-3 py-1.5 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-800 text-cyan-300 text-xs font-mono">
          GRADIENT RECIPE 4FBB85EE • REF 22
        </span>
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-6 py-20 relative z-10 p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl">
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          Radial Spectrum Mesh
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
          Deep cyan-to-indigo radial gradient recipe providing cinematic background depth without GPU cost.
        </p>
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-left">
          <code>{cssRecipe}</code>
        </div>
        <button
          onClick={handleCopy}
          className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 mx-auto"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied to Clipboard' : 'Copy CSS Recipe'}</span>
        </button>
      </div>

      <div className="text-center text-xs font-mono text-slate-500 relative z-10">
        CSS Radial Color Dynamics • Zero Bundle Size
      </div>
    </div>
  );
};
