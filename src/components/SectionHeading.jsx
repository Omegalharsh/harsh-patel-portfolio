import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border ${
            isCenter ? 'mx-auto' : ''
          } bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{tag}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-3 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4 ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
