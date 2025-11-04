import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0a0b0f] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.15),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for freelance & full-time roles
        </span>

        <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Backend Web Developer
        </h1>
        <p className="mt-3 text-lg text-white/70 sm:text-xl">
          Building reliable APIs and data layers with Node.js, Express, PostgreSQL, and TypeScript.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
          <span className="rounded-full bg-white/5 px-3 py-1">3+ years experience</span>
          <span className="rounded-full bg-white/5 px-3 py-1">Remote-first</span>
          <span className="rounded-full bg-white/5 px-3 py-1">Performance & DX focused</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-medium text-black transition hover:bg-emerald-400"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Download className="h-4 w-4" /> Download Résumé
          </a>
          <div className="ml-2 flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white/80 transition hover:text-white hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white/80 transition hover:text-white hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
