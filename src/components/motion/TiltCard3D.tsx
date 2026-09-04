import React from 'react';
import { ParallaxTotem } from '../primitives/MotionPrimitives.tsx';

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * TiltCard3D: Reusable perspective-tilt card wrapper (§9).
 * Features double-bezel styling and smooth gyro damping.
 */
export const TiltCard3D: React.FC<TiltCard3DProps> = ({ children, className = '' }) => {
  return (
    <ParallaxTotem className={`rounded-2xl transition-all duration-300 ${className}`}>
      <div className="relative p-6 rounded-2xl bg-surface-subtle/80 backdrop-blur-md border border-border-subtle hover:border-border-prominent shadow-xl shadow-indigo-950/20 hover:shadow-indigo-500/10 transition-all">
        {/* Inner subtle bezel highlight */}
        <div className="pointer-events-none absolute inset-px rounded-[15px] border border-white/[0.04]" />
        {children}
      </div>
    </ParallaxTotem>
  );
};
