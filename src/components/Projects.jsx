import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'DevDeck – Portfolio Engine',
    description:
      'A Python + FastAPI backend that powers a dynamic portfolio with Markdown content and JSON APIs. Includes a minimalist React frontend.',
    tech: ['Python', 'FastAPI', 'MongoDB', 'React'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'CodeVibes – Snippet Manager',
    description:
      'Cross-platform snippet manager with tagging, search, and cloud sync. Built with a clean REST API and smooth UI transitions.',
    tech: ['Python', 'Flask', 'SQLite', 'Framer Motion'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'AlgoPlayground',
    description:
      'Interactive visualizations for classic algorithms. Focused on clarity and playfulness, perfect for learning and demos.',
    tech: ['React', 'TypeScript', 'D3.js'],
    github: 'https://github.com/',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 text-slate-100 py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-[800]"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 hover:bg-slate-900/70 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-800/60 px-2 py-1 text-xs hover:bg-slate-800 transition"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-md bg-teal-500 text-slate-950 px-2 py-1 text-xs font-semibold hover:bg-teal-400 transition"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </a>
                </div>
              </div>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
