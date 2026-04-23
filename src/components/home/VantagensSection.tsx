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

const grid = [
  {
    icon: Shield,
    title: "Segurança garantida",
    desc: "Suporte jurídico e seguro de responsabilidade profissional incluídos sem custo.",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Smartphone,
    title: "Plataforma 100% digital",
    desc: "Agenda, pagamentos e chamados pelo app ISA — tudo no celular.",
    bg: "bg-isa-pink-50",
    iconColor: "text-isa-pink-500",
  },
  {
    icon: Users,
    title: "Comunidade ativa",
    desc: "+1.200 profissionais parceiros em todo o Brasil.",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
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
    desc: "Receba chamados próximos a você sem burocracia.",
    bg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: BadgeCheck,
    title: "Perfil verificado",
    desc: "Credenciais validadas que geram mais confiança e chamados.",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: HeartHandshake,
    title: "Suporte dedicado",
    desc: "Time ISA disponível para te apoiar em cada atendimento.",
    bg: "bg-rose-50",
    iconColor: "text-rose-500",
  },
];

export function VantagensSection() {
  return (
    <section className="py-20 bg-isa-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block bg-isa-pink-100 text-isa-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
              Por que a ISA?
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800">
              Vantagens de ser um profissional ISA
            </h2>
            <p className="text-isa-gray-500 mt-2">
              Faça parte de uma rede exclusiva — autonomia, ganhos maiores e suporte completo
            </p>
          </div>
          <Link
            href="/trabalhe-conosco"
            className="flex items-center gap-2 text-isa-pink-500 hover:text-isa-pink-600 font-semibold text-sm transition-colors whitespace-nowrap"
          >
            Quero me cadastrar
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured top row */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">

          {/* Feature 1 — Horários (photo bg) */}
          <div className="relative rounded-3xl overflow-hidden min-h-[240px] flex items-end group">
            <img
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
              alt="Profissional com agenda flexível"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
            <div className="relative p-6 text-white">
              <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black mb-1">Horários 100% flexíveis</h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Você escolhe quando e quanto trabalhar — sem escala, sem chefe, sem mínimo.
              </p>
            </div>
          </div>

          {/* Feature 2 — Ganhos (gradient card) */}
          <div
            className="rounded-3xl p-6 flex flex-col justify-between min-h-[240px] text-white"
            style={{ background: "linear-gradient(135deg, #0F2A3F 0%, #E91E8C 100%)" }}
          >
            <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-isa-pink-200" />
            </div>
            <div>
              <p className="text-5xl font-black leading-none mb-1">R$ 6.800</p>
              <p className="text-isa-pink-200 text-sm mb-4">ganho médio mensal dos parceiros ISA</p>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                <span className="text-base font-black text-white">Até 4x mais</span>
                <span className="text-sm text-white/60">do que o mercado CLT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Standard grid row 1 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {grid.slice(0, 4).map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-isa-gray-100 hover:border-isa-pink-200 hover:shadow-card-hover transition-all p-5"
              >
                <div className={`w-12 h-12 rounded-2xl ${v.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${v.iconColor}`} />
                </div>
                <p className="font-bold text-isa-gray-800 leading-snug mb-1">{v.title}</p>
                <p className="text-sm text-isa-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Standard grid row 2 */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {grid.slice(4).map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-isa-gray-100 hover:border-isa-pink-200 hover:shadow-card-hover transition-all p-5"
              >
                <div className={`w-12 h-12 rounded-2xl ${v.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${v.iconColor}`} />
                </div>
                <p className="font-bold text-isa-gray-800 leading-snug mb-1">{v.title}</p>
                <p className="text-sm text-isa-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/portal-isa"
            className="inline-flex items-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-semibold px-8 py-3.5 rounded-pill shadow-lg shadow-isa-pink-200 hover:-translate-y-0.5 transition-all"
          >
            Cadastre-se como profissional
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
