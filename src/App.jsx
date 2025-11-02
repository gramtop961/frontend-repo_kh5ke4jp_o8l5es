import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-400/40 selection:text-white">
      {/* Sticky top nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 border-b border-slate-800/60">
        <nav className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-white tracking-tight">vibe<span className="text-teal-400">coder</span></a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
          </div>
        </nav>
      </header>

      <main className="[scrollbar-color:theme(colors.slate.700)_theme(colors.slate.900)]">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
