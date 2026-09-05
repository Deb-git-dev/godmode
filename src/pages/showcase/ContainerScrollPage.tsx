import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { ContainerScroll } from '../../components/animations/container-scroll';

export const ContainerScrollPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FAF5FF] via-white to-[#F0FDFA] text-slate-900 font-body selection:bg-purple-600 selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-purple-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack || (() => window.location.hash = '/showcase')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-xs font-medium text-purple-900 transition-colors border border-purple-200/60"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase Hub</span>
          </button>
          
          <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-semibold">
            CONTAINER SCROLL ANIMATION • REF 17 (@manuarora700)
          </span>
        </div>
      </header>

      {/* Main 3D Container Scroll */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <ContainerScroll
          titleComponent={
            <div className="space-y-4 max-w-2xl mx-auto text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>Scroll-Driven Perspective Transform</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-slate-950">
                Unleash the Power of <br />
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Dynamic 3D Scroll
                </span>
              </h1>
              <p className="text-base text-slate-600 font-light">
                Scroll down to see the tablet card smoothly rotate from 3D perspective tilt into a flat, immersive view.
              </p>
            </div>
          }
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-2xl p-3 sm:p-4">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 font-medium text-slate-700">analytics.dashboard.io</span>
              </div>
              <span className="text-emerald-600 font-bold">● Live Sync</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" 
              alt="Dashboard App" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </ContainerScroll>
      </main>

      <footer className="border-t border-purple-100 bg-white py-8 text-center text-xs text-slate-500">
        Container Scroll Animation • Original Component from @manuarora700
      </footer>
    </div>
  );
};
