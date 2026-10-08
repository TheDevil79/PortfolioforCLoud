import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Cpu, Flame, CheckCircle2, Terminal } from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-5 h-5 text-amber-400" />,
  Code2: <Code2 className="w-5 h-5 text-indigo-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
  Flame: <Flame className="w-5 h-5 text-emerald-400" />,
};

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Background & Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Bio & Pillars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-slate-200 leading-relaxed font-normal">
              {personalInfo.aboutBio}
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed">
              Whether building an end-to-end AI disaster management system during a 24-hour hackathon, orchestrating computer vision models with microcontrollers for classroom automation, or structuring relational schemas, I prioritize clean architecture, measurable impact, and rapid iteration.
            </motion.p>

            {/* Core Interest Pillars */}
            <motion.div variants={itemVariants} className="pt-2">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Focus Areas & Core Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-850 transition-all duration-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Key Statistics Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {statsData.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-card border border-slate-800/80 hover:border-indigo-500/40 relative overflow-hidden group shadow-lg transition-all"
              >
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800">
                    {iconMap[stat.iconName || 'Award']}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800/60">
                    metric
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  {stat.value}
                </div>

                <div className="mt-1 font-semibold text-sm text-slate-200">
                  {stat.label}
                </div>

                {stat.sublabel && (
                  <p className="mt-1 text-[11px] text-slate-400 leading-tight">
                    {stat.sublabel}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
