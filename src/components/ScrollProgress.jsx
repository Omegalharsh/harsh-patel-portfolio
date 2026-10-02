import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 origin-left z-50 shadow-[0_0_8px_rgba(0,229,255,0.7)]"
      style={{ scaleX }}
    />
  );
}
