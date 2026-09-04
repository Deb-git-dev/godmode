import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Server, Cpu, Play } from 'lucide-react';
import { ShaderGradientHero } from '../components/motion/ShaderGradientHero.tsx';
import { SplineScene3D } from '../components/motion/SplineScene3D.tsx';
import { TiltCard3D } from '../components/motion/TiltCard3D.tsx';
import { CertificateGenerator } from '../components/documents/CertificateGenerator.tsx';

interface HomePageProps {
  onNavigate: (route: string) => void;
  onOpenActionModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenActionModal }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <ShaderGradientHero className="p-8 md:p-14 border border-border-subtle shadow-2xl">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/20 border border-accent-primary/30 text-xs font-mono text-indigo-300">
            <Zap className="w-3.5 h-3.5 text-accent-secondary" />
            <span>The Rule of Everything • Zero Local GPU</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary tracking-tight leading-[1.1]">
            Architected for Pure Cloud Intelligence.
          </h1>

          <p className="text-base md:text-lg text-text-secondary leading-relaxed font-body">
            GODMODE unifies Claude API reasoning, OpenRouter failover, and NVIDIA NIM hosted microservices into an uncompromising, anti-slop developer architecture. Every asset, skill, and tool is traceable with full provenance.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('/catalog')}
              className="flex items-center gap-2 px-6 py-3.5 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-xl text-sm font-bold transition-all shadow-xl shadow-accent-primary/25 active:scale-95 group"
            >
              <span>Explore AI Catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenActionModal}
              className="flex items-center gap-2 px-6 py-3.5 bg-surface-elevated hover:bg-slate-800 text-text-primary border border-border-prominent rounded-xl text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <Play className="w-4 h-4 text-accent-secondary" />
              <span>Trigger Verified Action</span>
            </button>
          </div>
        </div>
      </ShaderGradientHero>

      {/* 3D Scene Viewport */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-heading font-bold text-text-primary">
              Interactive 3D Orchestration Topology (§9)
            </h2>
            <p className="text-xs text-text-secondary mt-0.5">
              Self-contained SplineScene3D primitive with deterministic WebGL & reduced-motion fallback.
            </p>
          </div>
          <span className="text-xs font-mono text-accent-success">WebGL 2.0 / SVG Fallback Ready</span>
        </div>
        <SplineScene3D />
      </div>

      {/* Three Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TiltCard3D>
          <div className="w-10 h-10 rounded-xl bg-indigo-950/40 border border-indigo-700/40 flex items-center justify-center text-indigo-400 mb-4">
            <Server className="w-5 h-5" />
          </div>
          <h3 className="text-base font-heading font-bold text-text-primary mb-2">
            Zero Local Compute
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed mb-4">
            No local model weights, no local diffusion inference. 100% of compute delegated to cloud APIs, preserving development machine RAM.
          </p>
          <div className="text-[11px] font-mono text-accent-primary">Rule 01 Enforced</div>
        </TiltCard3D>

        <TiltCard3D>
          <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-700/40 flex items-center justify-center text-cyan-400 mb-4">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-heading font-bold text-text-primary mb-2">
            Autonomous Meta-Router
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed mb-4">
            34+ specialized skills with hybrid BM25 and semantic intent dispatching. Agents self-select without human coordination overhead.
          </p>
          <div className="text-[11px] font-mono text-accent-secondary">Rule 04 Enforced</div>
        </TiltCard3D>

        <TiltCard3D>
          <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-700/40 flex items-center justify-center text-emerald-400 mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-heading font-bold text-text-primary mb-2">
            Dual-Write Persistence
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed mb-4">
            Supabase Postgres primary combined with MongoDB Atlas async mirror and LocalStorage cache for zero data loss risk.
          </p>
          <div className="text-[11px] font-mono text-accent-success">Section 11 Enforced</div>
        </TiltCard3D>
      </div>

      {/* In-Browser PDF Clearance Certificate Section */}
      <CertificateGenerator
        actionId="rec_godmode_core_init"
        blockNumber={10009}
        recipientName="Lead Architecture Auditor"
      />
    </div>
  );
};
