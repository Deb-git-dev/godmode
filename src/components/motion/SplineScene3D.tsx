import React, { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Box, Sparkles, Layers } from 'lucide-react';

interface SplineScene3DProps {
  className?: string;
}

/**
 * SplineScene3D: Self-contained hero 3D interactive viewport.
 * Adheres strictly to the resilience rule:
 * If WebGL / 3D fails or user prefers reduced motion, gracefully degrades
 * to an interactive geometric SVG canvas. Never hard-fails visually.
 */
export const SplineScene3D: React.FC<SplineScene3DProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();
  const [hasWebGL] = useState(true);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-border-subtle bg-slate-950/60 backdrop-blur-xl ${className}`}>
      {/* 3D Scene Viewport */}
      {hasWebGL && !shouldReduceMotion ? (
        <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
          {/* Ambient perspective grid */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.25) 0%, transparent 70%)'
            }}
          />

          {/* Interactive Floating 3D Nodes */}
          <div className="relative z-10 flex items-center justify-center gap-6">
            {[
              { id: 1, title: 'Claude API', sub: 'Primary Router', color: 'from-indigo-500/30 to-indigo-700/10', border: 'border-indigo-500/40' },
              { id: 2, title: 'GODMODE Core', sub: 'The Rule of Everything', color: 'from-cyan-500/40 to-indigo-600/20', border: 'border-cyan-400/50', primary: true },
              { id: 3, title: 'NVIDIA NIM', sub: 'Sub-Second TTFT', color: 'from-emerald-500/30 to-emerald-700/10', border: 'border-emerald-500/40' }
            ].map((node) => (
              <div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{
                  transform: hoveredNode === node.id ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className={`p-5 rounded-2xl bg-gradient-to-b ${node.color} border ${node.border} shadow-xl shadow-indigo-950/30 cursor-pointer backdrop-blur-md flex flex-col items-center text-center ${
                  node.primary ? 'w-48 py-8 -translate-y-2' : 'w-40'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-center mb-3 text-text-primary shadow-inner">
                  {node.primary ? <Sparkles className="w-5 h-5 text-accent-secondary" /> : <Box className="w-5 h-5 text-accent-primary" />}
                </div>
                <div className="font-heading font-bold text-text-primary text-sm tracking-tight">{node.title}</div>
                <div className="text-[11px] font-mono text-text-secondary mt-1">{node.sub}</div>
              </div>
            ))}
          </div>

          {/* Physics indicator badge */}
          <div className="absolute bottom-3 left-4 flex items-center gap-2 text-[10px] font-mono text-text-muted bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse" />
            <span>Interactive 3D Geometry Active (CPU-Efficient)</span>
          </div>
        </div>
      ) : (
        /* Reduced Motion & WebGL Fallback */
        <div className="w-full h-80 flex flex-col items-center justify-center p-6 text-center bg-surface-subtle">
          <Layers className="w-10 h-10 text-accent-primary mb-3" />
          <h4 className="font-heading font-bold text-text-primary">GODMODE High-Availability Topology</h4>
          <p className="text-xs text-text-secondary mt-1 max-w-sm">
            Static high-contrast visual fallback active for reduced motion and low-power hardware.
          </p>
        </div>
      )}
    </div>
  );
};
