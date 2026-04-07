export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1544025162-d76594e8f309?w=1920&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Decorative triangle — nods to the name */}
      <svg
        className="absolute right-10 bottom-16 opacity-[0.07] hidden lg:block"
        width="320"
        height="320"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon points="50,5 95,95 5,95" stroke="white" strokeWidth="1.5" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-amber-400/50" />
          <span className="text-amber-400 text-[11px] uppercase tracking-[0.35em] font-[family-name:var(--font-inter)]">
            Καλύβια · Αττική · Από το 1985
          </span>
          <div className="h-px w-12 bg-amber-400/50" />
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-playfair)] text-white mb-6">
          <span className="block text-[72px] sm:text-[96px] leading-[0.9] font-bold tracking-tight">
            Τρίγωνο
          </span>
          <span className="block mt-4 text-xl sm:text-2xl font-light italic text-white/70 tracking-wide">
            Η γεύση μιλά από μόνη της
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-20 bg-amber-500/40" />
          <svg className="w-4 h-4 text-amber-500/60" viewBox="0 0 20 20" fill="currentColor">
            <polygon points="10,2 18,17 2,17" />
          </svg>
          <div className="h-px w-20 bg-amber-500/40" />
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < 4 ? "text-amber-400" : "text-amber-400/40"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-white/50 text-sm font-[family-name:var(--font-inter)] tracking-wide">
            <span className="text-white/80 font-medium">4.4</span> · 8,000+ κριτικές Google
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="group flex items-center gap-2 px-9 py-3.5 bg-amber-500 hover:bg-amber-400 text-[#111] font-[family-name:var(--font-inter)] font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-200 rounded-sm w-full sm:w-auto justify-center"
          >
            Δείτε το Μενού
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-9 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-[family-name:var(--font-inter)] text-sm uppercase tracking-[0.15em] transition-all duration-200 rounded-sm w-full sm:w-auto justify-center"
          >
            Βρείτε μας
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0 animate-pulse" />
      </div>
    </section>
  );
}
