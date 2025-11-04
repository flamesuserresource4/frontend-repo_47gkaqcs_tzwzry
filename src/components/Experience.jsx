import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  {
    company: 'Acme Fintech',
    title: 'Backend Engineer',
    period: '2023 — Present',
    points: [
      'Designed event-driven services handling millions of monthly requests',
      'Shipped OAuth2 flows, idempotent endpoints, and audit trails',
      'Improved p95 latency by 40% through query tuning and caching',
    ],
  },
  {
    company: 'DataWorks',
    title: 'Software Engineer',
    period: '2021 — 2023',
    points: [
      'Built analytics ingestion with batching and backpressure controls',
      'Introduced TypeScript across services, improving safety and DX',
      'Led monitoring rollout with OpenTelemetry and SLOs',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="relative w-full bg-[#0a0b0f] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p className="mt-2 text-white/70">Highlights from recent roles.</p>
        </motion.div>

        <div className="mt-8 space-y-6">
          {roles.map((r, idx) => (
            <motion.article
              key={r.company}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * idx }}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-rose-500 to-orange-500 text-black">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-medium">{r.title} · {r.company}</h3>
                    <p className="text-xs text-white/60">{r.period}</p>
                  </div>
                </div>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-12 text-sm text-white/75">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
