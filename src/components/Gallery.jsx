import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85",
    alt: "Grilled lamb chops — signature dish",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99eb4b951?w=600&q=85",
    alt: "Fresh salad with feta",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85",
    alt: "Wood-fired grill",
  },
  {
    src: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=85",
    alt: "Traditional Greek mezedes",
  },
  {
    src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=85",
    alt: "Taverna dining atmosphere",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-amber-600" />
            <span className="text-amber-700 text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-inter)]">
              Φωτογραφίες
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#1e1e1e]">
            Η εμπειρία
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[220px] gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm group ${photo.span ?? ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <p className="text-center text-[#9a9080] text-sm font-[family-name:var(--font-inter)] mt-8 italic">
          Φωτογραφίες placeholder — πραγματικές φωτογραφίες σύντομα
        </p>
      </div>
    </section>
  );
}
