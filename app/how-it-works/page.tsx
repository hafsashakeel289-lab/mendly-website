
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover your challenges",
    description:
      "We start by understanding your business, listening to your team, and identifying the processes that create unnecessary friction.",
    detail: "Understand the problem",
    icon: "⌕",
  },
  {
    number: "02",
    title: "Design the right solution",
    description:
      "We explore where AI and automation can make a meaningful difference, then shape a solution around your actual needs.",
    detail: "Create a practical plan",
    icon: "✳",
  },
  {
    number: "03",
    title: "Put smarter work into action",
    description:
      "We help bring the solution into your workflow so your team can spend less time on repetitive tasks and more time moving forward.",
    detail: "Make progress",
    icon: "↗",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#12352A]">

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-12 lg:py-32">
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#E4F0E7] blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
            HOW IT WORKS
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            From bottleneck
            <span className="text-[#1F4D3A]"> to breakthrough.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#52675B]">
            Better work starts with understanding what isn't working.
            Our approach combines business insight and practical AI to
            help make everyday processes easier.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-block rounded-full bg-[#1F4D3A] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F2B84B] hover:text-[#12352A] hover:shadow-lg"
          >
            Let's get started ↗
          </Link>
        </motion.div>
      </section>

      {/* Process */}
      <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
              OUR PROCESS
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              A clear path to working smarter.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#718277]">
              No unnecessary complexity or technology for its own sake.
              Just three thoughtful steps focused on making a real difference.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  index === 1
                    ? "border-[#A9C9B1] bg-[#E4F0E7]"
                    : "border-[#E4F0E7] bg-[#FAF7F0]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-[#789080]">
                    STEP {step.number}
                  </span>

                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl text-[#1F4D3A]">
                    {step.icon}
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-[#718277]">
                  {step.description}
                </p>

                <p className="mt-8 border-t border-[#A9C9B1]/50 pt-5 text-sm font-semibold text-[#1F4D3A]">
                  {step.detail} →
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why this approach */}
      <section className="bg-[#E4F0E7] px-6 py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
              OUR PHILOSOPHY
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              The right solution starts with the right question.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#52675B]">
              We don't believe in adding AI just because it's new.
              We believe in finding the everyday challenges where
              technology can genuinely help people do better work.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#1F4D3A] p-8 text-white sm:p-12">
            <span className="text-4xl text-[#F2B84B]">✳</span>

            <h3 className="mt-7 text-3xl font-semibold leading-snug">
              Less time managing busywork. More time making progress.
            </h3>

            <p className="mt-5 leading-8 text-[#E4F0E7]">
              Every improvement should have a purpose: making work
              simpler, helping teams move faster, and creating room
              for meaningful growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-24 text-center lg:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
            YOUR NEXT STEP
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Ready to mend what slows you down?
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-[#718277]">
            Tell us where your team faces friction. Let's explore
            how a smarter workflow could look.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-block rounded-full bg-[#1F4D3A] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F2B84B] hover:text-[#12352A] hover:shadow-lg"
          >
            Talk to Mendly ↗
          </Link>
        </div>
      </section>

    </main>
  );
}
