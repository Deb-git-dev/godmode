import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const STILLS = [
  { time: "00:04", title: "Dawn Over The Ridge", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80" },
  { time: "00:12", title: "Alpine Stream Crossing", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80" },
  { time: "00:24", title: "Golden Hour Ascent", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80" }
];

export const ScrollLockedVideoPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-slate-900 font-body selection:bg-amber-500 selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-amber-200/60 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-xs font-medium text-amber-900 transition-colors border border-amber-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          
          <span className="px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-mono font-semibold">
            SCROLL LOCKED VIDEO REEL • REF 13 (@gughigug)
          </span>
        </div>
      </header>

      {/* Main Reel Viewer */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Cinematic Frame Scrubbing</span>
          <h1 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-slate-900">
            Scroll-Locked Cinema Reel
          </h1>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            Click frame timestamps or scroll to scrub through cinematic milestones with real film stills on warm editorial paper.
          </p>
        </div>

        {/* Cinematic Screen Card */}
        <div className="rounded-3xl overflow-hidden bg-white border border-amber-200/80 shadow-2xl shadow-amber-900/10 space-y-4 p-4 sm:p-6">
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <img 
              src={STILLS[activeIdx].img} 
              alt={STILLS[activeIdx].title} 
              className="w-full h-full object-cover transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-xs font-mono">
              <span className="font-bold text-sm tracking-wider uppercase">{STILLS[activeIdx].title}</span>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                Frame {STILLS[activeIdx].time}
              </span>
            </div>
          </div>

          {/* Scrubbing Bar */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {STILLS.map((still, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`p-3 rounded-xl text-left transition-all border ${
                  idx === activeIdx 
                    ? 'bg-amber-50 border-amber-400 shadow-sm' 
                    : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-[10px] font-mono text-amber-700 font-bold block">{still.time}</span>
                <span className="text-xs font-medium text-slate-800 truncate block">{still.title}</span>
              </button>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-amber-200/60 bg-white py-8 text-center text-xs text-slate-500">
        Scroll-Locked Video Reel • Warm Editorial Aesthetic by @gughigug
      </footer>
    </div>
  );
};
