import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center justify-between p-1.5 w-16 h-8 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-slate-200/90 border-slate-300 hover:border-slate-400 dark:bg-cyber-card/90 dark:border-cyan-500/40 dark:shadow-[0_0_15px_rgba(0,229,255,0.15)] shadow-inner cursor-pointer"
    >
      <span className="sr-only">Toggle theme</span>
      <div className="flex w-full justify-between items-center px-1 text-xs">
        <Sun className={`w-3.5 h-3.5 transition-colors ${!isDark ? 'text-amber-500 font-bold' : 'text-slate-500'}`} />
        <Moon className={`w-3.5 h-3.5 transition-colors ${isDark ? 'text-cyan-300 font-bold' : 'text-slate-400'}`} />
      </div>

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`absolute top-1 bottom-1 w-6 rounded-full shadow-md flex items-center justify-center ${
          isDark 
            ? 'left-8 bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-cyan-500/50' 
            : 'left-1 bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-900 shadow-amber-500/40'
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-white" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-slate-950" />
        )}
      </motion.div>
    </motion.button>
  );
}
