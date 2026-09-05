import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Copy, 
  Check, 
  ExternalLink, 
  Code, 
  Terminal, 
  ShieldCheck, 
  BookOpen
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
                        item.prompt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 md:p-8 bg-surface-subtle border border-border-subtle rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-xs font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitReverse Master Vault</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-xs font-mono">
              {promptsData.length} Reverse-Engineered Prompts
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Verbatim Sourced from gitreverse.com</span>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
          Reverse-Engineered Prompt Archive
        </h1>
        <p className="text-text-secondary text-xs md:text-sm mt-2 max-w-3xl leading-relaxed font-body">
          Explore and copy the exact generation prompts reverse-engineered from 49 leading repositories, agent skills, and developer harnesses. Every prompt is ready to run in Claude Code, Cursor, or Debapriya's AI Studio.
        </p>

        {/* Filter Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              placeholder="Search prompts by repository name or prompt content..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-border-prominent text-text-primary text-xs font-mono focus:outline-none focus:border-cyan-400 transition-all text-white"
            />
            <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-auto px-4 py-3 rounded-xl bg-slate-950 border border-border-prominent text-text-primary text-xs font-mono focus:outline-none focus:border-cyan-400 transition-all"
          >
            {categories.map(c => (
              <option key={c} value={c}>{c === 'all' ? 'All Categories (49)' : c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Prompts Cards List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2 text-xs font-mono text-slate-400">
          <span>Showing {filteredPrompts.length} Prompts</span>
          <span>Click any card to expand/collapse prompt text</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredPrompts.map((item: any) => {
            const isExpanded = expandedId === item.id;
            const isCopied = copiedId === item.id;

            return (
              <div 
                key={item.id}
                className={`p-5 md:p-6 bg-surface-subtle border transition-all rounded-2xl shadow-lg ${
                  isExpanded ? 'border-cyan-500/50 bg-slate-900/60' : 'border-border-subtle hover:border-border-prominent'
                }`}
              >
                {/* Card Top Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div 
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="cursor-pointer flex-1"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-300 text-[10px] font-mono">
                        {item.category}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 text-[10px] font-mono">
                        {item.charCount} chars
                      </span>
                    </div>

                    <h3 className="text-base font-heading font-bold text-white hover:text-cyan-300 transition-colors flex items-center gap-2">
                      <Code className="w-4 h-4 text-cyan-400" />
                      <span>{item.name}</span>
                    </h3>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-start md:self-auto">
                    <button
                      onClick={() => handleCopy(item.id, item.prompt)}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Copied!' : 'Copy Prompt'}</span>
                    </button>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs font-mono transition-all flex items-center gap-1"
                      title="View on gitreverse.com"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {onNavigateToStudio && (
                      <button
                        onClick={() => onNavigateToStudio(item.prompt)}
                        className="px-3 py-1.5 rounded-lg bg-accent-primary/20 hover:bg-accent-primary/30 text-accent-secondary border border-accent-secondary/30 text-xs font-mono transition-all flex items-center gap-1"
                        title="Load into AI Studio"
                      >
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Studio</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Prompt Body */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-cyan-400" />
                        <span>Reverse-Engineered Prompt Definition:</span>
                      </span>
                    </div>

                    <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto selection:bg-cyan-500/30">
                      {item.prompt}
                    </pre>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                      <span>URL: <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{item.url}</a></span>
                      <button
                        onClick={() => handleCopy(item.id, item.prompt)}
                        className="text-xs text-accent-secondary hover:underline flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        <span>Copy Full Block</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GitReversePromptsPage;
