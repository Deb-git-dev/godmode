import React from 'react';
import { ParallaxTotem } from '../primitives/MotionPrimitives';

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
      <div className="relative p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-indigo-400/80 shadow-lg hover:shadow-xl transition-all">
        {/* Inner subtle bezel highlight */}
        <div className="pointer-events-none absolute inset-px rounded-[15px] border border-slate-100" />
        {children}
      </div>
    </ParallaxTotem>
  );
};
