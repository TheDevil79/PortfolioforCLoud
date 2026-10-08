import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Sparkles, Circle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const TerminalVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bash' | 'profile' | 'stack'>('bash');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const terminalText = `
$ whoami
${personalInfo.name} — Computer Science @ VIT Chennai (CGPA: 9.53)

$ interests
AI / Cloud / Full Stack / IoT / Hackathons

$ status
🟢 Currently building & learning...
⚡ Ready for internships & hackathons
`.trim();

  return (
    <div className="w-full max-w-lg mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-indigo-950/20 group">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80 select-none">
        {/* macOS style dots */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
          <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
            vaibhav@vit-chennai: ~
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
          <button
            onClick={() => setActiveTab('bash')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeTab === 'bash'
                ? 'bg-indigo-600/30 text-indigo-300 font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            bash
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeTab === 'profile'
                ? 'bg-indigo-600/30 text-indigo-300 font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            profile.json
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeTab === 'stack'
                ? 'bg-indigo-600/30 text-indigo-300 font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            stack.ts
          </button>
        </div>

        {/* Copy / Action */}
        <button
          onClick={() => copyToClipboard(terminalText)}
          className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          title="Copy command output"
          aria-label="Copy terminal content"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[260px] bg-slate-950/95 text-slate-300">
        {activeTab === 'bash' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {/* Command 1 */}
            <div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-semibold">$</span>
                <span className="text-slate-200 font-medium">whoami</span>
              </div>
              <div className="mt-1 pl-4 text-indigo-300 font-semibold flex items-center gap-2">
                <span>{personalInfo.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-950/70 border border-indigo-700/50 text-indigo-300 font-sans">
                  VIT Chennai
                </span>
              </div>
            </div>

            {/* Command 2 */}
            <div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-semibold">$</span>
                <span className="text-slate-200 font-medium">interests</span>
              </div>
              <div className="mt-1 pl-4 text-slate-300">
                <span className="text-cyan-300">AI</span> / <span className="text-violet-300">Cloud</span> / <span className="text-indigo-300">Full Stack</span> / <span className="text-emerald-300">IoT</span> / <span className="text-amber-300">Computer Vision</span>
              </div>
            </div>

            {/* Command 3 */}
            <div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-semibold">$</span>
                <span className="text-slate-200 font-medium">status</span>
              </div>
              <div className="mt-1 pl-4 flex items-center gap-2 text-emerald-400">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-slate-200">building & open to opportunities</span>
              </div>
            </div>

            {/* Active prompt blinking cursor */}
            <div className="flex items-center gap-2 pt-2 text-slate-400">
              <span className="text-emerald-400 font-semibold">$</span>
              <span className="text-slate-400">explore --featured=sentinel</span>
              <span className="w-2 h-4 bg-indigo-400 animate-pulse" />
            </div>
          </motion.div>
        )}

        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-slate-300"
          >
            <pre className="text-slate-300 leading-relaxed font-mono">
              <code>
{`{
  `}<span className="text-indigo-400">"name"</span>{`: `}<span className="text-emerald-300">"Vaibhav"</span>{`,
  `}<span className="text-indigo-400">"institution"</span>{`: `}<span className="text-emerald-300">"VIT Chennai"</span>{`,
  `}<span className="text-indigo-400">"academics"</span>{`: {
    `}<span className="text-indigo-400">"cgpa"</span>{`: `}<span className="text-amber-300">9.53</span>{`,
    `}<span className="text-indigo-400">"sem1"</span>{`: `}<span className="text-amber-300">9.40</span>{`,
    `}<span className="text-indigo-400">"sem2"</span>{`: `}<span className="text-amber-300">9.64</span>
{`  },
  `}<span className="text-indigo-400">"hackathon"</span>{`: `}<span className="text-emerald-300">"Geminathon 2026 (Sentinel)"</span>{`,
  `}<span className="text-indigo-400">"leetcode"</span>{`: `}<span className="text-amber-300">100</span>{`
}`}
              </code>
            </pre>
          </motion.div>
        )}

        {activeTab === 'stack' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-slate-300"
          >
            <pre className="text-slate-300 leading-relaxed font-mono">
              <code>
<span className="text-slate-500">// Core Engineering Toolkit</span>
<span className="text-indigo-400">export const</span> <span className="text-yellow-300">stack</span> = {`{`}
  <span className="text-indigo-300">languages</span>: [<span className="text-emerald-300">'C'</span>, <span className="text-emerald-300">'C++'</span>, <span className="text-emerald-300">'Python'</span>, <span className="text-emerald-300">'TypeScript'</span>, <span className="text-emerald-300">'SQL'</span>],
  <span className="text-indigo-300">frameworks</span>: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Node.js'</span>, <span className="text-emerald-300">'Flask'</span>, <span className="text-emerald-300">'Tailwind'</span>],
  <span className="text-indigo-300">ai_vision</span>: [<span className="text-emerald-300">'Gemini API'</span>, <span className="text-emerald-300">'MediaPipe'</span>, <span className="text-emerald-300">'OpenCV'</span>],
  <span className="text-indigo-300">cloud_iot</span>: [<span className="text-emerald-300">'AWS'</span>, <span className="text-emerald-300">'Supabase'</span>, <span className="text-emerald-300">'Prisma'</span>, <span className="text-emerald-300">'Arduino'</span>]
{`};`}
              </code>
            </pre>
          </motion.div>
        )}
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 select-none">
        <div className="flex items-center gap-2">
          <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500" />
          <span>vite-dev-server active</span>
        </div>
        <div className="flex items-center gap-1 font-mono text-slate-400">
          <Sparkles className="w-3 h-3 text-indigo-400" />
          <span>ready</span>
        </div>
      </div>
    </div>
  );
};
