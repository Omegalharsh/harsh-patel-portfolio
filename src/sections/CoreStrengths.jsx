import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Target, 
  MessageSquare, 
  Compass, 
  FileSearch, 
  CheckCircle 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { coreStrengths } from '../data/portfolioData';

const iconMap = {
  Cpu,
  Target,
  MessageSquare,
  Compass,
  FileSearch
};

export default function CoreStrengths() {
  return (
    <section id="strengths" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// OPERATIONAL_ATTRIBUTES"
          title="Core Strengths"
          subtitle="Analytical discipline, communication standards, and investigative traits."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {coreStrengths.map((item, index) => {
            const Icon = iconMap[item.icon] || CheckCircle;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-cyber-cyan flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-cyan-50/80 dark:bg-slate-900 border border-cyan-200/70 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300 mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">ATTRIB_0{index + 1}</span>
                  <span className="text-emerald-500">ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
