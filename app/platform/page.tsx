
"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    number: "01",
    title: "Workflow Automation",
    description:
      "Reduce repetitive tasks and connect everyday processes so your team can focus on work that matters.",
    icon: "↗",
  },
  {
    number: "02",
    title: "AI-Powered Operations",
    description:
      "Bring practical AI into your operations to make work smoother, faster, and more consistent.",
    icon: "✳",
  },
  {
    number: "03",
    title: "Customer Experiences",
    description:
      "Create more helpful and responsive customer experiences with intelligent AI solutions.",
    icon: "♡",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#12352A]">
      <nav className="flex flex-wrap items-center justify-between gap-5 border-b border-[#E4F0E7] px-6 py-6 lg:px-12">
        <a href="/" className="text-3xl font-extrabold text-[#1F4D3A]">
          mendly<span className="text-[#F2B84B]">.</span>
        </a>

        <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-[#1F4D3A]">
          <a href="/platform" className="hover:text-[#F2B84B]">Platform</a>
          <a href="/how-it-works" className="hover:text-[#F2B84B]">How it works</a>
          <a href="/about" className="hover:text-[#F2B84B]">About us</a>
          <a href="/resources" className="hover:text-[#F2B84B]">Resources</a>
          <a href="/contact" className="rounded-full bg-[#1F4D3A] px-5 py-3 text-white hover:bg-[#12352A]">
            Let&apos;s Talk →
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
            THE MENDLY PLATFORM
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Less friction.
            <span className="text-[#1F4D3A]"> More flow.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#52675B]">
            Your business doesn&apos;t need more complexity. It needs smarter ways
            to work. Mendly helps identify bottlenecks and solve them with AI.
          </p>
          <a
            href="/contact"
            className="mt-9 inline-block rounded-full bg-[#1F4D3A] px-8 py-4 font-semibold text-white transition hover:bg-[#12352A]"
          >
            Find your bottleneck ↗
          </a>
        </motion.div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {solutions.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-[#D5E3D7] bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E4F0E7] text-3xl text-[#1F4D3A]">
                {item.icon}
              </div>
              <p className="mt-8 text-sm font-bold text-[#A9C9B1]">
                {item.number}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 leading-7 text-[#718277]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <footer className="bg-[#12352A] px-6 py-10 text-center text-sm text-[#A9C9B1]">
        © 2026 Mendly. All rights reserved.
      </footer>
    </main>
  );
}
