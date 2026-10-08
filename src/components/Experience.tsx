import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Sprints & Workshops</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Hackathons
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            High-intensity technical events, hackathons, and developer workshops where practical systems were built and presented.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Center/Left Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-6 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-700/50 to-transparent" />

          <div className="space-y-10">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 sm:pl-16 group"
              >
                {/* Glowing Node on Timeline */}
                <div className="absolute left-2 sm:left-4 top-1 -translate-x-1/2 w-5 h-5 rounded-full bg-card border-2 border-indigo-500 flex items-center justify-center shadow-md shadow-indigo-500/30 group-hover:scale-110 group-hover:border-indigo-400 transition-all">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-card border border-slate-800/90 hover:border-indigo-500/30 shadow-xl transition-all duration-300">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                    <div>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 uppercase tracking-wide">
                        {item.roleOrType}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-indigo-300 font-medium mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mt-4">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mt-4 pt-3 border-t border-slate-800/60">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-slate-800/60">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
