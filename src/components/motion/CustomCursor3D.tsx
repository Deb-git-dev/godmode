import React, { useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * CustomCursor3D: Desktop cursor with subtle inertial spring follower.
 * Automatically disables itself on touch devices or when prefers-reduced-motion is requested.
 */
export const CustomCursor3D: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || isTouchDevice) return;

    const interval = setInterval(() => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.25,
        y: prev.y + (pos.y - prev.y) * 0.25
      }));
    }, 16);

    return () => clearInterval(interval);
  }, [pos, shouldReduceMotion, isTouchDevice]);

  if (shouldReduceMotion || isTouchDevice) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Subtle glowing follower orb */}
      <div
        className="fixed w-8 h-8 rounded-full border border-indigo-400/30 bg-indigo-500/10 blur-[2px] transition-opacity duration-300"
        style={{
          left: `${trailingPos.x - 16}px`,
          top: `${trailingPos.y - 16}px`,
          opacity: trailingPos.x > 0 ? 1 : 0
        }}
      />
    </div>
  );
};
