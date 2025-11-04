import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" aria-label="About Me" className="relative w-full bg-[#0a0b0f] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-3 max-w-3xl text-white/70">
            I craft dependable backends and scalable APIs with a focus on correctness, performance,
            and developer experience. My happy place is shaping data models, optimizing queries, and
            building clear service boundaries that make teams move faster.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">A short story</h3>
            <p className="mt-2 text-sm text-white/70">
              In my first year, I inherited a slow monolith. By untangling data access, adding
              caching, and introducing typed contracts, I helped slash p95 latencies by 60% and
              brought deploy confidence back to the team. I’ve been chasing that feeling of
              measured, meaningful impact ever since.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">Principles</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• API-first, clearly documented contracts</li>
              <li>• Strong typing and practical architecture</li>
              <li>• Performance budgets and observability</li>
              <li>• Secure by default, thoughtful code reviews</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
