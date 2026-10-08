import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Github,
  ArrowUpRight,
  ShieldAlert,
  Activity,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { projectsData } from '../data/portfolio';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'AI / ML', 'IoT & Automation', 'Full Stack', 'Database'];

  const featuredProject = projectsData.find((p) => p.isFeatured);
  const regularProjects = projectsData.filter((p) => !p.isFeatured);

  const filteredProjects = regularProjects.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Projects & Systems
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Architected and engineered solutions spanning LLM triage pipelines, embedded computer vision controllers, and full-stack platforms.
          </p>
        </div>

        {/* FEATURED PROJECT SPOTLIGHT — SENTINEL */}
        {featuredProject && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
                Spotlight Featured Project • Geminathon 2026
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-gradient-to-b from-card to-slate-950 border border-indigo-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group"
            >
              {/* Top ambient glow inside featured card */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Col: Info & Features */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {featuredProject.highlight}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/20 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Disaster Management
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Gemini API
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {featuredProject.title}
                    </h3>
                    <p className="text-indigo-200/90 text-sm sm:text-base font-medium mt-1">
                      {featuredProject.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Highlight feature list in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {featuredProject.keyFeatures.slice(0, 6).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-200 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => setActiveModalProject(featuredProject)}
                      className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5"
                    >
                      View Deep Specs & Features
                    </button>
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-750 hover:border-slate-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Right Col: Interactive Simulated Radar / Crisis HUD Mockup */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 font-mono shadow-xl relative overflow-hidden">
                    {/* Simulated Radar Header */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4 text-xs">
                      <div className="flex items-center gap-2 text-indigo-300">
                        <Activity className="w-4 h-4 text-rose-400 animate-pulse" />
                        <span className="font-bold">SENTINEL CRITICAL TRIAGE</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30">
                        LIVE
                      </span>
                    </div>

                    {/* Simulated Incident Cards */}
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-rose-900/40 space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-rose-400 font-semibold flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> Sector 4 — Flood Surge
                          </span>
                          <span className="text-rose-300 font-bold bg-rose-950 px-1.5 py-0.2 rounded border border-rose-800">
                            Severity 9.8/10
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 font-sans">
                          Gemini NLP: Extracted 14 trapped individuals near relief perimeter. Translation: Complete (Tamil → English).
                        </p>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1.5 pt-1">
                          <CheckCircle2 className="w-3 h-3" /> Relief Team Alpha Dispatched
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/70 border border-amber-900/30 space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-amber-400 font-semibold flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> Sector 2 — Medical Logistics
                          </span>
                          <span className="text-amber-300 font-bold bg-amber-950 px-1.5 py-0.2 rounded border border-amber-800">
                            Severity 7.4/10
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-sans">
                          Shelter capacity matched: 85 beds available at Regional Facility.
                        </p>
                      </div>
                    </div>

                    {/* Footer stats bar */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-[10px] text-slate-400">
                      <div>
                        <div className="text-indigo-300 font-bold text-xs">Gemini 1.5</div>
                        <div>NLP Engine</div>
                      </div>
                      <div>
                        <div className="text-emerald-400 font-bold text-xs">&lt; 180ms</div>
                        <div>Triage Latency</div>
                      </div>
                      <div>
                        <div className="text-cyan-400 font-bold text-xs">24h</div>
                        <div>Sprint Delivery</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Filter Tabs for Other Projects */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4 border-t border-slate-800/60">
          <div>
            <h3 className="text-lg font-bold text-white">Other Key Projects</h3>
            <p className="text-xs text-slate-400">Filter by technical specialization</p>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-slate-900/60 p-1 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedFilter === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-card border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-950/70 text-indigo-300 border border-indigo-800/50">
                    {project.category}
                  </span>
                  {project.highlight && (
                    <span className="text-[11px] font-mono text-cyan-400">
                      {project.highlight}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="p-1 rounded text-slate-500 hover:text-slate-200"
                    title="View details"
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </h4>

                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3.5">
                  {project.description}
                </p>

                {/* Key feature bullets (first 3) */}
                <div className="space-y-1.5 mt-4 pt-3 border-t border-slate-800/60">
                  {project.keyFeatures.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tech Stack and Links */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    <span>Inspect System</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-indigo-200 border border-indigo-500/30 transition-colors"
                        aria-label={`${project.title} Live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
