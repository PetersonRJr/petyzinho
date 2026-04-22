const cities = [
  { name: "São Paulo",    state: "SP", vagas: 38, top: "71%", left: "44%", size: "lg" },
  { name: "Brasília",     state: "DF", vagas: 14, top: "48%", left: "53%", size: "md" },
  { name: "Goiânia",      state: "GO", vagas: 11, top: "53%", left: "48%", size: "md" },
  { name: "BH",           state: "MG", vagas: 16, top: "63%", left: "55%", size: "md" },
  { name: "Salvador",     state: "BA", vagas: 12, top: "54%", left: "68%", size: "md" },
] as const;

const sizeMap = {
  lg: { outer: "w-16 h-16", inner: "w-10 h-10", text: "text-xl" },
  md: { outer: "w-12 h-12", inner: "w-8  h-8",  text: "text-base" },
};

const total = cities.reduce((acc, c) => acc + c.vagas, 0);

export function VagasMapSection() {
  return (
    <section className="py-20 bg-isa-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-isa-teal-50 text-isa-teal-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
            Oportunidades em tempo real
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">
            Vagas abertas agora no Brasil
          </h2>
          <p className="text-isa-gray-500 max-w-md mx-auto">
            Veja onde estão as oportunidades e encontre chamados na sua região
          </p>

          {/* Big counter */}
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl border border-isa-gray-200 px-8 py-4 mt-6 shadow-sm">
            <span className="text-5xl font-black text-isa-pink-500">{total}</span>
            <div className="text-left">
              <p className="font-bold text-isa-gray-800 leading-none">vagas abertas</p>
              <p className="text-xs text-isa-gray-400 mt-0.5">em 5 estados brasileiros</p>
            </div>
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse ml-2" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Map */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mapa-brasil.png"
                alt="Mapa do Brasil"
                className="w-full object-contain"
                style={{ filter: "url(#swap-pink-teal)" }}
              />

              {/* Hidden SVG filter (reuse from WhereWeAreSection) */}
              <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="map-vagas-filter" colorInterpolationFilters="sRGB">
                    <feColorMatrix type="matrix" values="
                      -0.2178  1.155   0  0  0.0628
                       0.8252  0.2110  0  0 -0.0362
                       0.4111  0.1515  0  0  0.4374
                       0       0       0  1  0
                    " result="swapped" />
                    <feColorMatrix in="swapped" type="saturate" values="2" />
                  </filter>
                </defs>
              </svg>

              {/* Heat spots */}
              {cities.map((city) => {
                const s = sizeMap[city.size];
                return (
                  <div
                    key={city.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
                    style={{ top: city.top, left: city.left }}
                  >
                    {/* Pulse ring */}
                    <div className={`relative ${s.outer} flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-isa-pink-400/30 rounded-full animate-ping" />
                      <div className={`${s.inner} bg-isa-pink-500 rounded-full flex items-center justify-center shadow-lg z-10`}>
                        <span className={`${s.text} font-black text-white leading-none`}>{city.vagas}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-isa-gray-700 bg-white/90 px-1.5 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                      {city.name} · {city.state}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* City list */}
          <div className="space-y-3">
            {cities.map((city) => (
              <div
                key={city.name}
                className="flex items-center justify-between bg-white rounded-2xl border border-isa-gray-100 hover:border-isa-pink-200 hover:shadow-card-hover transition-all p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-isa-pink-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-black text-isa-pink-500">{city.state}</span>
                  </div>
                  <div>
                    <p className="font-bold text-isa-gray-800">{city.name === "BH" ? "Belo Horizonte" : city.name}</p>
                    <p className="text-xs text-isa-gray-400">{city.state === "SP" ? "Grande SP e Interior" : city.state === "DF" ? "Brasília e Região" : city.state === "GO" ? "Goiânia e Região" : city.state === "MG" ? "BH e Região" : "Salvador e Região"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-isa-pink-500">{city.vagas}</span>
                  <div>
                    <p className="text-xs font-semibold text-isa-gray-600 leading-none">vagas</p>
                    <p className="text-xs text-isa-gray-400 leading-none">abertas</p>
                  </div>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-1" />
                </div>
              </div>
            ))}

            <p className="text-xs text-isa-gray-400 text-center pt-2 italic">
              Em constante expansão — novas cidades em breve
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
