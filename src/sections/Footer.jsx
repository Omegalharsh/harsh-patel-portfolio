import React from 'react';
import { Shield, Mail, ArrowUp, Lock, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/80 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand & Title */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white font-heading">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
              {personalInfo.role} • {personalInfo.focus}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Dedicated to defensive engineering, VAPT methodologies, and securing digital environments.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
            {['home', 'about', 'focus', 'skills', 'experience', 'education', 'projects', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 capitalize transition-colors cursor-pointer"
              >
                {id}
              </button>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:scale-110 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:scale-110 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:scale-110 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white border border-cyan-500/30 transition-all cursor-pointer ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom microcopy and copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-cyan-500" />
            <span>© 2026 Harsh Valani. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-emerald-500" />
            <span>Think. Test. Secure.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
