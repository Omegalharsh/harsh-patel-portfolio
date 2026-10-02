import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  CheckCircle, 
  Layers
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Competencies', icon: Layers },
    { id: 'security', label: 'Security Areas', icon: ShieldCheck },
    { id: 'tools', label: 'Security Tools', icon: Wrench },
    { id: 'core', label: 'Core Skills', icon: Cpu }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// CAPABILITIES_MATRIX"
          title="Cybersecurity Skills"
          subtitle="Hands-on security testing disciplines, specialized tooling, and analytical competencies."
        />

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 border border-cyan-400'
                    : 'bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category 1: Security Areas */}
        {(activeTab === 'all' || activeTab === 'security') && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                Security Areas
              </h3>
              <span className="text-xs font-mono text-slate-400 ml-2">
                [{skillsData.securityAreas.length} Verified Areas]
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillsData.securityAreas.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  category="Security Discipline"
                  iconName={skill.icon}
                  highlight={skill.highlight}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Category 2: Practical Security Tools */}
        {(activeTab === 'all' || activeTab === 'tools') && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                Practical Tools & Frameworks
              </h3>
              <span className="text-xs font-mono text-slate-400 ml-2">
                [Hands-On Tooling]
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {skillsData.tools.map((tool, index) => (
                <SkillCard
                  key={tool.name}
                  name={tool.name}
                  category={tool.type}
                  iconName={tool.icon}
                  badge={tool.badge}
                  highlight={true}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Category 3: Core Analytical Skills */}
        {(activeTab === 'all' || activeTab === 'core') && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                Core Competencies & Analysis
              </h3>
              <span className="text-xs font-mono text-slate-400 ml-2">
                [Analytical Rigor]
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {skillsData.coreSkills.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md hover:border-cyan-500/40 shadow-xs transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
