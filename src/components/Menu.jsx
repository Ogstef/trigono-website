const menuCategories = [
  {
    name: "Ορεκτικά",
    subtitle: "Starters",
    icon: "🫒",
    items: [
      { name: "Τζατζίκι", desc: "Strained yogurt, garlic, cucumber, dill", price: "4.50" },
      { name: "Ταραμοσαλάτα", desc: "Cured fish roe, lemon, olive oil", price: "4.50" },
      { name: "Τυροκαυτερή", desc: "Spicy feta spread with roasted peppers", price: "5.00" },
      { name: "Χωριάτικη Σαλάτα", desc: "Tomato, cucumber, onion, olives, feta", price: "8.50" },
      { name: "Κολοκυθάκια τηγανητά", desc: "Crispy fried zucchini with tzatziki", price: "6.00" },
    ],
  },
  {
    name: "Κρέατα",
    subtitle: "Grilled Meats",
    icon: "🔥",
    items: [
      { name: "Παϊδάκια Αρνίσια", desc: "Wood-fired lamb chops — our signature dish", price: "26.00", highlight: true },
      { name: "Κοτόπουλο Σχάρας", desc: "Free-range grilled chicken, herbs, lemon", price: "14.00" },
      { name: "Μπριζόλα Χοιρινή", desc: "Pork chop with roasted potatoes", price: "13.00" },
      { name: "Σουβλάκια Χοιρινά", desc: "Pork skewers, tzatziki, pita (x4)", price: "11.00" },
      { name: "Μικτή Σχάρα", desc: "Selection of grilled meats for two", price: "38.00" },
    ],
  },
  {
    name: "Σαλάτες & Λαχανικά",
    subtitle: "Salads & Sides",
    icon: "🥗",
    items: [
      { name: "Πατάτες Φούρνου", desc: "Roasted potatoes with lemon and oregano", price: "5.00" },
      { name: "Σαλάτα Ρόκα", desc: "Arugula, parmesan, cherry tomato, balsamic", price: "7.50" },
      { name: "Φρέσκος Μαϊντανός", desc: "Parsley salad, spring onion, lemon", price: "4.00" },
      { name: "Φέτα Φούρνου", desc: "Baked feta with honey and sesame", price: "7.00" },
    ],
  },
  {
    name: "Ποτά",
    subtitle: "Drinks",
    icon: "🍷",
    items: [
      { name: "Κρασί Χύμα", desc: "House wine, local variety — per carafe", price: "9.00" },
      { name: "Μπύρα", desc: "Mythos, Fix, or imported — bottle", price: "3.50" },
      { name: "Τσίπουρο", desc: "Traditional Greek pomace spirit", price: "4.00" },
      { name: "Αναψυκτικά", desc: "Soft drinks, water, juice", price: "2.50" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-amber-500/60" />
            <span className="text-amber-500 text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-inter)]">
              Τι σερβίρουμε
            </span>
            <div className="h-px w-10 bg-amber-500/60" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Το Μενού μας
          </h2>
          <p className="text-white/50 font-[family-name:var(--font-inter)] text-sm max-w-sm mx-auto">
            Τιμές ενδεικτικές — επικοινωνήστε μαζί μας για το πλήρες μενού
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {menuCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white/[0.04] border border-white/10 rounded-sm p-7 hover:bg-white/[0.06] transition-colors duration-200"
            >
              {/* Category header */}
              <div className="flex items-end gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                    {category.name}
                  </h3>
                  <span className="text-white/40 text-xs tracking-widest uppercase font-[family-name:var(--font-inter)]">
                    {category.subtitle}
                  </span>
                </div>
              </div>

              {/* Items */}
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className={`flex items-start justify-between gap-4 ${
                      item.highlight ? "bg-amber-500/10 -mx-3 px-3 py-2 rounded-sm border border-amber-500/20" : ""
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-[family-name:var(--font-inter)] text-sm font-medium ${item.highlight ? "text-amber-300" : "text-white/90"}`}>
                          {item.name}
                        </span>
                        {item.highlight && (
                          <span className="text-[10px] uppercase tracking-wider bg-amber-500 text-[#1e1e1e] px-1.5 py-0.5 rounded-sm font-semibold font-[family-name:var(--font-inter)]">
                            signature
                          </span>
                        )}
                      </div>
                      <p className="text-white/40 text-xs font-[family-name:var(--font-inter)] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <span className={`font-[family-name:var(--font-playfair)] text-sm font-semibold whitespace-nowrap ${item.highlight ? "text-amber-400" : "text-amber-500/80"}`}>
                      €{item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="tel:+302299048540"
            className="inline-flex items-center gap-3 px-8 py-4 border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-[#1e1e1e] font-[family-name:var(--font-inter)] text-sm uppercase tracking-widest transition-all duration-200 rounded-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
            </svg>
            Κάλεσε για Κράτηση
          </a>
        </div>
      </div>
    </section>
  );
}
