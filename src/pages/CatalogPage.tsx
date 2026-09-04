import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { MotionColumn, MotionFocus } from '../components/primitives/MotionPrimitives';

interface CatalogPageProps {
  onSelectEntity: (id: string) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ onSelectEntity }) => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const items = [
    { id: 'claude-3-5-sonnet', title: 'Claude 3.5 Sonnet', category: 'Model Gateway', desc: 'Primary reasoning engine. Zero local GPU; high-context instruction following.', tag: 'Rule 02 Primary' },
    { id: 'nvidia-nim', title: 'NVIDIA NIM Nemotron-4', category: 'Model Gateway', desc: 'Hosted inference microservices via SSE streaming for sub-second TTFT.', tag: 'Fast Open Weights' },
    { id: 'openrouter', title: 'OpenRouter Multi-Model', category: 'Model Gateway', desc: 'Single key multi-provider failover routing across Claude, GPT-4o, DeepSeek, and Qwen.', tag: 'Cost Optimizer' },
    { id: 'ui-ux-pro-max', title: 'UI/UX Pro Max', category: 'Frontend Taste', desc: '161 reasoning rules, 67 UI styles, 97 palettes, 57 font pairings, WCAG AA compliance.', tag: 'Design Engine' },
    { id: 'design-taste-frontend', title: 'Design Taste Frontend', category: 'Frontend Taste', desc: 'Anti-slop frontend principles: typography wrapping, eliminates generic template aesthetics.', tag: 'Anti-Slop' },
    { id: 'stitch-design-taste', title: 'Stitch Design Taste', category: 'Frontend Taste', desc: 'Google Stitch semantic token system & double-bezel card philosophy.', tag: 'Token Standard' },
    { id: 'minimalist-ui', title: 'Minimalist UI', category: 'Frontend Taste', desc: 'Clean warm monochrome, flat bento grids, editorial contrast.', tag: 'Clean Grid' },
    { id: 'industrial-brutalist-ui', title: 'Industrial Brutalist UI', category: 'Frontend Taste', desc: 'Swiss typographic grids, utilitarian contrast patterns, high-density monospace.', tag: 'Utilitarian' },
    { id: 'garden-skills', title: 'Garden Skills', category: 'Frontend Taste', desc: 'Enforces 6-stage phased construction: requirements -> context -> tokens -> draft -> build -> verify.', tag: 'Workflow' },
    { id: 'gpt-taste', title: 'GPT Taste', category: 'Motion', desc: 'Advanced GSAP-style layout variance, AIDA structure, wide bold typography.', tag: 'Conversion' },
    { id: 'image-to-code', title: 'Image to Code', category: 'Motion', desc: 'High-fidelity visual component reconstruction from design mockups into working React/Tailwind code.', tag: 'Reconstruction' },
    { id: 'skill-creator', title: 'Skill Creator', category: 'Skill Makers', desc: 'CLI + subagent for synthesizing recurring agent workflows into permanent skills.', tag: 'Skill Synthesis' },
    { id: 'skill-router', title: 'Skill Router', category: 'Routers', desc: 'Intent classification & semantic matching to auto-select from installed catalog.', tag: 'Meta-Router' },
    { id: 'skillmux', title: 'Skillmux', category: 'Routers', desc: 'Hybrid BM25 + embedding routing from natural language to the right SKILL.md.', tag: 'Hybrid Search' },
    { id: 'supabase', title: 'Supabase Architecture', category: 'Full-Stack', desc: 'Postgres schema design, Row Level Security (RLS), and database MCP integration.', tag: 'Persistence' },
    { id: 'react-performance-security', title: 'React Performance & Security', category: 'Full-Stack', desc: 'Zero-warning strict builds, tree-shaking, OWASP standards.', tag: 'Zero Warning' },
    { id: 'compliance-guard', title: 'Compliance Guard', category: 'Compliance', desc: 'Grounds agent in verified statutory, legal, and architectural facts; zero hallucination.', tag: 'Truth Guard' },
    { id: 'doc-ingestion', title: 'Doc Ingestion', category: 'Compliance', desc: 'Reads reference docs dropped into project and extracts them into Provenance Log (§20) automatically.', tag: 'Auto-Catalog' }
  ];

  const categories = ['all', 'Model Gateway', 'Frontend Taste', 'Motion', 'Skill Makers', 'Routers', 'Full-Stack', 'Compliance'];

  const filteredItems = items.filter((item) => {
    const matchCat = filter === 'all' || item.category === filter;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 bg-surface-subtle border border-border-subtle rounded-2xl">
        <h1 className="text-2xl font-heading font-bold text-text-primary">
          GODMODE Autonomous Catalog & Registry
        </h1>
        <p className="text-xs text-text-secondary mt-1">
          Explore all verified model gateways, modular skills, and full-stack connectors integrated into the architecture.
        </p>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center gap-3 mt-4 pt-4 border-t border-border-subtle">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-3 text-text-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search components, skills, models..."
              className="w-full bg-surface-elevated border border-border-subtle rounded-xl pl-9 pr-4 py-2 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  filter === c
                    ? 'bg-accent-primary text-white shadow-sm'
                    : 'bg-surface-elevated text-text-secondary hover:text-text-primary border border-border-subtle'
                }`}
              >
                {c === 'all' ? 'All Items' : c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Catalog Items */}
      <MotionColumn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <MotionFocus
            key={item.id}
            className="p-5 bg-surface-subtle border border-border-subtle hover:border-border-prominent rounded-2xl flex flex-col justify-between transition-all shadow-md group cursor-pointer"
          >
            <div onClick={() => onSelectEntity(item.id)}>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-text-secondary border border-slate-700">
                  {item.category}
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-base font-heading font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div
              onClick={() => onSelectEntity(item.id)}
              className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between text-xs text-accent-secondary group-hover:translate-x-1 transition-transform"
            >
              <span className="font-mono text-[11px]">View Architecture Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </MotionFocus>
        ))}
      </MotionColumn>
    </div>
  );
};
