
"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#12352A]">
      <nav className="flex items-center justify-between border-b border-[#E4F0E7] px-6 py-6 lg:px-12">
        <a href="/" className="text-3xl font-extrabold text-[#1F4D3A]">
          mendly<span className="text-[#F2B84B]">.</span>
        </a>
        <a href="/#contact" className="rounded-full bg-[#1F4D3A] px-6 py-3 text-sm font-semibold text-white">
          Let's talk ↗
        </a>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
            ABOUT MENDLY
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Better work starts with
            <span className="text-[#1F4D3A]"> understanding.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#52675B]">
            We believe technology should make work easier, not more complicated.
            Mendly exists to help businesses find what's holding them back and
            create smarter ways forward with AI.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-[#1F4D3A] p-10 text-white sm:p-14">
            <p className="text-sm font-bold uppercase tracking-widest text-[#A9C9B1]">
              OUR MISSION
            </p>
            <h2 className="mt-6 text-3xl font-semibold">
              Make meaningful work easier.
            </h2>
            <p className="mt-5 leading-8 text-[#E4F0E7]">
              We want businesses to spend less energy on bottlenecks and more
              energy on the work that moves them forward.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#D5E3D7] bg-[#E4F0E7] p-10 sm:p-14">
            <p className="text-sm font-bold uppercase tracking-widest text-[#789080]">
              OUR APPROACH
            </p>
            <h2 className="mt-6 text-3xl font-semibold">
              People first. AI with purpose.
            </h2>
            <p className="mt-5 leading-8 text-[#52675B]">
              We start with real business challenges, then explore where AI
              can make a practical and valuable difference.
            </p>
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] bg-white p-10 text-center sm:p-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#789080]">
            THE MENDLY PROMISE
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold sm:text-5xl">
            We find your biggest bottleneck and mend it with AI.
          </h2>
          <a href="/#contact" className="mt-9 inline-block rounded-full bg-[#F2B84B] px-8 py-4 font-bold text-[#12352A] transition hover:-translate-y-1">
            Start a conversation ↗
          </a>
        </div>
      </section>

      <footer className="bg-[#12352A] px-6 py-10 text-center text-sm text-[#A9C9B1]">
        © 2026 Mendly. All rights reserved.
      </footer>
    </main>
  );
}
