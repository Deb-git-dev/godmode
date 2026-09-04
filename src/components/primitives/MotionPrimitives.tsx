import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * MotionColumn: Named layout primitive for staggered reveal of items.
 * Gracefully renders static children if prefers-reduced-motion is true.
 */
interface MotionColumnProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export const MotionColumn: React.FC<MotionColumnProps> = ({
  children,
  className = '',
  stagger = 0.08
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * ParallaxTotem: Depth-reactive 3D card tilt primitive.
 * Clamps maximum rotation to ±6 degrees and disables tilt when reduced motion is requested.
 */
interface ParallaxTotemProps {
  children: React.ReactNode;
  className?: string;
}

export const ParallaxTotem: React.FC<ParallaxTotemProps> = ({ children, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Clamp to 6 degrees max
    const rotateY = (x / (rect.width / 2)) * 6;
    const rotateX = -(y / (rect.height / 2)) * 6;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.15s ease-out'
      }}
      className={`transition-shadow ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * GridSweep: Subtle ambient animated grid background scanner.
 * Renders static radial gradient when reduced motion is requested.
 */
export const GridSweep: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #6366F1 1px, transparent 1px), linear-gradient(to bottom, #6366F1 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />
      {/* Ambient Radial Gradient Glow */}
      <div 
        className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-accent-primary/15 via-accent-secondary/5 to-transparent blur-3xl rounded-full ${
          shouldReduceMotion ? '' : 'animate-pulse'
        }`}
        style={{ animationDuration: '8s' }}
      />
    </div>
  );
};

/**
 * MotionFocus: Interactive card spotlight cursor follower.
 */
interface MotionFocusProps {
  children: React.ReactNode;
  className?: string;
}

export const MotionFocus: React.FC<MotionFocusProps> = ({ children, className = '' }) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Spotlight glow layer */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit]"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.12), transparent 70%)`
        }}
      />
      {children}
    </div>
  );
};
