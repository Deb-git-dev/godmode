import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Server, 
  Cpu, 
  Sparkles, 
  Github, 
  HeartHandshake, 
  Mail, 
  Layers,
  Award,
  Globe,
  Terminal
} from 'lucide-react';
import { ShaderGradientHero } from '../components/motion/ShaderGradientHero';
import { SplineScene3D } from '../components/motion/SplineScene3D';
import { TiltCard3D } from '../components/motion/TiltCard3D';
import { CertificateGenerator } from '../components/documents/CertificateGenerator';
import { GenerativeAIStudio } from '../components/ai/GenerativeAIStudio';
import debPhoto from '../assets/deb.jpg';

interface HomePageProps {
  onNavigate: (route: string) => void;
  onOpenActionModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenActionModal }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section: Debapriya's Personal Portfolio & Identity */}
      <ShaderGradientHero className="p-8 md:p-14 border border-indigo-100/80 shadow-xl overflow-hidden relative bg-white/90">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bio & Call to Action (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
              <span>Available for High-Impact AI & Full-Stack Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-xs md:text-sm font-mono tracking-wider text-indigo-600 uppercase font-semibold">
                Debapriya Bhattacharyya (Deb) • AI Architect
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance">
                Architecting Autonomous AI & Resilient Web Systems.
              </h1>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-body text-pretty max-w-2xl">
              Full-Stack Developer, Cloud AI Systems Architect, and Founder of the <strong className="text-slate-900 font-semibold">Tribeni Minati Foundation NGO</strong>. I build zero-local-compute multi-model orchestration pipelines, sub-second TTFT cloud inference microservices, and mathematical, anti-slop digital platforms.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#studio"
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-accent-primary to-indigo-600 hover:from-accent-primary/90 hover:to-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-xl shadow-accent-primary/25 active:scale-95 group"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Launch AI Studio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://github.com/Deb-git-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl text-xs font-semibold transition-all shadow-sm active:scale-95"
              >
                <Github className="w-4 h-4 text-text-secondary" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3 h-3 text-text-muted" />
              </a>

              <a
                href="https://www.facebook.com/deb2remember"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl text-xs font-semibold transition-all shadow-sm active:scale-95"
              >
                <svg className="w-4 h-4 text-blue-400 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook Profile</span>
                <ExternalLink className="w-3 h-3 text-text-muted" />
              </a>

              <button
                onClick={() => onNavigate('/contact')}
                className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl text-xs font-semibold transition-all shadow-sm active:scale-95"
              >
                <Mail className="w-4 h-4 text-accent-secondary" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Right Column: Deb's Portrait & Double-Bezel Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative Accent Glow Behind Portrait */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-indigo-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />

              {/* Double Bezel Outer Container */}
              <div className="relative p-2.5 bg-white rounded-3xl border border-slate-200 backdrop-blur-xl shadow-xl">
                <div className="relative rounded-2xl overflow-hidden border border-slate-100 max-w-[320px] aspect-square">
                  <img
                    src={debPhoto}
                    alt="Debapriya Bhattacharyya"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Badge on Portrait */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 border border-slate-200 rounded-xl backdrop-blur-md shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-heading font-bold text-xs text-slate-900">
                          Debapriya Bhattacharyya
                        </div>
                        <div className="text-[10px] font-mono text-slate-500">
                          Kolkata, WB • Tribeni Minati Foundation
                        </div>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-success shadow-lg shadow-emerald-500/50 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ShaderGradientHero>

      {/* Live Generative AI Studio Section */}
      <div id="studio" className="scroll-mt-24">
        <GenerativeAIStudio onOpenActionModal={onOpenActionModal} />
      </div>

      {/* Featured Engineering Projects */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-secondary/15 text-accent-secondary border border-accent-secondary/30 text-xs font-mono mb-2">
              <Layers className="w-3 h-3" />
              <span>Flagship Engineering Portfolio</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-text-primary tracking-tight">
              Featured Systems & Initiatives
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/catalog')}
            className="text-xs font-mono text-accent-secondary hover:underline flex items-center gap-1"
          >
            <span>Explore 50 Skills & Integrations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1: GODMODE */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-400 transition-all shadow-lg hover:shadow-xl group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
                  AI Architecture
                </span>
                <span className="text-xs font-mono text-accent-success flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Production Verified</span>
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                GODMODE — Unified Cloud AI Architecture
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mt-2.5 mb-6 font-body">
                Full-stack reference architecture implementing 50 modular agent skills, OpenCode terminal coding harness, and zero-local-compute inference routing across Anthropic Claude, OpenRouter, and NVIDIA NIM hosted microservices.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs font-mono">
              <a
                href="https://github.com/Deb-git-dev/godmode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-accent-secondary hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Deb-git-dev/godmode</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => onNavigate('/catalog')}
                className="text-text-muted hover:text-text-primary"
              >
                View Skills &rarr;
              </button>
            </div>
          </div>

          {/* Project 2: Tribeni Minati Foundation */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-rose-400 transition-all shadow-lg hover:shadow-xl group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  Social Impact & NGO
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Grassroots Welfare</span>
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-rose-400 transition-colors">
                Tribeni Minati Foundation Platform
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mt-2.5 mb-6 font-body">
                Full-stack web platform powering the Tribeni Minati Foundation NGO. Built to bring radical transparency to humanitarian aid, field telemetry reporting, donor lifecycle management, and verified community welfare projects.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs font-mono">
              <a
                href="https://github.com/Deb-git-dev/tribeni-minati-foundation-website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-rose-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Foundation Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.facebook.com/deb2remember"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary flex items-center gap-1"
              >
                <span>Updates</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Project 3: GitReverse Prompt Engine */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-cyan-400 transition-all shadow-lg hover:shadow-xl group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-secondary/20 text-accent-secondary border border-accent-secondary/30">
                  Prompt Engineering
                </span>
                <span className="text-xs font-mono text-text-muted">49 Repos Verified</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-accent-secondary transition-colors">
                GitReverse Prompt Engineering Catalog
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mt-2.5 mb-6 font-body">
                Curated reverse-engineered system prompt specifications extracted across 49 production repositories (ALPHENEX.AI Claude frontend suite, DeepSeek harnesses, OpenClaw 2.0, Firecrawl v2, and media pipelines).
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs font-mono">
              <button
                onClick={() => onNavigate('/prompts')}
                className="flex items-center gap-1.5 text-accent-secondary hover:text-white transition-colors"
              >
                <span>Browse Prompts Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-text-muted">49 Sourced Prompts</span>
            </div>
          </div>

          {/* Project 4: Cloud Model Router Visualizer */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-400 transition-all shadow-lg hover:shadow-xl group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Edge Router
                </span>
                <span className="text-xs font-mono text-accent-success flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Sub-380ms TTFT</span>
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-indigo-400 transition-colors">
                Autonomous Multi-Model Cloud Router
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mt-2.5 mb-6 font-body">
                High-performance edge routing layer capable of instant fallback between Claude 3.5 Sonnet, OpenAI GPT-4o, OpenRouter DeepSeek-V3, and NVIDIA NIM streaming microservices, with cryptographic dual-write ledger persistence.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs font-mono">
              <button
                onClick={() => onNavigate('/dashboard')}
                className="flex items-center gap-1.5 text-indigo-300 hover:text-white transition-colors"
              >
                <span>Inspect Live Telemetry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-text-muted">FastAPI + Vercel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Engineering & Decompilation Suites */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Multi-Vector Decompilation Suites</span>
            </div>
            <h2 className="text-2xl font-heading font-bold text-text-primary">
              Live Crawlers, Prompt Vaults & Sandbox Environments
            </h2>
          </div>
          <span className="text-xs font-mono text-cyan-400">4 New Dedicated Pages Live</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Multi-Crawler */}
          <div 
            onClick={() => onNavigate('/crawler')}
            className="p-6 rounded-3xl bg-gradient-to-br from-cyan-50/70 via-white to-sky-50 border border-cyan-200/80 hover:border-cyan-400 transition-all cursor-pointer group shadow-xl hover:shadow-cyan-500/20 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="w-11 h-11 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-700 mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                Firecrawl Multi-Vector Studio
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-body">
                Deconstruct 28 reference websites into Web structure, Tech stack signatures, and LLM-ready markdown (<code className="text-cyan-300">llms.txt</code>).
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-cyan-700">
              <span className="font-semibold">Launch Multi-Crawler</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: GitReverse Vault */}
          <div 
            onClick={() => onNavigate('/prompts')}
            className="p-6 rounded-3xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50 border border-indigo-200/80 hover:border-indigo-400 transition-all cursor-pointer group shadow-xl hover:shadow-indigo-500/20 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="w-11 h-11 rounded-2xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                GitReverse Prompt Vault
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-body">
                Explore and copy 49 reverse-engineered system prompts verbatim from leading repositories, agents, and skills.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-indigo-700">
              <span className="font-semibold">Explore 49 Prompts</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Design Lab */}
          <div 
            onClick={() => onNavigate('/design-lab')}
            className="p-6 rounded-3xl bg-gradient-to-br from-pink-50/70 via-white to-rose-50 border border-pink-200/80 hover:border-pink-400 transition-all cursor-pointer group shadow-xl hover:shadow-fuchsia-500/20 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="w-11 h-11 rounded-2xl bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-700 mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                Design System & Component Lab
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-body">
                Interactive token inspector (§18), typography scales, and copy-paste components from 21st.dev and Uiverse.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-pink-700">
              <span className="font-semibold">Open Design Lab</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Agent Terminal */}
          <div 
            onClick={() => onNavigate('/terminal')}
            className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50/70 via-white to-teal-50 border border-emerald-200/80 hover:border-emerald-400 transition-all cursor-pointer group shadow-xl hover:shadow-emerald-500/20 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                Agent CLI & Terminal Sandbox
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-body">
                In-browser interactive terminal to execute OpenCode, Claude slash commands (/design-md), and Firecrawl CLI.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-emerald-700">
              <span className="font-semibold">Launch Terminal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* 3D Scene Viewport */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-heading font-bold text-text-primary">
              Interactive 3D Orchestration Topology (§9)
            </h2>
            <p className="text-xs text-text-secondary mt-0.5 font-body">
              WebGL 2.0 viewport powered by SplineScene3D with graceful reduced-motion fallbacks.
            </p>
          </div>
          <span className="text-xs font-mono text-accent-success">WebGL 2.0 Active</span>
        </div>
        <SplineScene3D />
      </div>

      {/* Core Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TiltCard3D>
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4">
            <Server className="w-5 h-5" />
          </div>
          <h3 className="text-base font-heading font-bold text-text-primary mb-2">
            Zero Local Compute
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed mb-4 font-body">
            No local model weights, no local diffusion inference. 100% of compute delegated to cloud APIs, preserving development machine RAM.
          </p>
          <div className="text-[11px] font-mono text-accent-primary">Rule 01 Enforced</div>
        </TiltCard3D>

        <TiltCard3D>
          <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-4">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-heading font-bold text-text-primary mb-2">
            Autonomous Meta-Router
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed mb-4 font-body">
            50 specialized skills with hybrid BM25 and semantic intent dispatching. Agents self-select without human coordination overhead.
          </p>
          <div className="text-[11px] font-mono text-accent-secondary">Rule 04 Enforced</div>
        </TiltCard3D>

        <TiltCard3D>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-heading font-bold text-text-primary mb-2">
            Verifiable Action Ledger
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed mb-4 font-body">
            Dual-write persistence with client-side PDF receipt generation, ensuring complete auditability for system actions and donor disbursements.
          </p>
          <div className="text-[11px] font-mono text-accent-success">Rule 06 Enforced</div>
        </TiltCard3D>
      </div>

      {/* In-Browser PDF Certificate Generator */}
      <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-lg">
        <div className="max-w-2xl mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30 text-xs font-mono mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Cryptographic Proof & Verification</span>
          </div>
          <h2 className="text-xl font-heading font-bold text-text-primary">
            Generate Verifiable Portfolio Audit Certificate
          </h2>
          <p className="text-xs text-text-secondary mt-1 font-body">
            Uses in-browser PDF-Lib to construct an audited vector receipt validating Deb's system invariants and portfolio authenticity.
          </p>
        </div>

        <CertificateGenerator
          recipientName="Debapriya Bhattacharyya (Deb-git-dev)"
          actionId="ACT_PORTFOLIO_VERIFY_2026"
          blockNumber={10049}
        />
      </div>
    </div>
  );
};
