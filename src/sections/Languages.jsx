import React from 'react';
import { motion } from 'framer-motion';
import { Languages as LanguagesIcon, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { languagesData } from '../data/portfolioData';

export default function Languages() {
  return (
    <section id="languages" className="py-16 md:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// COMMUNICATION_CHANNELS"
          title="Languages"
          subtitle="Multilingual proficiencies enabling smooth technical and professional collaboration."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {languagesData.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-300 text-center shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-50/80 border border-cyan-200/80 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 flex items-center justify-center">
                  <LanguagesIcon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {lang.name}
                </h3>

                <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-medium">
                  {lang.level}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Verified Working Proficiency</span>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
