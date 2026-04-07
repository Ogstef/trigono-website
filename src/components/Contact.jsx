const hours = [
  { day: "Δευτέρα – Κυριακή", time: "12:00 – 23:30" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#2d3b1f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-amber-500/50" />
            <span className="text-amber-400/80 text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-inter)]">
              Επικοινωνία
            </span>
            <div className="h-px w-10 bg-amber-500/50" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white">
            Βρείτε μας
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white/[0.06] border border-white/10 rounded-sm p-6 flex gap-5">
              <div className="mt-1 w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-[family-name:var(--font-inter)] font-semibold text-sm uppercase tracking-wider mb-1">
                  Διεύθυνση
                </h3>
                <p className="text-white/70 font-[family-name:var(--font-inter)] text-base leading-relaxed">
                  Αθηνών 36<br />
                  Καλύβια Θορικού, 190 10
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white/[0.06] border border-white/10 rounded-sm p-6 flex gap-5">
              <div className="mt-1 w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-[family-name:var(--font-inter)] font-semibold text-sm uppercase tracking-wider mb-1">
                  Τηλέφωνο
                </h3>
                <a
                  href="tel:+302299048540"
                  className="text-amber-400 hover:text-amber-300 font-[family-name:var(--font-inter)] text-lg font-medium transition-colors"
                >
                  +30 2299 048540
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/[0.06] border border-white/10 rounded-sm p-6 flex gap-5">
              <div className="mt-1 w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-[family-name:var(--font-inter)] font-semibold text-sm uppercase tracking-wider mb-3">
                  Ώρες Λειτουργίας
                </h3>
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="text-white/70 font-[family-name:var(--font-inter)] text-sm">{day}</span>
                    <span className="text-amber-400 font-[family-name:var(--font-inter)] text-sm font-medium">{time}</span>
                  </div>
                ))}
                <p className="text-white/40 text-xs font-[family-name:var(--font-inter)] mt-3 italic">
                  Ανοιχτά καθημερινά, συμπεριλαμβανομένων αργιών
                </p>
              </div>
            </div>

            {/* CTA button */}
            <a
              href="https://maps.app.goo.gl/EcKjTNTWZMVQNAQA9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-amber-500 hover:bg-amber-600 text-[#1e1e1e] font-[family-name:var(--font-inter)] font-semibold text-sm uppercase tracking-widest transition-colors rounded-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Οδηγίες στο Maps
            </a>
          </div>

          {/* Map */}
          <div className="rounded-sm overflow-hidden h-[440px] border border-white/10 shadow-xl">
            <iframe
              title="Trigono Taverna Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100824.54329047778!2d23.769665955187968!3d37.8423407431319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a192429b71efcb%3A0x231116cb490dc75a!2sThe%20Triangle!5e0!3m2!1sen!2sgr!4v1775597230378!5m2!1sen!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
