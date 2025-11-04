import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Payments API Platform',
    desc:
      'Multi-tenant REST API with OAuth2, request signing, idempotency keys, and detailed audit logs.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'TypeScript', 'Redis'],
    url: '#',
  },
  {
    title: 'Analytics Ingestion Service',
    desc:
      'High-throughput event ingestion with batching, backpressure, and columnar storage exports.',
    tags: ['Node.js', 'Express', 'TS', 'ClickHouse', 'Kafka'],
    url: '#',
  },
  {
    title: 'Content API Gateway',
    desc:
      'Unified API with schema validation, rate limits, caching, and observability via OpenTelemetry.',
    tags: ['TypeScript', 'Express', 'OpenAPI', 'OTel'],
    url: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0a0b0f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>
        <p className="mt-2 text-white/60">A few highlights that represent my backend work.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/40 hover:bg-white/10"
            >
              <div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <a
                  href={p.url}
                  className="inline-flex items-center gap-2 text-emerald-300 transition hover:text-emerald-200"
                >
                  View details <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
