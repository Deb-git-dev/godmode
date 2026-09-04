import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Zap,
  GitBranch,
  Home,
  Compass,
  Info,
  LayoutDashboard,
  Mail,
  Lock,
  Play
} from 'lucide-react';
import { GridSweep } from './components/primitives/MotionPrimitives.tsx';
import { AmbientCanvas3D } from './components/motion/AmbientCanvas3D.tsx';
import { CustomCursor3D } from './components/motion/CustomCursor3D.tsx';
import { ModelRouterVisualizer } from './components/router/ModelRouterVisualizer.tsx';
import { SkillsRegistryView } from './components/skills/SkillsRegistryView.tsx';
import { MemoryJournalView } from './components/memory/MemoryJournalView.tsx';
import { ProvenanceAuditView } from './components/audit/ProvenanceAuditView.tsx';
import { AssistantWidget } from './components/ai/AssistantWidget.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { CatalogPage } from './pages/CatalogPage.tsx';
import { EntityDetailPage } from './pages/EntityDetailPage.tsx';
import { DashboardPage } from './pages/DashboardPage.tsx';
import { AuthPage } from './pages/AuthPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { ActionLedgerModal } from './components/modals/ActionLedgerModal.tsx';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [selectedEntityId, setSelectedEntityId] = useState<string | null>(null);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);

  // Sync hash routing and aliases
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      if (hash.startsWith('/detail/')) {
        setSelectedEntityId(hash.replace('/detail/', ''));
        setCurrentRoute('/detail');
      } else if (hash === 'action') {
        setIsActionModalOpen(true);
      } else {
        // Handle route aliases
        if (hash === '/team' || hash === '/leadership') setCurrentRoute('/about');
        else if (hash === '/directory') setCurrentRoute('/catalog');
        else if (hash === '/login') setCurrentRoute('/auth');
        else setCurrentRoute(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    if (path.startsWith('/detail/')) {
      setSelectedEntityId(path.replace('/detail/', ''));
      setCurrentRoute('/detail');
    } else {
      if (path === '/team' || path === '/leadership') setCurrentRoute('/about');
      else if (path === '/directory') setCurrentRoute('/catalog');
      else if (path === '/login') setCurrentRoute('/auth');
      else setCurrentRoute(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectEntity = (id: string) => {
    setSelectedEntityId(id);
    navigate(`/detail/${id}`);
  };

  return (
    <div className="relative min-h-screen bg-canvas text-text-primary flex flex-col font-body selection:bg-accent-primary/30">
      {/* Background Ambience Primitives (§9) */}
      <AmbientCanvas3D />
      <GridSweep />
      <CustomCursor3D />

      {/* Top System Invariant Bar */}
      <div className="border-b border-border-subtle bg-slate-950/80 backdrop-blur-md px-6 py-2 z-30 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
            <span className="font-bold text-text-primary">GODMODE V1.0.0</span>
          </div>
          <span className="text-border-prominent">|</span>
          <span className="text-text-muted">Compute: <span className="text-accent-secondary font-semibold">100% Cloud API</span></span>
          <span className="text-border-prominent hidden sm:inline">|</span>
          <span className="text-text-muted hidden sm:inline">Local GPU: <span className="text-accent-success font-semibold">0 MB</span></span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsActionModalOpen(true)}
            className="flex items-center gap-1.5 text-accent-secondary hover:text-white transition-colors"
          >
            <Play className="w-3.5 h-3.5 fill-accent-secondary" />
            <span>Trigger Action (#action)</span>
          </button>
          <span className="text-border-prominent">|</span>
          <div className="flex items-center gap-1 text-accent-success">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>20/20 Invariants Verified</span>
          </div>
          <span className="text-border-prominent">|</span>
          <div className="flex items-center gap-1 text-text-secondary">
            <GitBranch className="w-3.5 h-3.5 text-accent-primary" />
            <span>main</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header & Navigation */}
      <header className="border-b border-border-subtle bg-surface-subtle/85 backdrop-blur-md sticky top-0 z-30 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-heading font-bold text-lg text-text-primary tracking-tight">
                  GODMODE
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
                  Obsidian
                </span>
              </div>
              <p className="text-[11px] text-text-secondary">
                The Rule of Everything • Zero Local GPU
              </p>
            </div>
          </div>

          {/* Navigation Bar (§12 Multi-Page Route Architecture) */}
          <nav className="flex items-center gap-1 p-1 bg-slate-950/80 rounded-xl border border-border-subtle overflow-x-auto text-xs font-semibold">
            <button
              onClick={() => navigate('/')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/' ? 'bg-accent-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>

            <button
              onClick={() => navigate('/catalog')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/catalog' ? 'bg-accent-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Catalog</span>
            </button>

            <button
              onClick={() => navigate('/about')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/about' ? 'bg-accent-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>About</span>
            </button>

            <button
              onClick={() => navigate('/dashboard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/dashboard' ? 'bg-accent-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => navigate('/contact')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/contact' ? 'bg-accent-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>

            <button
              onClick={() => navigate('/auth')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/auth' ? 'bg-accent-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Auth</span>
            </button>

            <span className="text-border-prominent mx-1">|</span>

            {/* Core Tool Viewers */}
            <button
              onClick={() => navigate('/router-view')}
              className={`px-2.5 py-1.5 rounded-lg transition-all text-[11px] font-mono ${
                currentRoute === '/router-view' ? 'bg-indigo-950 text-indigo-300 border border-indigo-700' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Gateway
            </button>

            <button
              onClick={() => navigate('/skills-view')}
              className={`px-2.5 py-1.5 rounded-lg transition-all text-[11px] font-mono ${
                currentRoute === '/skills-view' ? 'bg-cyan-950 text-cyan-300 border border-cyan-700' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Skills
            </button>

            <button
              onClick={() => navigate('/memory-view')}
              className={`px-2.5 py-1.5 rounded-lg transition-all text-[11px] font-mono ${
                currentRoute === '/memory-view' ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Journal
            </button>

            <button
              onClick={() => navigate('/audit-view')}
              className={`px-2.5 py-1.5 rounded-lg transition-all text-[11px] font-mono ${
                currentRoute === '/audit-view' ? 'bg-amber-950 text-amber-300 border border-amber-700' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Audit
            </button>
          </nav>
        </div>
      </header>

      {/* Main Routed Page Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 z-10">
        {currentRoute === '/' && (
          <HomePage onNavigate={navigate} onOpenActionModal={() => setIsActionModalOpen(true)} />
        )}
        {currentRoute === '/about' && <AboutPage />}
        {currentRoute === '/catalog' && <CatalogPage onSelectEntity={handleSelectEntity} />}
        {currentRoute === '/detail' && selectedEntityId && (
          <EntityDetailPage entityId={selectedEntityId} onBack={() => navigate('/catalog')} />
        )}
        {currentRoute === '/dashboard' && <DashboardPage />}
        {currentRoute === '/auth' && <AuthPage />}
        {currentRoute === '/contact' && <ContactPage />}

        {/* Operational Viewers */}
        {currentRoute === '/router-view' && <ModelRouterVisualizer />}
        {currentRoute === '/skills-view' && <SkillsRegistryView />}
        {currentRoute === '/memory-view' && <MemoryJournalView />}
        {currentRoute === '/audit-view' && <ProvenanceAuditView />}
      </main>

      {/* Persistent Footer */}
      <footer className="border-t border-border-subtle bg-slate-950/80 px-6 py-4 z-20 text-xs font-mono text-text-muted">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span>Project: GODMODE</span>
            <span>•</span>
            <span>Zero Local GPU</span>
            <span>•</span>
            <span className="text-accent-success font-semibold">Continuous Loop Recheck Active</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/about')} className="hover:text-text-secondary">About</button>
            <button onClick={() => navigate('/catalog')} className="hover:text-text-secondary">Catalog</button>
            <button onClick={() => navigate('/dashboard')} className="hover:text-text-secondary">Dashboard</button>
            <button onClick={() => setIsActionModalOpen(true)} className="text-accent-secondary hover:underline">
              Trigger Conversion Action
            </button>
          </div>
        </div>
      </footer>

      {/* In-Browser Action Conversion & Ledger Modal (#action) */}
      <ActionLedgerModal
        isOpen={isActionModalOpen}
        onClose={() => setIsActionModalOpen(false)}
      />

      {/* Grounded AI Assistant Modal Widget */}
      <AssistantWidget />
    </div>
  );
};

export default App;
