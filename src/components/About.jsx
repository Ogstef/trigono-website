import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-10 bg-amber-500" />
          <span className="text-amber-600 text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-inter)]">
            Η ιστορία μας
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#1e1e1e] leading-tight mb-6">
              Μια ταβέρνα που<br />
              <span className="text-[#2d3b1f]">μιλάει από μόνη της</span>
            </h2>

            <p className="text-[#3d3d3d] font-[family-name:var(--font-inter)] text-base leading-relaxed mb-5">
              Στην καρδιά των Καλυβίων Αττικής, το <strong>Τρίγωνο</strong> είναι
              κάτι παραπάνω από μια ταβέρνα — είναι ένας τόπος συνάντησης για
              όσους εκτιμούν την αυθεντική ελληνική κουζίνα.
            </p>

            <p className="text-[#3d3d3d] font-[family-name:var(--font-inter)] text-base leading-relaxed mb-8">
              Φρέσκα κρέατα από επιλεγμένους κτηνοτρόφους, μαγειρεμένα στον
              ξυλόφουρνο με παραδοσιακό τρόπο. Τα <em>παϊδάκια</em> μας, οι
              σαλάτες και τα μεζεδάκια μας έχουν κερδίσει την εμπιστοσύνη
              χιλιάδων επισκεπτών.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#e5e0d8]">
              <div>
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2d3b1f]">
                  8K+
                </div>
                <div className="text-xs uppercase tracking-wider text-[#7a7a7a] font-[family-name:var(--font-inter)] mt-1">
                  Κριτικές Google
                </div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2d3b1f]">
                  4.4★
                </div>
                <div className="text-xs uppercase tracking-wider text-[#7a7a7a] font-[family-name:var(--font-inter)] mt-1">
                  Μέση Βαθμολογία
                </div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2d3b1f]">
                  40+
                </div>
                <div className="text-xs uppercase tracking-wider text-[#7a7a7a] font-[family-name:var(--font-inter)] mt-1">
                  Χρόνια Εμπειρίας
                </div>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative h-[480px] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=85"
                alt="Trigono Taverna interior"
                fill
                className="object-cover"
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-amber-900/10" />
            </div>
            {/* Decorative accent box */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#2d3b1f] rounded-sm -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-amber-500/30 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
