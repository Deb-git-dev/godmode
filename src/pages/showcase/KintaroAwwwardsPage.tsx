import React from 'react';
import { ArrowLeft, ArrowUpRight, Award } from 'lucide-react';

export const KintaroAwwwardsPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const PROJECTS = [
    {
      num: "01",
      name: "CHRONO STUDIO",
      category: "Digital Experience / Identity",
      year: "2025",
      img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
    },
    {
      num: "02",
      name: "HYPERION KINETIC",
      category: "Creative Direction & WebGL",
      year: "2024",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    },
    {
      num: "03",
      name: "VOLT MONOGRAPH",
      category: "Typography & Spatial Exhibition",
      year: "2025",
      img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FFFDF9] text-black font-body selection:bg-yellow-400 selection:text-black">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#FFFDF9]/90 backdrop-blur-md border-b-2 border-black px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack || (() => window.location.hash = '/showcase')}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-black text-white text-xs font-mono uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Index</span>
            </button>
            <span className="font-heading font-black text-2xl tracking-tighter">
              KINTARO / AWWWARDS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-300 text-black border border-black text-xs font-mono font-bold uppercase">
              <Award className="w-3.5 h-3.5" />
              Site of the Day Winner
            </span>
          </div>
        </div>
      </header>

      {/* Main Hero */}
      <main className="max-w-7xl mx-auto px-8 pt-16 pb-32 space-y-24">
        <section className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-600">
            Independent Creative Direction & Interactive Design
          </span>
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-heading font-black uppercase tracking-tighter leading-[0.9]">
            RADICAL CRAFT.
          </h1>
          <p className="text-xl max-w-2xl font-light text-slate-700 leading-relaxed">
            Crafting award-winning digital flagships and interactive brand identities that challenge convention.
          </p>
        </section>

        {/* Project Cards */}
        <section className="space-y-16">
          {PROJECTS.map((p) => (
            <article key={p.num} className="border-t-2 border-black pt-8 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-4xl font-heading font-black text-yellow-500">{p.num}</span>
                  <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight group-hover:text-yellow-600 transition-colors">
                    {p.name}
                  </h2>
                  <p className="text-sm font-mono uppercase tracking-wider text-slate-600">
                    {p.category} — {p.year}
                  </p>
                  <div className="pt-2">
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white hover:bg-yellow-400 hover:text-black font-mono text-xs uppercase tracking-widest font-bold transition-all">
                      <span>Launch Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 aspect-[16/9] overflow-hidden border-2 border-black">
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="border-t-2 border-black bg-yellow-300 py-8 text-center text-xs font-mono uppercase tracking-widest text-black font-bold">
        Kintaro Portfolio • Authentic Awwwards Swiss Editorial Aesthetic from @xkintaro
      </footer>
    </div>
  );
};
