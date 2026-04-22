const partners = [
  { name: "Unimed",                  bg: "#00995D", text: "#fff"     },
  { name: "Bradesco Saúde",          bg: "#CC092F", text: "#fff"     },
  { name: "SulAmérica",              bg: "#004A97", text: "#fff"     },
  { name: "Amil",                    bg: "#E30613", text: "#fff"     },
  { name: "Hapvida",                 bg: "#009FDA", text: "#fff"     },
  { name: "NotreDame\nIntermédica",  bg: "#003087", text: "#fff"     },
  { name: "Porto Seguro\nSaúde",     bg: "#003DA5", text: "#fff"     },
  { name: "Prevent Senior",          bg: "#6B2D8B", text: "#fff"     },
];

export function PartnersSection() {
  return (
    <section className="py-12 bg-white border-y border-isa-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-isa-gray-400 mb-8">
          Convênios e parceiros aceitos
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="h-12 px-5 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-default"
              style={{ backgroundColor: p.bg, minWidth: "120px" }}
            >
              <span
                className="text-xs font-black text-center leading-tight whitespace-pre-line"
                style={{ color: p.text }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
