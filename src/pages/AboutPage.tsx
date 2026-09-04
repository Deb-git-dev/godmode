import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { StatutoryGroundingCard } from '../components/compliance/StatutoryGroundingCard.tsx';

export const AboutPage: React.FC = () => {
  const tenets = [
    { title: 'Zero Local Compute Invariant', desc: 'Never run neural inference on the local host. Offload all weight operations to cloud endpoints.' },
    { title: 'Claude API Primary Reasoning', desc: 'Standardize primary reasoning on Anthropic Claude 3.5 Sonnet, with OpenRouter multi-provider failover.' },
    { title: 'Anti-Slop Design Token Contract', desc: 'Enforce mathematical color, typographic, and surface geometry rules defined in DESIGN.md and ui-spec.yaml.' },
    { title: 'Verifiable Traceability Log', desc: 'Track every integrated tool, library, and MCP server in PROVENANCE.md with explicit architectural rationale.' },
    { title: 'Plain Markdown Memory Journal', desc: 'Maintain session context in plain-text markdown files (memory/journal.md) avoiding local vector index RAM overhead.' },
    { title: 'Continuous Loop Recheck', desc: 'Always verify all 20 production invariants before marking any task complete.' }
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="p-8 bg-surface-subtle border border-border-subtle rounded-3xl">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
            About Project GODMODE
          </span>
          <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-success/20 text-accent-success border border-accent-success/30">
            The Rule of Everything
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary mt-3 tracking-tight">
          Engineering Without Compromise.
        </h1>

        <p className="text-sm md:text-base text-text-secondary leading-relaxed mt-3 max-w-3xl font-body">
          GODMODE was established to eliminate the fragility, bloat, and aesthetic mediocrity of typical AI-generated codebases. By codifying strict workspace rules, concrete design tokens, and cloud-only inference microservices, GODMODE sets a new standard for autonomous agentic systems.
        </p>
      </div>

      {/* Tenets Grid */}
      <div>
        <h2 className="text-xl font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-accent-success" />
          The 6 Immutable Architectural Tenets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tenets.map((t, i) => (
            <div
              key={i}
              className="p-5 bg-surface-subtle border border-border-subtle rounded-2xl flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-700/50 flex items-center justify-center text-accent-primary font-mono text-xs shrink-0 font-bold">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-sm font-heading font-bold text-text-primary mb-1">{t.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benchmark Standards */}
      <div className="p-6 bg-surface-subtle border border-border-subtle rounded-2xl">
        <h2 className="text-base font-heading font-bold text-text-primary mb-2">
          Design Quality Benchmarks (§18)
        </h2>
        <p className="text-xs text-text-secondary mb-4">
          Every component in GODMODE is benchmarked against industry-leading developer tools:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
            <div className="text-accent-primary font-bold mb-1">Linear.app</div>
            <div className="text-text-muted">Uncompromising keyboard ergonomics & dark mode hierarchy.</div>
          </div>
          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
            <div className="text-accent-secondary font-bold mb-1">Vercel Dashboard</div>
            <div className="text-text-muted">High-density monospace telemetry & rapid feedback states.</div>
          </div>
          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
            <div className="text-accent-success font-bold mb-1">Stripe Developers</div>
            <div className="text-text-muted">Flawless typography contrast & audited status visualizers.</div>
          </div>
        </div>
      </div>

      {/* Statutory Grounding Section (Tribeni Minati Foundation Pattern) */}
      <StatutoryGroundingCard />
    </div>
  );
};
