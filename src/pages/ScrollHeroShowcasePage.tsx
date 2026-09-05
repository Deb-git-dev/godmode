import React from 'react';
import { ArrowLeft, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import HomeHeroLandingScrollAnimation from '@/components/ui/home-hero-landing-scroll-animation';

interface ScrollHeroShowcasePageProps {
  onBack: () => void;
}

export const ScrollHeroShowcasePage: React.FC<ScrollHeroShowcasePageProps> = ({ onBack }) => {
  return (
    <div className="relative w-full bg-[#fafafa] text-[#141414] min-h-screen">
      {/* Floating Top Invariant Bar */}
      <div className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-none">
        <button
          onClick={onBack}
          className="pointer-events-auto px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-950 text-white border border-slate-700/80 backdrop-blur-md shadow-2xl transition-all flex items-center gap-2 text-xs font-mono hover:border-cyan-400"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400" />
          <span>Return to GODMODE Portfolio</span>
        </button>

        <div className="pointer-events-auto hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono shadow-xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>GSAP ScrollTrigger • 800vh Timeline</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            shadcn Component
          </span>
        </div>
      </div>

      {/* Main GSAP Hero Scroll Experience */}
      <div className="w-full">
        <HomeHeroLandingScrollAnimation />
      </div>

      {/* Bottom Completion Banner */}
      <div className="bg-slate-950 text-slate-200 py-16 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Interactive Visualizer Complete</span>
          </div>

          <h2 className="text-3xl font-heading font-bold text-white">
            Architected by Debapriya Bhattacharyya
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            High-speed micro-interaction built with GSAP ScrollTrigger timeline orchestration and Swiper cross-fade modules. Standardized under the shadcn /components/ui architecture.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onBack}
              className="px-6 py-3 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-white font-medium text-sm transition-all shadow-lg shadow-accent-primary/20 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Debapriya's Portfolio</span>
            </button>
            <a
              href="https://github.com/Deb-git-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-sm transition-all flex items-center gap-2"
            >
              <span>GitHub Profile</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollHeroShowcasePage;
