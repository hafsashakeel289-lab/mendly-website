
"use client";

import Link from "next/link";
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

const buttonStyle =
  "mt-9 inline-block rounded-full bg-[#1F4D3A] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F2B84B] hover:text-[#12352A] hover:shadow-lg";

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#12352A]">

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-12 lg:py-32">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#E4F0E7] blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
            THE MENDLY PLATFORM
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Less friction.
            <span className="text-[#1F4D3A]"> More flow.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#52675B]">
            Your business doesn't need more complexity. It needs smarter ways
            to work. Mendly helps identify bottlenecks and solve them with AI.
          </p>

          <Link href="/contact" className={buttonStyle}>
            Find your bottleneck ↗
          </Link>
        </motion.div>
      </section>

      {/* Solutions */}
      <section className="bg-white px-6 py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
              WHAT WE HELP WITH
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Practical solutions for everyday challenges.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#718277]">
              We focus on making your existing processes work better through
              thoughtful automation and useful AI.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {solutions.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl border border-[#D5E3D7] bg-[#FAF7F0] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#A9C9B1] hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E4F0E7] text-3xl text-[#1F4D3A]">
                  {item.icon}
                </div>

                <p className="mt-8 text-sm font-bold text-[#A9C9B1]">
                  {item.number}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-[#718277]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-[#E4F0E7] px-6 py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
              BUILT AROUND YOUR BUSINESS
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Technology should make work easier.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#52675B]">
              Every team works differently. That's why we start by
              understanding your processes before recommending a solution.
              The goal is simple: less repetitive work and more time for
              meaningful progress.
            </p>

            <Link href="/how-it-works" className={buttonStyle}>
              See how it works ↗
            </Link>
          </div>

          <div className="rounded-[2rem] bg-[#1F4D3A] p-8 text-white sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9C9B1]">
              THE MENDLY PRINCIPLE
            </p>

            <h3 className="mt-6 text-3xl font-semibold leading-snug sm:text-4xl">
              Start with the problem. Build around the people.
            </h3>

            <p className="mt-6 leading-8 text-[#E4F0E7]">
              AI is most valuable when it solves a real challenge. We keep
              the focus on practical outcomes, useful workflows, and your
              team's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-6 py-24 text-center lg:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
            READY TO WORK SMARTER?
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Let's find what's slowing you down.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-[#718277]">
            Tell us about your biggest workflow challenge. We'll explore
            where practical AI could make a difference.
          </p>

          <Link href="/contact" className={buttonStyle}>
            Talk to Mendly ↗
          </Link>
        </div>
      </section>

    </main>
  );
}
