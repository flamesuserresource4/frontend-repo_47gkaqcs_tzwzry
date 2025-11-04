import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0a0b0f]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.20),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(234,88,12,0.15),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-start justify-center px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Open to new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Alex Bruno
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 text-lg text-white/80 sm:text-xl"
        >
          Backend Web Developer | Node.js • Express • PostgreSQL • TypeScript
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80"
        >
          <span className="rounded-full bg-white/5 px-3 py-1">3+ years experience</span>
          <span className="rounded-full bg-white/5 px-3 py-1">Remote-first</span>
          <span className="rounded-full bg-white/5 px-3 py-1">API & data layers</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-medium text-black transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            Let’s work together
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <div className="ml-1 flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white/80 transition hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white/80 transition hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-orange-500 text-black font-semibold">AB</span>
          <div>
            <p className="text-sm font-medium">A little personal</p>
            <p className="text-xs text-white/70">I love turning complex data problems into elegant, reliable services.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
