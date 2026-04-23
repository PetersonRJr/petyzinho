import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const opportunities = [
  { id: 1, role: "Enfermeiro(a) Domiciliar",    specialty: "Enfermagem",    location: "São Paulo, SP",      type: "Plantão" },
  { id: 2, role: "Fisioterapeuta Domiciliar",    specialty: "Fisioterapia",  location: "Brasília, DF",       type: "Visita"  },
  { id: 3, role: "Técnico(a) de Enfermagem",     specialty: "Enfermagem",    location: "Belo Horizonte, MG", type: "Plantão" },
  { id: 4, role: "Médico(a) Clínico Geral",      specialty: "Medicina",      location: "Salvador, BA",       type: "Visita"  },
  { id: 5, role: "Fonoaudiólogo(a)",             specialty: "Fonoaudiologia",location: "São Paulo, SP",      type: "Visita"  },
  { id: 6, role: "Enfermeiro(a) UTI Domiciliar", specialty: "Enfermagem",    location: "São Paulo, SP",      type: "Plantão" },
];

export function OpportunitiesSection() {
  return (
    <section className="py-20 bg-isa-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block bg-isa-pink-100 text-isa-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
              Portal do Profissional
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800">
              Oportunidades em aberto
            </h2>
            <p className="text-isa-gray-500 mt-2">
              Trabalhe com autonomia e receba acima da média do mercado
            </p>
          </div>
          <Link
            href="/portal-isa"
            className="flex items-center gap-2 text-isa-pink-500 hover:text-isa-pink-600 font-semibold text-sm transition-colors whitespace-nowrap"
          >
            Ver todas as vagas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {opportunities.map((o) => (
            <div
              key={o.id}
              className="bg-white rounded-2xl border border-isa-gray-100 hover:border-isa-pink-200 hover:shadow-card-hover transition-all p-5 flex flex-col gap-4"
            >
              {/* Top: role + type badge */}
              <div className="flex items-start justify-between gap-3">
                <p className="font-bold text-isa-gray-800 leading-snug">{o.role}</p>
                <span
                  className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    o.type === "Plantão"
                      ? "bg-isa-pink-50 text-isa-pink-600"
                      : "bg-isa-teal-50 text-isa-teal-700"
                  }`}
                >
                  {o.type}
                </span>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-isa-gray-500">
                <span className="font-medium text-isa-gray-600">{o.specialty}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-isa-gray-400" />
                  {o.location}
                </span>
              </div>

              {/* CTA */}
              <Link
                href="/portal-isa#oportunidades"
                className="mt-auto inline-block text-center bg-isa-pink-500 hover:bg-isa-pink-600 text-white text-sm font-semibold px-4 py-2.5 rounded-pill transition-colors"
              >
                Quero essa vaga
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/portal-isa"
            className="inline-flex items-center gap-2 border-2 border-isa-pink-500 text-isa-pink-500 hover:bg-isa-pink-500 hover:text-white font-semibold px-8 py-3 rounded-pill transition-colors"
          >
            Ver todas as oportunidades
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
