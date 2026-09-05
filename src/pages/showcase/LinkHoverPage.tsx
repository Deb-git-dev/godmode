import React from 'react';
import { ArrowLeft, MousePointerClick } from 'lucide-react';
import { LinkHover } from '../../components/animations/link-hover';

export const LinkHoverPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-slate-900 font-body selection:bg-teal-500 selection:text-white flex flex-col justify-between">
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
          
          <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-mono font-semibold">
            LINK HOVER EFFECTS • REF 06 (@Shatlyk1011)
          </span>
        </div>
      </header>

      {/* Main Link Playground */}
      <main className="max-w-4xl mx-auto px-6 py-20 space-y-16 text-center">
        <div className="space-y-4 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold">
            <MousePointerClick className="w-3.5 h-3.5" />
            <span>Micro-Interaction Playground</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-slate-950">
            Tactile Navigation Links
          </h1>

          <p className="text-base text-slate-600 font-light leading-relaxed">
            Hover over each interactive link below to test sliding text reveals, magnetic button lifts, and colorful animated underlines.
          </p>
        </div>

        {/* Link Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md shadow-slate-100 space-y-4 flex flex-col items-center justify-center">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Dual-Layer Slide</span>
            <div className="text-2xl font-heading font-bold text-slate-900">
              <LinkHover text="Architectural View" href="#/showcase/velaris" imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" />
            </div>
            <p className="text-xs text-slate-500">Character duplicate slides upward on hover</p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md shadow-slate-100 space-y-4 flex flex-col items-center justify-center">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Expanding Underline</span>
            <div className="text-2xl font-heading font-bold text-teal-600">
              <LinkHover text="SaaS Telemetry" href="#/showcase/vetra" imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" />
            </div>
            <p className="text-xs text-slate-500">Smooth gradient border expands outward</p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md shadow-slate-100 space-y-4 flex flex-col items-center justify-center">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Spring Scale Glow</span>
            <div className="text-2xl font-heading font-bold text-indigo-600">
              <LinkHover text="Kinetic Bento" href="#/showcase/bento" imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" />
            </div>
            <p className="text-xs text-slate-500">Subtle spring expansion with soft shadow</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-400">
        Link Hover Playground • Clean Editorial Aesthetics by @Shatlyk1011
      </footer>
    </div>
  );
};
