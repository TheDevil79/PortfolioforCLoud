import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Flame, Layers, Trophy } from 'lucide-react';
import { achievementsData } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-amber-400" />,
  Code: <Code className="w-6 h-6 text-indigo-400" />,
  Flame: <Flame className="w-6 h-6 text-rose-400" />,
  Layers: <Layers className="w-6 h-6 text-cyan-400" />,
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Achievements
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Verified academic performance, algorithmic problem solving, and builder milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-card border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle accent highlight glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-inner group-hover:scale-105 transition-transform">
                    {iconMap[item.icon] || <Award className="w-6 h-6 text-indigo-400" />}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    {item.tag}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                  {item.value}
                </div>

                <h3 className="text-base font-bold text-slate-100 mt-1">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-indigo-400 mt-0.5">
                  {item.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mt-3 pt-3 border-t border-slate-800/60">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/40 flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Verified Metric</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
