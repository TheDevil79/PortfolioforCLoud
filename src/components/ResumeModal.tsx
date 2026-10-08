import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, CheckCircle2, GraduationCap, Award, Code2 } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-2xl bg-card border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                <h3 className="font-semibold text-slate-100">Vaibhav — Resume Overview</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Quick Profile Summary */}
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-white">{personalInfo.name}</h4>
                    <p className="text-sm text-indigo-300">{personalInfo.role}</p>
                    <p className="text-xs text-slate-400 mt-1">{educationData.institution}</p>
                  </div>
                  <div className="text-right sm:text-right">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      CGPA: {personalInfo.cgpa} / 10.0
                    </span>
                  </div>
                </div>
              </div>

              {/* Highlights Matrix */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <GraduationCap className="w-4 h-4" /> Academic Record
                  </div>
                  <p className="text-sm font-semibold text-slate-200">CGPA 9.53</p>
                  <p className="text-xs text-slate-400 mt-0.5">Sem 1: 9.40 | Sem 2: 9.64</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4" /> Hackathon
                  </div>
                  <p className="text-sm font-semibold text-slate-200">Geminathon 2026</p>
                  <p className="text-xs text-slate-400 mt-0.5">Built Sentinel Platform</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60">
                  <div className="flex items-center gap-2 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Code2 className="w-4 h-4" /> DSA / Problem Solving
                  </div>
                  <p className="text-sm font-semibold text-slate-200">100+ LeetCode</p>
                  <p className="text-xs text-slate-400 mt-0.5">C & C++ Problem Solving</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <CheckCircle2 className="w-4 h-4" /> Technical Scope
                  </div>
                  <p className="text-sm font-semibold text-slate-200">Full Stack, AI, IoT</p>
                  <p className="text-xs text-slate-400 mt-0.5">5+ Multi-domain projects</p>
                </div>
              </div>

              {/* Core Skill summary */}
              <div>
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Competencies</h5>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'C++', 'Gemini API', 'OpenCV', 'MediaPipe', 'PostgreSQL', 'Prisma', 'AWS', 'Arduino'].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Note for editing */}
              <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-800/30 text-xs text-indigo-300 flex items-start gap-2">
                <span className="font-mono text-indigo-400 mt-0.5">ℹ</span>
                <span>
                  To link your complete PDF resume file, update the <code className="bg-indigo-900/50 px-1 py-0.5 rounded text-indigo-200 font-mono">resumeUrl</code> field in <code className="bg-indigo-900/50 px-1 py-0.5 rounded text-indigo-200 font-mono">src/data/portfolio.ts</code>.
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-800 bg-slate-900/50">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                Close
              </button>
              <a
                href={personalInfo.socials.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download / Open Resume PDF</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
