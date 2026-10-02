import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Background base grid */}
      <div className="absolute inset-0 cyber-grid-light dark:cyber-grid-dark opacity-70" />

      {/* Radial ambient glow gradients */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-blue-600/10 dark:bg-blue-600/15 blur-[130px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-[140px]"
      />

      {/* Subtle floating cybersecurity coordinates / circuit dots */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" className="fill-slate-400 dark:fill-cyan-400" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
  );
}
