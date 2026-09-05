import React from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Github, 
  ExternalLink
} from 'lucide-react';
import { StatutoryGroundingCard } from '../components/compliance/StatutoryGroundingCard';
import debPhoto from '../assets/deb.jpg';

export const AboutPage: React.FC = () => {
  const tenets = [
    { 
      title: 'Zero Local Compute Invariant', 
      desc: 'Never run local LLM weights on low-spec hardware. Offload 100% of compute to hosted cloud APIs (Claude, NIM, OpenRouter) to preserve system responsiveness.' 
    },
    { 
      title: 'Claude 3.5 Sonnet Primary Reasoning', 
      desc: 'Standardize architectural reasoning on Anthropic Claude 3.5 Sonnet, with seamless OpenRouter multi-provider failover.' 
    },
    { 
      title: 'Anti-Slop Design Token Governance', 
      desc: 'Enforce mathematical color, typographic (Space Grotesk, Inter, JetBrains Mono), and surface geometry rules defined in DESIGN.md.' 
    },
    { 
      title: 'Verifiable Traceability & Provenance Log', 
      desc: 'Track every integrated tool, library, and MCP server in PROVENANCE.md with explicit architectural rationale and zero undocumented dependencies.' 
    },
    { 
      title: 'Plain Markdown Memory Journal', 
      desc: 'Maintain session context in plain-text markdown files (memory/journal.md) avoiding local in-memory vector index overhead.' 
    },
    { 
      title: 'Continuous Loop Recheck Verification', 
      desc: 'Strictly verify all production invariants, type checks, and zero-error builds before declaring any milestone complete.' 
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* Hero: Debapriya's Story & Vision */}
      <div className="p-8 md:p-12 bg-surface-subtle border border-border-subtle rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-accent-primary/20 via-accent-secondary/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Avatar & Badges */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="relative p-2 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl mb-4 group">
              <div className="w-40 h-40 rounded-2xl overflow-hidden border border-slate-800">
                <img
                  src={debPhoto}
                  alt="Debapriya Bhattacharyya"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <h3 className="font-heading font-extrabold text-lg text-text-primary">
              Debapriya Bhattacharyya
            </h3>
            <p className="text-xs font-mono text-accent-secondary mt-0.5">
              AI Systems Architect & Full-Stack Engineer
            </p>
            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://github.com/Deb-git-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-surface-elevated hover:bg-slate-800 text-text-secondary hover:text-white border border-border-prominent transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/deb2remember"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-surface-elevated hover:bg-slate-800 text-text-secondary hover:text-blue-400 border border-border-prominent transition-all"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Biography Content */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
                Founder & Lead Architect
              </span>
              <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-success/20 text-accent-success border border-accent-success/30">
                Zero Local Compute Invariant
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-heading font-extrabold text-text-primary tracking-tight text-balance">
              Building AI Systems with Conviction and Purpose.
            </h1>

            <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-body text-pretty">
              I am an AI Systems Architect and Full-Stack Engineer based in West Bengal, India. My engineering philosophy combines strict mathematical design governance with radical cloud leverage: building resilient, anti-slop software that delegates heavy neural inference to cloud gateways while keeping local environments ultra-lean.
            </p>

            <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-body text-pretty">
              Beyond commercial software, I dedicate my work to grassroots humanitarian empowerment as the Founder of the <strong className="text-text-primary">Tribeni Minati Foundation</strong>, pioneering transparent web platforms that record field aid telemetry directly on verifiable ledgers.
            </p>
          </div>
        </div>
      </div>

      {/* Tribeni Minati Foundation Section */}
      <div className="p-8 bg-surface-subtle border border-rose-500/30 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-rose-300">Humanitarian NGO</div>
              <h2 className="text-xl font-heading font-bold text-text-primary">
                Tribeni Minati Foundation
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Deb-git-dev/tribeni-minati-foundation-website"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-surface-elevated hover:bg-slate-800 text-xs font-mono text-text-primary border border-border-prominent flex items-center gap-1.5 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository</span>
              <ExternalLink className="w-3 h-3 text-text-muted" />
            </a>
            <a
              href="https://www.facebook.com/deb2remember"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-xs font-mono text-blue-300 border border-blue-500/30 flex items-center gap-1.5 transition-all"
            >
              <span>Facebook Page</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-text-secondary">
          <div className="p-5 bg-slate-950/70 border border-border-subtle rounded-2xl">
            <h4 className="font-heading font-bold text-text-primary text-sm mb-1.5 text-balance">
              Digital Learning & Youth Enablement
            </h4>
            <p className="text-pretty">
              Equipping underprivileged rural students with modern computing fundamentals, digital literacy kits, and accessible learning infrastructure.
            </p>
          </div>

          <div className="p-5 bg-slate-950/70 border border-border-subtle rounded-2xl">
            <h4 className="font-heading font-bold text-text-primary text-sm mb-1.5 text-balance">
              Nutrition & Healthcare Outreach
            </h4>
            <p className="text-pretty">
              Conducting monthly nutrition drives, primary healthcare diagnostics, and maternal wellness camps across underserved communities in West Bengal.
            </p>
          </div>

          <div className="p-5 bg-slate-950/70 border border-border-subtle rounded-2xl">
            <h4 className="font-heading font-bold text-text-primary text-sm mb-1.5 text-balance">
              Radical Ledger Transparency
            </h4>
            <p className="text-pretty">
              Every financial donation and aid package is registered in a public dual-write ledger with verifiable vector receipt generation.
            </p>
          </div>
        </div>
      </div>

      {/* Tenets Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-heading font-bold text-text-primary flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent-success" />
            <span>The 6 Immutable Engineering Tenets</span>
          </h2>
          <span className="text-xs font-mono text-text-muted">The Rule of Everything</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tenets.map((t, i) => (
            <div
              key={i}
              className="p-5 bg-surface-subtle border border-border-subtle rounded-2xl flex items-start gap-3.5 hover:border-slate-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-700/50 flex items-center justify-center text-accent-primary font-mono text-xs shrink-0 font-bold">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-sm font-heading font-bold text-text-primary mb-1">{t.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed font-body">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statutory Grounding Card */}
      <StatutoryGroundingCard />
    </div>
  );
};
