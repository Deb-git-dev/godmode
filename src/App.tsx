import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Home, 
  Compass, 
  Info, 
  LayoutDashboard, 
  Mail, 
  Play,
  Sparkles,
  Github
} from 'lucide-react';
import { GridSweep } from './components/primitives/MotionPrimitives';
import { AmbientCanvas3D } from './components/motion/AmbientCanvas3D';
import { CustomCursor3D } from './components/motion/CustomCursor3D';
import { ModelRouterVisualizer } from './components/router/ModelRouterVisualizer';
import { SkillsRegistryView } from './components/skills/SkillsRegistryView';
import { MemoryJournalView } from './components/memory/MemoryJournalView';
import { ProvenanceAuditView } from './components/audit/ProvenanceAuditView';
import { AssistantWidget } from './components/ai/AssistantWidget';
import { GenerativeAIStudio } from './components/ai/GenerativeAIStudio';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CatalogPage } from './pages/CatalogPage';
import { EntityDetailPage } from './pages/EntityDetailPage';
import { DashboardPage } from './pages/DashboardPage';
import { AuthPage } from './pages/AuthPage';
import { ContactPage } from './pages/ContactPage';
import { BlackHoleShowcasePage } from './pages/BlackHoleShowcasePage';
import { ScrollHeroShowcasePage } from './pages/ScrollHeroShowcasePage';
import { ActionLedgerModal } from './components/modals/ActionLedgerModal';
import debPhoto from './assets/deb.jpg';

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
        else if (hash === '/directory' || hash === '/projects') setCurrentRoute('/catalog');
        else if (hash === '/generator') setCurrentRoute('/studio');
        else if (hash === '/login') setCurrentRoute('/auth');
        else if (hash === '/blackhole' || hash === '/black-hole') setCurrentRoute('/black-hole');
        else if (hash === '/scrollhero' || hash === '/scroll-hero') setCurrentRoute('/scroll-hero');
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
      else if (path === '/directory' || path === '/projects') setCurrentRoute('/catalog');
      else if (path === '/generator') setCurrentRoute('/studio');
      else if (path === '/login') setCurrentRoute('/auth');
      else if (path === '/blackhole' || path === '/black-hole') setCurrentRoute('/black-hole');
      else if (path === '/scrollhero' || path === '/scroll-hero') setCurrentRoute('/scroll-hero');
      else setCurrentRoute(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectEntity = (id: string) => {
    if (id === 'black-hole' || id === 'scroll-hero') {
      navigate(`/${id}`);
      return;
    }
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
      <div className="border-b border-border-subtle bg-slate-950/90 backdrop-blur-md px-6 py-2 z-30 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
            <span className="font-bold text-text-primary">DEBAPRIYA BHATTACHARYYA</span>
          </div>
          <span className="text-border-prominent">|</span>
          <span className="text-text-muted hidden sm:inline">Role: <span className="text-accent-secondary font-semibold">AI Architect & Full-Stack</span></span>
          <span className="text-border-prominent hidden md:inline">|</span>
          <span className="text-text-muted hidden md:inline">Foundation: <span className="text-rose-400 font-semibold">Tribeni Minati NGO</span></span>
        </div>

        <div className="flex items-center gap-3">
          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/deb2remember"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="hidden sm:inline">Facebook</span>
          </a>

          <span className="text-border-prominent">|</span>

          {/* GitHub Link */}
          <a
            href="https://github.com/Deb-git-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-text-secondary hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <span className="text-border-prominent">|</span>

          <button
            onClick={() => setIsActionModalOpen(true)}
            className="flex items-center gap-1 text-accent-secondary hover:text-white transition-colors"
          >
            <Play className="w-3 h-3 fill-accent-secondary" />
            <span>Action Ledger</span>
          </button>
        </div>
      </div>

      {/* Main Sticky Header & Navigation */}
      <header className="border-b border-border-subtle bg-surface-subtle/90 backdrop-blur-md sticky top-0 z-30 px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Profile Identity & Thumbnail */}
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-accent-primary/60 shadow-lg shadow-accent-primary/20 group-hover:border-accent-primary transition-colors">
                <img
                  src={debPhoto}
                  alt="Debapriya Bhattacharyya"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-accent-success border-2 border-slate-950" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-heading font-extrabold text-base text-text-primary tracking-tight">
                  Debapriya Bhattacharyya
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
                  Deb-git-dev
                </span>
              </div>
              <p className="text-[11px] text-text-secondary font-mono">
                AI Architect • Tribeni Minati Foundation
              </p>
            </div>
          </div>

          {/* Navigation Bar */}
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
              onClick={() => navigate('/studio')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/studio' ? 'bg-accent-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>AI Studio</span>
            </button>

            <button
              onClick={() => navigate('/catalog')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/catalog' ? 'bg-accent-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Projects & Skills</span>
            </button>

            <button
              onClick={() => navigate('/about')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/about' ? 'bg-accent-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>About & NGO</span>
            </button>

            <button
              onClick={() => navigate('/dashboard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/dashboard' ? 'bg-accent-primary text-white shadow-md' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Telemetry</span>
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

            <span className="text-border-prominent mx-1">|</span>

            {/* Quick Operational Views */}
            <button
              onClick={() => navigate('/router-view')}
              className={`px-2 py-1 rounded-lg transition-all text-[11px] font-mono ${
                currentRoute === '/router-view' ? 'bg-indigo-950 text-indigo-300 border border-indigo-700' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Router
            </button>

            <button
              onClick={() => navigate('/skills-view')}
              className={`px-2 py-1 rounded-lg transition-all text-[11px] font-mono ${
                currentRoute === '/skills-view' ? 'bg-cyan-950 text-cyan-300 border border-cyan-700' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Skills
            </button>

            <button
              onClick={() => navigate('/memory-view')}
              className={`px-2 py-1 rounded-lg transition-all text-[11px] font-mono ${
                currentRoute === '/memory-view' ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Journal
            </button>

            <button
              onClick={() => navigate('/audit-view')}
              className={`px-2 py-1 rounded-lg transition-all text-[11px] font-mono ${
                currentRoute === '/audit-view' ? 'bg-amber-950 text-amber-300 border border-amber-700' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Audit
            </button>

            <span className="text-border-prominent mx-1">|</span>

            {/* shadcn Interactive Visualizers */}
            <button
              onClick={() => navigate('/black-hole')}
              className={`px-2 py-1 rounded-lg transition-all text-[11px] font-mono flex items-center gap-1 ${
                currentRoute === '/black-hole' ? 'bg-cyan-950 text-cyan-300 border border-cyan-500 shadow-sm' : 'text-text-muted hover:text-cyan-300'
              }`}
              title="Relativistic Black Hole Simulation"
            >
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Black Hole</span>
            </button>

            <button
              onClick={() => navigate('/scroll-hero')}
              className={`px-2 py-1 rounded-lg transition-all text-[11px] font-mono flex items-center gap-1 ${
                currentRoute === '/scroll-hero' ? 'bg-amber-950 text-amber-300 border border-amber-500 shadow-sm' : 'text-text-muted hover:text-amber-300'
              }`}
              title="GSAP Scroll Landing Animation"
            >
              <span>Scroll Hero</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Routed Page Container */}
      <main className={`flex-1 w-full z-10 ${currentRoute === '/scroll-hero' ? '' : 'max-w-7xl mx-auto p-6'}`}>
        {currentRoute === '/' && (
          <HomePage onNavigate={navigate} onOpenActionModal={() => setIsActionModalOpen(true)} />
        )}
        {currentRoute === '/studio' && (
          <div className="space-y-6">
            <GenerativeAIStudio onOpenActionModal={() => setIsActionModalOpen(true)} />
          </div>
        )}
        {currentRoute === '/about' && <AboutPage />}
        {currentRoute === '/catalog' && <CatalogPage onSelectEntity={handleSelectEntity} />}
        {currentRoute === '/detail' && selectedEntityId && (
          <EntityDetailPage entityId={selectedEntityId} onBack={() => navigate('/catalog')} />
        )}
        {currentRoute === '/dashboard' && <DashboardPage />}
        {currentRoute === '/auth' && <AuthPage />}
        {currentRoute === '/contact' && <ContactPage />}

        {/* Dedicated shadcn Showcase Pages */}
        {currentRoute === '/black-hole' && (
          <BlackHoleShowcasePage onBack={() => navigate('/')} />
        )}
        {currentRoute === '/scroll-hero' && (
          <ScrollHeroShowcasePage onBack={() => navigate('/')} />
        )}

        {/* Operational Viewers */}
        {currentRoute === '/router-view' && <ModelRouterVisualizer />}
        {currentRoute === '/skills-view' && <SkillsRegistryView />}
        {currentRoute === '/memory-view' && <MemoryJournalView />}
        {currentRoute === '/audit-view' && <ProvenanceAuditView />}
      </main>

      {/* Persistent Footer */}
      <footer className="border-t border-border-subtle bg-slate-950/90 px-6 py-6 z-20 text-xs font-mono text-text-muted">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-text-primary">Debapriya Bhattacharyya</span>
            <span>•</span>
            <a href="https://github.com/Deb-git-dev" target="_blank" rel="noopener noreferrer" className="text-accent-secondary hover:underline">
              GitHub (Deb-git-dev)
            </a>
            <span>•</span>
            <a href="https://www.facebook.com/deb2remember" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Facebook (deb2remember)
            </a>
            <span>•</span>
            <span className="text-rose-400">Tribeni Minati Foundation NGO</span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/about')} className="hover:text-text-secondary">About</button>
            <button onClick={() => navigate('/studio')} className="text-cyan-300 hover:underline">AI Studio</button>
            <button onClick={() => navigate('/catalog')} className="hover:text-text-secondary">Skills</button>
            <button onClick={() => navigate('/contact')} className="hover:text-text-secondary">Contact</button>
            <button onClick={() => setIsActionModalOpen(true)} className="text-accent-success hover:underline flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verifiable Ledger</span>
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
