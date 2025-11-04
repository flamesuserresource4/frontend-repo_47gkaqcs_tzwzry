import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0b0f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-2 text-white/60">
            I craft dependable backends and scalable APIs with a focus on correctness, performance,
            and developer experience. I enjoy designing database schemas, optimizing queries, and
            building clean service layers that are easy to maintain and extend.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">What I Do</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Design and build RESTful APIs with Node.js, Express, and TypeScript</li>
              <li>• Model relational data and write efficient SQL for PostgreSQL</li>
              <li>• Implement authentication, authorization, caching, and observability</li>
              <li>• Set up CI/CD, testing pipelines, and containerized deployments</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">Principles</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• API-first development and clear contracts</li>
              <li>• Strong typing, maintainability, and pragmatic architecture</li>
              <li>• Performance budgets and data-driven decisions</li>
              <li>• Security by default and thorough code reviews</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
