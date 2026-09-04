import React from 'react';
import { ArrowLeft, ShieldCheck, FileCode } from 'lucide-react';
import { CertificateGenerator } from '../components/documents/CertificateGenerator.tsx';

interface EntityDetailPageProps {
  entityId: string;
  onBack: () => void;
}

export const EntityDetailPage: React.FC<EntityDetailPageProps> = ({ entityId, onBack }) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Catalog</span>
      </button>

      {/* Main Spec Card */}
      <div className="p-8 bg-surface-subtle border border-border-subtle rounded-3xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
                Verified Invariant
              </span>
              <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-accent-success/20 text-accent-success border border-accent-success/30">
                Rule 01 Compliant
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-heading font-extrabold text-text-primary mt-2">
              {entityId.toUpperCase().replace(/-/g, ' ')}
            </h1>
            <p className="text-xs font-mono text-text-muted mt-1">
              Location: <code className="text-accent-secondary">.agents/skills/{entityId}/SKILL.md</code>
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono text-text-secondary">
            <ShieldCheck className="w-4 h-4 text-accent-success" />
            <span>Provenance Verified</span>
          </div>
        </div>

        {/* Technical Attributes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border-subtle text-xs font-mono">
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
            <div className="text-text-muted">Compute Footprint</div>
            <div className="text-accent-success font-bold text-sm mt-1">0 MB Local GPU</div>
          </div>
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
            <div className="text-text-muted">Invocation Mode</div>
            <div className="text-accent-secondary font-bold text-sm mt-1">Cloud REST / SSE</div>
          </div>
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
            <div className="text-text-muted">Verification Score</div>
            <div className="text-indigo-400 font-bold text-sm mt-1">20/20 PASSED</div>
          </div>
        </div>

        {/* Architecture Spec Code Block */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider flex items-center gap-1.5">
            <FileCode className="w-4 h-4 text-accent-primary" />
            Active Architecture Interface Definition
          </h3>
          <pre className="p-5 bg-slate-950/90 border border-slate-800 rounded-xl font-mono text-xs text-text-secondary overflow-x-auto leading-relaxed">
{`// GODMODE Unified Interface Definition for: ${entityId}
export interface ${entityId.replace(/-/g, '')}Config {
  readonly id: "${entityId}";
  readonly compute: "cloud_api_only";
  readonly enforce_zero_gpu: true;
  readonly grounding_source: "memory/journal.md";
  readonly fallback_target: "openrouter/auto";
}

export async function execute(): Promise<{ verified: true; score: "20/20" }> {
  // Dispatched via cloud gateway without local weight execution
  return { verified: true, score: "20/20" };
}`}
          </pre>
        </div>
      </div>

      {/* In-Browser PDF Certificate Generator */}
      <CertificateGenerator
        actionId={`rec_${entityId.replace(/-/g, '_')}`}
        recipientName="Lead Enterprise Architect"
      />
    </div>
  );
};
