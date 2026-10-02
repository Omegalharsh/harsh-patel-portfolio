import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Terminal, Bug, Lock, Server } from 'lucide-react';

export default function CyberHeroVisual() {
  const nodes = [
    { id: 'client', label: 'Client / User', icon: Globe, status: 'Normal Traffic', color: 'text-cyan-600 dark:text-cyan-400' },
    { id: 'webapp', label: 'Web Application', icon: Server, status: 'Target Scope', color: 'text-blue-600 dark:text-blue-400' },
    { id: 'testing', label: 'Security Testing', icon: Terminal, status: 'Burp / Nmap Active', color: 'text-amber-600 dark:text-amber-400' },
    { id: 'vuln', label: 'Vuln Assessment', icon: Bug, status: 'OWASP Analysis', color: 'text-rose-600 dark:text-rose-400' },
    { id: 'secure', label: 'Hardened System', icon: ShieldCheck, status: 'Mitigated & Verified', color: 'text-emerald-600 dark:text-emerald-400' },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto p-4 sm:p-6 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/30 shadow-xl dark:shadow-cyber-cyan overflow-hidden backdrop-blur-md">
      {/* Background terminal scan line */}
      <motion.div
        animate={{
          y: ['0%', '250%', '0%'],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none"
      />

      {/* Header bar of security module */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono font-medium text-slate-600 dark:text-cyan-400/80 tracking-wider ml-1">
            VAPT_FLOW_MONITOR v2.4
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
            LIVE AUDIT
          </span>
        </div>
      </div>

      {/* Network Nodes Workflow */}
      <div className="relative space-y-3">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isLast = index === nodes.length - 1;

          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="relative flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-50/90 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/40 shadow-sm transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="relative p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 group-hover:border-cyan-500/50 transition-colors shadow-xs">
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${node.color}`} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    {node.label}
                    {index === 2 && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-400 font-mono font-medium">
                        Kali/Burp
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    {node.status}
                  </div>
                </div>
              </div>

              {/* Status Pulse */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
                  NODE 0{index + 1}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${
                  index === 4 ? 'bg-emerald-500 dark:bg-emerald-400 ring-4 ring-emerald-400/20' : 
                  index === 3 ? 'bg-rose-500 dark:bg-rose-400' : 'bg-cyan-500 dark:bg-cyan-400'
                }`} />
              </div>

              {/* Connecting line to next node */}
              {!isLast && (
                <div className="absolute -bottom-3 left-6 w-[2px] h-3 bg-gradient-to-b from-cyan-500/50 to-transparent dark:from-cyan-400/30 z-10" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          Protocol: Cryptonix SSL/TLS
        </span>
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
          Zero Exploits Pending
        </span>
      </div>
    </div>
  );
}
