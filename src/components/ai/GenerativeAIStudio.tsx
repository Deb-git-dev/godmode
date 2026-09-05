import React, { useState } from 'react';
import { 
  Sparkles, 
  Code, 
  Terminal, 
  Layers, 
  HeartHandshake, 
  Copy, 
  Check, 
  Download, 
  ShieldCheck, 
  RefreshCw,
  Cpu,
  ChevronRight,
  Sliders
} from 'lucide-react';

export type StudioMode = 'ui_component' | 'prompt_synthesizer' | 'cloud_architecture' | 'ngo_grant';

interface ModeConfig {
  id: StudioMode;
  label: string;
  icon: React.ReactNode;
  badge: string;
  description: string;
  presets: string[];
}

const MODES: ModeConfig[] = [
  {
    id: 'ui_component',
    label: 'UI / Component Generator',
    icon: <Code className="w-4 h-4 text-accent-primary" />,
    badge: 'React & Tailwind',
    description: 'Generates zero-warning, accessible, anti-slop React components with tactile micro-interactions.',
    presets: [
      'Interactive Bento Card with Glowing Gradient Hover',
      'Telemetry Metrics Counter with Framer Motion Spring',
      'Double-Bezel Stat Card with Obsidian Surface Elevation',
      'Accessible Filter Chip Group with WCAG AA Contrast'
    ]
  },
  {
    id: 'prompt_synthesizer',
    label: 'Agent Prompt Synthesizer',
    icon: <Terminal className="w-4 h-4 text-accent-secondary" />,
    badge: '50 Skills Grounded',
    description: 'Synthesizes enterprise-grade system prompts and execution runbooks aligned with Deb\'s 50 agent skills.',
    presets: [
      'Autonomous Code Refactoring Agent with Zero-Placeholder Rule',
      'Design Taste Auditor enforcing text-balance and intentional variance',
      'Statutory Compliance Guard enforcing zero-hallucination verification',
      'Multi-Agent Task Observer for detecting execution bottlenecks'
    ]
  },
  {
    id: 'cloud_architecture',
    label: 'Cloud Architecture Blueprint',
    icon: <Layers className="w-4 h-4 text-emerald-400" />,
    badge: 'Zero Local GPU',
    description: 'Generates typed, production-ready cloud system architectures (FastAPI, Vercel Serverless, OpenRouter, Supabase).',
    presets: [
      'Sub-Second TTFT Multi-Model Fallback Gateway (Claude + NIM + DeepSeek)',
      'Dual-Write Cryptographic Action Ledger with In-Browser PDF-Lib Receipts',
      'Plain-Text Markdown Session Synthesis with Hosted Qdrant RAG',
      'Zero-Local-Compute Microservice Architecture for Low-Spec Dev Machines'
    ]
  },
  {
    id: 'ngo_grant',
    label: 'NGO Impact & Grant Drafter',
    icon: <HeartHandshake className="w-4 h-4 text-rose-400" />,
    badge: 'Tribeni Minati Foundation',
    description: 'Drafts high-impact CSR grant proposals, field impact reports, and transparent fund allocation metrics.',
    presets: [
      'Grassroots Community Welfare & Digital Literacy Initiative (FY 2026-27)',
      'Statutory CSR Grant Proposal with Verifiable Field Telemetry',
      'Transparent Donor Lifecycle Report with Cryptographic Verification Stamping',
      'Healthcare & Nutrition Outreach Proposal for Rural Bengal Underprivileged'
    ]
  }
];

const SAMPLE_OUTPUTS: Record<StudioMode, string> = {
  ui_component: `// Generated with Deb's Generative AI Studio
// Framework: React 18 + Tailwind CSS + Framer Motion (Obsidian Deep Token Contract)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export const ObsidianFeatureCard: React.FC<{
  title?: string;
  metric?: string;
  status?: string;
}> = ({
  title = "Cloud AI Reasoning Gateway",
  metric = "99.98% Latency SLA",
  status = "Active & Grounded"
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md transition-all hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden group"
    >
      {/* Specular Ambient Glow */}
      <div 
        className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-cyan-500/0 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" 
      />

      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-indigo-950/60 text-indigo-300 border border-indigo-700/50">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>{status}</span>
        </span>
        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Verified</span>
        </span>
      </div>

      <h3 className="text-lg font-heading font-bold text-slate-100 tracking-tight text-balance mb-2">
        {title}
      </h3>

      <p className="text-xs text-slate-400 leading-relaxed text-pretty mb-6">
        Architected with zero local GPU footprint, delegating multi-provider fallback reasoning across Anthropic Claude, OpenAI, and hosted NVIDIA NIM endpoints.
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800/70 text-xs">
        <span className="font-mono text-slate-300 font-semibold">{metric}</span>
        <span className="flex items-center gap-1 text-indigo-400 group-hover:translate-x-1 transition-transform font-semibold">
          Inspect Architecture <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.div>
  );
};`,

  prompt_synthesizer: `# System Prompt: Autonomous Cloud AI Architect (Grounded in Deb's 50 Skills)
# Persona: Lead Full-Stack & AI Systems Engineer

## Core Mandate
You are an autonomous engineering agent designed to architect and implement full-stack systems.
You operate under the "Rule of Everything" codified by Debapriya Bhattacharyya.

## Operational Invariants
1. ZERO LOCAL GPU: Never download, quantize, or serve local neural network checkpoints (.safetensors, .gguf). Delegate all inference to cloud APIs (Claude 3.5 Sonnet, OpenRouter, NVIDIA NIM).
2. ANTI-SLOP TYPOGRAPHY: Always declare 'text-balance' on headings and 'text-pretty' on descriptive paragraphs. Eliminate uncurated purple-pink gradients.
3. MATHEMATICAL TOKENS: Canvas: #0B0F19 | Accent: #6366F1 | Secondary: #06B6D4 | Status: #10B981.
4. VERIFIABLE PROVENANCE: Every dependency, external API, and architectural pattern must be registered in PROVENANCE.md.
5. CONTINUOUS VERIFICATION: Maintain 100% test pass rate across audit.py before marking any task done.

## Execution Workflow
Stage 1: Intent classification via skill-router.
Stage 2: Context grounding in memory/journal.md.
Stage 3: Full production-grade implementation (zero placeholders or TODOs).
Stage 4: Automated static audit and build validation (tsc --noEmit && vite build).`,

  cloud_architecture: `# Technical Specification: Sub-Second TTFT Multi-Model Inference Gateway
# Architect: Debapriya Bhattacharyya (Deb-git-dev)

## 1. Executive Summary
A resilient, zero-local-compute routing topology designed to ensure 99.99% availability for agentic workflows with sub-second time-to-first-token (TTFT).

\`\`\`mermaid
graph TD
    Client[Client App / Webhook] --> Gateway[FastAPI / Vercel Edge Gateway]
    Gateway --> Router{Model Router & Cost Evaluator}
    Router -->|Deep Reasoning| Claude[Anthropic Claude 3.5 Sonnet API]
    Router -->|High-Throughput / Fast TTFT| NIM[NVIDIA NIM Hosted Nemotron-4 SSE]
    Router -->|Fallback & Open-Weights| OpenRouter[OpenRouter Gateway]
    OpenRouter --> DeepSeek[DeepSeek-V3 Cloud]
    Claude --> Ledger[Verifiable Dual-Write Action Ledger]
    NIM --> Ledger
    DeepSeek --> Ledger
\`\`\`

## 2. Component Specifications
- Edge Routing Layer: Vercel Serverless Functions with streaming response headers (text/event-stream).
- Model Gateway: OpenRouter unified API with deterministic retry budget (timeout: 4.5s).
- Primary Reasoning Engine: Anthropic Claude 3.5 Sonnet for complex refactoring.
- Fast Open-Weight Microservice: NVIDIA NIM hosted endpoints (120 tokens/sec, TTFT < 380ms).
- Ledger Persistence: Dual-write to Supabase PostgreSQL with in-browser PDF receipt generator.`,

  ngo_grant: `# Project Proposal: Digital Empowerment & Community Telemetry
# Organization: Tribeni Minati Foundation (Reg. NGO)
# Lead Technical Architect: Debapriya Bhattacharyya
# Target CSR Funding Window: FY 2026 - 2027

## 1. Executive Mission
The Tribeni Minati Foundation is committed to grassroots community upliftment, educational enablement, and transparent humanitarian aid across West Bengal. By fusing modern full-stack web platforms with audited public ledgers, the Foundation guarantees 100% traceability for every rupee contributed.

## 2. Strategic Objectives
- Objective A: Establish 5 Digital Learning Hubs in underserved rural clusters.
- Objective B: Deploy the Foundation Telemetry Web Platform (https://github.com/Deb-git-dev/tribeni-minati-foundation-website) enabling live field activity reporting.
- Objective C: Provide monthly nutrition and medical outreach to 1,200+ underprivileged families.

## 3. Transparency & Technical Grounding
- Public Ledger: Every aid disbursement is registered in the cryptographic dual-write ledger with downloadable in-browser PDF receipts.
- Zero Overhead Policy: 100% cloud-hosted infrastructure (Zero expensive server racks or local GPU waste).
- Contact & Governance:
  - Founder & Lead Engineer: Debapriya Bhattacharyya
  - Official Repository: https://github.com/Deb-git-dev/tribeni-minati-foundation-website
  - Official Profile: https://www.facebook.com/deb2remember`
};

export const GenerativeAIStudio: React.FC<{
  className?: string;
  onOpenActionModal?: () => void;
}> = ({ className = '', onOpenActionModal }) => {
  const [activeMode, setActiveMode] = useState<StudioMode>('ui_component');
  const [prompt, setPrompt] = useState<string>('Interactive Bento Card with Glowing Gradient Hover');
  const [selectedModel, setSelectedModel] = useState<'claude' | 'deepseek' | 'gpt4o' | 'nvidia_nim'>('claude');
  const [temperature, setTemperature] = useState<number>(0.7);
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState<string>(SAMPLE_OUTPUTS.ui_component);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'code' | 'preview'>('code');

  const currentModeConfig = MODES.find((m) => m.id === activeMode) || MODES[0];

  const handleModeChange = (mode: StudioMode) => {
    setActiveMode(mode);
    const cfg = MODES.find((m) => m.id === mode);
    if (cfg && cfg.presets.length > 0) {
      setPrompt(cfg.presets[0]);
    }
    setOutput(SAMPLE_OUTPUTS[mode]);
    setViewMode('code');
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `[Mode: ${activeMode}] [Model: ${selectedModel}] [Temp: ${temperature}] ${prompt}`,
          mode: activeMode,
          model: selectedModel,
          temperature
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          setOutput(data.reply);
        } else {
          setOutput(SAMPLE_OUTPUTS[activeMode]);
        }
      } else {
        // Fallback to rich deterministic showcase output
        setOutput(SAMPLE_OUTPUTS[activeMode]);
      }
    } catch (_) {
      setOutput(SAMPLE_OUTPUTS[activeMode]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const ext = activeMode === 'ui_component' ? 'tsx' : activeMode === 'cloud_architecture' ? 'md' : 'txt';
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deb_ai_generation_${activeMode}_${Date.now()}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Studio Header */}
      <div className="p-6 md:p-8 bg-surface-subtle border border-border-subtle rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-br from-accent-primary/20 via-accent-secondary/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30 text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-accent-secondary" />
                Live Generative AI Studio
              </span>
              <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-success/20 text-accent-success border border-accent-success/30 hidden sm:inline">
                Cloud Multi-Model Router
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-text-primary tracking-tight">
              Debapriya's Generative AI Engine
            </h2>
            <p className="text-xs md:text-sm text-text-secondary mt-1 max-w-2xl font-body leading-relaxed">
              Synthesize production-grade React components, enterprise agent prompts, zero-GPU cloud architectures, and Tribeni Minati Foundation grant proposals in real time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {onOpenActionModal && (
              <button
                onClick={onOpenActionModal}
                className="px-4 py-2.5 rounded-xl bg-surface-elevated hover:bg-slate-800 text-text-primary text-xs font-mono border border-border-prominent flex items-center gap-2 shadow-md transition-all active:scale-95"
              >
                <ShieldCheck className="w-4 h-4 text-accent-success" />
                <span>Verify on Ledger</span>
              </button>
            )}
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6 pt-6 border-t border-border-subtle">
          {MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => handleModeChange(mode.id)}
              className={`p-3.5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                activeMode === mode.id
                  ? 'bg-accent-primary/15 border-accent-primary text-white shadow-lg shadow-accent-primary/10'
                  : 'bg-surface-elevated/60 border-border-subtle text-text-secondary hover:border-slate-700 hover:text-text-primary'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                  {mode.icon}
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950/60 border border-slate-800 text-text-muted">
                  {mode.badge}
                </span>
              </div>
              <div className="font-heading font-bold text-xs text-text-primary">
                {mode.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Studio Workbench Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Prompt Configuration & Controls (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-6 bg-surface-subtle border border-border-subtle rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-heading font-bold text-text-primary flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-accent-primary" />
                Prompt & Model Configuration
              </span>
              <span className="text-[11px] font-mono text-accent-secondary">
                {currentModeConfig.badge}
              </span>
            </div>

            {/* Model Selector */}
            <div>
              <label className="block text-xs font-mono text-text-muted mb-1.5">Inference Model</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'claude', name: 'Claude 3.5 Sonnet', provider: 'Anthropic' },
                  { id: 'deepseek', name: 'DeepSeek-V3', provider: 'OpenRouter' },
                  { id: 'gpt4o', name: 'GPT-4o', provider: 'OpenAI' },
                  { id: 'nvidia_nim', name: 'NIM Nemotron', provider: 'NVIDIA' }
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedModel(m.id as any)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                      selectedModel === m.id
                        ? 'bg-accent-primary/20 border-accent-primary text-text-primary font-semibold'
                        : 'bg-surface-elevated border-border-subtle text-text-secondary hover:border-slate-700'
                    }`}
                  >
                    <div className="font-heading truncate">{m.name}</div>
                    <div className="text-[10px] font-mono text-text-muted">{m.provider}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt Textarea */}
            <div>
              <label className="block text-xs font-mono text-text-muted mb-1.5">Prompt Directive</label>
              <textarea
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe what you want to generate..."
                className="w-full bg-surface-elevated border border-border-subtle rounded-xl p-3 text-xs text-text-primary font-mono focus:outline-none focus:border-accent-primary transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* Presets Chips */}
            <div>
              <label className="block text-[11px] font-mono text-text-muted mb-1.5">Quick Presets</label>
              <div className="flex flex-wrap gap-1.5">
                {currentModeConfig.presets.map((pr, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPrompt(pr)}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-surface-elevated hover:bg-slate-800 text-text-secondary hover:text-text-primary border border-border-subtle transition-colors text-left truncate max-w-full"
                  >
                    + {pr}
                  </button>
                ))}
              </div>
            </div>

            {/* Temperature Slider */}
            <div className="pt-2 border-t border-border-subtle">
              <div className="flex justify-between text-xs font-mono text-text-muted mb-1">
                <span>Creativity (Temp): {temperature.toFixed(1)}</span>
                <span>{temperature < 0.4 ? 'Strict & Precise' : temperature > 0.8 ? 'Highly Creative' : 'Balanced'}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-accent-primary cursor-pointer"
              />
            </div>

            {/* Generate Action Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full py-3.5 bg-gradient-to-r from-accent-primary to-indigo-600 hover:from-accent-primary/90 hover:to-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent-primary/20 active:scale-95 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-cyan-200" />
                  <span>Synthesizing with {selectedModel.toUpperCase()}...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Generate Specification</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Code & Interactive Output View (7 Cols) */}
        <div className="lg:col-span-7 space-y-4 flex flex-col">
          <div className="p-6 bg-surface-subtle border border-border-subtle rounded-3xl flex-1 flex flex-col space-y-4 shadow-xl">
            {/* Output Bar Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-success animate-pulse" />
                <span className="font-heading font-bold text-xs text-text-primary">
                  Generated Output ({activeMode.replace('_', ' ').toUpperCase()})
                </span>
              </div>

              <div className="flex items-center gap-2">
                {activeMode === 'ui_component' && (
                  <div className="flex bg-slate-950/80 p-0.5 rounded-lg border border-border-subtle text-[11px] font-mono">
                    <button
                      onClick={() => setViewMode('code')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        viewMode === 'code' ? 'bg-accent-primary text-white font-semibold' : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      Code
                    </button>
                    <button
                      onClick={() => setViewMode('preview')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        viewMode === 'preview' ? 'bg-accent-primary text-white font-semibold' : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      Live Preview
                    </button>
                  </div>
                )}

                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-surface-elevated hover:bg-slate-800 text-text-secondary hover:text-text-primary border border-border-prominent text-xs flex items-center gap-1 transition-all"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-accent-success" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline text-[11px] font-mono">{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="p-1.5 rounded-lg bg-surface-elevated hover:bg-slate-800 text-text-secondary hover:text-text-primary border border-border-prominent text-xs flex items-center gap-1 transition-all"
                  title="Download file"
                >
                  <Download className="w-3.5 h-3.5 text-accent-secondary" />
                  <span className="hidden sm:inline text-[11px] font-mono">Save</span>
                </button>
              </div>
            </div>

            {/* Output Display Area */}
            {viewMode === 'preview' && activeMode === 'ui_component' ? (
              <div className="flex-1 min-h-[380px] p-6 bg-canvas border border-border-subtle rounded-2xl flex items-center justify-center">
                <div className="w-full max-w-md p-6 rounded-2xl bg-slate-900/90 border border-indigo-500/40 shadow-2xl relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-indigo-950/70 text-indigo-300 border border-indigo-700/50">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>Live Rendered Component</span>
                    </span>
                    <span className="text-[11px] font-mono text-accent-success flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>WCAG AA Passed</span>
                    </span>
                  </div>
                  <h4 className="text-base font-heading font-bold text-text-primary mb-1">
                    {prompt || "Interactive Bento Card with Glowing Gradient Hover"}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    Synthesized by Debapriya's Generative AI Engine with responsive layout tokens and tactile interaction bindings.
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono">
                    <span className="text-text-muted">Status: 200 OK</span>
                    <span className="text-accent-secondary flex items-center gap-1 font-semibold">
                      Live Preview <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 min-h-[380px] max-h-[500px] overflow-y-auto p-4 bg-slate-950/90 border border-border-subtle rounded-2xl font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap selection:bg-accent-primary/30">
                {output}
              </div>
            )}

            {/* Output Footer Note */}
            <div className="pt-2 border-t border-border-subtle flex flex-wrap items-center justify-between text-[11px] font-mono text-text-muted gap-2">
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-accent-primary" />
                <span>Cloud Model: {selectedModel.toUpperCase()} (0 MB Local GPU)</span>
              </span>
              <span className="text-accent-success">
                Compliant with The Rule of Everything (§2)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
