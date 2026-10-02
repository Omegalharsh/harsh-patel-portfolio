import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  KeyRound, 
  Lock, 
  Unlock, 
  ShieldCheck, 
  Binary, 
  CheckCircle2
} from 'lucide-react';

export default function ProjectCard({ project }) {
  const [selectedAlgo, setSelectedAlgo] = useState('AES');
  const [sampleText, setSampleText] = useState('Confidential Security Payload');
  const [isEncrypted, setIsEncrypted] = useState(true);

  // Dynamic simulation of algorithm output
  const getCiphertext = () => {
    if (!isEncrypted) return sampleText;
    switch (selectedAlgo) {
      case 'AES':
        return 'U2FsdGVkX19q7Z+0L9+rKxS349aX+9FqR8jkl3M410NqW0bK12==';
      case 'DES':
        return '4B89F2A1C30E789D42F091A8';
      case 'RSA':
        return 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3qX...';
      default:
        return 'ENC_DATA_STREAM';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-cyan-500/30 bg-white/90 dark:bg-slate-900/90 shadow-2xl dark:shadow-cyber-cyan backdrop-blur-xl transition-all duration-300"
    >
      {/* Top Header Badge */}
      <div className="bg-gradient-to-r from-slate-100 via-cyan-500/5 to-slate-100 dark:from-slate-900/90 dark:via-cyan-950/40 dark:to-slate-900/90 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-cyan-400 font-semibold">
              FEATURED SECURITY SOFTWARE
            </span>
            <div className="text-xs text-slate-400 dark:text-slate-500">
              Module: Practical Cryptography
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Project Overview & Core Details */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold tracking-wider">
              Key Implementation Highlights
            </div>
            <ul className="space-y-2.5">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                  <div className="mt-1 p-0.5 rounded-full bg-cyan-500/20 text-cyan-500 dark:text-cyan-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="pt-2">
            <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 font-semibold tracking-wider mb-2">
              Cryptographic Scope & Domains
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Cryptographic Demo Terminal */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-300 dark:border-cyan-500/30 bg-slate-950 p-5 shadow-xl text-left font-mono">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] text-slate-400 ml-1">cryptonix-cli ~ v1.0</span>
              </div>
              <KeyRound className="w-4 h-4 text-cyan-400" />
            </div>

            {/* Algorithm Selector Buttons */}
            <div className="mb-4">
              <label className="text-[11px] text-slate-400 block mb-1.5 uppercase tracking-wider">
                Select Algorithm:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {project.algorithms.map((algo) => (
                  <button
                    key={algo}
                    onClick={() => setSelectedAlgo(algo)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all text-center ${
                      selectedAlgo === algo
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(0,229,255,0.4)]'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {algo}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Payload Simulation */}
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-500 block mb-1">Plaintext Input:</span>
                <input
                  type="text"
                  value={sampleText}
                  onChange={(e) => setSampleText(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-cyan-300 text-xs focus:outline-none focus:border-cyan-500"
                  placeholder="Enter message to encrypt..."
                />
              </div>

              {/* Toggle Encrypt / Decrypt State */}
              <div className="flex items-center justify-between py-1">
                <span className="text-[11px] text-slate-400">Stream Status:</span>
                <button
                  onClick={() => setIsEncrypted(!isEncrypted)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs transition-colors"
                >
                  {isEncrypted ? <Lock className="w-3.5 h-3.5 text-amber-400" /> : <Unlock className="w-3.5 h-3.5 text-emerald-400" />}
                  <span>{isEncrypted ? "Encrypted Mode" : "Decrypted Mode"}</span>
                </button>
              </div>

              {/* Output Ciphertext */}
              <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800 relative">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1 flex items-center justify-between">
                  <span>Output Ciphertext ({selectedAlgo}):</span>
                  <Binary className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="text-emerald-400 break-all text-xs font-mono select-all">
                  {getCiphertext()}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
              <span className="text-cyan-400/80">AES: 256-bit | RSA: 2048-bit</span>
              <span className="text-emerald-400 font-semibold">Integrity Verified</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
