import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Layout,
  Server,
  Database,
  Brain,
  Cloud,
  Terminal,
  Search,
  Layers,
} from 'lucide-react';
import { skillCategories } from '../data/portfolio';

const categoryIconMap: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5 text-indigo-400" />,
  Layout: <Layout className="w-5 h-5 text-sky-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Database: <Database className="w-5 h-5 text-amber-400" />,
  Brain: <Brain className="w-5 h-5 text-violet-400" />,
  Cloud: <Cloud className="w-5 h-5 text-cyan-400" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = skillCategories
    .filter((cat) => (selectedCategory === 'All' ? true : cat.category === selectedCategory))
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const matchingSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        skills: matchingSkills,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Toolset
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Categorized technical stack focused on scalable software, intelligent models, relational databases, and hardware control.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat.category
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. OpenCV, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 rounded-xl text-xs bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-card border border-slate-800/80 hover:border-indigo-500/30 transition-all duration-300 shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                      {categoryIconMap[categoryGroup.icon] || <Code className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100 text-base">
                        {categoryGroup.category}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {categoryGroup.skills.length} competencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {categoryGroup.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                        skill.isHighlight
                          ? 'bg-slate-900 text-slate-100 border border-indigo-500/40 hover:border-indigo-400 shadow-sm shadow-indigo-950/30'
                          : 'bg-slate-900/60 text-slate-300 border border-slate-800/80 hover:border-slate-700 hover:text-slate-100'
                      }`}
                    >
                      {skill.isHighlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No skills found matching "<span className="text-white font-medium">{searchQuery}</span>".
          </div>
        )}
      </div>
    </section>
  );
};
