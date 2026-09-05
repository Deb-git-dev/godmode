import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  ArrowRight, 
  Search, 
  Filter 
} from 'lucide-react';

export interface ShowcaseCard {
  id: string;
  refNum: string;
  title: string;
  category: '3D & WebGL' | 'Hero & Landings' | 'Interactive & AI' | 'Templates & Portfolios' | 'Gradients & Shaders';
  desc: string;
  route: string;
  author: string;
  tags: string[];
  gradient: string;
}

export const SHOWCASE_ITEMS: ShowcaseCard[] = [
  {
    id: 'kintaro-awwwards',
    refNum: 'REF 01',
    title: 'Kintaro Awwwards Portfolio',
    category: 'Templates & Portfolios',
    desc: 'Award-winning editorial creative director portfolio with bold typography and kinetic project cards.',
    route: '/showcase/kintaro-awwwards',
    author: '@xkintaro',
    tags: ['Awwwards', 'Typography', 'Framer Motion'],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-indigo-500/20'
  },
  {
    id: 'webgl-shader',
    refNum: 'REF 02',
    title: 'Reactive WebGL Shader',
    category: '3D & WebGL',
    desc: 'Mathematical plasma wave fragment shader running on client-side WebGL canvas with interactive speed controls.',
    route: '/showcase/webgl-shader',
    author: '@designali-in',
    tags: ['WebGL', 'GLSL', 'Canvas', 'GPU'],
    gradient: 'from-indigo-500/20 via-purple-500/10 to-pink-500/20'
  },
  {
    id: 'neural-noise',
    refNum: 'REF 03',
    title: 'Neural Perlin Noise Field',
    category: '3D & WebGL',
    desc: 'Generative vector wave mesh simulating harmonic Perlin turbulence with dynamic color switcher.',
    route: '/showcase/neural-noise',
    author: '@designali-in',
    tags: ['Canvas 2D', 'Perlin Noise', 'Turbulence'],
    gradient: 'from-purple-500/20 via-indigo-500/10 to-cyan-500/20'
  },
  {
    id: 'neon-orbs',
    refNum: 'REF 04',
    title: 'Kinetic Neon Orbs',
    category: '3D & WebGL',
    desc: 'Floating glowing sphere physics with multi-color radial gradient diffusion and boundary collisions.',
    route: '/showcase/neon-orbs',
    author: '@minhxthanh',
    tags: ['Neon Bloom', 'Particle Physics', 'Canvas'],
    gradient: 'from-cyan-500/20 via-teal-500/10 to-emerald-500/20'
  },
  {
    id: 'orbiting-circles',
    refNum: 'REF 05',
    title: 'Concentric Orbiting Circles',
    category: 'Interactive & AI',
    desc: 'Iconic Magic UI concentric circular orbit paths with rotating developer tech stack badges.',
    route: '/showcase/orbiting-circles',
    author: '@dillionverma',
    tags: ['Magic UI', 'CSS Transform', 'SVG'],
    gradient: 'from-indigo-500/20 via-cyan-500/10 to-blue-500/20'
  },
  {
    id: 'link-hover',
    refNum: 'REF 06',
    title: 'Magnetic Link Hover',
    category: 'Interactive & AI',
    desc: 'Cursor-following floating image card preview triggered smoothly on typography hover.',
    route: '/showcase/link-hover',
    author: '@Shatlyk1011',
    tags: ['Framer Motion', 'Spring Physics', 'Hover'],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20'
  },
  {
    id: 'ai-image-generation',
    refNum: 'REF 07',
    title: 'AI Chat & Image Generation',
    category: 'Interactive & AI',
    desc: 'Comprehensive AI image studio interface with prompt input, aspect ratio controls, and art style pills.',
    route: '/showcase/ai-image-generation',
    author: '@gonzalochale',
    tags: ['AI Studio', 'Cloud Media', 'UI Controls'],
    gradient: 'from-purple-500/20 via-pink-500/10 to-rose-500/20'
  },
  {
    id: 'dancing-letters',
    refNum: 'REF 08',
    title: 'Dancing Letters Spring',
    category: 'Interactive & AI',
    desc: 'Letter-by-letter kinetic spring physics with interactive hover repulsion and custom text testing.',
    route: '/showcase/dancing-letters',
    author: '@chamaac',
    tags: ['Typography', 'Spring Physics', 'Motion'],
    gradient: 'from-cyan-500/20 via-indigo-500/10 to-fuchsia-500/20'
  },
  {
    id: 'blackhole',
    refNum: 'REF 09',
    title: 'Relativistic Black Hole',
    category: '3D & WebGL',
    desc: 'Hardware-accelerated 2D canvas simulation of relativistic accretion disk with Doppler beaming.',
    route: '/black-hole',
    author: '@yura',
    tags: ['Canvas 2D', 'Astrophysics', 'Doppler'],
    gradient: 'from-amber-500/20 via-orange-500/10 to-cyan-500/20'
  },
  {
    id: 'prism',
    refNum: 'REF 10',
    title: 'Bevel Prism Light Hero',
    category: 'Hero & Landings',
    desc: 'Glass triangular prism light refraction splitting beams into chromatic spectrum hues.',
    route: '/showcase/prism',
    author: '@bevelui',
    tags: ['Prism', 'Chromatic', 'Refraction'],
    gradient: 'from-pink-500/20 via-purple-500/10 to-cyan-500/20'
  },
  {
    id: 'vetra',
    refNum: 'REF 11',
    title: 'Vetra Architectural Studio',
    category: 'Templates & Portfolios',
    desc: 'Minimalist luxury Swiss architectural studio portfolio template with serif typography.',
    route: '/showcase/vetra',
    author: '@larsen66',
    tags: ['Architecture', 'Editorial', 'Minimalist'],
    gradient: 'from-slate-700/20 via-zinc-600/10 to-neutral-700/20'
  },
  {
    id: 'velaris',
    refNum: 'REF 12',
    title: 'Velaris Celestial Hero',
    category: 'Hero & Landings',
    desc: 'City of Starlight celestial night-sky hero with glowing starfield constellations.',
    route: '/showcase/velaris',
    author: '@amanshakya307',
    tags: ['Starfield', 'Celestial', 'Night Sky'],
    gradient: 'from-blue-600/20 via-indigo-600/10 to-sky-500/20'
  },
  {
    id: 'scroll-locked-video',
    refNum: 'REF 13',
    title: 'Scroll-Locked Video Hero',
    category: 'Hero & Landings',
    desc: 'Pinned video canvas scrubbed directly by page scroll position with pinned text overlays.',
    route: '/showcase/scroll-locked-video',
    author: '@gughigug',
    tags: ['Video Scrub', 'ScrollTrigger', 'Pinned'],
    gradient: 'from-cyan-500/20 via-blue-600/10 to-teal-500/20'
  },
  {
    id: 'aurora',
    refNum: 'REF 14',
    title: 'Aceternity Aurora Background',
    category: 'Hero & Landings',
    desc: 'Signature multi-color shifting atmospheric aurora bands with soft Gaussian blur.',
    route: '/showcase/aurora',
    author: '@manuarora700',
    tags: ['Aceternity', 'Aurora', 'Glow Bands'],
    gradient: 'from-emerald-500/20 via-cyan-500/10 to-purple-500/20'
  },
  {
    id: 'liquid-metal',
    refNum: 'REF 15',
    title: 'Liquid Mercury Metal Hero',
    category: '3D & WebGL',
    desc: 'Chrome metallic displacement surface with multi-harmonic sinusoidal waves and tint selector.',
    route: '/showcase/liquid-metal',
    author: '@chowlol202',
    tags: ['Chrome Metal', 'Sinusoidal', 'Specular'],
    gradient: 'from-slate-500/20 via-cyan-500/10 to-indigo-500/20'
  },
  {
    id: 'scroll-expansion',
    refNum: 'REF 16',
    title: 'Scroll Expansion Viewport',
    category: 'Hero & Landings',
    desc: 'Full-bleed viewport expansion container scaling from card to 100vw on scroll.',
    route: '/showcase/scroll-expansion',
    author: '@arunachalam',
    tags: ['Scroll Expansion', 'Full Bleed', 'GSAP'],
    gradient: 'from-indigo-500/20 via-blue-500/10 to-cyan-500/20'
  },
  {
    id: 'container-scroll',
    refNum: 'REF 17',
    title: 'Aceternity 3D Container Scroll',
    category: 'Hero & Landings',
    desc: '3D tablet perspective tilt scroll leveling out smoothly into full screen dashboard.',
    route: '/showcase/container-scroll',
    author: '@manuarora700',
    tags: ['Aceternity', '3D Perspective', 'Tablet'],
    gradient: 'from-indigo-500/20 via-purple-500/10 to-pink-500/20'
  },
  {
    id: 'splite',
    refNum: 'REF 18',
    title: 'Splite 3D Floating Hero',
    category: 'Hero & Landings',
    desc: 'Spatial computing hero with volumetric floating cards, cursor parallax, and tactile lighting.',
    route: '/showcase/splite',
    author: '@serafimcloud',
    tags: ['Spatial 3D', 'Parallax', 'Cards'],
    gradient: 'from-purple-500/20 via-indigo-500/10 to-cyan-500/20'
  },
  {
    id: 'hero',
    refNum: 'REF 19',
    title: 'Reuno UI Developer SaaS Hero',
    category: 'Hero & Landings',
    desc: 'Clean modern developer SaaS conversion hero with animated badge and dual CTAs.',
    route: '/showcase/hero',
    author: '@reuno-ui',
    tags: ['SaaS Hero', 'Clean', 'Conversion'],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-indigo-500/20'
  },
  {
    id: 'prisma',
    refNum: 'REF 20',
    title: 'Prisma Pipeline Database Hero',
    category: 'Hero & Landings',
    desc: 'Database developer hero with interactive code schema preview and low-latency pipeline metrics.',
    route: '/showcase/prisma',
    author: '@rahil1202',
    tags: ['Prisma', 'Database', 'Code Preview'],
    gradient: 'from-teal-500/20 via-emerald-500/10 to-cyan-500/20'
  },
  {
    id: 'hero-3',
    refNum: 'REF 21',
    title: 'Hero 3 Metric Chips',
    category: 'Hero & Landings',
    desc: 'Modern hero with floating interactive metric chips, dynamic grid mesh backdrop, and user avatars.',
    route: '/showcase/hero-3',
    author: '@ravikatiyar162',
    tags: ['Metric Chips', 'Grid Mesh', 'Avatars'],
    gradient: 'from-cyan-500/20 via-indigo-500/10 to-purple-500/20'
  },
  {
    id: 'gradient-recipe',
    refNum: 'REF 22',
    title: 'Radial Spectrum Mesh Recipe',
    category: 'Gradients & Shaders',
    desc: 'Cinematic radial gradient formula with one-click CSS recipe copying and zero bundle footprint.',
    route: '/showcase/gradient-recipe',
    author: '21st Community',
    tags: ['CSS Recipe', 'Radial Gradient', 'Zero JS'],
    gradient: 'from-cyan-500/20 via-indigo-500/10 to-purple-500/20'
  },
  {
    id: 'oceanic-shimmer',
    refNum: 'REF 23',
    title: 'Oceanic Shimmer Gradient',
    category: 'Gradients & Shaders',
    desc: 'Deep sea azure and seafoam reflection layers capturing kinetic oceanic light swells.',
    route: '/showcase/oceanic-shimmer',
    author: '21st Community',
    tags: ['Oceanic', 'Azure Wave', 'Shimmer'],
    gradient: 'from-sky-500/20 via-cyan-500/10 to-blue-600/20'
  },
  {
    id: 'saa-template',
    refNum: 'REF 24',
    title: 'Waleed SaaS Landing Template',
    category: 'Templates & Portfolios',
    desc: 'Full-featured high-converting SaaS landing template with pricing tiers and feature checklist.',
    route: '/showcase/saa-template',
    author: '@waleedkibhen',
    tags: ['SaaS Template', 'Pricing Table', 'Full Page'],
    gradient: 'from-indigo-500/20 via-purple-500/10 to-blue-500/20'
  },
  {
    id: 'responsive-hero',
    refNum: 'REF 25',
    title: 'Fluid Responsive Hero Banner',
    category: 'Hero & Landings',
    desc: 'Fluid clamping banner adapting smoothly across mobile, tablet, laptop, and 4K viewports.',
    route: '/showcase/responsive-hero',
    author: '@sensewood8',
    tags: ['Responsive', 'Clamp Typography', 'Mobile First'],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20'
  },
  {
    id: 'bento',
    refNum: 'REF 26',
    title: 'Kinfe High-Design Bento Grid',
    category: 'Interactive & AI',
    desc: 'High-density telemetry bento grid with live metrics, notification ticker, and hardware render tile.',
    route: '/showcase/bento',
    author: '@kinfe123',
    tags: ['Bento Grid', 'Telemetry', 'Metrics'],
    gradient: 'from-cyan-500/20 via-indigo-500/10 to-purple-500/20'
  },
];

export const ShowcaseIndexPage: React.FC<{ onNavigate: (route: string) => void }> = ({ onNavigate }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    '3D & WebGL',
    'Hero & Landings',
    'Interactive & AI',
    'Templates & Portfolios',
    'Gradients & Shaders'
  ];

  const filteredItems = SHOWCASE_ITEMS.filter(item => {
    const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                        item.desc.toLowerCase().includes(search.toLowerCase()) ||
                        item.author.toLowerCase().includes(search.toLowerCase()) ||
                        item.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-8 pb-16 font-body">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl p-8 border border-slate-700/60 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-emerald-500/15 via-purple-500/15 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>21st.dev Component & Visual Showcase Index</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              26 World-Class Visual Experiences
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Every reference from 21st.dev engineered into Project GODMODE. Explore interactive WebGL shaders, Perlin noise fields, kinetic typography, 3D container scrolls, and high-converting SaaS templates.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono text-slate-200 transition-colors shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Portfolio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search across 26 experiences by title, technology, author, or keywords..."
            className="w-full pl-11 pr-4 py-3.5 bg-slate-900/90 border border-slate-700 rounded-2xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors shadow-inner font-mono"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all shrink-0 capitalize ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat === 'all' ? 'All (26)' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* 26 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onNavigate(item.route)}
            className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/80 transition-all cursor-pointer group shadow-xl hover:shadow-cyan-500/15 flex flex-col justify-between relative overflow-hidden h-80"
          >
            <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform`} />

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono text-cyan-400 font-bold">{item.refNum}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {item.category}
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">{item.author}</p>
              <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-1.5">
                {item.tags.slice(0, 2).map((t, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                    #{t}
                  </span>
                ))}
              </div>
              <span className="text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1 font-semibold">
                <span>Launch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
