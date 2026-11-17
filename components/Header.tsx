
import Link from "next/link";

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#A9C9B1]/40 bg-[#FAF7F0]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4">
        <Link
          href="/"
          className="shrink-0 text-2xl font-extrabold tracking-tight text-[#1F4D3A] transition-colors duration-200 hover:text-[#D49A24]"
        >
          mendly<span className="text-[#F2B84B]">.</span>
        </Link>

        <nav className="flex items-center gap-4 overflow-x-auto whitespace-nowrap text-sm font-semibold text-[#12352A] sm:gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 transition-colors duration-200 hover:text-[#D49A24]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-[#1F4D3A] px-5 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F2B84B] hover:text-[#12352A]"
          >
            Let&apos;s talk →
          </Link>
        </nav>
      </div>
    </header>
  );
}
