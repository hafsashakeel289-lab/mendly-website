
"use client";

import { motion } from "framer-motion";

const resources = [
  {
    number: "01",
    category: "INSIGHTS",
    title: "Find the bottleneck in your business",
    description:
      "Learn how identifying the right operational bottleneck can unlock business growth.",
  },
  {
    number: "02",
    category: "AI & AUTOMATION",
    title: "Where AI makes the biggest difference",
    description:
      "Explore how AI can simplify repetitive work and improve everyday operations.",
  },
  {
    number: "03",
    category: "GUIDES",
    title: "A smarter way to work",
    description:
      "Discover practical ways to make your workflows more efficient and effective.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#F4F1E9] text-[#12352A]">
      <section className="px-6 pb-20 pt-20 md:px-16 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="mb-6 inline-block rounded-full bg-[#DCE8E3] px-5 py-2 text-sm font-semibold text-[#1F4D3A]">
            THE MENDLY LIBRARY
          </span>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Ideas that move
            <span className="text-[#1F4D3A]"> business forward.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#52675B]">
            Practical insights, fresh perspectives, and useful guides to help
            you find bottlenecks and make work flow better with AI.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-28 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {resources.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-3xl border border-[#DCE8E3] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm font-bold text-[#1F4D3A]">
                  {item.category}
                </span>
                <span className="text-sm text-[#52675B]">
                  {item.number}
                </span>
              </div>

              <h2 className="mb-4 text-2xl font-bold">{item.title}</h2>

              <p className="leading-7 text-[#52675B]">
                {item.description}
              </p>

              <div className="mt-8 border-t border-[#DCE8E3] pt-5 text-sm font-semibold text-[#1F4D3A]">
                More coming soon
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-[#DCE8E3] px-6 py-20 text-center md:px-16">
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Ready to find your bottleneck?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#52675B]">
          Let&apos;s explore how AI can make your business work better.
        </p>

        <a
          href="https://calendly.com/husnainn-akram/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-[#F2B84B] px-8 py-4 font-semibold text-[#12352A] transition duration-300 hover:-translate-y-1 hover:bg-[#E5AA3D]"
        >
          Let&apos;s talk →
        </a>
      </section>
    </main>
  );
}
