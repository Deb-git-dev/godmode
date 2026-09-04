import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  BookOpen, 
  FileCheck2, 
  Zap,
  GitBranch
} from 'lucide-react';
import { GridSweep } from './components/primitives/MotionPrimitives.tsx';
import { ModelRouterVisualizer } from './components/router/ModelRouterVisualizer.tsx';
import { SkillsRegistryView } from './components/skills/SkillsRegistryView.tsx';
import { MemoryJournalView } from './components/memory/MemoryJournalView.tsx';
import { ProvenanceAuditView } from './components/audit/ProvenanceAuditView.tsx';
import { AssistantWidget } from './components/ai/AssistantWidget.tsx';

type NavTab = 'router' | 'skills' | 'memory' | 'audit';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<NavTab>('router');

  return (
    <div className="relative min-h-screen bg-canvas text-text-primary flex flex-col">
      {/* Ambient Grid Scanner Background */}
      <GridSweep />

      {/* Top System Status Bar */}
      <div className="border-b border-border-subtle bg-slate-950/70 backdrop-blur-md px-6 py-2.5 z-20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
            <span className="font-bold text-text-primary">GODMODE V1.0.0</span>
          </div>
          <span className="text-border-prominent">|</span>
          <span className="text-text-muted">Compute Mode: <span className="text-accent-secondary font-semibold">100% Cloud API</span></span>
          <span className="text-border-prominent hidden sm:inline">|</span>
          <span className="text-text-muted hidden sm:inline">Local GPU Footprint: <span className="text-accent-success font-semibold">0 MB</span></span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-accent-success">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Rule of Everything Enforced</span>
          </div>
          <span className="text-border-prominent">|</span>
          <div className="flex items-center gap-1 text-text-secondary">
            <GitBranch className="w-3.5 h-3.5 text-accent-primary" />
            <span>main</span>
          </div>
        </div>
      </div>

      {/* Main Header & Tab Navigation */}
      <header className="border-b border-border-subtle bg-surface-subtle/80 backdrop-blur-md sticky top-0 z-20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-heading font-bold text-lg text-text-primary tracking-tight">
                  GODMODE
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
                  Obsidian Architecture
                </span>
              </div>
              <p className="text-xs text-text-secondary">
                Autonomous Cloud AI Gateway • Zero Local GPU • Strict Grounding
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-border-subtle overflow-x-auto">
            <button
              onClick={() => setCurrentTab('router')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                currentTab === 'router'
                  ? 'bg-accent-primary text-white shadow-md shadow-accent-primary/25'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Model Gateway</span>
            </button>

            <button
              onClick={() => setCurrentTab('skills')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                currentTab === 'skills'
                  ? 'bg-accent-primary text-white shadow-md shadow-accent-primary/25'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Skills & MCP</span>
            </button>

            <button
              onClick={() => setCurrentTab('memory')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                currentTab === 'memory'
                  ? 'bg-accent-primary text-white shadow-md shadow-accent-primary/25'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Memory Journal</span>
            </button>

            <button
              onClick={() => setCurrentTab('audit')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                currentTab === 'audit'
                  ? 'bg-accent-primary text-white shadow-md shadow-accent-primary/25'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Provenance & Audit</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 z-10">
        {currentTab === 'router' && <ModelRouterVisualizer />}
        {currentTab === 'skills' && <SkillsRegistryView />}
        {currentTab === 'memory' && <MemoryJournalView />}
        {currentTab === 'audit' && <ProvenanceAuditView />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-slate-950/60 px-6 py-4 z-10 text-xs font-mono text-text-muted">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span>Project: GODMODE</span>
            <span>•</span>
            <span>All compute via Cloud APIs</span>
            <span>•</span>
            <span className="text-accent-success">Loop Recheck Active</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-text-secondary transition-colors">Claude API Primary</span>
            <span>•</span>
            <span className="hover:text-text-secondary transition-colors">OpenRouter Fallback</span>
            <span>•</span>
            <span className="hover:text-text-secondary transition-colors">NVIDIA NIM Microservices</span>
          </div>
        </div>
      </footer>

      {/* Floating Grounded AI Assistant Modal & Trigger */}
      <AssistantWidget />
    </div>
  );
};

export default App;
