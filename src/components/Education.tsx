import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3" />
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-card border border-slate-800/90 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
              <div className="space-y-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 mb-2">
                  Undergraduate Program
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {educationData.institution}
                </h3>
                <p className="text-sm font-medium text-indigo-300">
                  {educationData.degree}
                </p>
                <p className="text-xs text-slate-400">
                  VIT Chennai Campus
                </p>
              </div>

              {/* CGPA Badge */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/20 text-center sm:text-right shrink-0">
                <div className="text-xs text-slate-400 font-mono">Overall CGPA</div>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono mt-0.5">
                  {educationData.cgpa} <span className="text-xs text-slate-400 font-normal">/ 10.0</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">Scale 10.0</div>
              </div>
            </div>

            {/* Semester Performance Grid */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Semester SGPA Breakdown
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationData.semesters.map((s) => (
                  <div
                    key={s.sem}
                    className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between"
                  >
                    <span className="text-xs font-medium text-slate-300">{s.sem}</span>
                    <span className="text-sm font-bold font-mono text-indigo-300 px-2.5 py-0.5 rounded bg-indigo-950/80 border border-indigo-800/50">
                      {s.sgpa.toFixed(2)} SGPA
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Coursework */}
            <div className="mt-6 pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Key Computer Science Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {educationData.courseworkHighlights.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/70 text-slate-300 border border-slate-800"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
