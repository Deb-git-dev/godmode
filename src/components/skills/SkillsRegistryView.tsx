import React, { useState } from 'react';
import { Search, Database, Globe, Play, CheckCircle2, Bot } from 'lucide-react';
import { MotionColumn, MotionFocus } from '../primitives/MotionPrimitives';

interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend Taste' | 'Meta / Router' | 'Governance / Guard';
  description: string;
  path: string;
  rulesCount: number;
}

export const SkillsRegistryView: React.FC = () => {
  const [query, setQuery] = useState('');
  const [routedSkill, setRoutedSkill] = useState<{ primary: string; active: string[]; reasoning: string } | null>(null);

  const skills: SkillItem[] = [
    {
      id: 'ui-ux-pro-max',
      name: 'UI/UX Pro Max',
      category: 'Frontend Taste',
      description: 'AI design intelligence: 161 reasoning rules, 67 UI styles, 97 palettes, 57 font pairings, WCAG AA compliance.',
      path: '.agents/skills/ui-ux-pro-max/SKILL.md',
      rulesCount: 161
    },
    {
      id: 'design-taste-frontend',
      name: 'Design Taste Frontend',
      category: 'Frontend Taste',
      description: 'Anti-slop frontend principles: typography wrapping, eliminates generic template aesthetics, intentional layout variance.',
      path: '.agents/skills/design-taste-frontend/SKILL.md',
      rulesCount: 18
    },
    {
      id: 'garden-skills',
      name: 'Garden Skills',
      category: 'Frontend Taste',
      description: 'Enforces 6-stage phased construction: requirements → context → token declaration → draft → build → verify.',
      path: '.agents/skills/garden-skills/SKILL.md',
      rulesCount: 6
    },
    {
      id: 'skill-creator',
      name: 'Skill Creator',
      category: 'Meta / Router',
      description: 'Synthesizes recurring agent procedures into permanent, validated skills with proper YAML frontmatter and eval specs.',
      path: '.agents/skills/skill-creator/SKILL.md',
      rulesCount: 12
    },
    {
      id: 'skill-router',
      name: 'Skill Router',
      category: 'Meta / Router',
      description: 'Meta-skill intent classification & semantic matching. Auto-selects from installed skills once 5+ skills exist.',
      path: '.agents/skills/skill-router/SKILL.md',
      rulesCount: 8
    },
    {
      id: 'full-output-enforcement',
      name: 'Full Output Enforcement',
      category: 'Governance / Guard',
      description: 'Strictly bans placeholder comments (// TODO) and stubs; enforces 100% production-ready, complete code generation.',
      path: '.agents/skills/full-output-enforcement/SKILL.md',
      rulesCount: 5
    },
    {
      id: 'compliance-guard',
      name: 'Compliance Guard',
      category: 'Governance / Guard',
      description: 'Grounds responses in verified statutory, financial, and architectural data; eliminates unverified hallucinations.',
      path: '.agents/skills/compliance-guard/SKILL.md',
      rulesCount: 10
    }
  ];

  const mcpServers = [
    {
      name: 'Supabase MCP',
      type: 'Remote',
      target: 'https://mcp.supabase.com/mcp',
      role: 'Direct schema inspection, SQL queries & migration authority for coding agents',
      icon: Database
    },
    {
      name: 'GitHub MCP',
      type: 'Stdio',
      target: '@modelcontextprotocol/server-github',
      role: 'Branch creation, PR reviews, commits, issue tracking',
      icon: Bot
    },
    {
      name: 'GitMCP',
      type: 'Remote',
      target: 'https://gitmcp.io/api',
      role: 'Grounds agent on public GitHub repos without cloning local files',
      icon: Globe
    },
    {
      name: 'Playwright MCP',
      type: 'Stdio',
      target: '@executeautomation/playwright-mcp-server',
      role: 'Headless browser automation & visual UI auditing',
      icon: Play
    }
  ];

  const handleTestRoute = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const res = await fetch('/api/skills/route', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: query })
      });
      if (res.ok) {
        const data = await res.json();
        setRoutedSkill({
          primary: data.primary_skill,
          active: data.active_skills,
          reasoning: data.reasoning
        });
        return;
      }
    } catch (_) {}

    // Fallback simulation if offline
    const q = query.toLowerCase();
    let prim = 'ui-ux-pro-max';
    let acts = ['ui-ux-pro-max', 'garden-skills'];
    if (q.includes('repeat') || q.includes('skill')) {
      prim = 'skill-creator';
      acts = ['skill-creator', 'skill-router'];
    } else if (q.includes('tax') || q.includes('ground') || q.includes('compliance')) {
      prim = 'compliance-guard';
      acts = ['compliance-guard', 'full-output-enforcement'];
    }
    setRoutedSkill({
      primary: prim,
      active: acts,
      reasoning: `Matched keywords in query to active skill catalog.`
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 bg-surface-subtle border border-border-subtle rounded-2xl">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
            Rule 04 Active
          </span>
          <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-secondary/20 text-accent-secondary border border-accent-secondary/30">
            {skills.length} Skills Installed
          </span>
        </div>
        <h2 className="text-xl font-heading font-bold text-text-primary mt-2">
          Skills Ecosystem & MCP Server Registry
        </h2>
        <p className="text-sm text-text-secondary mt-1 max-w-2xl">
          GODMODE enforces specialized skills across frontend taste, meta-routing, and compliance. With {skills.length} skills active, the <code className="text-accent-secondary font-mono">skill-router</code> automatically classifies intent and dispatches tasks.
        </p>
      </div>

      {/* Interactive Intent Router Testbench */}
      <div className="p-6 bg-surface-subtle border border-border-subtle rounded-2xl">
        <h3 className="text-sm font-heading font-semibold text-text-primary uppercase tracking-wider mb-3">
          Interactive Skill Router Intent Classifier
        </h3>
        <form onSubmit={handleTestRoute} className="flex gap-2.5">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Test prompt (e.g. 'Audit this card typography and create an obsidian theme palette' or 'Ground statutory registration')..."
              className="w-full bg-surface-elevated border border-border-subtle rounded-xl pl-10 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary transition-colors font-body"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-xl text-sm font-semibold transition-all shadow-md active:scale-95"
          >
            Route Intent
          </button>
        </form>

        {routedSkill && (
          <div className="mt-4 p-4 bg-slate-950/70 border border-accent-primary/30 rounded-xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-text-muted">Selected Primary Skill:</span>
              <span className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-accent-primary text-white font-bold">
                {routedSkill.primary}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-text-muted">Enforced Co-Skills:</span>
              {routedSkill.active.map((s) => (
                <span key={s} className="px-2 py-0.5 text-[11px] font-mono bg-surface-elevated text-accent-secondary rounded border border-slate-800">
                  {s}
                </span>
              ))}
            </div>
            <p className="text-xs text-text-secondary italic">{routedSkill.reasoning}</p>
          </div>
        )}
      </div>

      {/* Skills Catalog */}
      <div>
        <h3 className="text-base font-heading font-bold text-text-primary mb-3">
          Installed Workspace Skills ({skills.length})
        </h3>
        <MotionColumn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <MotionFocus
              key={s.id}
              className="p-5 bg-surface-subtle border border-border-subtle hover:border-border-prominent rounded-2xl flex flex-col justify-between transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`px-2 py-0.5 text-[10px] font-mono rounded uppercase tracking-wider ${
                      s.category === 'Frontend Taste'
                        ? 'bg-indigo-950/60 text-indigo-300 border border-indigo-800/50'
                        : s.category === 'Meta / Router'
                        ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/50'
                        : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                    }`}
                  >
                    {s.category}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">
                    {s.rulesCount} Rules
                  </span>
                </div>
                <h4 className="text-base font-heading font-bold text-text-primary mb-1.5">
                  {s.name}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed mb-3">
                  {s.description}
                </p>
              </div>
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span className="truncate max-w-[220px]">{s.path}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-success shrink-0" />
              </div>
            </MotionFocus>
          ))}
        </MotionColumn>
      </div>

      {/* MCP Servers Section */}
      <div>
        <h3 className="text-base font-heading font-bold text-text-primary mb-3">
          Connected MCP Servers (mcp_config.json)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mcpServers.map((mcp) => {
            const Icon = mcp.icon;
            return (
              <div
                key={mcp.name}
                className="p-5 bg-surface-subtle border border-border-subtle rounded-2xl flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border-subtle flex items-center justify-center text-accent-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-heading font-bold text-text-primary">
                      {mcp.name}
                    </h4>
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-text-secondary border border-slate-700">
                      {mcp.type}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mt-1">{mcp.role}</p>
                  <p className="text-[11px] font-mono text-text-muted mt-2 truncate bg-slate-950/60 px-2 py-1 rounded border border-slate-900">
                    {mcp.target}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
