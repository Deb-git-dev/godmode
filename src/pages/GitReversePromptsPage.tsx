import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Copy, 
  Check, 
  ExternalLink, 
  Terminal, 
  ShieldCheck, 
  Filter
} from 'lucide-react';
import promptsData from '../data/gitreversePrompts.json';

interface GitReversePromptsPageProps {
  onNavigateToStudio?: (prompt: string) => void;
}

export const GitReversePromptsPage: React.FC<GitReversePromptsPageProps> = ({ onNavigateToStudio }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(promptsData[0]?.id || null);

  const categories = [
    'all',
    'Design & Frontend Taste',
    'Coding Agents & Harnesses',
    'MCP Servers & Connectors',
    'Skill Synthesizers',
    'Skill Routers',
    'Free APIs & Models',
    'Cloud Media & Diffusion'
  ];

  const filteredPrompts = promptsData.filter((item: any) => {
    const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                        item.prompt.toLowerCase().includes(search.toLowerCase()) ||
                        item.repo.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Vibrant Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl p-8 border border-indigo-200/50 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-xl text-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>GitReverse Master Vault</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-xs font-mono">
                {promptsData.length} Reverse-Engineered Prompts Sourced
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-white">
              Sourced Prompts from Top 49 Repositories
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
              Verbatim system prompts extracted directly from the world's leading coding agents, design skills, MCP servers, and harnesses. Copy with one click or inject directly into the live studio.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCopy('all-prompts', JSON.stringify(promptsData, null, 2))}
              className="px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-xs font-mono text-white flex items-center gap-2 transition-all shadow-sm backdrop-blur-sm"
            >
              {copiedId === 'all-prompts' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>Export All 49 Prompts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar & Categories */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search across 49 prompts by repo, prompt content, or keywords..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors shadow-sm"
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
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Prompts Count & Results Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
          <span>SHOWING {filteredPrompts.length} OF {promptsData.length} REVERSE-ENGINEERED PROMPTS</span>
          <span className="text-cyan-400 font-semibold">One-Click Copy Ready</span>
        </div>

        <div className="space-y-4">
          {filteredPrompts.map((item: any) => {
            const isExpanded = expandedId === item.id;
            return (
              <div 
                key={item.id}
                className={`p-6 rounded-3xl border transition-all shadow-xl relative overflow-hidden ${
                  isExpanded 
                    ? 'bg-white border-indigo-500 shadow-md' 
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 shadow-sm'
                }`}
              >
                {/* Header Row */}
                <div 
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center text-xs font-mono font-bold">
                      {item.id}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                        {item.name}
                      </h3>
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-mono text-indigo-600 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{item.repo}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {item.category}
                    </span>
                    <button
                      onClick={() => handleCopy(item.id, item.prompt)}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-mono flex items-center gap-1.5 transition-all"
                    >
                      {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === item.id ? 'Copied' : 'Copy Prompt'}</span>
                    </button>
                    {onNavigateToStudio && (
                      <button
                        onClick={() => onNavigateToStudio(item.prompt)}
                        className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono flex items-center gap-1.5 transition-all shadow-md"
                        title="Inject into AI Studio"
                      >
                        <Terminal className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Inject</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Prompt Monospace Text */}
                <div className="mt-4 p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 font-mono text-xs text-slate-200 leading-relaxed whitespace-pre-wrap select-all">
                  {item.prompt}
                </div>

                {/* Footer Metrics */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{item.integration}</span>
                    </span>
                  </div>
                  <span>{item.chars} characters • {item.prompt.split(' ').length} words</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
