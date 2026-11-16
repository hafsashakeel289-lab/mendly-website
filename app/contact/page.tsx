
"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#12352A]">
      <nav className="flex flex-wrap items-center justify-between gap-5 px-6 py-6 md:px-16">
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

      <section className="px-6 pb-24 pt-16 md:px-16 md:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-[#E4F0E7] px-5 py-2 text-sm font-semibold text-[#1F4D3A]">
              LET&apos;S TALK
            </span>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight md:text-7xl">
              Let&apos;s mend
              <span className="text-[#1F4D3A]"> what&apos;s slowing you down.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#52675B]">
              Tell us where your business gets stuck. We&apos;ll explore how AI
              can help remove bottlenecks and make your work flow better.
            </p>

            <div className="mt-12 rounded-3xl bg-[#E4F0E7] p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#1F4D3A]">
                Our approach
              </p>
              <p className="mt-3 text-xl font-bold">
                Find the bottleneck. Understand the problem. Build a smarter
                solution.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-[#A9C9B1]/50 bg-white p-8 shadow-sm md:p-10"
          >
            <h2 className="text-3xl font-bold">Start a conversation</h2>
            <p className="mt-3 text-[#52675B]">
              We&apos;d love to learn about your business.
            </p>

            <form
              action="mailto:hello@mendly.ai"
              method="post"
              encType="text/plain"
              className="mt-8 space-y-5"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  Your name
                </label>
                <input
                  id="name"
                  name="Name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#A9C9B1] bg-[#FAF7F0] px-4 py-4 outline-none transition focus:border-[#1F4D3A]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  Work email
                </label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-[#A9C9B1] bg-[#FAF7F0] px-4 py-4 outline-none transition focus:border-[#1F4D3A]"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="Message"
                  required
                  rows={5}
                  placeholder="Tell us about a challenge in your business..."
                  className="w-full resize-none rounded-xl border border-[#A9C9B1] bg-[#FAF7F0] px-4 py-4 outline-none transition focus:border-[#1F4D3A]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#1F4D3A] px-7 py-4 font-semibold text-white transition hover:bg-[#12352A]"
              >
                Send Message →
              </button>
            </form>

            <p className="mt-4 text-xs leading-5 text-[#718477]">
              Contact form is a visual prototype for now. Email delivery needs
              to be configured before launch.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#12352A] px-6 py-10 text-center text-sm text-[#E4F0E7] md:px-16">
        © 2026 Mendly. All rights reserved.
      </footer>
    </main>
  );
}
