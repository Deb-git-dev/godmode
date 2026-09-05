import React from 'react';
import { ArrowLeft, Database } from 'lucide-react';

export const PrismaHeroPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-body p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack || (() => window.location.hash = '/showcase')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Showcase Hub</span>
        </button>
        <span className="px-3 py-1.5 rounded-full bg-teal-950 border border-teal-700 text-teal-300 text-xs font-mono">
          PRISMA DATABASE PIPELINE HERO • REF 20
        </span>
      </div>

      <div className="max-w-5xl mx-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
            <Database className="w-4 h-4" />
            <span>TYPE-SAFE ORM PIPELINE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight">
            Next-Gen Data Workflows
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            Declarative data modeling, automated schema migrations, and type-safe query generation running at sub-millisecond latencies.
          </p>
        </div>

        {/* Code Viewport */}
        <div className="lg:col-span-6 rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl font-mono text-xs space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
            <span>schema.prisma</span>
            <span className="text-teal-400">POSTGRES</span>
          </div>
          <pre className="text-slate-300 leading-relaxed overflow-x-auto">
{`model Agent {
  id        String   @id @default(uuid())
  name      String
  role      String
  invariants Boolean  @default(true)
  createdAt DateTime @default(now())
}`}
          </pre>
        </div>
      </div>

      <div className="text-center text-xs font-mono text-slate-500">
        Developer Experience • Type-Safe Database Architecture
      </div>
    </div>
  );
};
