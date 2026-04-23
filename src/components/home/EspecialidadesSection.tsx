import Link from "next/link";
import { ArrowRight } from "lucide-react";

const specialties = [
  {
    name: "Enfermeiro(a)",
    icon: "🩺",
    min: "R$ 4.000",
    max: "R$ 9.000",
    desc: "Curativos, sondas, medicação EV, pós-cirúrgico",
  },
  {
    name: "Téc. Enfermagem",
    icon: "💉",
    min: "R$ 2.500",
    max: "R$ 6.000",
    desc: "Administração de medicamentos, curativos, monitoramento",
  },
  {
    name: "Fisioterapeuta",
    icon: "🦾",
    min: "R$ 4.500",
    max: "R$ 10.000",
    desc: "Reabilitação, pós-AVC, ortopedia, neurológico",
  },
  {
    name: "Médico(a)",
    icon: "👨‍⚕️",
    min: "R$ 8.000",
    max: "R$ 18.000",
    desc: "Visitas domiciliares, declaração de óbito, acompanhamento",
  },
  {
    name: "Fonoaudiólogo(a)",
    icon: "🗣️",
    min: "R$ 3.500",
    max: "R$ 7.500",
    desc: "Disfagia, distúrbios de linguagem, voz",
  },
  {
    name: "Nutricionista",
    icon: "🥗",
    min: "R$ 3.000",
    max: "R$ 6.500",
    desc: "Terapia nutricional, nutrição enteral, idosos",
  },
  {
    name: "Terapeuta Ocupacional",
    icon: "🤝",
    min: "R$ 3.500",
    max: "R$ 7.000",
    desc: "AVDs, adaptações domiciliares, reintegração",
  },
];

export function EspecialidadesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block bg-isa-pink-50 text-isa-pink-600 text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-isa-pink-100">
            Sua especialidade tem espaço aqui
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 leading-tight">
            Para qual profissional a ISA funciona?
          </h2>
          <p className="text-isa-gray-500 mt-3 max-w-lg mx-auto">
            Veja a faixa de ganhos mensais estimada para cada especialidade com dedicação parcial.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {specialties.map((s) => (
            <div
              key={s.name}
              className="group bg-isa-gray-50 hover:bg-white rounded-2xl p-5 border border-isa-gray-100 hover:border-isa-pink-200 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <p className="font-black text-isa-gray-800 text-base mb-1">{s.name}</p>
              <p className="text-xs text-isa-gray-400 mb-3 leading-relaxed">{s.desc}</p>
              <div className="flex items-baseline gap-1 mt-auto">
                <span className="text-isa-pink-600 font-black text-lg">{s.min}</span>
                <span className="text-isa-gray-400 text-xs font-medium">–</span>
                <span className="text-isa-pink-500 font-bold text-base">{s.max}</span>
                <span className="text-isa-gray-400 text-xs">/mês</span>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-isa-pink-500 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <p className="font-black text-white text-base mb-2">Não encontrou sua especialidade?</p>
              <p className="text-white/75 text-xs leading-relaxed">
                Trabalhamos com mais de 12 especialidades de saúde em todo o Brasil.
              </p>
            </div>
            <Link
              href="/trabalhe-conosco"
              className="mt-4 inline-flex items-center gap-1.5 bg-white text-isa-pink-600 font-black text-sm px-4 py-2 rounded-xl hover:bg-isa-pink-50 transition-colors"
            >
              Consultar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-isa-gray-400 mt-6">
          * Estimativas baseadas em profissionais ativos na rede ISA com 3–5 chamados/semana.
        </p>
      </div>
    </section>
  );
}
