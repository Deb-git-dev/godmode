import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LinkHoverProps {
  text: string;
  imageSrc: string;
  href?: string;
  className?: string;
}

export const LinkHover: React.FC<LinkHoverProps> = ({
  text,
  imageSrc,
  href = "#",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative inline-block text-white font-heading font-bold transition-colors hover:text-cyan-400 ${className}`}
    >
      <span>{text}</span>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 100,
            }}
            className="pointer-events-none fixed z-50 w-56 h-36 rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/50 bg-slate-900"
          >
            <img src={imageSrc} alt={text} className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
};
