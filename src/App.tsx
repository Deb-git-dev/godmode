import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Compass, 
  Sparkles, 
  Github, 
  Box 
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
import { PortfolioHomePage } from './pages/PortfolioHomePage';
import { WorkPage } from './pages/WorkPage';
import { WorkCaseStudyPage } from './pages/WorkCaseStudyPage';
import { LabPage } from './pages/LabPage';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CatalogPage } from './pages/CatalogPage';
import { EntityDetailPage } from './pages/EntityDetailPage';
import { DashboardPage } from './pages/DashboardPage';
import { AuthPage } from './pages/AuthPage';
import { ContactPage } from './pages/ContactPage';
import { BlackHoleShowcasePage } from './pages/BlackHoleShowcasePage';
import { ScrollHeroShowcasePage } from './pages/ScrollHeroShowcasePage';
import { MultiCrawlerPage } from './pages/MultiCrawlerPage';
import { GitReversePromptsPage } from './pages/GitReversePromptsPage';
import { DesignLabPage } from './pages/DesignLabPage';
import { CliTerminalPage } from './pages/CliTerminalPage';
import { ShowcaseIndexPage } from './pages/ShowcaseIndexPage';
import { ActionLedgerModal } from './components/modals/ActionLedgerModal';
import debPhoto from './assets/deb.jpg';

// 21st.dev 26 Showcase Pages
import { KintaroAwwwardsPage } from './pages/showcase/KintaroAwwwardsPage';
import { WebGLShaderPage } from './pages/showcase/WebGLShaderPage';
import { NeuralNoisePage } from './pages/showcase/NeuralNoisePage';
import { NeonOrbsPage } from './pages/showcase/NeonOrbsPage';
import { OrbitingCirclesPage } from './pages/showcase/OrbitingCirclesPage';
import { LinkHoverPage } from './pages/showcase/LinkHoverPage';
import { AiImageGenerationPage } from './pages/showcase/AiImageGenerationPage';
import { DancingLettersPage } from './pages/showcase/DancingLettersPage';
import { PrismHeroPage } from './pages/showcase/PrismHeroPage';
import { VetraTemplatePage } from './pages/showcase/VetraTemplatePage';
import { VelarisPage } from './pages/showcase/VelarisPage';
import { ScrollLockedVideoPage } from './pages/showcase/ScrollLockedVideoPage';
import { AuroraBackgroundPage } from './pages/showcase/AuroraBackgroundPage';
import { LiquidMetalPage } from './pages/showcase/LiquidMetalPage';
import { ScrollExpansionPage } from './pages/showcase/ScrollExpansionPage';
import { ContainerScrollPage } from './pages/showcase/ContainerScrollPage';
import { SpliteHeroPage } from './pages/showcase/SpliteHeroPage';
import { ReunoHeroPage } from './pages/showcase/ReunoHeroPage';
import { PrismaHeroPage } from './pages/showcase/PrismaHeroPage';
import { Hero3Page } from './pages/showcase/Hero3Page';
import { GradientRecipePage } from './pages/showcase/GradientRecipePage';
import { OceanicShimmerPage } from './pages/showcase/OceanicShimmerPage';
import { SaaSTemplatePage } from './pages/showcase/SaaSTemplatePage';
import { ResponsiveHeroPage } from './pages/showcase/ResponsiveHeroPage';
import { KinfeBentoPage } from './pages/showcase/KinfeBentoPage';
import { VeloraAtelierPage } from './pages/showcase/VeloraAtelierPage';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [selectedEntityId, setSelectedEntityId] = useState<string | null>(null);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);

  // Sync hash routing and aliases
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '') || '/';
      const hash = rawHash.length > 1 && rawHash.endsWith('/') ? rawHash.slice(0, -1) : rawHash;
      if (hash.startsWith('/detail/')) {
        setSelectedEntityId(hash.replace('/detail/', ''));
        setCurrentRoute('/detail');
      } else if (hash.startsWith('/work/')) {
        setCurrentRoute(hash);
      } else if (hash === 'action') {
        setIsActionModalOpen(true);
      } else {
        // Handle route aliases
        if (hash === '/team' || hash === '/leadership') setCurrentRoute('/about');
        else if (hash === '/directory' || hash === '/projects') setCurrentRoute('/work');
        else if (hash === '/generator') setCurrentRoute('/studio');
        else if (hash === '/login') setCurrentRoute('/auth');
        else if (hash === '/blackhole' || hash === '/black-hole' || hash === '/blackhole-hero-section' || hash === '/showcase/blackhole') setCurrentRoute('/black-hole');
        else if (hash === '/scrollhero' || hash === '/scroll-hero') setCurrentRoute('/scroll-hero');
        else if (hash === '/crawler' || hash === '/firecrawl') setCurrentRoute('/crawler');
        else if (hash === '/prompts' || hash === '/gitreverse') setCurrentRoute('/prompts');
        else if (hash === '/design-lab' || hash === '/designs') setCurrentRoute('/design-lab');
        else if (hash === '/terminal' || hash === '/cli') setCurrentRoute('/terminal');
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
    } else if (path.startsWith('/work/')) {
      setCurrentRoute(path);
    } else {
      if (path === '/team' || path === '/leadership') setCurrentRoute('/about');
      else if (path === '/directory' || path === '/projects') setCurrentRoute('/work');
      else if (path === '/generator') setCurrentRoute('/studio');
      else if (path === '/login') setCurrentRoute('/auth');
      else if (path === '/blackhole' || path === '/black-hole' || path === '/blackhole-hero-section' || path === '/showcase/blackhole') setCurrentRoute('/black-hole');
      else if (path === '/scrollhero' || path === '/scroll-hero') setCurrentRoute('/scroll-hero');
      else if (path === '/crawler' || path === '/firecrawl') setCurrentRoute('/crawler');
      else if (path === '/prompts' || path === '/gitreverse') setCurrentRoute('/prompts');
      else if (path === '/design-lab' || path === '/designs') setCurrentRoute('/design-lab');
      else if (path === '/terminal' || path === '/cli') setCurrentRoute('/terminal');
      else setCurrentRoute(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectEntity = (id: string) => {
    if (id === 'black-hole' || id === 'scroll-hero' || id === 'crawler' || id === 'prompts' || id === 'design-lab' || id === 'terminal' || id === 'showcase' || id === 'work' || id === 'lab') {
      navigate(`/${id}`);
      return;
    }
    setSelectedEntityId(id);
    navigate(`/detail/${id}`);
  };

  const isPortfolioPage = 
    currentRoute === '/' || 
    currentRoute === '/work' || 
    currentRoute.startsWith('/work/') || 
    currentRoute === '/lab' || 
    currentRoute === '/about' || 
    currentRoute === '/contact';

  const isFullBleedPage = 
    isPortfolioPage ||
    currentRoute === '/scroll-hero' || 
    currentRoute === '/black-hole' || 
    currentRoute.startsWith('/showcase/');

  if (isPortfolioPage) {
    return (
      <div className="min-h-screen bg-bone text-ink font-body">
        {currentRoute === '/' && <PortfolioHomePage />}
        {currentRoute === '/work' && <WorkPage />}
        {currentRoute.startsWith('/work/') && (
          <WorkCaseStudyPage slug={currentRoute.replace('/work/', '')} />
        )}
        {currentRoute === '/lab' && <LabPage />}
        {currentRoute === '/about' && <AboutPage />}
        {currentRoute === '/contact' && <ContactPage />}

        {/* Global Invariant Action Modal */}
        {isActionModalOpen && (
          <ActionLedgerModal isOpen={isActionModalOpen} onClose={() => setIsActionModalOpen(false)} />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white relative overflow-x-hidden font-body">
      <CustomCursor3D />
      <AmbientCanvas3D />
      <GridSweep />

      {/* Global Invariant Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/90 px-4 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Identity & Status */}
          <div className="flex items-center gap-3">
            <div className="relative cursor-pointer" onClick={() => navigate('/')}>
              <img 
                src={debPhoto} 
                alt="Debapriya Bhattacharyya" 
                className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600 shadow-md hover:scale-105 transition-transform"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-amber-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <span 
                  onClick={() => navigate('/')} 
                  className="font-heading font-bold text-sm tracking-tight text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  DEBAPRIYA BHATTACHARYYA
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold">
                  GODMODE
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono">
                AI Architect • Tribeni Minati Foundation
              </p>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="flex items-center gap-1 p-1 bg-slate-100/90 rounded-xl border border-slate-200 overflow-x-auto text-xs font-semibold max-w-full">
            <button
              onClick={() => navigate('/')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Portfolio</span>
            </button>

            <button
              onClick={() => navigate('/work')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/work' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Work</span>
            </button>

            <button
              onClick={() => navigate('/lab')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/lab' ? 'bg-copper text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>The Lab</span>
            </button>

            <button
              onClick={() => navigate('/showcase')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute.startsWith('/showcase') ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-sm' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-200/60'
              }`}
              title="21st.dev Visual Showcase (26 Experiences)"
            >
              <Box className="w-3.5 h-3.5 text-cyan-500" />
              <span>Showcase (26)</span>
            </button>

            <button
              onClick={() => navigate('/studio')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/studio' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Studio</span>
            </button>

            <button
              onClick={() => navigate('/catalog')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentRoute === '/catalog' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Catalog</span>
            </button>

            <button
              onClick={() => navigate('/crawler')}
              className={`px-2.5 py-1 rounded-lg transition-all text-[11px] font-mono flex items-center gap-1 ${
                currentRoute === '/crawler' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-600 hover:text-cyan-700 hover:bg-slate-200/60'
              }`}
              title="Multi-Vector Crawler"
            >
              <span>Crawler</span>
            </button>

            <button
              onClick={() => navigate('/prompts')}
              className={`px-2.5 py-1 rounded-lg transition-all text-[11px] font-mono flex items-center gap-1 ${
                currentRoute === '/prompts' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 hover:text-purple-700 hover:bg-slate-200/60'
              }`}
              title="GitReverse Prompt Vault"
            >
              <span>Prompts</span>
            </button>

            <button
              onClick={() => navigate('/design-lab')}
              className={`px-2.5 py-1 rounded-lg transition-all text-[11px] font-mono flex items-center gap-1 ${
                currentRoute === '/design-lab' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-600 hover:text-rose-700 hover:bg-slate-200/60'
              }`}
              title="Design Lab"
            >
              <span>Design Lab</span>
            </button>

            <button
              onClick={() => navigate('/terminal')}
              className={`px-2.5 py-1 rounded-lg transition-all text-[11px] font-mono flex items-center gap-1 ${
                currentRoute === '/terminal' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-200/60'
              }`}
              title="Agent Terminal"
            >
              <span>Terminal</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Routed Page Container */}
      <main className={`flex-1 w-full z-10 ${isFullBleedPage ? '' : 'max-w-7xl mx-auto p-6'}`}>
        {(currentRoute === '/' || currentRoute === '/portal') && (
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

        {/* Existing Dedicated Showcase Pages */}
        {currentRoute === '/black-hole' && (
          <BlackHoleShowcasePage onBack={() => navigate('/showcase')} />
        )}
        {currentRoute === '/scroll-hero' && (
          <ScrollHeroShowcasePage onBack={() => navigate('/showcase')} />
        )}

        {/* Multi-Crawler, Prompts, Design Lab & Terminal Studio */}
        {currentRoute === '/crawler' && <MultiCrawlerPage onNavigateToStudio={() => navigate('/studio')} />}
        {currentRoute === '/prompts' && (
          <GitReversePromptsPage onNavigateToStudio={() => navigate('/studio')} />
        )}
        {currentRoute === '/design-lab' && <DesignLabPage />}
        {currentRoute === '/terminal' && <CliTerminalPage />}

        {/* Central 21st.dev Showcase Index */}
        {currentRoute === '/showcase' && (
          <ShowcaseIndexPage onNavigate={navigate} />
        )}

        {/* 21st.dev 26 Individual Showcase Experiences */}
        {(currentRoute === '/showcase/kintaro-awwwards' || currentRoute === '/kintaro-awwwards-portfolio' || currentRoute === '/kintaro-awwwards') && (
          <KintaroAwwwardsPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/webgl-shader' || currentRoute === '/web-gl-shader' || currentRoute === '/webgl-shader') && (
          <WebGLShaderPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/neural-noise' || currentRoute === '/neural-noise') && (
          <NeuralNoisePage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/neon-orbs' || currentRoute === '/neon-orbs') && (
          <NeonOrbsPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/orbiting-circles' || currentRoute === '/orbiting-circles') && (
          <OrbitingCirclesPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/link-hover' || currentRoute === '/link-hover') && (
          <LinkHoverPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/ai-image-generation' || currentRoute === '/ai-chat-image-generation-1' || currentRoute === '/ai-image-generation') && (
          <AiImageGenerationPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/dancing-letters' || currentRoute === '/dancing-letters') && (
          <DancingLettersPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/prism' || currentRoute === '/prism-hero' || currentRoute === '/prism') && (
          <PrismHeroPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/vetra' || currentRoute === '/vetra') && (
          <VetraTemplatePage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/velaris' || currentRoute === '/velaris') && (
          <VelarisPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/scroll-locked-video' || currentRoute === '/scroll-locked-video-hero' || currentRoute === '/scroll-locked-video') && (
          <ScrollLockedVideoPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/aurora' || currentRoute === '/aurora-background' || currentRoute === '/aurora') && (
          <AuroraBackgroundPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/liquid-metal' || currentRoute === '/liquid-metal-hero' || currentRoute === '/liquid-metal') && (
          <LiquidMetalPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/scroll-expansion' || currentRoute === '/scroll-expansion-hero' || currentRoute === '/scroll-expansion') && (
          <ScrollExpansionPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/container-scroll' || currentRoute === '/container-scroll-animation' || currentRoute === '/container-scroll') && (
          <ContainerScrollPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/splite' || currentRoute === '/splite') && (
          <SpliteHeroPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/hero' || currentRoute === '/reuno-hero' || currentRoute === '/hero') && (
          <ReunoHeroPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/prisma' || currentRoute === '/prisma-hero' || currentRoute === '/prisma') && (
          <PrismaHeroPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/hero-3' || currentRoute === '/hero-3') && (
          <Hero3Page onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/gradient-recipe' || currentRoute === '/gradient-recipe') && (
          <GradientRecipePage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/oceanic-shimmer' || currentRoute === '/oceanic-shimmer') && (
          <OceanicShimmerPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/saa-template' || currentRoute === '/saa-s-template' || currentRoute === '/saa-template') && (
          <SaaSTemplatePage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/responsive-hero' || currentRoute === '/responsive-hero-banner' || currentRoute === '/responsive-hero') && (
          <ResponsiveHeroPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/bento' || currentRoute === '/bento') && (
          <KinfeBentoPage onBack={() => navigate('/lab')} />
        )}
        {(currentRoute === '/showcase/velora' || currentRoute === '/velora' || currentRoute === '/atelier') && (
          <VeloraAtelierPage onBack={() => navigate('/lab')} />
        )}

        {/* Operational Viewers */}
        {currentRoute === '/router-view' && <ModelRouterVisualizer />}
        {currentRoute === '/skills-view' && <SkillsRegistryView />}
        {currentRoute === '/memory-view' && <MemoryJournalView />}
        {currentRoute === '/audit-view' && <ProvenanceAuditView />}
      </main>

      {/* Persistent Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-6 z-20 text-xs font-mono text-slate-500 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-900">Debapriya Bhattacharyya</span>
            <span>•</span>
            <span className="text-cyan-600 font-medium">Tribeni Minati Foundation</span>
            <span>•</span>
            <span className="text-slate-500">Zero-Local-GPU Protocol</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button onClick={() => navigate('/showcase')} className="hover:text-indigo-600 transition-colors">
              Showcase (26)
            </button>
            <button onClick={() => navigate('/crawler')} className="hover:text-cyan-600 transition-colors">
              Crawler
            </button>
            <button onClick={() => navigate('/prompts')} className="hover:text-purple-600 transition-colors">
              Prompts
            </button>
            <button onClick={() => navigate('/design-lab')} className="hover:text-rose-600 transition-colors">
              Design Lab
            </button>
            <button onClick={() => navigate('/terminal')} className="hover:text-emerald-600 transition-colors">
              Terminal
            </button>
            <a 
              href="https://www.facebook.com/deb2remember" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Facebook
            </a>
            <a 
              href="https://github.com/Deb-git-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Global Invariant Action Modal */}
      {isActionModalOpen && (
        <ActionLedgerModal isOpen={isActionModalOpen} onClose={() => setIsActionModalOpen(false)} />
      )}

      {/* Floating AI Assistant Widget */}
      <AssistantWidget />
    </div>
  );
};

export default App;
