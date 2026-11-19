"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const buttonStyle =
  "inline-flex items-center justify-center rounded-full bg-[#625BEE] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#4942D0] hover:shadow-xl";

const features = [
  {
    number: "01",
    icon: "↗",
    title: "Workflow automation",
    description:
      "Connect repetitive tasks and processes so your team can spend more time on work that matters.",
  },
  {
    number: "02",
    icon: "✳",
    title: "AI-powered operations",
    description:
      "Bring practical intelligence into everyday operations with solutions built around your business.",
  },
  {
    number: "03",
    icon: "♡",
    title: "Customer experiences",
    description:
      "Create more responsive customer journeys with helpful, thoughtful AI experiences.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the challenge",
    description:
      "We learn how your business works, listen to your team, and find where time and effort are being lost.",
  },
  {
    number: "02",
    title: "Design a smarter approach",
    description:
      "We identify opportunities and shape an AI solution around your actual processes and goals.",
  },
  {
    number: "03",
    title: "Make it work for you",
    description:
      "We help bring the solution into your workflow so your team can focus on higher-value work.",
  },
];

const sampleCompanies = [
  "NORTHSTAR",
  "BRIGHTPATH",
  "OAK & CO.",
  "EVERWELL",
  "FIELDNOTE",
  "MONARCH",
  "GREENLINE",
];

const benefits = [
  {
    icon: "◷",
    title: "Less repetitive work",
    description:
      "Give your team more time by reducing the manual tasks that slow everyday operations.",
  },
  {
    icon: "⌘",
    title: "Processes that connect",
    description:
      "Make disconnected tools and workflows work together more smoothly.",
  },
  {
    icon: "✳",
    title: "AI with a purpose",
    description:
      "Use technology to solve real business challenges, not add unnecessary complexity.",
  },
];

const integrations = [
  "CRM SYSTEMS",
  "BUSINESS TOOLS",
  "PROJECT MANAGEMENT",
  "CUSTOMER SUPPORT",
  "DATA PLATFORMS",
  "WORKFLOW TOOLS",
];

const sectionStyle =
  "flex min-h-[680px] items-center px-6 py-20 lg:px-10 lg:py-24";

export default function Home() {
  const logos = [...sampleCompanies, ...sampleCompanies];

  return (
    <main className="overflow-hidden bg-[#F7F8FC] text-[#20243A]">

      {/* HERO */}
      <section className="relative flex min-h-[680px] items-center overflow-hidden bg-[#20243A] px-6 py-20 text-white lg:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#625BEE]/40 blur-[120px]" />
          <div className="absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-[#A99BFF]/25 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-[#DCD9FF] backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#A99BFF] shadow-[0_0_14px_#A99BFF]" />
              Practical AI for better business
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[70px]">
              Your business has a{" "}
              <span className="font-serif italic text-[#A99BFF]">
                smarter
              </span>{" "}
              way to work.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#D5D7E7]">
              We find your biggest bottleneck and mend it with AI. Less
              repetitive work, more connected processes, and more room for
              your business to grow.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#625BEE] px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A99BFF] hover:text-[#20243A] hover:shadow-xl"
              >
                Find your bottleneck ↗
              </Link>

              <a
                href="#how-it-works"
                className="rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-[#A99BFF] hover:bg-white/10"
              >
                See how it works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#C3C5D8]">
              <span>✓ Business-first approach</span>
              <span>✓ Practical AI solutions</span>
            </div>
          </motion.div>

          {/* 3D WORKFLOW DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 35 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[570px] [perspective:1400px]"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotateY: [0, -3, 0],
                rotateX: [0, 2, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative rounded-[2rem] border border-white/20 bg-white/[0.11] p-4 shadow-[0_40px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6"
            >
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-[#A99BFF]">
                    MENDLY INTELLIGENCE
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    Workflow overview
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#625BEE] text-2xl text-white shadow-lg shadow-[#625BEE]/30">
                  ✳
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-[#20243A]/80 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#C3C5D8]">
                    Workflow efficiency
                  </p>
                  <span className="rounded-full bg-[#DDF5EE]/10 px-3 py-1 text-xs text-[#DDF5EE]">
                    Preview
                  </span>
                </div>

                <div className="mt-5 flex items-end gap-3">
                  <span className="text-5xl font-semibold text-white">
                    86%
                  </span>
                  <span className="pb-2 text-sm text-[#A99BFF]">
                    Illustrative score
                  </span>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "86%" }}
                    transition={{ duration: 1.8, delay: 0.7 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#625BEE] to-[#A99BFF]"
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-[#C3C5D8]">Tasks identified</p>
                  <p className="mt-2 text-2xl font-semibold text-white">12</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-[#C3C5D8]">Opportunities</p>
                  <p className="mt-2 text-2xl font-semibold text-white">08</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ["01", "Repetitive admin tasks", "Opportunity found"],
                  ["02", "Disconnected workflows", "Needs attention"],
                  ["03", "Customer follow-ups", "Ready to improve"],
                ].map((item) => (
                  <div
                    key={item[0]}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#A99BFF]">
                        {item[0]}
                      </span>
                      <span className="text-sm text-white">{item[1]}</span>
                    </div>
                    <span className="text-right text-xs text-[#C3C5D8]">
                      {item[2]}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FLOATING 3D CARDS */}
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [-5, -2, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-7 top-24 hidden rounded-2xl border border-[#625BEE]/20 bg-white p-4 text-[#20243A] shadow-2xl sm:block"
            >
              <span className="text-xs text-[#777B91]">Smart automation</span>
              <p className="mt-1 font-semibold">Less busywork ↗</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 13, 0], rotate: [4, 1, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-7 right-0 rounded-2xl border border-[#A99BFF]/30 bg-[#DDF5EE] p-4 text-[#20243A] shadow-2xl"
            >
              <span className="text-xs text-[#62677D]">The Mendly goal</span>
              <p className="mt-1 font-semibold">More room to grow ✳</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className={`${sectionStyle} overflow-hidden bg-white`}>
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#777B91]">
              TRUSTED BY FORWARD-THINKING TEAMS
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Built for businesses ready to move forward.
            </h2>
            <p className="mt-3 text-sm text-[#777B91]">
              Illustrative company names for design preview only.
            </p>
          </div>

          <div className="relative mt-16 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max items-center gap-14 whitespace-nowrap"
            >
              {logos.map((company, index) => (
                <span
                  key={`${company}-${index}`}
                  className="text-xl font-extrabold tracking-[0.16em] text-[#A0A3B4] sm:text-2xl"
                >
                  {company}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section className={`${sectionStyle} bg-[#F7F8FC]`}>
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#625BEE]">
                THE MENDLY PLATFORM
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                Technology should make business easier.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#777B91]">
                From everyday processes to customer interactions, we help
                identify where thoughtful automation can make a difference.
              </p>
              <Link href="/platform" className={`mt-9 ${buttonStyle}`}>
                Explore our platform ↗
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 8 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[2rem] border border-[#E2E4EF] bg-white p-6 shadow-[0_25px_80px_rgba(32,36,58,0.09)]"
            >
              <div className="flex items-center justify-between border-b border-[#ECECF3] pb-5">
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#625BEE]">
                    MENDLY PLATFORM
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    Connected operations
                  </h3>
                </div>
                <span className="rounded-xl bg-[#EEEDFF] p-3 text-xl text-[#625BEE]">
                  ✳
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  ["01", "Automate tasks", "Reduce repetitive work"],
                  ["02", "Connect tools", "Bring workflows together"],
                  ["03", "Use AI insights", "Find smarter opportunities"],
                  ["04", "Improve service", "Support better experiences"],
                ].map((item) => (
                  <div
                    key={item[0]}
                    className="rounded-2xl bg-[#F7F8FC] p-5"
                  >
                    <span className="text-xs font-bold text-[#625BEE]">
                      {item[0]}
                    </span>
                    <h4 className="mt-4 font-semibold">{item[1]}</h4>
                    <p className="mt-2 text-sm leading-6 text-[#777B91]">
                      {item[2]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="rounded-[2rem] border border-[#E2E4EF] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEEDFF] text-3xl text-[#625BEE]">
                  {feature.icon}
                </div>
                <p className="mt-7 text-sm font-bold text-[#A99BFF]">
                  {feature.number}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-[#777B91]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / BRAND STORY */}
      <section className={`${sectionStyle} bg-[#20243A] text-white`}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A99BFF]">
              MEET MENDLY
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Better systems start with understanding your business.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#D5D7E7]">
              We look at the way your business works, find the friction points,
              and bring practical AI solutions into the picture. The goal is
              simple: make everyday work feel easier.
            </p>
            <Link
              href="/about"
              className="mt-9 inline-flex rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:border-[#A99BFF] hover:bg-white/10"
            >
              Get to know Mendly ↗
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[3rem] bg-[#625BEE]/30 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#A99BFF]">
                  THE MENDLY APPROACH
                </span>
                <span className="text-2xl">✳</span>
              </div>
              <div className="mt-8 space-y-5">
                {[
                  ["01", "Find the bottleneck"],
                  ["02", "Build the solution"],
                  ["03", "Make room to grow"],
                ].map((item, index) => (
                  <div
                    key={item[0]}
                    className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#625BEE] font-bold">
                      {item[0]}
                    </span>
                    <span className="font-semibold">{item[1]}</span>
                    {index === 2 && (
                      <span className="ml-auto text-[#A99BFF]">↗</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={`${sectionStyle} bg-[#DDF5EE]`}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#625BEE]">
              WHY MENDLY
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Less complexity. More meaningful progress.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#62677D]">
              Good technology should fit into your business, support your
              people, and solve problems that actually matter.
            </p>
            <Link href="/about" className={`mt-9 ${buttonStyle}`}>
              Get to know Mendly ↗
            </Link>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="flex gap-5 rounded-3xl border border-[#C9E8DD] bg-white p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEEDFF] text-2xl text-[#625BEE]">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="mt-2 leading-7 text-[#777B91]">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className={`${sectionStyle} bg-white`}>
        <div className="mx-auto w-full max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#625BEE]">
            BUILT TO FIT YOUR WORKFLOW
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Works with the tools your business already uses.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#777B91]">
            Mendly is focused on making your existing processes work better.
            These are example integration categories, not confirmed partners.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {integrations.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex min-h-28 items-center justify-center rounded-2xl border border-[#E2E4EF] bg-[#F7F8FC] p-5 text-center text-sm font-bold tracking-wider text-[#62677D] transition hover:-translate-y-1 hover:border-[#A99BFF] hover:bg-[#EEEDFF]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className={`${sectionStyle} bg-[#F7F8FC]`}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#625BEE]">
              HOW IT WORKS
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              A clear path from problem to progress.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#777B91]">
              Every engagement starts with your business needs. Our process
              keeps the focus on finding the right solution.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`rounded-[2rem] p-8 ${
                  index === 1
                    ? "bg-[#EEEDFF]"
                    : index === 2
                      ? "bg-[#20243A] text-white"
                      : "bg-white"
                }`}
              >
                <p className="text-sm font-bold text-[#625BEE]">
                  STEP {step.number}
                </p>
                <h3 className="mt-8 text-2xl font-semibold">{step.title}</h3>
                <p
                  className={`mt-4 leading-7 ${
                    index === 2 ? "text-[#D5D7E7]" : "text-[#777B91]"
                  }`}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND PROMISE */}
      <section className={`${sectionStyle} bg-white`}>
        <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-[#E2E4EF] bg-[#F7F8FC] px-8 py-16 text-center sm:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#625BEE]">
            OUR PROMISE
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl italic leading-tight sm:text-5xl">
            “The best solution is the one that makes work feel simpler.”
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-[#777B91]">
            We focus on understanding your challenges before recommending
            technology. That is how we keep every solution practical.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${sectionStyle} bg-[#20243A] text-center text-white`}>
        <div className="mx-auto w-full max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A99BFF]">
            READY FOR A BETTER WAY?
          </p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Let’s mend what’s slowing your business down.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#D5D7E7]">
            Start with a conversation. We’ll help you explore where AI and
            smarter workflows could make a real difference.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-[#625BEE] px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A99BFF] hover:text-[#20243A] hover:shadow-xl"
          >
            Let’s talk about your business ↗
          </Link>
        </div>
      </section>
    </main>
  );
}