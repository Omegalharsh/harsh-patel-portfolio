import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ShieldAlert, 
  Search, 
  Terminal, 
  Radar, 
  Network, 
  Layers, 
  Bug, 
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { securityFocusAreas } from '../data/portfolioData';

const iconMap = {
  Globe,
  ShieldAlert,
  Search,
  Terminal,
  Radar,
  Network,
  Layers,
  Bug
};

export default function SecurityFocus() {
  return (
    <section id="focus" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// THREAT_LANDSCAPE"
          title="Security Focus"
          subtitle="Core operational domains and cybersecurity testing specializations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFocusAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || ShieldCheck;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-cyber-cyan flex flex-col justify-between"
              >
                {/* Glow accent in corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-cyan-50/80 dark:bg-slate-950 border border-cyan-200/70 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 group-hover:text-cyan-400 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Active Focus
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500 flex items-center">
                    SCOPE <ArrowUpRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
