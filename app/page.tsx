
"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    icon: "⌕",
    title: "Find the bottleneck",
    description:
      "We look closely at your business processes to identify what's slowing your team down.",
  },
  {
    number: "02",
    icon: "✳",
    title: "Build the solution",
    description:
      "We design practical AI-powered solutions around your actual business needs.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Make room to grow",
    description:
      "We help reduce repetitive work so your people can focus on meaningful progress.",
  },
];

const features = [
  {
    number: "01",
    title: "Workflow automation",
    description:
      "Connect repetitive tasks and processes so your team spends less time on busywork.",
    icon: "⟳",
  },
  {
    number: "02",
    title: "AI-powered operations",
    description:
      "Bring intelligence into everyday operations with solutions designed for your business.",
    icon: "✳",
  },
  {
    number: "03",
    title: "Smarter customer experiences",
    description:
      "Create smoother customer journeys with helpful, responsive AI experiences.",
    icon: "♡",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF7F0] text-[#12352A]">
<nav className="sticky top-0 z-50 border-b border-[#E4F0E7] bg-[#FAF7F0]/95 backdrop-blur-md">
  <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5 lg:px-10">
    <a href="/" className="text-3xl font-extrabold tracking-tight text-[#1F4D3A]">
      mendly<span className="text-[#F2B84B]">.</span>
    </a>

    <div className="flex flex-wrap items-center gap-5 text-sm font-semibold">
      <a href="/platform" className="transition hover:text-[#A9C9B1]">Platform</a>
      <a href="/how-it-works" className="transition hover:text-[#A9C9B1]">How it works</a>
      <a href="/about" className="transition hover:text-[#A9C9B1]">About us</a>
      <a href="/resources" className="transition hover:text-[#A9C9B1]">Resources</a>
    </div>

    <a
      href="/contact"
      className="rounded-full bg-[#1F4D3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#12352A]"
    >
      Let&apos;s talk ↗
    </a>
  </div>
</nav>


      {/* Hero */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-20 lg:grid-cols-2 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#E4F0E7] blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#A9C9B1] bg-[#E4F0E7] px-4 py-2 text-sm font-medium text-[#1F4D3A]">
            <span className="h-2 w-2 rounded-full bg-[#F2B84B]" />
            AI that works for your business
          </div>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Find the <span className="text-[#1F4D3A]">bottleneck.</span>
            <br />
            Mend it with <span className="text-[#1F4D3A]">AI.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-[#52675B]">
            We find your biggest bottleneck and mend it with AI. Less friction,
            smarter workflows, and more room to grow.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-[#1F4D3A] px-7 py-4 font-semibold text-white transition hover:-translate-y-1">
              Find your bottleneck ↗
            </a>
            <a href="#how-it-works" className="rounded-full border border-[#A9C9B1] px-7 py-4 font-semibold text-[#1F4D3A] transition hover:bg-[#E4F0E7]">
              See how it works
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#52675B]">
            <span>✓ Built around your business</span>
            <span>✓ Practical AI solutions</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="rounded-[2rem] border border-[#D5E3D7] bg-white p-6 shadow-[0_25px_80px_rgba(31,77,58,0.10)] sm:p-9">
            <div className="flex items-center justify-between border-b border-[#E4F0E7] pb-6">
              <div>
                <p className="text-sm text-[#789080]">THE MENDLY APPROACH</p>
                <h2 className="mt-1 text-xl font-semibold">A smarter way forward</h2>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E4F0E7] text-2xl">✳</div>
            </div>

            <div className="my-8 space-y-4">
              {services.map((service, index) => (
                <div key={service.number}>
                  <div className={`rounded-2xl p-5 ${index === 1 ? "border border-[#A9C9B1] bg-[#E4F0E7]" : index === 2 ? "bg-[#1F4D3A] text-white" : "bg-[#FAF7F0]"}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${index === 2 ? "text-[#A9C9B1]" : "text-[#789080]"}`}>
                      Step {service.number}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
                    <p className={`mt-1 text-sm ${index === 2 ? "text-[#E4F0E7]" : "text-[#718277]"}`}>
                      {service.description}
                    </p>
                  </div>
                  {index !== 2 && <div className="py-2 text-center text-xl text-[#A9C9B1]">↓</div>}
                </div>
              ))}
            </div>
            <p className="text-center text-xs tracking-wide text-[#789080]">LESS BUSYWORK. MORE BREAKTHROUGH.</p>
          </div>
        </motion.div>
      </section>

      {/* Platform */}
      <section id="platform" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">THE PLATFORM</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              AI that solves real problems, not just creates more tools.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#718277]">
              Every business has friction. Mendly helps you find it, understand it,
              and turn it into an opportunity to work smarter.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="rounded-3xl border border-[#E4F0E7] bg-[#FAF7F0] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E4F0E7] text-3xl text-[#1F4D3A]">
                  {feature.icon}
                </div>
                <p className="mt-8 text-sm font-bold text-[#A9C9B1]">{feature.number}</p>
                <h3 className="mt-3 text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 leading-7 text-[#718277]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-[#E4F0E7] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">HOW IT WORKS</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              From friction to flow. Three simple steps.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#52675B]">
              No unnecessary complexity. Just a thoughtful process that starts
              with understanding your business.
            </p>
            <a href="#contact" className="mt-9 inline-block rounded-full bg-[#1F4D3A] px-7 py-4 font-semibold text-white transition hover:bg-[#12352A]">
              Start a conversation ↗
            </a>
          </div>

          <div className="space-y-5">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-5 rounded-3xl border border-[#D5E3D7] bg-white p-7"
              >
                <span className="text-2xl font-bold text-[#A9C9B1]">{service.number}</span>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 leading-7 text-[#718277]">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section id="about" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#12352A] px-8 py-16 text-center text-white sm:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9C9B1]">A BETTER WAY TO WORK</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Your business deserves more than another tool.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#D5E3D7]">
            It deserves solutions that understand your challenges and make
            meaningful work easier.
          </p>
          <a href="#contact" className="mt-9 inline-block rounded-full bg-[#F2B84B] px-7 py-4 font-bold text-[#12352A] transition hover:-translate-y-1">
            Let's find your bottleneck ↗
          </a>
        </div>
      </section>

      {/* Resources placeholder */}
      <section id="resources" className="bg-white px-6 py-20 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">RESOURCES</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Ideas for a smarter way forward.</h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#718277]">
          Insights and practical ideas about AI, automation, and better ways of working.
        </p>
      </section>

      {/* Contact */}
      <footer id="contact" className="bg-[#12352A] px-6 py-16 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row">
          <div>
            <a href="/" className="text-3xl font-extrabold">mendly<span className="text-[#F2B84B]">.</span></a>
            <p className="mt-4 max-w-sm leading-7 text-[#D5E3D7]">
              We find your biggest bottleneck and mend it with AI.
            </p>
          </div>
          <div>
            <p className="font-semibold">Ready to work smarter?</p>
            <a href="mailto:hello@mendly.ai" className="mt-3 inline-block text-[#F2B84B] hover:underline">
              Get in touch ↗
            </a>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-7xl border-t border-white/15 pt-6 text-sm text-[#A9C9B1]">
          © © © 2026 Mendly. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
