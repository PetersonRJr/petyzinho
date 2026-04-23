const partners = [
  { name: "Unimed",               bg: "#00995D", text: "#fff" },
  { name: "Bradesco Saúde",       bg: "#CC092F", text: "#fff" },
  { name: "SulAmérica",           bg: "#004A97", text: "#fff" },
  { name: "Amil",                 bg: "#E30613", text: "#fff" },
  { name: "Hapvida",              bg: "#009FDA", text: "#fff" },
  { name: "NotreDame Intermédica",bg: "#003087", text: "#fff" },
  { name: "Porto Seguro Saúde",   bg: "#003DA5", text: "#fff" },
  { name: "Prevent Senior",       bg: "#6B2D8B", text: "#fff" },
];

export function PartnersSection() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-10 bg-isa-gray-50 border-y border-isa-gray-100 overflow-hidden">
      <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-isa-gray-400 mb-6">
        Convênios e parceiros aceitos
      </p>
      <div className="flex">
        <div className="flex gap-3 animate-marquee flex-shrink-0">
          {doubled.map((p, i) => (
            <div
              key={i}
              className="h-11 px-5 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
              style={{ backgroundColor: p.bg, minWidth: "130px" }}
            >
              <span className="text-xs font-black whitespace-nowrap" style={{ color: p.text }}>
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
