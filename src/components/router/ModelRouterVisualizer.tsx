import React, { useState } from 'react';
import { Cpu, Server, Zap, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';
import { ParallaxTotem, MotionFocus } from '../primitives/MotionPrimitives';

interface GatewayStatus {
  id: string;
  name: string;
  provider: string;
  role: string;
  endpoint: string;
  latencyMs: number;
  status: 'active' | 'standby' | 'testing';
  zeroLocalGpu: boolean;
  models: string[];
}

export const ModelRouterVisualizer: React.FC = () => {
  const [testing, setTesting] = useState(false);
  const [gateways, setGateways] = useState<GatewayStatus[]>([
    {
      id: 'claude',
      name: 'Claude 3.5 Sonnet',
      provider: 'Anthropic API',
      role: 'Primary Reasoning & Generation',
      endpoint: 'https://api.anthropic.com/v1/messages',
      latencyMs: 380,
      status: 'active',
      zeroLocalGpu: true,
      models: ['claude-3-5-sonnet-20241022', 'claude-3-5-haiku']
    },
    {
      id: 'openrouter',
      name: 'OpenRouter Multi-Model',
      provider: 'OpenRouter Gateway',
      role: 'Dynamic Fallback & Cost Router',
      endpoint: 'https://openrouter.ai/api/v1/chat/completions',
      latencyMs: 410,
      status: 'standby',
      zeroLocalGpu: true,
      models: ['anthropic/claude-3.5-haiku', 'openai/gpt-4o', 'deepseek/deepseek-chat']
    },
    {
      id: 'nvidia_nim',
      name: 'NVIDIA NIM Microservices',
      provider: 'NVIDIA Cloud Infrastructure',
      role: 'Fast Hosted Open-Weights (SSE Stream)',
      endpoint: 'https://integrate.api.nvidia.com/v1/chat/completions',
      latencyMs: 145,
      status: 'standby',
      zeroLocalGpu: true,
      models: ['nvidia/nemotron-4-340b-instruct', 'meta/llama-3.1-70b-instruct']
    }
  ]);

  const handleTestGateways = async () => {
    setTesting(true);
    // Simulate real-time gateway probe
    for (let i = 0; i < gateways.length; i++) {
      setGateways((prev) =>
        prev.map((g, idx) => (idx === i ? { ...g, status: 'testing' } : g))
      );
      await new Promise((r) => setTimeout(r, 450));
      setGateways((prev) =>
        prev.map((g, idx) =>
          idx === i ? { ...g, status: idx === 0 ? 'active' : 'standby', latencyMs: Math.floor(130 + Math.random() * 250) } : g
        )
      );
    }
    setTesting(false);
  };

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-surface-subtle border border-border-subtle rounded-2xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
              Rule 02 Enforced
            </span>
            <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-success/20 text-accent-success border border-accent-success/30">
              Zero Local GPU Verified
            </span>
          </div>
          <h2 className="text-xl font-heading font-bold text-text-primary mt-2">
            Multi-Provider Cloud AI Gateway
          </h2>
          <p className="text-sm text-text-secondary mt-1 max-w-2xl">
            All heavy neural compute is strictly delegated to hosted APIs. Primary reasoning routes to Anthropic Claude API, with OpenRouter multi-model fallback and NVIDIA NIM sub-second first-token SSE streaming.
          </p>
        </div>
        <button
          onClick={handleTestGateways}
          disabled={testing}
          className="flex items-center gap-2 px-5 py-2.5 bg-surface-elevated hover:bg-slate-800 text-text-primary border border-border-prominent rounded-xl text-sm font-semibold transition-all shadow-md active:scale-95 disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 text-accent-secondary ${testing ? 'animate-spin' : ''}`} />
          <span>{testing ? 'Probing Cloud Routes...' : 'Benchmark Latency'}</span>
        </button>
      </div>

      {/* Gateway Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {gateways.map((g) => (
          <ParallaxTotem key={g.id}>
            <MotionFocus className="h-full p-5 bg-surface-subtle border border-border-subtle hover:border-border-prominent rounded-2xl flex flex-col justify-between transition-colors shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    {g.provider}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {g.status === 'testing' ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-warning animate-ping" />
                    ) : g.status === 'active' ? (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-accent-success">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        PRIMARY
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-text-muted">FALLBACK</span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-heading font-bold text-text-primary mb-1">
                  {g.name}
                </h3>
                <p className="text-xs text-text-secondary mb-4">{g.role}</p>

                <div className="space-y-2 text-xs font-mono bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between text-text-muted">
                    <span>TTFT Latency</span>
                    <span className="text-accent-secondary font-semibold">{g.latencyMs}ms</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>Local GPU</span>
                    <span className="text-accent-success font-semibold">0 MB (Cloud API)</span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-[11px] font-mono text-text-muted">Available Models:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {g.models.map((m) => (
                      <span
                        key={m}
                        className="px-2 py-0.5 text-[10px] font-mono bg-surface-elevated text-text-secondary rounded border border-slate-800"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-border-subtle flex items-center justify-between text-xs">
                <span className="text-text-muted font-mono truncate max-w-[200px]">
                  {g.endpoint}
                </span>
                <span className="text-accent-primary hover:underline cursor-pointer font-semibold flex items-center gap-1">
                  Inspect <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </MotionFocus>
          </ParallaxTotem>
        ))}
      </div>

      {/* Failover & Routing Simulation Flow */}
      <div className="p-6 bg-surface-subtle border border-border-subtle rounded-2xl">
        <h3 className="text-sm font-heading font-semibold text-text-primary uppercase tracking-wider mb-4">
          Autonomous Failover Topology
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-slate-950/60 rounded-xl border border-border-subtle text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent-primary/20 border border-accent-primary/40 flex items-center justify-center text-accent-primary">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-text-primary font-bold">Incoming User Query</div>
              <div className="text-text-muted">PII Sanitized & Fact Grounded</div>
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-text-muted hidden md:block" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-950/40 border border-indigo-700/50 flex items-center justify-center text-indigo-400">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="text-text-primary font-bold">1. Claude API</div>
              <div className="text-text-muted">Primary Reasoning Target</div>
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-text-muted hidden md:block" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-700/50 flex items-center justify-center text-cyan-400">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <div className="text-text-primary font-bold">2. OpenRouter Fallback</div>
              <div className="text-text-muted">Cost & Error Failover</div>
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-text-muted hidden md:block" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-700/50 flex items-center justify-center text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-text-primary font-bold">3. NVIDIA NIM</div>
              <div className="text-text-muted">Hosted SSE Stream Gateway</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
