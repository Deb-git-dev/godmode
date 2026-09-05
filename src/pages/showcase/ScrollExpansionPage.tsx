import React from 'react';
import { ArrowLeft, Maximize2 } from 'lucide-react';

export const ScrollExpansionPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 font-body selection:bg-blue-600 selection:text-white">
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
          
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold">
            SCROLL EXPANSION HERO • REF 16 (@arunachalam)
          </span>
        </div>
      </header>

      {/* Main Expanding Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Fluid Viewport Scaling</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-slate-950">
            Scroll To Expand
          </h1>

          <p className="text-base text-slate-600 font-light leading-relaxed">
            The media container smoothly scales from an initial compact teaser card into a full-width panoramic cinema canvas as the user navigates down the page.
          </p>
        </div>

        {/* Scaled Panoramic Photo Showcase */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-blue-500/10 group aspect-[21/9]">
          <img 
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1800&q=80" 
            alt="Panoramic Mountain Horizon" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between text-white text-xs font-mono">
            <span className="font-bold tracking-widest uppercase">The Alpine Ridge Expedition • Edition 2025</span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">Full-Bleed Panoramic View</span>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        Scroll Expansion Hero • Original Clean Layout by @arunachalam
      </footer>
    </div>
  );
};
