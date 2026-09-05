import React from 'react';
import { ArrowLeft, Smile } from 'lucide-react';
import { DancingLetters } from '../../components/animations/dancing-letters';

export const DancingLettersPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-slate-900 font-body selection:bg-rose-500 selection:text-white flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-amber-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-xs font-medium text-amber-900 transition-colors border border-amber-200/60"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          
          <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-semibold">
            DANCING LETTERS • REF 08 (@chamaac)
          </span>
        </div>
      </header>

      {/* Main Playful Typographic Stage */}
      <main className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center space-y-12">
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
            <Smile className="w-3.5 h-3.5" />
            <span>Interactive Physics Typography</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-slate-950">
            Hover over the letters below.
          </h1>

          <p className="text-base text-slate-600 font-light leading-relaxed">
            Letters disperse dynamically away from the cursor with randomized elastic spring physics, rotation damping, and multi-colored chromatic rebound.
          </p>
        </div>

        {/* Interactive Big Banner Cards */}
        <div className="w-full space-y-6">
          <div className="p-12 sm:p-16 rounded-3xl bg-white border border-amber-100 shadow-xl shadow-amber-500/5 flex flex-col items-center justify-center space-y-6">
            <div className="text-5xl sm:text-7xl font-heading font-black tracking-tight text-slate-900 cursor-pointer">
              <DancingLetters text="CREATIVE CODING" />
            </div>
            <div className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-rose-600 cursor-pointer">
              <DancingLetters text="EXPERIENCE DESIGN" />
            </div>
            <div className="text-2xl sm:text-4xl font-heading font-bold tracking-tight text-cyan-600 cursor-pointer">
              <DancingLetters text="SPRING PHYSICS" />
            </div>
          </div>
        </div>

        <p className="text-xs font-mono text-slate-400">
          Move your mouse across each phrase to trigger kinetic letter displacement
        </p>
      </main>

      <footer className="border-t border-amber-100 bg-white py-6 text-center text-xs text-slate-400">
        Dancing Letters • Original Editorial Typography by @chamaac
      </footer>
    </div>
  );
};
