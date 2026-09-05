import React from "react";
import { motion } from "framer-motion";

interface DancingLettersProps {
  text: string;
  className?: string;
}

export const DancingLetters: React.FC<DancingLettersProps> = ({ text, className = "" }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      className={`overflow-hidden inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          whileHover={{
            scale: 1.3,
            y: -10,
            color: "#06B6D4",
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          className="inline-block cursor-pointer transition-colors"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};
