import Link from "next/link";
import {
  Clock,
  TrendingUp,
  Shield,
  Smartphone,
  Users,
  Star,
  CalendarCheck,
  BadgeCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const vantagens = [
  {
    icon: Clock,
    title: "Horários flexíveis",
    desc: "Escolha quando e quanto trabalhar, sem horário fixo.",
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: TrendingUp,
    title: "Ganhos acima da média",
    desc: "Até 4x mais do que no modelo CLT tradicional.",
    bg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: Shield,
    title: "Segurança garantida",
    desc: "Suporte jurídico e seguro de responsabilidade incluídos.",
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Smartphone,
    title: "Plataforma 100% digital",
    desc: "Agenda, pagamentos e pacientes pelo app ISA.",
    bg: "bg-isa-pink-50",
    iconColor: "text-isa-pink-500",
  },
  {
    icon: Users,
    title: "Comunidade ativa",
    desc: "+10 mil profissionais cadastrados em todo o Brasil.",
    bg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Star,
    title: "Reconhecimento",
    desc: "Avaliações e recompensas por desempenho excepcional.",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento inteligente",
    desc: "Receba pacientes próximos a você sem burocracia.",
    bg: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    icon: BadgeCheck,
    title: "Perfil verificado",
    desc: "Credenciais validadas que geram mais confiança e agendamentos.",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    icon: HeartHandshake,
    title: "Suporte dedicado",
    desc: "Time ISA disponível para apoiar você em cada atendimento.",
    bg: "bg-rose-50",
    iconColor: "text-rose-500",
  },
];

export function VantagensSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800">
              Vantagens de trabalhar com a ISA
            </h2>
            <p className="text-isa-gray-500 mt-2">
              Mais autonomia, mais ganhos e suporte completo para a sua carreira
            </p>
          </div>
          <Link
            href="/portal-isa#vantagens"
            className="flex items-center gap-2 text-isa-pink-500 hover:text-isa-pink-600 font-semibold text-sm transition-colors whitespace-nowrap"
          >
            Quero me cadastrar
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vantagens.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-isa-gray-100 hover:border-isa-pink-200 hover:shadow-card-hover transition-all p-5 flex gap-4 items-start"
              >
                <div className={`w-14 h-14 rounded-2xl ${v.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-7 h-7 ${v.iconColor}`} />
                </div>
                <div>
                  <p className="font-bold text-isa-gray-800 leading-snug">{v.title}</p>
                  <p className="text-sm text-isa-gray-500 mt-1">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/portal-isa"
            className="inline-flex items-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-semibold px-8 py-3 rounded-pill transition-colors"
          >
            Cadastre-se como profissional
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
