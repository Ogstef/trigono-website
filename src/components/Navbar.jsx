"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Σχετικά", href: "#about" },
  { label: "Μενού", href: "#menu" },
  { label: "Γκαλερί", href: "#gallery" },
  { label: "Επικοινωνία", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1e1e1e]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span
            className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white tracking-wide"
          >
            Τρίγωνο
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400/80 font-[family-name:var(--font-inter)]">
            The Triangle
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest text-white/80 hover:text-amber-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+302299048540"
            className="ml-4 px-5 py-2 border border-amber-500 text-amber-400 text-sm uppercase tracking-widest font-[family-name:var(--font-inter)] hover:bg-amber-500 hover:text-[#1e1e1e] transition-all duration-200 rounded-sm"
          >
            Κράτηση
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e1e1e]/98 border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest text-white/80 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+302299048540"
            className="mt-2 px-5 py-3 text-center border border-amber-500 text-amber-400 text-sm uppercase tracking-widest hover:bg-amber-500 hover:text-[#1e1e1e] transition-all rounded-sm"
          >
            Κράτηση
          </a>
        </div>
      )}
    </header>
  );
}
