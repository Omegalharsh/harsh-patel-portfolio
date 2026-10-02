import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CyberHeroVisual from '../components/CyberHeroVisual';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// PROFILE_INTEL"
          title="About Me"
          subtitle="Focused on vulnerability assessment, web application security, and proactive defense."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Content & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 md:p-8 rounded-3xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 dark:opacity-20 pointer-events-none">
                <Shield className="w-32 h-32 text-cyan-400" />
              </div>

              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold mb-4">
                <Terminal className="w-4 h-4" />
                <span>SUMMARY & OBJECTIVE</span>
              </div>

              <blockquote className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                "{personalInfo.summary}"
              </blockquote>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Specialization</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">VAPT & Web Security</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Methodology</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">Manual & Tool Testing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Tool Badges */}
            <div className="p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-sm">
              <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold block mb-3">
                Key Toolchain & Environment
              </span>
              <div className="flex flex-wrap gap-2.5">
                {['Kali Linux', 'Burp Suite', 'Nmap', 'Manual Security Testing', 'Ethical Hacking AI'].map((tool, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-cyan-300 border border-slate-300 dark:border-cyan-500/20"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Security Microcopy */}
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 italic">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span>"Exploring vulnerabilities. Building better security."</span>
            </div>
          </motion.div>

          {/* Right Column: Cybersecurity Visual (VAPT Flow Monitor) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <CyberHeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
