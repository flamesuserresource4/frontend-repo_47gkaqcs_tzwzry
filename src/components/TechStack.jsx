import React from 'react';
import { Database, Server, Boxes, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Node.js + Express',
    desc: 'Robust HTTP services, middleware, and API design.',
    icon: Server,
  },
  {
    title: 'TypeScript',
    desc: 'Type-safe codebases with clean domain models.',
    icon: Boxes,
  },
  {
    title: 'PostgreSQL',
    desc: 'Relational modeling, indexing, and query optimization.',
    icon: Database,
  },
  {
    title: 'Security & Reliability',
    desc: 'Auth, rate limiting, input validation, and monitoring.',
    icon: Shield,
  },
];

export default function TechStack() {
  return (
    <section id="skills" aria-label="Skills" className="relative w-full bg-[#0a0b0f] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p className="mt-2 text-white/70">The tools and practices I use to ship reliable backends.</p>
        </motion.div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * idx }}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:bg-white/10"
            >
              <div className="mb-3 inline-flex rounded-md border border-white/10 bg-white/5 p-2 text-emerald-300">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
