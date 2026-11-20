
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const C = {
  cream: "#F4F1E9",
  sage: "#DCE8E3",
  grey: "#E8E8E2",
  charcoal: "#12352A",
  body: "#1F4D3A",
  white: "#FFFFFF",
  green: "#1F4D3A",
};

const calendlyLink = "https://calendly.com/husnainn-akram/30min";

const buttonStyle =
  "inline-flex items-center justify-center rounded-full bg-[#F2B84B] px-8 py-5 font-semibold text-[#12352A] hover:bg-[#E5AA3D] hover:-translate-y-1 transition-all duration-300";

const sectionStyle =
  "flex items-center px-6 py-20 lg:px-10 lg:py-24";

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
    title: "Understand your business",
    description:
      "We learn how your business works, listen to your team, and identify where time and effort are being lost.",
  },
  {
    number: "02",
    title: "Find the right opportunity",
    description:
      "We identify bottlenecks and discover where automation and AI can make the biggest difference.",
  },
  {
    number: "03",
    title: "Build your solution",
    description:
      "We shape a practical AI solution around your existing processes, tools, and business goals.",
  },
  {
    number: "04",
    title: "Improve and grow",
    description:
      "We help bring the solution into your workflow so your team can focus on meaningful work.",
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

export default function Home() {
  const logos = [...sampleCompanies, ...sampleCompanies];

  return (
    <main className="overflow-hidden bg-[#F4F1E9] text-[#12352A]">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[760px] items-center overflow-hidden bg-[#F4F1E9] px-6 py-24 lg:px-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#DCE8E3] opacity-60 blur-[120px]" />
          <div className="absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-[#E8E8E2] opacity-80 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#1F4D3A_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#DCE8E3] bg-white/80 px-4 py-2 text-sm font-medium text-[#1F4D3A] shadow-sm">
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-[#1F4D3A]"
              />
              AI that works around your business
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight text-[#12352A] sm:text-6xl lg:text-[72px]">
              Find the friction.
              <br />
              <span className="font-serif italic text-[#1F4D3A]">
                Mend the work.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#1F4D3A]">
              We find your biggest bottleneck and mend it with AI. Connect
              your processes, reduce repetitive work, and give your team
              more room to do what matters.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyle}
              >
                Find your bottleneck ↗
              </a>

              <a
                href="#how-it-works"
                className="rounded-full border border-[#1F4D3A]/40 bg-white/60 px-7 py-4 font-semibold text-[#12352A] transition-all duration-300 hover:-translate-y-1 hover:border-[#1F4D3A] hover:bg-[#DCE8E3]"
              >
                See how it works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-[#1F4D3A]">
              <span>✓ Built around your business</span>
              <span>✓ Practical AI solutions</span>
            </div>
          </motion.div>

          {/* Animated workflow visual */}
          <div className="relative mx-auto w-full max-w-[560px] [perspective:1200px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#1F4D3A]/30"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1F4D3A]/20"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="absolute left-1/2 top-0 h-4 w-4 rounded-full bg-[#1F4D3A] shadow-[0_0_25px_#DCE8E3]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateX: [0, 2, 0],
                  rotateY: [0, -2, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-[2rem] border border-[#E8E8E2] bg-white/95 p-5 text-[#12352A] shadow-[0_35px_100px_rgba(18,53,42,0.16)] backdrop-blur-2xl sm:p-7"
              >
                <div className="flex items-center justify-between border-b border-[#E8E8E2] pb-5">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-[#1F4D3A]">
                      MENDLY INTELLIGENCE
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-[#12352A]">
                      Your workflow, improved.
                    </h2>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 items-center gap-2">
                  {[
                    ["01", "Your team"],
                    ["02", "Mendly AI"],
                    ["03", "Better flow"],
                  ].map((item, index) => (
                    <div key={item[0]} className="relative text-center">
                      <motion.div
                        animate={{
                          borderColor: [
                            "rgba(31,77,58,0.15)",
                            "rgba(31,77,58,0.65)",
                            "rgba(31,77,58,0.15)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                        className="rounded-2xl border bg-[#F4F1E9] px-2 py-5"
                      >
                        <span className="text-xs font-semibold text-[#1F4D3A]">
                          {item[0]}
                        </span>
                        <p className="mt-2 text-xs font-semibold text-[#12352A] sm:text-sm">
                          {item[1]}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[#E8E8E2] bg-[#F4F1E9] p-5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[#12352A]">
                      Workflow analysis
                    </p>
                    <span className="rounded-full bg-[#DCE8E3] px-3 py-1 text-xs font-medium text-[#1F4D3A]">
                      Live preview
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      ["Repetitive tasks", "Identify"],
                      ["Disconnected tools", "Connect"],
                      ["Manual processes", "Improve"],
                    ].map((item, index) => (
                      <div key={item[0]}>
                        <div className="mb-2 flex justify-between gap-3 text-sm">
                          <span className="text-[#1F4D3A]">{item[0]}</span>
                          <span className="font-medium text-[#1F4D3A]">{item[1]}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-[#E8E8E2]">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${85 - index * 15}%` }}
                            transition={{
                              duration: 1.5,
                              delay: 0.8 + index * 0.2,
                            }}
                            className="h-full rounded-full bg-[#1F4D3A]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-xl bg-[#DCE8E3] p-4">
                  <div>
                    <p className="text-xs font-medium text-[#1F4D3A]">
                      The goal
                    </p>
                    <p className="mt-1 font-semibold text-[#12352A]">
                      More time for meaningful work
                    </p>
                  </div>
                  <span className="text-2xl text-[#1F4D3A]">↗</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -13, 0], rotate: [-4, -2, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-5 top-20 z-20 hidden rounded-2xl border border-[#E8E8E2] bg-white p-4 text-[#12352A] shadow-xl sm:block"
            >
              <p className="text-xs text-[#1F4D3A]">Opportunity found</p>
              <p className="mt-1 font-bold">Less manual work ✳</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0], rotate: [4, 1, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 right-0 z-20 rounded-2xl border border-[#E8E8E2] bg-[#DCE8E3] p-4 text-[#12352A] shadow-xl"
            >
              <p className="text-xs text-[#1F4D3A]">A smarter workflow</p>
              <p className="mt-1 font-bold">Connected by AI ↗</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="overflow-hidden bg-[#F4F1E9] px-6 py-10 lg:px-10 lg:py-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1F4D3A]">
              TRUSTED BY FORWARD-THINKING TEAMS
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#12352A] sm:text-4xl">
              Built for businesses ready to move forward.
            </h2>
            <p className="mt-3 text-sm text-[#1F4D3A]">
              Illustrative company names for design preview only.
            </p>
          </div>

          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              whileHover={{}}
              className="flex w-max items-center gap-14 whitespace-nowrap"
            >
              {logos.map((company, index) => (
                <span
                  key={`${company}-${index}`}
                  className="text-xl font-extrabold tracking-[0.16em] text-[#1F4D3A] sm:text-2xl"
                >
                  {company}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section className={`${sectionStyle} bg-[#DCE8E3]`}>
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1F4D3A]">
                THE MENDLY PLATFORM
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#12352A] sm:text-5xl">
                Technology should make business easier.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#1F4D3A]">
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
              className="rounded-[2rem] border border-white/80 bg-white p-6 shadow-[0_25px_80px_rgba(18,53,42,0.09)]"
            >
              <div className="flex items-center justify-between border-b border-[#E8E8E2] pb-5">
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#1F4D3A]">
                    MENDLY PLATFORM
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[#12352A]">
                    Connected operations
                  </h3>
                </div>
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
                    className="rounded-2xl bg-[#F4F1E9] p-5 transition hover:-translate-y-1 hover:bg-[#DCE8E3]"
                  >
                    <span className="text-xs font-bold text-[#1F4D3A]">
                      {item[0]}
                    </span>
                    <h4 className="mt-4 font-semibold text-[#12352A]">
                      {item[1]}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-[#1F4D3A]">
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
                className="rounded-[2rem] border border-white/80 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DCE8E3] text-3xl text-[#1F4D3A]">
                  {feature.icon}
                </div>
                <p className="mt-7 text-sm font-bold text-[#1F4D3A]">
                  {feature.number}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#12352A]">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-[#1F4D3A]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / BRAND STORY */}
      <section className={`${sectionStyle} bg-[#E8E8E2]`}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1F4D3A]">
              MEET MENDLY
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#12352A] sm:text-5xl">
              Better systems start with understanding your business.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#1F4D3A]">
              We look at the way your business works, find the friction points,
              and bring practical AI solutions into the picture. The goal is
              simple: make everyday work feel easier.
            </p>
            <Link href="/about" className={`mt-9 ${buttonStyle}`}>
              Get to know Mendly ↗
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-5 rounded-[3rem] bg-[#DCE8E3] blur-3xl opacity-70" />
            <div className="relative rounded-[2rem] border border-white bg-white p-7 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#1F4D3A]">
                  THE MENDLY APPROACH
                </span>
                <span className="text-2xl text-[#1F4D3A]">✳</span>
              </div>

              <div className="mt-8 space-y-5">
                {[
                  ["01", "Find the bottleneck"],
                  ["02", "Build the solution"],
                  ["03", "Make room to grow"],
                ].map((item, index) => (
                  <div
                    key={item[0]}
                    className="flex items-center gap-5 rounded-2xl border border-[#E8E8E2] bg-[#F4F1E9] p-5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DCE8E3] font-bold text-[#12352A]">
                      {item[0]}
                    </span>
                    <span className="font-semibold text-[#12352A]">
                      {item[1]}
                    </span>
                    {index === 2 && (
                      <span className="ml-auto text-[#1F4D3A]">↗</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={`${sectionStyle} bg-[#F4F1E9]`}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1F4D3A]">
              WHY MENDLY
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#12352A] sm:text-5xl">
              Less complexity. More meaningful progress.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#1F4D3A]">
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
                className="flex gap-5 rounded-3xl border border-[#E8E8E2] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DCE8E3] text-2xl text-[#1F4D3A]">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#12352A]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[#1F4D3A]">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MENDLY IMPACT */}
      <section className={`${sectionStyle} bg-white`}>
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1F4D3A]">
              THE MENDLY DIFFERENCE
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#12352A] sm:text-5xl">
              Make more room for meaningful work.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#1F4D3A]">
              Better workflows start by understanding what is slowing your team down.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Find the friction",
                description: "Identify repetitive tasks, disconnected tools, and workflow bottlenecks.",
              },
              {
                number: "02",
                title: "Create clarity",
                description: "Explore practical ways AI and automation can support your existing processes.",
              },
              {
                number: "03",
                title: "Move forward",
                description: "Build a smarter workflow that gives your team more room to focus.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-[2rem] border border-[#E8E8E2] bg-[#F4F1E9] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCE8E3] font-bold text-[#1F4D3A]">
                  {item.number}
                </span>
                <h3 className="mt-7 text-2xl font-semibold text-[#12352A]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#1F4D3A]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className={`${sectionStyle} bg-[#DCE8E3]`}>
        <div className="mx-auto w-full max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1F4D3A]">
            BUILT TO FIT YOUR WORKFLOW
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[#12352A] sm:text-5xl">
            Works with the tools your business already uses.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#1F4D3A]">
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
                className="flex min-h-28 items-center justify-center rounded-2xl border border-white bg-white p-5 text-center text-sm font-bold tracking-wider text-[#12352A] transition hover:-translate-y-1 hover:shadow-lg"
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
        className={`${sectionStyle} bg-[#F4F1E9]`}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1F4D3A]">
              HOW IT WORKS
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#12352A] sm:text-5xl">
              A clear path from problem to progress.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#1F4D3A]">
              Every engagement starts with your business needs. Our process
              keeps the focus on finding the right solution.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`rounded-[2rem] border border-[#E8E8E2] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  index === 1
                    ? "bg-[#DCE8E3]"
                    : index === 2
                      ? "bg-white"
                      : "bg-[#E8E8E2]"
                }`}
              >
                <p className="text-sm font-bold text-[#1F4D3A]">
                  STEP {step.number}
                </p>

                <h3 className="mt-8 text-2xl font-semibold text-[#12352A]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-[#1F4D3A]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND PROMISE */}
      <section className={`${sectionStyle} bg-[#DCE8E3]`}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-5xl rounded-[2rem] border border-white bg-white px-8 py-16 text-center shadow-sm sm:px-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1F4D3A]">
            OUR PROMISE
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl italic leading-tight text-[#12352A] sm:text-5xl">
            “The best solution is the one that makes work feel simpler.”
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-[#1F4D3A]">
            We focus on understanding your challenges before recommending
            technology. That is how we keep every solution practical.
          </p>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className={`${sectionStyle} bg-[#F4F1E9] text-center`}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-4xl rounded-[2.5rem] border border-[#E8E8E2] bg-[#DCE8E3] px-7 py-16 shadow-sm sm:px-14 lg:py-20"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1F4D3A]">
            READY FOR A BETTER WAY?
          </p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-[#12352A] sm:text-5xl lg:text-6xl">
            Let’s mend what’s slowing your business down.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#1F4D3A]">
            Start with a conversation. We’ll help you explore where AI and
            smarter workflows could make a real difference.
          </p>
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-[#F2B84B] px-8 py-5 font-bold text-[#12352A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5AA3D] hover:shadow-xl"
          >
            Let’s talk about your business ↗
          </a>
        </motion.div>
      </section>
    </main>
  );
}
