
"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Understand before solving",
    description:
      "We believe every effective solution begins with understanding the people, processes, and challenges behind a business.",
    icon: "⌕",
  },
  {
    number: "02",
    title: "Keep technology practical",
    description:
      "AI should solve real problems and make everyday work easier, not introduce unnecessary complexity.",
    icon: "✳",
  },
  {
    number: "03",
    title: "Make progress meaningful",
    description:
      "The goal is to give teams more time and space for the work that creates lasting value.",
    icon: "↗",
  },
];

const calendlyLink = "https://calendly.com/husnainn-akram/30min";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F4F1E9] text-[#12352A]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-12 lg:py-32">
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#DCE8E3] blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#52675B]">
            ABOUT MENDLY
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Better work starts with
            <span className="text-[#1F4D3A]"> understanding.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#52675B]">
            We believe technology should make work easier, not more
            complicated. Mendly helps businesses identify what's holding
            them back and discover smarter ways forward with AI.
          </p>

          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full bg-[#F2B84B] px-8 py-4 font-semibold text-[#12352A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5AA3D] hover:shadow-lg"
          >
            Let's talk ↗
          </a>
        </motion.div>
      </section>

      {/* Mission and approach */}
      <section className="bg-white px-6 py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] bg-[#1F4D3A] p-10 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-14"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-[#DCE8E3]">
                OUR MISSION
              </p>

              <h2 className="mt-6 text-3xl font-semibold">
                Make meaningful work easier.
              </h2>

              <p className="mt-5 leading-8 text-[#E4F0E7]">
                We want businesses to spend less energy on bottlenecks
                and more energy on the work that moves them forward.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-[2rem] border border-[#D5E3D7] bg-[#DCE8E3] p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-14"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-[#52675B]">
                OUR APPROACH
              </p>

              <h2 className="mt-6 text-3xl font-semibold">
                People first. AI with purpose.
              </h2>

              <p className="mt-5 leading-8 text-[#52675B]">
                We start with real business challenges, then explore
                where AI can make a practical and valuable difference.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F4F1E9] px-6 py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#52675B]">
              WHAT GUIDES US
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Technology with a human purpose.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#52675B]">
              Our work is guided by a simple belief: the best technology
              makes people's work more meaningful.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.article
                key={value.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="rounded-3xl border border-[#D5E3D7] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DCE8E3] text-3xl text-[#1F4D3A]">
                  {value.icon}
                </div>

                <p className="mt-8 text-sm font-bold text-[#52675B]">
                  {value.number}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-[#52675B]">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="bg-[#12352A] px-6 py-24 text-center text-white lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-[#DCE8E3]">
            THE MENDLY PROMISE
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            We find your biggest bottleneck and mend it with AI.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#D5E3D7]">
            Better workflows begin with a conversation. Tell us what's
            slowing your team down and let's explore what's possible.
          </p>

          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full bg-[#F2B84B] px-8 py-4 font-bold text-[#12352A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5AA3D] hover:shadow-lg"
          >
            Start a conversation ↗
          </a>
        </div>
      </section>
    </main>
  );
}
