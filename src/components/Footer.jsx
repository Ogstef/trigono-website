const navLinks = [
  { label: "Σχετικά", href: "#about" },
  { label: "Μενού", href: "#menu" },
  { label: "Γκαλερί", href: "#gallery" },
  { label: "Επικοινωνία", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-10 pb-10 border-b border-white/5">
          {/* Brand */}
          <div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-1">
              Τρίγωνο
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-amber-400/60 font-[family-name:var(--font-inter)] mb-4">
              The Triangle
            </div>
            <p className="text-white/40 text-sm font-[family-name:var(--font-inter)] leading-relaxed">
              Αυθεντική ελληνική ταβέρνα στα Καλύβια Αττικής. Ξυλόφουρνος,
              παϊδάκια, και παραδοσιακές γεύσεις.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white/60 text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] mb-5">
              Πλοήγηση
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-amber-400 text-sm font-[family-name:var(--font-inter)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/60 text-xs uppercase tracking-widest font-[family-name:var(--font-inter)] mb-5">
              Επικοινωνία
            </h4>
            <ul className="space-y-3 text-sm font-[family-name:var(--font-inter)]">
              <li className="text-white/40">Αθηνών 36, Καλύβια Θορικού</li>
              <li>
                <a
                  href="tel:+302299048540"
                  className="text-white/40 hover:text-amber-400 transition-colors"
                >
                  +30 2299 048540
                </a>
              </li>
              <li className="text-white/40">Καθημερινά 12:00 – 23:30</li>
            </ul>

            {/* Stars */}
            <div className="flex items-center gap-1 mt-5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${i < 4 ? "text-amber-400" : "text-amber-400/40"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white/30 text-xs ml-1 font-[family-name:var(--font-inter)]">
                4.4 · 8,000+ Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/25 text-xs font-[family-name:var(--font-inter)]">
          <span>© {new Date().getFullYear()} Το Τρίγωνο. All rights reserved.</span>
          <span>Kalyvia, Attica, Greece</span>
        </div>
      </div>
    </footer>
  );
}
