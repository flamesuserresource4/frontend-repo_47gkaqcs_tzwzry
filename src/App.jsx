import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] antialiased text-white scroll-smooth">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0b0f]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0a0b0f]/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-wide">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-rose-500 text-black text-xs">AB</span>
            <span className="text-sm">Alex Backend</span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
