import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { DancingLetters } from '../../components/animations/dancing-letters';

export const DancingLettersPage: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [inputText, setInputText] = useState('KINETIC TYPOGRAPHY');

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
          DANCING LETTERS SPRING • REF 08
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-10 py-16">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Hover over letters or type below</span>
        
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-2xl flex items-center justify-center min-h-[220px]">
          <DancingLetters 
            key={inputText} 
            text={inputText} 
            className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white" 
          />
        </div>

        <div className="max-w-md mx-auto space-y-2">
          <label className="text-xs font-mono text-slate-400">Custom Text Tester:</label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value.toUpperCase())}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-2xl text-center text-sm font-mono text-white focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      <div className="text-center text-xs font-mono text-slate-500">
        Spring Repulsion Physics (stiffness: 400, damping: 10)
      </div>
    </div>
  );
};
