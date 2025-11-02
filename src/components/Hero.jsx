import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient glow, does not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-28 pb-16 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 backdrop-blur-md"
        >
          <Code className="h-4 w-4 text-teal-400" />
          <span className="text-sm text-slate-200">CSE Student • Python Developer • Vibe Coder</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl font-[800] tracking-tight"
        >
          Building modern, playful tech experiences
          <span className="block bg-gradient-to-r from-teal-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">with Python and code vibes.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 max-w-2xl text-slate-300"
        >
          I love crafting backend logic, APIs, and interactive frontends. This portfolio blends clean engineering with a playful aesthetic and smooth animations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="group rounded-lg bg-teal-500 text-slate-950 px-5 py-3 font-semibold hover:bg-teal-400 transition">
            View Projects
          </a>
          <a href="#contact" className="rounded-lg border border-slate-700/60 bg-slate-900/60 px-5 py-3 font-semibold hover:bg-slate-800 transition">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-10 flex items-center gap-4"
        >
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800 transition">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800 transition">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="#contact" className="p-2 rounded-lg border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800 transition">
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
