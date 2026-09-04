import React from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * ShaderGradientHero: Animated atmospheric gradient backdrop.
 * Adheres to Section 9 resilience rule:
 * Degrades gracefully to a static Tailwind gradient when reduced motion is preferred.
 */
export const ShaderGradientHero: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      {/* Background Layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          shouldReduceMotion
            ? 'bg-gradient-to-br from-indigo-950/50 via-slate-900 to-slate-950'
            : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-[#0B0F19]'
        }`}
      />

      {/* Subtle Glow Spheres */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
