import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ChevronRight, FileDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'focus', label: 'Focus' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 flex items-center justify-between ${
          isScrolled
            ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-lg dark:shadow-cyber-cyan border border-slate-200/90 dark:border-cyan-500/30'
            : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/60'
        }`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="relative p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-200">
            <Shield className="w-5 h-5 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
          </div>
          <div>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1 font-heading">
              HV <span className="text-cyan-500 font-mono text-xs hidden sm:inline">// SEC</span>
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block -mt-0.5">
              Harsh Valani
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-300 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Controls & Theme Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Quick Resume Link (Desktop) */}
          <a
            href={personalInfo.resumePath}
            download="Harsh-Valani-Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold text-slate-800 dark:text-cyan-300 border border-slate-300 dark:border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 transition-colors shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-500" />
            <span>CV</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-white/95 dark:bg-slate-950/95 border border-slate-200 dark:border-cyan-500/20 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-colors ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <a
                href={personalInfo.resumePath}
                download="Harsh-Valani-Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
              >
                <FileDown className="w-4 h-4" />
                Download Harsh Valani Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
