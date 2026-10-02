import React from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import AnimatedBackground from './components/AnimatedBackground';

import Hero from './sections/Hero';
import About from './sections/About';
import SecurityFocus from './sections/SecurityFocus';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import CoreStrengths from './sections/CoreStrengths';
import Languages from './sections/Languages';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import { useTheme } from './hooks/useTheme';
import { useScrollActive } from './hooks/useScrollActive';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const sectionIds = ['home', 'about', 'focus', 'skills', 'experience', 'education', 'projects', 'contact'];
  const activeSection = useScrollActive(sectionIds);

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Top scroll reading progress */}
      <ScrollProgress />

      {/* Subtle cursor aura */}
      <CursorGlow />

      {/* Cyber animated background */}
      <AnimatedBackground />

      {/* Floating glass navbar */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <SecurityFocus />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <CoreStrengths />
        <Languages />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
