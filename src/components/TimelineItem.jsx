import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, CheckCircle, Award, Terminal } from 'lucide-react';

export default function TimelineItem({
  title,
  subtitle,
  period,
  location,
  responsibilities = [],
  tags = [],
  highlights,
  featured = false,
  index = 0,
  isLast = false
}) {
  return (
    <div className="relative pl-8 md:pl-10 pb-12 group">
      {/* Vertical timeline line */}
      {!isLast && (
        <div className="absolute left-[15px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-slate-300 dark:via-slate-800 to-transparent group-hover:from-cyan-400 group-hover:via-cyan-600 transition-colors" />
      )}

      {/* Timeline Node Icon/Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className={`absolute left-0 top-1.5 w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300 ${
          featured
            ? 'bg-gradient-to-br from-cyan-500 to-blue-600 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,229,255,0.3)]'
            : 'bg-white border-slate-300 text-cyan-600 shadow-sm dark:bg-slate-900 dark:border-slate-700 dark:text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,229,255,0.2)]'
        }`}
      >
        {featured ? (
          <Award className="w-4 h-4 text-white" />
        ) : (
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 group-hover:scale-125 transition-transform" />
        )}
      </motion.div>

      {/* Main Card Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -3 }}
        className={`p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md hover:shadow-xl ${
          featured
            ? 'bg-white dark:bg-slate-900/90 border-cyan-300/80 dark:border-cyan-500/40 shadow-md dark:shadow-[0_0_25px_rgba(0,229,255,0.12)] ring-1 ring-cyan-400/20 dark:ring-0'
            : 'bg-white/95 dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800 hover:border-cyan-500/30 shadow-sm'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium mt-1">
              <span className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-400 font-semibold">
                <Building className="w-4 h-4" />
                {subtitle}
              </span>
              {location && (
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                  <MapPin className="w-3.5 h-3.5" />
                  {location}
                </span>
              )}
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium self-start sm:self-auto bg-slate-100 text-slate-700 border border-slate-200/90 dark:bg-slate-950/80 dark:text-cyan-300 dark:border-slate-800">
            <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            {period}
          </div>
        </div>

        {/* Responsibilities list if available */}
        {responsibilities.length > 0 && (
          <ul className="mt-4 space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
            {responsibilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Highlights if provided */}
        {highlights && (
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {highlights}
          </p>
        )}

        {/* Tool Tags */}
        {tags.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 mr-1 flex items-center gap-1 font-medium">
              <Terminal className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              Environment:
            </span>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-cyan-50/80 text-cyan-800 border border-cyan-200/80 dark:bg-slate-900 dark:text-cyan-300 dark:border-cyan-500/20 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
