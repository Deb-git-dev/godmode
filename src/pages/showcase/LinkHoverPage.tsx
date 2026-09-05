import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { LinkHover } from '../../components/animations/link-hover';

export const LinkHoverPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
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
        <span className="px-3 py-1.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono">
          MAGNETIC LINK HOVER • REF 06
        </span>
      </div>

      <div className="max-w-4xl mx-auto py-20 space-y-12 text-center">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Hover over links to reveal floating media</span>
        
        <div className="space-y-6 text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-slate-300">
          <p>
            We design <LinkHover text="Relativistic Accretion Disks" imageSrc="https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&auto=format&fit=crop" />,
          </p>
          <p>
            architect <LinkHover text="Quantum Shaders" imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop" />,
          </p>
          <p>
            and pioneer <LinkHover text="Autonomous Agents" imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop" /> across the cosmos.
          </p>
        </div>
      </div>

      <div className="text-center text-xs font-mono text-slate-500">
        Framer Motion Cursor Follower • Spring Physics
      </div>
    </div>
  );
};
