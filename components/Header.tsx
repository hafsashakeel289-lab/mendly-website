
"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
];

const calendlyLink = "https://calendly.com/husnainn-akram/30min";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#A9C9B1]/50 bg-[#FAF7F0]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 text-3xl font-extrabold tracking-tight text-[#1F4D3A] transition-colors duration-300 hover:text-[#F2B84B]"
        >
          mendly<span className="text-[#F2B84B]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#12352A] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-[#F2B84B]"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#F2B84B] px-6 py-3.5 font-semibold text-[#17191B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5AA3D] hover:shadow-lg"
          >
            Let's talk ↗
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#A9C9B1] text-[#1F4D3A] transition-colors duration-300 hover:bg-[#F2B84B] md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[#A9C9B1]/50 bg-[#FAF7F0] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-[#12352A] transition-colors duration-300 hover:bg-[#E4F0E7] hover:text-[#1F4D3A]"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-[#F2B84B] px-5 py-3.5 text-center font-semibold text-[#17191B] transition-all duration-300 hover:bg-[#E5AA3D]"
          >
            Let's talk ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
