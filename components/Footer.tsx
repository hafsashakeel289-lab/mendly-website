
import Link from "next/link";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

const exploreLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#12352A] text-[#F4F1E9]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="text-3xl font-extrabold transition-colors duration-300 hover:text-[#F2B84B]"
            >
              mendly<span className="text-[#F2B84B]">.</span>
            </Link>

            <p className="mt-5 max-w-xs leading-7 text-[#DCE8E3]">
              We find your biggest bottleneck and mend it with AI.
            </p>

            <a
              href="https://calendly.com/husnainn-akram/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-[#F2B84B] px-6 py-3 font-semibold text-[#12352A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5AA3D] hover:shadow-lg"
            >
              Let&apos;s talk →
            </a>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-[#DCE8E3]">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-[#F2B84B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-[#DCE8E3]">
              Explore
            </h3>
            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-[#F2B84B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-[#DCE8E3]">
              Get in touch
            </h3>
            <p className="mb-4 leading-7 text-[#DCE8E3]">
              Have a workflow challenge? Let&apos;s find a smarter way forward.
            </p>
            <Link
              href="/contact"
              className="font-semibold transition-colors duration-300 hover:text-[#F2B84B]"
            >
              Contact Mendly →
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-[#DCE8E3]/30 pt-7 text-sm text-[#DCE8E3] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mendly. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-300 hover:text-[#F2B84B]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-[#F2B84B]"
            >
              Back to home ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
