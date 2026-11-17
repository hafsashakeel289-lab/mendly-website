
import Link from "next/link";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "How it works", href: "/how-it-works" },
];

const exploreLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="bg-[#12352A] text-[#FAF7F0]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="text-3xl font-extrabold transition-colors hover:text-[#F2B84B]"
            >
              mendly<span className="text-[#F2B84B]">.</span>
            </Link>

            <p className="mt-5 max-w-xs leading-7 text-[#E4F0E7]">
              We find your biggest bottleneck and mend it with AI.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-block rounded-full bg-[#F2B84B] px-6 py-3 font-semibold text-[#12352A] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Let&apos;s talk →
            </Link>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-[#A9C9B1]">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[#F2B84B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-[#A9C9B1]">
              Explore
            </h3>
            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[#F2B84B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-[#A9C9B1]">
              Get in touch
            </h3>
            <p className="mb-4 leading-7 text-[#E4F0E7]">
              Have a workflow challenge? Let&apos;s find a smarter way forward.
            </p>
            <Link
              href="/contact"
              className="font-semibold transition-colors hover:text-[#F2B84B]"
            >
              Contact Mendly →
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#A9C9B1]/30 pt-7 text-sm text-[#A9C9B1] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Mendly. All rights reserved.</p>
          <Link
            href="/"
            className="transition-colors hover:text-[#F2B84B]"
          >
            Back to home ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
