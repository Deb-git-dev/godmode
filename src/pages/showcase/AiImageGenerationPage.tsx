import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Download } from 'lucide-react';

export const AiImageGenerationPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [prompt, setPrompt] = useState('Hyper-detailed futuristic cybernetic cityscape at dusk with neon reflections');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [style, setStyle] = useState('Photorealistic');
  const [isGenerating, setIsGenerating] = useState(false);

  const styles = ['Photorealistic', 'Anime Studio', 'Cyberpunk', '3D Octane', 'Oil Painting'];

  const sampleImages = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop',
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 800);
  };

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
        <span className="px-3 py-1.5 rounded-full bg-purple-950 border border-purple-700 text-purple-300 text-xs font-mono">
          AI CHAT & IMAGE GENERATION • REF 07
        </span>
      </div>

      <div className="max-w-5xl mx-auto w-full py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-5 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
            <Sparkles className="w-4 h-4" />
            <span>CLOUD DIFFUSION INTERFACE</span>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400">Generation Prompt:</label>
            <textarea
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-purple-500 resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400">Aspect Ratio:</label>
            <div className="grid grid-cols-3 gap-2">
              {['1:1', '16:9', '9:16'].map((r) => (
                <button
                  key={r}
                  onClick={() => setAspectRatio(r)}
                  className={`py-2 rounded-xl text-xs font-mono border transition-all ${
                    aspectRatio === r ? 'bg-purple-950 border-purple-500 text-purple-300' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400">Visual Aesthetic Style:</label>
            <div className="flex flex-wrap gap-2">
              {styles.map((s) => (
                <button
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                    style === s ? 'bg-indigo-950 border-indigo-500 text-indigo-300' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-mono text-xs font-semibold shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>{isGenerating ? 'Synthesizing Diffusion...' : 'Generate Image'}</span>
          </button>
        </div>

        {/* Gallery Column */}
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-mono text-slate-400">LIVE GENERATION PREVIEW ({aspectRatio} • {style})</span>
          <div className="rounded-3xl border border-slate-800 overflow-hidden bg-slate-900 shadow-2xl relative group">
            <img 
              src={sampleImages[0]} 
              alt="Generated preview" 
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-6">
              <div className="flex items-center justify-between w-full">
                <p className="text-xs font-mono text-slate-200 line-clamp-1 max-w-sm">{prompt}</p>
                <button className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs font-mono text-slate-500">
        Cloud Media Interface Layer • Zero Local GPU Required
      </div>
    </div>
  );
};
