import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileDown, 
  ArrowRight, 
  Mail, 
  Lock,
  ChevronDown,
  Terminal,
  Activity,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xs sm:text-sm font-mono tracking-widest uppercase text-cyan-600 dark:text-cyan-400 font-semibold"
              >
                // INITIALIZING IDENTITY //
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading"
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-200">Harsh Valani</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 font-heading"
              >
                Cybersecurity Professional <span className="text-cyan-500 font-mono">|</span> VAPT & Web Application Security
              </motion.p>
            </div>

            {/* Supporting description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {personalInfo.heroSupportingText}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.resumePath}
                download="Harsh-Valani-Resume.pdf"
                className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 flex items-center gap-2 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
              </button>
            </motion.div>

            {/* Social Icons & Email Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-4 flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
                CONNECT:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Harsh Valani"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>

              <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Ahmedabad, India</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Personal Photo + Cybersecurity Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Ambient Background Glow Ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-emerald-400/20 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />

            {/* Main Cyber Card Container */}
            <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/30 p-3 sm:p-4 shadow-2xl dark:shadow-[0_0_40px_rgba(0,229,255,0.15)] backdrop-blur-xl group">
              
              {/* Card Header HUD Bar */}
              <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-slate-700 dark:text-cyan-300 uppercase">
                    SEC_OPERATIVE // HV-01
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>LIVE_DEFENSE</span>
                </div>
              </div>

              {/* Photo Frame with HUD Overlays */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950 border border-slate-200 dark:border-slate-800">
                <img
                  src={profileImg}
                  alt="Harsh Valani - Cybersecurity Professional"
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Cyber Scanline Animation */}
                <motion.div
                  animate={{ y: ['-100%', '300%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent pointer-events-none"
                />

                {/* Tech HUD Corner Brackets */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cyan-400 pointer-events-none shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-cyan-400 pointer-events-none shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
                <div className="absolute bottom-16 left-3 w-5 h-5 border-b-2 border-l-2 border-cyan-400 pointer-events-none shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
                <div className="absolute bottom-16 right-3 w-5 h-5 border-b-2 border-r-2 border-cyan-400 pointer-events-none shadow-[0_0_8px_rgba(0,229,255,0.6)]" />

                {/* Floating Top-Left Micro Badge */}
                <div className="absolute top-4 left-4 ml-2 mt-2 py-1 px-2.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-md">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>VAPT ANALYST</span>
                </div>

                {/* Bottom Glass Overlay Info Bar */}
                <div className="absolute bottom-2 inset-x-2 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between text-xs font-mono shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white tracking-wide">
                        HARSH VALANI
                      </div>
                      <div className="text-[9px] text-cyan-400/90 font-mono">
                        ID: HV-2026 // RED TEAM
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    <CheckCircle2 className="w-3 h-3" />
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Bottom Quick Telemetry Bar */}
              <div className="mt-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-400 font-semibold">
                  <Lock className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Ethical Hacking & AI</span>
                </span>
                <span className="text-slate-500 dark:text-slate-400 font-mono text-[10px]">
                  Kali • Burp • Nmap
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Down Arrow indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to About section"
        className="mt-12 p-2 rounded-full border border-slate-300 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500 transition-colors focus:outline-none cursor-pointer"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
