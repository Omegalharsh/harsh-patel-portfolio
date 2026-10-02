import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Search, 
  Shield, 
  Layers, 
  Radar, 
  Network, 
  Terminal, 
  Activity, 
  Crosshair, 
  FileCode,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Globe,
  Search,
  Shield,
  Layers,
  Radar,
  Network,
  Terminal,
  Activity,
  Crosshair,
  FileCode,
  ShieldCheck
};

export default function SkillCard({ name, category, iconName, badge, highlight, index }) {
  const Icon = iconMap[iconName] || ShieldCheck;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative p-5 rounded-2xl border transition-all duration-300 backdrop-blur-sm hover:shadow-lg dark:hover:shadow-cyber-cyan ${
        highlight
          ? 'bg-white dark:bg-slate-900/90 border-cyan-300/80 dark:border-cyan-500/40 shadow-sm dark:shadow-[0_0_20px_rgba(0,229,255,0.08)] ring-1 ring-cyan-400/20 dark:ring-0'
          : 'bg-white dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800 hover:border-cyan-500/40 shadow-xs'
      }`}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-cyan-50/80 border border-cyan-200/80 text-cyan-600 dark:bg-slate-800 dark:border-slate-700 dark:text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300 shadow-sm">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm md:text-base group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
              {name}
            </h3>
            {category && (
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-mono">
                {category}
              </p>
            )}
          </div>
        </div>

        {badge && (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 whitespace-nowrap font-medium">
            {badge}
          </span>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
        <span className="flex items-center gap-1 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>Verified Methodology</span>
        </span>
        <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
          SEC://OK
        </span>
      </div>
    </motion.div>
  );
}
