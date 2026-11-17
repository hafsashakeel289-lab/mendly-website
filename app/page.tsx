
"use client";

import Link from "next/link";
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

const buttonStyle =
  "inline-block rounded-full bg-[#1F4D3A] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F2B84B] hover:text-[#12352A] hover:shadow-lg";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF7F0] text-[#12352A]">

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
            Your team has better things to do than repeat the same tasks.
            Mendly helps uncover where time is being lost and brings practical
            AI solutions into the way your business already works.
          </p>


          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className={buttonStyle}>
              Find your bottleneck ↗
            </Link>

            <a
              href="#how-it-works"
              className="inline-block rounded-full border border-[#A9C9B1] px-7 py-4 font-semibold text-[#1F4D3A] transition-all duration-300 hover:-translate-y-1 hover:border-[#F2B84B] hover:bg-[#F2B84B] hover:text-[#12352A]"
            >
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
                <h2 className="mt-1 text-xl font-semibold">
                  A smarter way forward
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E4F0E7] text-2xl">
                ✳
              </div>
            </div>

            <div className="my-8 space-y-4">
              {services.map((service, index) => (
                <div key={service.number}>
                  <div
                    className={`rounded-2xl p-5 ${index === 1
                        ? "border border-[#A9C9B1] bg-[#E4F0E7]"
                        : index === 2
                          ? "bg-[#1F4D3A] text-white"
                          : "bg-[#FAF7F0]"
                      }`}
                  >
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider ${index === 2 ? "text-[#A9C9B1]" : "text-[#789080]"
                        }`}
                    >
                      Step {service.number}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">
                      {service.title}
                    </h3>

                    <p
                      className={`mt-1 text-sm ${index === 2 ? "text-[#E4F0E7]" : "text-[#718277]"
                        }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {index !== 2 && (
                    <div className="py-2 text-center text-xl text-[#A9C9B1]">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-xs tracking-wide text-[#789080]">
              LESS BUSYWORK. MORE BREAKTHROUGH.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Platform */}
      <section
        id="platform"
        className="bg-white px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
              THE PLATFORM
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              AI that solves real problems, not just creates more tools.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#718277]">
              Every business has friction. Mendly helps you find it,
              understand it, and turn it into an opportunity to work smarter.
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
                className="rounded-3xl border border-[#E4F0E7] bg-[#FAF7F0] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#A9C9B1] hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E4F0E7] text-3xl text-[#1F4D3A]">
                  {feature.icon}
                </div>

                <p className="mt-8 text-sm font-bold text-[#A9C9B1]">
                  {feature.number}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-[#718277]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/platform" className={buttonStyle}>
              Explore the platform ↗
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="bg-[#E4F0E7] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
              HOW IT WORKS
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              From friction to flow. Three simple steps.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#52675B]">
              No unnecessary complexity. Just a thoughtful process that
              starts with understanding your business.
            </p>

            <Link href="/contact" className={`mt-9 ${buttonStyle}`}>
              Start a conversation ↗
            </Link>
          </div>

          <div className="space-y-5">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-5 rounded-3xl border border-[#D5E3D7] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-2xl font-bold text-[#A9C9B1]">
                  {service.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 leading-7 text-[#718277]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FAF7F0] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
            CLIENT EXPERIENCES
          </p>

          <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Better workflows. More room to grow.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#A9C9B1] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <p className="text-3xl text-[#F2B84B]">★★★★★</p>

              <p className="mt-6 text-lg leading-8 text-[#52675B]">
                “Mendly helped us rethink repetitive work and explore smarter
                ways to support our team.”
              </p>

              <p className="mt-6 font-bold text-[#1F4D3A]">
                Client feedback
              </p>

              <p className="text-sm text-[#789080]">
                Workflow improvement
              </p>
            </div>

            <div className="rounded-3xl border border-[#A9C9B1] bg-[#E4F0E7] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <p className="text-3xl text-[#F2B84B]">★★★★★</p>

              <p className="mt-6 text-lg leading-8 text-[#52675B]">
                “The focus on understanding our actual bottlenecks made the
                process feel practical and relevant to our business.”
              </p>

              <p className="mt-6 font-bold text-[#1F4D3A]">
                Client feedback
              </p>

              <p className="text-sm text-[#789080]">AI solutions</p>
            </div>
          </div>

          <p className="mt-5 text-xs text-[#789080]">
            Note: Replace these sample testimonials with genuine client
            feedback before publishing.
          </p>
        </div>
      </section>

      {/* About preview */}
      <section id="about" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#12352A] px-8 py-16 text-center text-white sm:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9C9B1]">
            A BETTER WAY TO WORK
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Your business deserves more than another tool.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#D5E3D7]">
            It deserves solutions that understand your challenges and make
            meaningful work easier.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-block rounded-full bg-[#F2B84B] px-7 py-4 font-bold text-[#12352A] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
          >
            Let&apos;s find your bottleneck ↗
          </Link>

          <div className="mt-8">
            <Link
              href="/about"
              className="text-sm font-semibold text-[#A9C9B1] underline underline-offset-4 transition hover:text-[#F2B84B]"
            >
              Learn more about Mendly
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section
        id="resources"
        className="bg-white px-6 py-24 text-center lg:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#789080]">
            RESOURCES & INSIGHTS
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Ideas for a smarter way forward.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#718277]">
            Explore practical ideas about AI, automation, business operations,
            and better ways of working.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/resources" className={buttonStyle}>
              Explore resources ↗
            </Link>

            <Link
              href="/blog"
              className="inline-block rounded-full border border-[#A9C9B1] px-7 py-4 font-semibold text-[#1F4D3A] transition-all duration-300 hover:-translate-y-1 hover:border-[#F2B84B] hover:bg-[#F2B84B] hover:text-[#12352A]"
            >
              Read our blog ↗
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
