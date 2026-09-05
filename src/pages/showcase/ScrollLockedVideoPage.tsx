import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const ScrollLockedVideoPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-[160vh] bg-slate-950 text-white font-body p-6 flex flex-col justify-between relative">
      <div className="sticky top-6 z-20 flex items-center justify-between">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-mono text-slate-300 hover:text-white shadow-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>
        <span className="px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-700 text-cyan-300 text-xs font-mono shadow-xl">
          SCROLL-LOCKED VIDEO HERO • REF 13
        </span>
      </div>

      {/* Pinned Video Container */}
      <div className="sticky top-28 z-10 max-w-5xl mx-auto w-full h-[65vh] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-70"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-8 sm:p-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Scroll-Controlled Playback Engine</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mt-1">Cinematic Scroll Timeline</h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg font-light">
            Video scrub timeline coupled smoothly to page scroll position with zero frame drops.
          </p>
        </div>
      </div>

      <div className="text-center text-xs font-mono text-slate-500 py-12">
        Scroll down to experience pinned timeline behavior
      </div>
    </div>
  );
};
