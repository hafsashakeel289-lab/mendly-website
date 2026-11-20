
"use client";

import { motion } from "framer-motion";

const articles = [
  {
    category: "AI & BUSINESS",
    title: "Where should your business start with AI?",
    description:
      "A practical way to identify repetitive tasks and find opportunities for meaningful automation.",
    date: "5 min read",
    number: "01",
  },
  {
    category: "WORKFLOW AUTOMATION",
    title: "The hidden cost of repetitive work",
    description:
      "Understand how everyday manual processes affect your team's time, focus and productivity.",
    date: "4 min read",
    number: "02",
  },
  {
    category: "SMARTER OPERATIONS",
    title: "Automation that works around your team",
    description:
      "Why effective AI solutions should fit your existing workflows instead of creating more complexity.",
    date: "6 min read",
    number: "03",
  },
];

const calendlyLink = "https://calendly.com/husnainn-akram/30min";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F4F1E9] text-[#12352A]">
      <section className="bg-[#DCE8E3] px-6 py-24 lg:px-10 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1F4D3A]">
            THE MENDLY JOURNAL
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Ideas for a <span className="text-[#1F4D3A]">smarter</span> way
            to work.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#52675B]">
            Explore practical ideas about AI, workflow automation and
            building better ways of working.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#52675B]">
              LATEST INSIGHTS
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Explore our articles.
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.article
                key={article.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group rounded-3xl border border-[#D5E3D7] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#F2B84B] hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#DCE8E3] px-3 py-2 text-xs font-bold tracking-wide text-[#1F4D3A]">
                    {article.category}
                  </span>
                  <span className="text-2xl font-bold text-[#52675B]">
                    {article.number}
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-semibold leading-snug">
                  {article.title}
                </h3>

                <p className="mt-5 leading-7 text-[#52675B]">
                  {article.description}
                </p>

                <div className="mt-9 flex items-center justify-between border-t border-[#DCE8E3] pt-5">
                  <span className="text-sm text-[#52675B]">
                    {article.date}
                  </span>
                  <span className="font-semibold text-[#1F4D3A] transition-colors group-hover:text-[#D49A24]">
                    Coming soon ↗
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#12352A] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Ready to find your bottleneck?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#D5E3D7]">
          Let&apos;s explore how AI can make your everyday work simpler.
        </p>

        <a
          href={calendlyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-[#F2B84B] px-8 py-4 font-bold text-[#12352A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5AA3D]"
        >
          Talk to Mendly ↗
        </a>
      </section>
    </main>
  );
}
