import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-slate-950 text-slate-100 py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-[800]"
        >
          Let's build something awesome
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-slate-300"
        >
          Open for internships, freelance collaborations, and hackathon teams. If you vibe with clean code and playful design, say hi!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="mailto:youremail@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-500 text-slate-950 px-5 py-3 font-semibold hover:bg-teal-400 transition"
          >
            <Mail className="h-5 w-5" /> youremail@example.com
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-5 py-3 font-semibold hover:bg-slate-800 transition"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-5 py-3 font-semibold hover:bg-slate-800 transition"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
        </motion.div>

        <p className="mt-10 text-xs text-slate-500">Designed with ❤️, built with React, Tailwind, Framer Motion, and a splash of Spline.</p>
      </div>
    </section>
  );
};

export default Contact;
