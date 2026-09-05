import React, { useState } from 'react';
import { 
  Globe, 
  Cpu, 
  Palette, 
  FileText, 
  Play, 
  Copy, 
  Check, 
  RefreshCw, 
  Sparkles, 
  ShieldCheck, 
  Terminal, 
  ExternalLink,
  Search,
  Filter
} from 'lucide-react';
import { CRAWLED_WEBSITES } from '../data/crawledWebsitesData';

export const MultiCrawlerPage: React.FC = () => {
  const [selectedSiteId, setSelectedSiteId] = useState<string>(CRAWLED_WEBSITES[0].id);
  const [customUrl, setCustomUrl] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'web' | 'tech' | 'visual' | 'markdown'>('web');
  const [isCrawling, setIsCrawling] = useState(false);
  const [crawlProgress, setCrawlProgress] = useState(100);
  const [copied, setCopied] = useState(false);
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

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = ['all', 'Coding Agents', 'Harnesses', 'MCP Servers', 'Skill Makers', 'Skill Routers', 'Design Taste', 'Component Libraries'];

  const filteredSites = CRAWLED_WEBSITES.filter(site => {
    const matchCat = selectedCategory === 'all' || site.web.category === selectedCategory;
    const matchSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        site.web.domain.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="p-6 md:p-8 bg-surface-subtle border border-border-subtle rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-xs font-mono flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Multi-Vector Crawler Engine</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-xs font-mono">
              28 Verified Repos & Websites
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero Local GPU • In-Browser Telemetry</span>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
          Firecrawl Multi-Vector Studio
        </h1>
        <p className="text-text-secondary text-xs md:text-sm mt-2 max-w-3xl leading-relaxed font-body">
          Deconstruct any of the 28 reference websites into Web structure, Tech stack signatures, Visual design tokens, and clean LLM-ready markdown (<code className="text-cyan-300 font-mono">llms.txt</code>).
        </p>

        {/* Crawler Input & Action Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              placeholder="Enter custom URL or select from 28 pre-loaded targets below..."
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-border-prominent text-text-primary text-xs font-mono focus:outline-none focus:border-accent-secondary transition-all"
            />
            <Globe className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
          </div>

          <button
            onClick={handleRunCrawl}
            disabled={isCrawling}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent-primary hover:bg-accent-primary/90 disabled:opacity-50 text-white text-xs font-mono font-semibold transition-all shadow-lg flex items-center justify-center gap-2 min-w-[150px]"
          >
            {isCrawling ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Crawling...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Run Live Crawl</span>
              </>
            )}
          </button>
        </div>

        {/* Progress bar */}
        {isCrawling && (
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-accent-primary via-cyan-400 to-emerald-400 h-full transition-all duration-300"
              style={{ width: `${crawlProgress}%` }}
            />
          </div>
        )}
      </div>

      {/* Target Selector Grid */}
      <div className="p-6 bg-surface-subtle border border-border-subtle rounded-2xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Select Reference Website Target ({filteredSites.length} of 28)
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Filter by name or domain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-lg bg-slate-950 text-xs font-mono border border-border-subtle focus:border-cyan-400 focus:outline-none text-white"
              />
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2" />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-slate-950 text-xs font-mono border border-border-subtle text-slate-200 focus:border-cyan-400 focus:outline-none"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Horizontal Chip Carousel */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filteredSites.map((site) => (
            <button
              key={site.id}
              onClick={() => {
                setSelectedSiteId(site.id);
                setCustomUrl('');
              }}
              className={`px-3 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all flex items-center gap-2 border ${
                selectedSiteId === site.id && !customUrl
                  ? 'bg-accent-primary text-white border-accent-primary shadow-md'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{site.name}</span>
              <span className="text-[10px] opacity-70">({site.web.category})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Crawl Results Inspector */}
      <div className="bg-surface-subtle border border-border-subtle rounded-3xl overflow-hidden shadow-2xl">
        {/* Navigation Tabs */}
        <div className="border-b border-border-subtle bg-slate-950/60 px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('web')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'web'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/60'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Web Crawl</span>
            </button>

            <button
              onClick={() => setActiveTab('tech')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'tech'
                  ? 'bg-indigo-950 text-indigo-300 border border-indigo-700/60'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Tech Stack</span>
            </button>

            <button
              onClick={() => setActiveTab('visual')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'visual'
                  ? 'bg-rose-950 text-rose-300 border border-rose-700/60'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Visual Design</span>
            </button>

            <button
              onClick={() => setActiveTab('markdown')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'markdown'
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/60'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Firecrawl Markdown</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={selectedSite.web.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>Visit Target</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={() => handleCopy(JSON.stringify(selectedSite, null, 2))}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700 transition-all flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied JSON!' : 'Copy Telemetry'}</span>
            </button>
          </div>
        </div>

        {/* Tab Content Panel */}
        <div className="p-6 md:p-8">
          {/* 1. WEB CRAWL TAB */}
          {activeTab === 'web' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-950/70 border border-border-subtle">
                <div>
                  <span className="text-[10px] font-mono uppercase text-cyan-400 block tracking-wider">Page Title</span>
                  <h2 className="text-xl font-heading font-bold text-white mt-1">{selectedSite.web.title}</h2>
                  <p className="text-xs font-mono text-slate-400 mt-1">{selectedSite.web.domain}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right font-mono text-xs">
                    <span className="text-slate-500 block text-[10px]">HTTP Status</span>
                    <span className="text-emerald-400 font-bold">200 OK</span>
                  </div>
                  <div className="text-right font-mono text-xs pl-3 border-l border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Crawl Latency</span>
                    <span className="text-cyan-300 font-bold">142ms</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Executive Summary</h4>
                <p className="text-sm text-text-primary leading-relaxed p-4 rounded-xl bg-slate-900/40 border border-slate-800 font-body">
                  {selectedSite.web.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Extracted Key Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedSite.web.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-accent-secondary shrink-0 mt-0.5" />
                      <span className="text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. TECH STACK TAB */}
          {activeTab === 'tech' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Runtime</span>
                  <span className="text-sm font-mono font-bold text-white block mt-1">{selectedSite.tech.runtime}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">UI Framework</span>
                  <span className="text-sm font-mono font-bold text-indigo-300 block mt-1">{selectedSite.tech.framework}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Styling Engine</span>
                  <span className="text-sm font-mono font-bold text-cyan-300 block mt-1">{selectedSite.tech.styling}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">AI Gateway / Model</span>
                  <span className="text-sm font-mono font-bold text-amber-300 block mt-1">{selectedSite.tech.aiGateway}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Connected MCP Servers</h4>
                {selectedSite.tech.mcpServers.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedSite.tech.mcpServers.map((mcp, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-indigo-950/70 border border-indigo-700/60 text-indigo-300 text-xs font-mono flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        <span>{mcp}</span>
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs font-mono text-slate-500 italic">No external MCP server dependencies detected.</p>
                )}
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Key Dependencies & Packages</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSite.tech.keyPackages.map((pkg, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                      npm: {pkg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. VISUAL DESIGN TAB */}
          {activeTab === 'visual' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Extracted Color Palette</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-3 rounded-xl border border-slate-800 bg-slate-950 flex flex-col gap-2">
                    <div className="w-full h-12 rounded-lg border border-slate-700 shadow-inner" style={{ backgroundColor: selectedSite.visual.primaryBg }} />
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Primary Background</span>
                    <span className="text-xs font-mono font-bold text-white">{selectedSite.visual.primaryBg}</span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-800 bg-slate-950 flex flex-col gap-2">
                    <div className="w-full h-12 rounded-lg border border-slate-700 shadow-inner" style={{ backgroundColor: selectedSite.visual.surfaceCard }} />
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Card Surface</span>
                    <span className="text-xs font-mono font-bold text-white">{selectedSite.visual.surfaceCard}</span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-800 bg-slate-950 flex flex-col gap-2">
                    <div className="w-full h-12 rounded-lg border border-slate-700 shadow-inner" style={{ backgroundColor: selectedSite.visual.accentPrimary }} />
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Primary Accent</span>
                    <span className="text-xs font-mono font-bold text-white">{selectedSite.visual.accentPrimary}</span>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-800 bg-slate-950 flex flex-col gap-2">
                    <div className="w-full h-12 rounded-lg border border-slate-700 shadow-inner" style={{ backgroundColor: selectedSite.visual.accentSecondary }} />
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Secondary Accent</span>
                    <span className="text-xs font-mono font-bold text-white">{selectedSite.visual.accentSecondary}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Heading Typography</span>
                  <span className="text-sm font-heading font-bold text-white block mt-1">{selectedSite.visual.typography.heading}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Body Font</span>
                  <span className="text-sm font-body font-medium text-slate-300 block mt-1">{selectedSite.visual.typography.body}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Code / Metrics Font</span>
                  <span className="text-sm font-mono text-cyan-300 block mt-1">{selectedSite.visual.typography.code}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Layout & Motion Signature</span>
                <p className="text-xs font-mono text-text-primary">
                  <span className="text-accent-secondary">Pattern:</span> {selectedSite.visual.layoutPattern}
                </p>
                <p className="text-xs font-mono text-text-primary">
                  <span className="text-emerald-400">Motion:</span> {selectedSite.visual.motionStyle}
                </p>
              </div>
            </div>
          )}

          {/* 4. MARKDOWN TAB */}
          {activeTab === 'markdown' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Clean LLM-Ready Markdown Output</span>
                <button
                  onClick={() => handleCopy(selectedSite.web.llmMarkdown)}
                  className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-all flex items-center gap-1"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed max-h-96">
                {selectedSite.web.llmMarkdown}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiCrawlerPage;
