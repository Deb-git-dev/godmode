import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Wand2, RefreshCw } from 'lucide-react';

const PRESET_STYLES = [
  { name: "Photorealistic", color: "from-amber-400 to-orange-500" },
  { name: "Cyberpunk Anime", color: "from-pink-500 to-violet-600" },
  { name: "Oil Painting", color: "from-emerald-500 to-teal-600" },
  { name: "3D Render", color: "from-blue-500 to-indigo-600" },
  { name: "Minimalist Vector", color: "from-rose-500 to-red-600" }
];

const SAMPLE_GALLERY = [
  {
    title: "Cyberpunk Neon Tokyo Skyline",
    prompt: "Ultra-detailed futuristic Tokyo street in rain, neon reflections, cinematic lighting, 8k octane render",
    aspect: "16:9",
    img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Bioluminescent Rainforest Flora",
    prompt: "Glowing fungi and exotic flora in twilight rainforest, volumetric god rays, hyper-detailed botanical illustration",
    aspect: "4:3",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Monolithic Desert Pavilion",
    prompt: "Modern brutalist concrete structure rising from red sand dunes, warm golden hour sun, architectural digest photo",
    aspect: "1:1",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  }
];

export const AiImageGenerationPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [prompt, setPrompt] = useState("A luminous glass crystal dispersing rainbow light across a minimal ivory table, editorial photo");
  const [selectedRatio, setSelectedRatio] = useState("16:9");
  const [activeStyle, setActiveStyle] = useState("Photorealistic");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 1200);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 font-body selection:bg-indigo-600 selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          
          <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            AI CHAT & IMAGE STUDIO • REF 07 (@gonzalochale)
          </span>
        </div>
      </header>

      {/* Main Studio Area */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clean Studio Workspace</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-slate-900">
            Generative Image Studio
          </h1>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            Compose high-fidelity image prompts with aspect-ratio framing, lighting chips, and instant generation preview.
          </p>
        </div>

        {/* Studio Composer Card */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-100 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              Prompt Composer
            </label>
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
                className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent resize-none transition-all"
                placeholder="Describe the visual scene in vivid sensory detail..."
              />
            </div>
          </div>

          {/* Controls: Ratios & Styles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-slate-600 uppercase">Aspect Ratio</span>
              <div className="flex items-center gap-2">
                {["1:1", "16:9", "4:3", "9:16"].map(ratio => (
                  <button
                    key={ratio}
                    onClick={() => setSelectedRatio(ratio)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                      selectedRatio === ratio 
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-slate-600 uppercase">Style Presets</span>
              <div className="flex flex-wrap items-center gap-2">
                {PRESET_STYLES.map(s => (
                  <button
                    key={s.name}
                    onClick={() => setActiveStyle(s.name)}
                    className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                      activeStyle === s.name 
                        ? 'bg-slate-900 text-white shadow-sm' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-100">
            <span className="text-xs text-slate-500 font-mono">Model: Flux Schnell • Zero Local GPU</span>
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-200 transition-all hover:scale-105"
            >
              {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
              <span>{isGenerating ? 'Synthesizing...' : 'Generate Still'}</span>
            </button>
          </div>
        </div>

        {/* Gallery of Generated Stills */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-heading font-bold text-slate-900">Recent Studio Generations</h2>
            <span className="text-xs font-mono text-slate-500">3 Saved Stills</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_GALLERY.map((g, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md shadow-slate-100 group space-y-3 p-4">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img 
                    src={g.img} 
                    alt={g.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white">
                    {g.aspect}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-heading font-bold text-slate-900">{g.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{g.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        AI Chat & Image Generation Studio • Clean Light Interface by @gonzalochale
      </footer>
    </div>
  );
};
