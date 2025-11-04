import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="relative w-full bg-[#0a0b0f] py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold">Let’s build something great</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            I’m open to collaborating on backend-heavy products, developer platforms, and data systems.
            Send a short brief or your most interesting problem.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="mt-6 flex items-center justify-center gap-3">
          <a
            href="mailto:you@email.com"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-medium text-black transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>

        <p className="mt-10 text-xs text-white/40">© {new Date().getFullYear()} Alex Bruno. All rights reserved.</p>
      </div>
    </section>
  );
}
