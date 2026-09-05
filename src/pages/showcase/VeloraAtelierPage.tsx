import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Sparkles, Layers, Box, Film, Compass, Cpu, Palette, LayoutGrid } from 'lucide-react';
import { ShaderCanvas } from '../../components/effects/ShaderCanvas';
import { VIBRANT_FLOW_FIELD, VIBRANT_LIQUID_CHROME, VIBRANT_NEON_ORBS, VIBRANT_OCEANIC_CAUSTICS } from '../../components/effects/vibrant-shaders';

interface SuiteRoom {
  id: string;
  title: string;
  tag: string;
  badge: string;
  color: string;
  href: string;
  blurb: string;
  icon: any;
  sources: string[];
  imageUrl: string;
}

const SUITE_ROOMS: SuiteRoom[] = [
  {
    id: "01",
    title: "Event Horizon",
    tag: "3D WebGL",
    badge: "RELATIVISTIC ACCRETION",
    color: "from-amber-500 to-orange-600",
    href: "/#/showcase/blackhole",
    blurb: "Ray-marched black hole accretion disk with gravitational lensing and relativistic Doppler beaming.",
    icon: Compass,
    sources: ["black-hole", "blackhole-hero-section"],
    imageUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "02",
    title: "Pin Scroll Cinema",
    tag: "GSAP TIMELINE",
    badge: "SCROLLTRIGGER PIN",
    color: "from-cyan-500 to-blue-600",
    href: "/#/showcase/scroll-locked-video",
    blurb: "Pinned multi-stage hero with fading cinematic stills, interactive scrubbing, and floating text reveals.",
    icon: Film,
    sources: ["home-hero-landing-scroll-animation", "scroll-locked-video-hero"],
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "03",
    title: "Neural Field",
    tag: "PROCEDURAL SHADERS",
    badge: "GLSL HARMONICS",
    color: "from-purple-500 to-pink-600",
    href: "/#/showcase/neural-noise",
    blurb: "Simplex fractal noise, flow-field interference, and kinetic neon orbs stacked in harmony.",
    icon: Cpu,
    sources: ["neural-noise", "web-gl-shader", "neon-orbs"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "04",
    title: "Prism & Prisma",
    tag: "CHROMATIC DISPERSION",
    badge: "SPECTRUM REFRACTION",
    color: "from-fuchsia-500 to-indigo-600",
    href: "/#/showcase/prism",
    blurb: "Iridescent 3D crystal prism catching multi-colored light rays with frosted glassmorphism.",
    icon: Box,
    sources: ["prism-hero", "prisma-hero"],
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "05",
    title: "Chromatic Quicksilver",
    tag: "RAY-MARCHED CHROME",
    badge: "SPECULAR FLUID",
    color: "from-teal-400 to-cyan-600",
    href: "/#/showcase/liquid-metal",
    blurb: "Iridescent liquid metal metaballs with rainbow normal-map caustics reacting to pointer gravity.",
    icon: Compass,
    sources: ["liquid-metal-hero"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "06",
    title: "Cinematic Suite",
    tag: "3D PERSPECTIVE",
    badge: "CONTAINER TILT",
    color: "from-rose-500 to-purple-600",
    href: "/#/showcase/container-scroll",
    blurb: "Perspective 3D card tilt, expanding scroll stages, and locked viewport media streams.",
    icon: Layers,
    sources: ["container-scroll-animation", "scroll-expansion-hero"],
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "07",
    title: "Atelier House",
    tag: "AWWWARDS EDITORIAL",
    badge: "LUXURY PORTFOLIO",
    color: "from-amber-400 to-rose-500",
    href: "/#/showcase/kintaro-awwwards",
    blurb: "High-fashion editorial layout combining Kintaro kinetic cards, Vetra SaaS, and Velaris typography.",
    icon: Palette,
    sources: ["kintaro-awwwards-portfolio", "vetra", "velaris"],
    imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "08",
    title: "Imagine Studio",
    tag: "AI WORKSPACE",
    badge: "PROMPT COMPOSER",
    color: "from-indigo-400 to-cyan-500",
    href: "/#/showcase/ai-image-generation",
    blurb: "Generative AI studio with aspect ratio controls, lighting preset chips, and vivid prompt outputs.",
    icon: Sparkles,
    sources: ["ai-chat-image-generation-1"],
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "09",
    title: "Product & SaaS Matrix",
    tag: "BENTO MATRIX",
    badge: "METRIC TELEMETRY",
    color: "from-emerald-400 to-cyan-500",
    href: "/#/showcase/bento",
    blurb: "Asymmetric bento grid, cyberpunk radar telemetry, and responsive SaaS banner integration.",
    icon: LayoutGrid,
    sources: ["saa-s-template", "responsive-hero-banner", "bento", "hero", "hero-3"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  }
];

export const VeloraAtelierPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [activeRoom, setActiveRoom] = useState<string>("01");
  const currentRoom = SUITE_ROOMS.find(r => r.id === activeRoom) || SUITE_ROOMS[0];

  return (
    <div className="relative min-h-screen bg-[#06080F] text-white font-body selection:bg-cyan-500 selection:text-black">
      {/* Dynamic Background Shader */}
      <div className="fixed inset-0 z-0 opacity-45 pointer-events-none">
        <ShaderCanvas fragment={activeRoom === "05" ? VIBRANT_LIQUID_CHROME : activeRoom === "03" ? VIBRANT_NEON_ORBS : activeRoom === "02" ? VIBRANT_OCEANIC_CAUSTICS : VIBRANT_FLOW_FIELD} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Header Bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack || (() => window.location.hash = '/showcase')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Showcase Hub</span>
            </button>
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Master Suite Navigator</span>
              <h1 className="text-2xl font-heading font-extrabold text-white">Velora Motion Atelier</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              9 COHESIVE MOTION ROOMS
            </span>
          </div>
        </header>

        {/* Hero Stage for Active Room */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 bg-slate-900/70 backdrop-blur-xl shadow-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-mono font-bold">
                  ROOM {currentRoom.id} • {currentRoom.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">{currentRoom.tag}</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-white">
                {currentRoom.title}
              </h2>

              <p className="text-base text-slate-300 font-light leading-relaxed">
                {currentRoom.blurb}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400">Integrated Component Sources:</span>
                <div className="flex flex-wrap gap-2">
                  {currentRoom.sources.map(src => (
                    <span key={src} className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300">
                      @{src}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href={currentRoom.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 transition-all"
                >
                  <span>Launch Experience</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Room Visual Canvas */}
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-700/80 group">
              <img 
                src={currentRoom.imageUrl} 
                alt={currentRoom.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                <span className="bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm border border-white/10">
                  Full 60FPS Chromatic Render
                </span>
                <span className="text-cyan-400">Client GPU Accelerated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Room Navigation Strip */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-heading font-bold text-white">Select An Atelier Room</h3>
            <span className="text-xs font-mono text-slate-400">Click to switch stage</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUITE_ROOMS.map(room => {
              const IconComp = room.icon;
              const isSelected = room.id === activeRoom;
              return (
                <button
                  key={room.id}
                  onClick={() => setActiveRoom(room.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    isSelected 
                      ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.25)] scale-[1.02]' 
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-slate-300 group-hover:text-cyan-400'}`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">ROOM {room.id}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-300">
                      {room.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-heading font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {room.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {room.blurb}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
