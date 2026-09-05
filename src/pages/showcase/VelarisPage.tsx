import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const VelarisPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const WORKS = [
    {
      id: "01",
      title: "Pavilion Mont-Blanc",
      location: "Chamonix, France",
      year: "2025",
      category: "Residential Architecture",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "02",
      title: "Atelier Villa Kyoto",
      location: "Kyoto, Japan",
      year: "2024",
      category: "Cultural Sanctuaries",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "03",
      title: "The Basalt Horizon",
      location: "Reykjavik, Iceland",
      year: "2025",
      category: "Geothermal Observatories",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#F7F5F0] text-[#1C1A17] font-serif selection:bg-[#2C2824] selection:text-[#F7F5F0]">
      {/* Top Editorial Nav */}
      <header className="sticky top-0 z-40 bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#E3DFD5] px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack || (() => window.location.hash = '/showcase')}
              className="font-sans flex items-center gap-2 px-3 py-1.5 rounded border border-[#D5D0C5] text-xs font-mono uppercase tracking-widest text-[#4A453E] hover:text-[#1C1A17] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Index</span>
            </button>
            <div>
              <span className="font-serif text-xl tracking-wider font-normal">VELARIS</span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#7C756B] ml-3">Atelier & Spatial Design</span>
            </div>
          </div>

          <div className="font-sans hidden sm:flex items-center gap-8 text-xs uppercase tracking-widest text-[#5C554B]">
            <span className="hover:text-black cursor-pointer">Monographs</span>
            <span className="hover:text-black cursor-pointer">Inquiries</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#D5D0C5] bg-[#EFECE6]">
              REF 12 • @amanshakya307
            </span>
          </div>
        </div>
      </header>

      {/* Main Exhibition */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 space-y-28">
        {/* Intro Monograph */}
        <section className="max-w-4xl space-y-8">
          <span className="font-sans text-xs font-mono uppercase tracking-[0.3em] text-[#8C8476]">
            Architectural Manifesto • Edition MMXXV
          </span>
          <h1 className="text-5xl sm:text-7xl font-light leading-[1.05] tracking-tight text-[#161412]">
            Space shaped by silence, stone, and natural illumination.
          </h1>
          <p className="font-sans text-base text-[#5C554B] max-w-2xl font-light leading-relaxed">
            Velaris designs monolithic residential sanctuaries and cultural pavilions that exist in dialogue with geological terrain and changing atmospheric light.
          </p>
        </section>

        {/* Lookbook Gallery */}
        <section className="space-y-24">
          {WORKS.map((work) => (
            <article key={work.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-[#E3DFD5] pt-12">
              <div className="lg:col-span-4 space-y-6">
                <div className="font-sans flex items-center gap-3 text-xs font-mono text-[#8C8476]">
                  <span>NO. {work.id}</span>
                  <span>—</span>
                  <span>{work.year}</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-normal text-[#161412]">
                  {work.title}
                </h2>

                <div className="font-sans space-y-1 text-xs text-[#5C554B] tracking-wide">
                  <p className="font-medium text-[#161412]">{work.location}</p>
                  <p className="text-[#8C8476]">{work.category}</p>
                </div>

                <p className="font-sans text-sm text-[#6C655A] font-light leading-relaxed">
                  Sculpted concrete volumes with framed alpine vistas, cantilevered terraces, and locally quarried granite surfaces.
                </p>

                <div className="pt-2">
                  <button className="font-sans inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#161412] hover:text-[#8C8476] transition-colors group">
                    <span>View Monograph</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 overflow-hidden rounded-sm bg-[#EFECE6] group aspect-[16/10]">
                <img 
                  src={work.img} 
                  alt={work.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="font-sans border-t border-[#E3DFD5] bg-[#EFECE6] py-12 px-8 text-center text-xs text-[#8C8476] uppercase tracking-widest">
        Velaris Architectural Studio • Grounded in 21st.dev Component by @amanshakya307 • Warm Editorial Linen Aesthetic
      </footer>
    </div>
  );
};
