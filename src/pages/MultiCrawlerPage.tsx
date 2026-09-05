import React, { useState } from 'react';
import { 
  Globe, 
  Cpu, 
  Palette, 
  FileText, 
  Play, 
  Copy, 
  Check, 
  Sparkles, 
  Terminal, 
  ExternalLink,
  Search,
  Filter,
  Zap,
  ArrowRight
} from 'lucide-react';
import { CRAWLED_WEBSITES } from '../data/crawledWebsitesData';

interface MultiCrawlerPageProps {
  onNavigateToStudio?: (prompt: string) => void;
}

export const MultiCrawlerPage: React.FC<MultiCrawlerPageProps> = ({ onNavigateToStudio }) => {
  const [selectedSiteId, setSelectedSiteId] = useState<string>(CRAWLED_WEBSITES[0].id);
  const [activeTab, setActiveTab] = useState<'prompts' | 'mockup' | 'web' | 'tech' | 'visual' | 'markdown'>('prompts');
  const [isCrawling, setIsCrawling] = useState(false);
  const [crawlProgress, setCrawlProgress] = useState(100);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const selectedSite = CRAWLED_WEBSITES.find(s => s.id === selectedSiteId) || CRAWLED_WEBSITES[0];

  const handleRunCrawl = () => {
    setIsCrawling(true);
    setCrawlProgress(15);
    setTimeout(() => setCrawlProgress(45), 250);
    setTimeout(() => setCrawlProgress(80), 550);
    setTimeout(() => {
      setCrawlProgress(100);
      setIsCrawling(false);
    }, 850);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const categories = ['all', 'Coding Agents', 'Harnesses', 'MCP Servers', 'Skill Makers', 'Skill Routers', 'Design Taste', 'Templates'];

  const filteredSites = CRAWLED_WEBSITES.filter(site => {
    const matchCat = selectedCategory === 'all' || site.web.category === selectedCategory;
    const matchSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        site.web.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        site.web.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Vibrant Hero Header */}
      <div className="relative overflow-hidden rounded-3xl p-8 border border-slate-700/50 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-emerald-500/15 via-purple-500/15 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>28 Websites Decompiled • Real Prompts & Visual Mockups</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-white">
              Awesome 28 Websites & Prompts Universe
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
              Explore the 28 reference websites, copy battle-tested system prompts, test interactive visual UI mockups, and inspect full Web & Tech Stack telemetry with zero local GPU overhead.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleRunCrawl}
              disabled={isCrawling}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-semibold text-xs sm:text-sm hover:opacity-95 transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Play className={`w-4 h-4 ${isCrawling ? 'animate-spin' : ''}`} />
              <span>{isCrawling ? 'Simulating Crawl...' : 'Simulate Live Crawl'}</span>
            </button>
            <button
              onClick={() => handleCopy(JSON.stringify(selectedSite, null, 2), 'export-json')}
              className="px-4 py-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-mono transition-all flex items-center justify-center gap-2"
            >
              {copiedText === 'export-json' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>Export Telemetry</span>
            </button>
          </div>
        </div>

        {/* Live Crawl Progress Indicator */}
        {isCrawling && (
          <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                Firecrawl Engine: Decompiling {selectedSite.web.domain}...
              </span>
              <span className="text-slate-400">{crawlProgress}%</span>
            </div>
            <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-300"
                style={{ width: `${crawlProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tool name, domain, prompt keywords, or framework..."
              className="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-700 rounded-2xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* Colorful Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all shrink-0 capitalize ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Studio Viewport: Site Selector Grid & Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 28 Websites Gallery Cards */}
        <div className="lg:col-span-4 space-y-3 max-h-[750px] overflow-y-auto pr-2 scrollbar-thin">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
            <span>SHOWING {filteredSites.length} OF {CRAWLED_WEBSITES.length} SITES</span>
            <span className="text-cyan-400 font-semibold">Select Site to Inspect</span>
          </div>

          {filteredSites.map((site) => {
            const isSelected = site.id === selectedSite.id;
            return (
              <div
                key={site.id}
                onClick={() => setSelectedSiteId(site.id)}
                className={`p-4 rounded-2xl cursor-pointer transition-all border relative overflow-hidden group ${
                  isSelected
                    ? 'bg-gradient-to-br from-slate-900 to-indigo-950/60 border-cyan-400/80 shadow-lg shadow-cyan-500/15'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                {/* Glowing Top Edge for Active Site */}
                {isSelected && (
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${site.gradient}`} />
                )}

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className={`font-heading font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-200 group-hover:text-cyan-300'}`}>
                      {site.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{site.web.domain}</p>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${site.badgeColor}`}>
                    {site.web.category}
                  </span>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                  {site.web.summary}
                </p>

                <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 text-[11px] font-mono">
                  <span className="text-indigo-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>{site.prompts?.length || 1} Prompts</span>
                  </span>
                  <span className="text-slate-400 group-hover:text-cyan-300 flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Site Interactive Inspector */}
        <div className="lg:col-span-8 space-y-5">
          {/* Site Overview Banner with Dynamic Gradient */}
          <div className="p-6 rounded-3xl border border-slate-700/60 bg-slate-900/90 shadow-xl relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${selectedSite.gradient} opacity-20 blur-3xl pointer-events-none`} />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${selectedSite.badgeColor}`}>
                    {selectedSite.web.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">ID: {selectedSite.id}</span>
                </div>
                <h2 className="text-2xl font-heading font-extrabold text-white">
                  {selectedSite.name}
                </h2>
                <a 
                  href={selectedSite.web.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline pt-1"
                >
                  <span>{selectedSite.web.url}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(selectedSite.web.llmMarkdown, 'copy-markdown')}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono text-slate-200 flex items-center gap-1.5 transition-all"
                >
                  {copiedText === 'copy-markdown' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy llms.txt</span>
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 mt-6 border-b border-slate-800 pb-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab('prompts')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'prompts'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Awesome Prompts ({selectedSite.prompts?.length || 0})</span>
              </button>

              <button
                onClick={() => setActiveTab('mockup')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'mockup'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Palette className="w-3.5 h-3.5 text-pink-400" />
                <span>Live Visual Mockup</span>
              </button>

              <button
                onClick={() => setActiveTab('web')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'web'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>Web Crawl</span>
              </button>

              <button
                onClick={() => setActiveTab('tech')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'tech'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>Tech Stack</span>
              </button>

              <button
                onClick={() => setActiveTab('markdown')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'markdown'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Markdown (llms.txt)</span>
              </button>
            </div>
          </div>

          {/* TAB 1: AWESOME PROMPTS */}
          {activeTab === 'prompts' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curated & Generated System Prompts for {selectedSite.name}</span>
                </span>
                <span>{selectedSite.prompts?.length || 0} Ready to Copy</span>
              </div>

              {selectedSite.prompts && selectedSite.prompts.length > 0 ? (
                selectedSite.prompts.map((p, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all space-y-3 shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center justify-center text-xs font-mono font-bold">
                          {idx + 1}
                        </span>
                        <h4 className="font-heading font-bold text-white text-sm sm:text-base">
                          {p.title}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-950/80 text-purple-300 border border-purple-800">
                          {p.type.toUpperCase()}
                        </span>
                        <button
                          onClick={() => handleCopy(p.prompt, `prompt-${idx}`)}
                          className="px-3 py-1.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 border border-cyan-800 text-cyan-300 text-xs font-mono flex items-center gap-1 transition-all"
                        >
                          {copiedText === `prompt-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedText === `prompt-${idx}` ? 'Copied' : 'Copy Prompt'}</span>
                        </button>
                        {onNavigateToStudio && (
                          <button
                            onClick={() => onNavigateToStudio(p.prompt)}
                            className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono flex items-center gap-1 transition-all shadow-md"
                          >
                            <Terminal className="w-3 h-3" />
                            <span>Inject into Studio</span>
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-200 leading-relaxed whitespace-pre-wrap select-all">
                      {p.prompt}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        {p.tags.map((t, tidx) => (
                          <span key={tidx} className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700">
                            #{t}
                          </span>
                        ))}
                      </div>
                      <span>{p.prompt.length} chars • {p.prompt.split(' ').length} words</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-slate-400">
                  No prompts specified.
                </div>
              )}
            </div>
          )}

          {/* TAB 2: LIVE VISUAL MOCKUP */}
          {activeTab === 'mockup' && (
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-400">VISUAL SIMULATION CANVAS</span>
                  <h3 className="text-lg font-heading font-bold text-white">Live Aesthetic Mockup of {selectedSite.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedSite.visual.accentPrimary }} />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedSite.visual.accentSecondary }} />
                </div>
              </div>

              {/* Simulated Interactive UI Window */}
              <div className="rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl bg-slate-950">
                {/* Window Titlebar */}
                <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">{selectedSite.web.domain}</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800">
                    {selectedSite.visual.theme.toUpperCase()} MODE
                  </span>
                </div>

                {/* Simulated Screen Content */}
                <div 
                  className="p-8 relative overflow-hidden"
                  style={{ backgroundColor: selectedSite.visual.primaryBg }}
                >
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${selectedSite.gradient} opacity-25 blur-3xl pointer-events-none`} />

                  <div className="max-w-md space-y-4 relative z-10">
                    <span 
                      className="inline-block px-2.5 py-1 rounded-full text-[11px] font-mono border"
                      style={{ 
                        color: selectedSite.visual.accentPrimary, 
                        borderColor: selectedSite.visual.accentPrimary + '66',
                        backgroundColor: selectedSite.visual.accentPrimary + '1A'
                      }}
                    >
                      {selectedSite.visualMockup.previewBadge}
                    </span>

                    <h4 
                      className="text-2xl font-bold tracking-tight text-white"
                      style={{ fontFamily: selectedSite.visual.typography.heading }}
                    >
                      {selectedSite.visualMockup.heroTagline}
                    </h4>

                    <p 
                      className="text-xs text-slate-300 leading-relaxed"
                      style={{ fontFamily: selectedSite.visual.typography.body }}
                    >
                      {selectedSite.web.summary}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      <div 
                        className="px-4 py-2 rounded-xl text-xs font-mono text-white font-semibold cursor-pointer shadow-lg transition-transform hover:scale-105"
                        style={{ 
                          background: `linear-gradient(135deg, ${selectedSite.visual.accentPrimary}, ${selectedSite.visual.accentSecondary})` 
                        }}
                      >
                        {selectedSite.visualMockup.previewAction}
                      </div>
                      <div className="px-3 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300">
                        {selectedSite.visual.typography.heading} + {selectedSite.visual.typography.body}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Token Swatches */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="h-6 w-full rounded-lg" style={{ backgroundColor: selectedSite.visual.primaryBg }} />
                  <span className="text-[10px] font-mono text-slate-400 block">Primary BG</span>
                  <span className="text-xs font-mono text-white">{selectedSite.visual.primaryBg}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="h-6 w-full rounded-lg" style={{ backgroundColor: selectedSite.visual.surfaceCard }} />
                  <span className="text-[10px] font-mono text-slate-400 block">Surface Card</span>
                  <span className="text-xs font-mono text-white">{selectedSite.visual.surfaceCard}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="h-6 w-full rounded-lg" style={{ backgroundColor: selectedSite.visual.accentPrimary }} />
                  <span className="text-[10px] font-mono text-slate-400 block">Accent Primary</span>
                  <span className="text-xs font-mono text-white">{selectedSite.visual.accentPrimary}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="h-6 w-full rounded-lg" style={{ backgroundColor: selectedSite.visual.accentSecondary }} />
                  <span className="text-[10px] font-mono text-slate-400 block">Accent Secondary</span>
                  <span className="text-xs font-mono text-white">{selectedSite.visual.accentSecondary}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: WEB CRAWL */}
          {activeTab === 'web' && (
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-xl">
              <div>
                <h3 className="text-lg font-heading font-bold text-white">{selectedSite.web.title}</h3>
                <p className="text-sm text-slate-300 mt-2 font-body leading-relaxed">{selectedSite.web.summary}</p>
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">Verified Key Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedSite.web.keyFeatures.map((feat, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TECH STACK */}
          {activeTab === 'tech' && (
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400">Runtime Environment</span>
                  <p className="text-sm font-bold text-white font-mono">{selectedSite.tech.runtime}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400">Framework / Engine</span>
                  <p className="text-sm font-bold text-cyan-400 font-mono">{selectedSite.tech.framework}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400">Bundler & Tooling</span>
                  <p className="text-sm font-bold text-white font-mono">{selectedSite.tech.bundler}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400">Styling & Design Engine</span>
                  <p className="text-sm font-bold text-purple-400 font-mono">{selectedSite.tech.styling}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">MCP Protocol Connectors</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSite.tech.mcpServers.map((mcp, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-indigo-950/60 border border-indigo-800 text-indigo-300 text-xs font-mono">
                      {mcp}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">Key NPM / Package Dependencies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSite.tech.keyPackages.map((pkg, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono">
                      {pkg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: MARKDOWN LLMS.TXT */}
          {activeTab === 'markdown' && (
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">llms.txt AI Grounding Representation</span>
                <button
                  onClick={() => handleCopy(selectedSite.web.llmMarkdown, 'copy-tab-markdown')}
                  className="text-xs font-mono text-cyan-400 hover:text-white flex items-center gap-1"
                >
                  {copiedText === 'copy-tab-markdown' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
                {selectedSite.web.llmMarkdown}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
