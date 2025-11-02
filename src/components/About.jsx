import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 text-slate-100 py-24">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-transparent to-slate-950 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-[800]"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-slate-300 leading-relaxed"
        >
          I'm a Computer Science and Engineering student who loves solving problems with Python. My interests span backend APIs, data tooling, and building delightful interfaces. I enjoy clean architectures, expressive code, and shipping projects that feel smooth and fun to use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {[
            { title: 'Python & FastAPI', desc: 'APIs, services, and clean backend design.' },
            { title: 'React & Tailwind', desc: 'Interactive UIs with modern styling.' },
            { title: 'Data & Scripting', desc: 'Automation, parsing, and data pipelines.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
