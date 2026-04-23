import Link from "next/link";
import { Clock, Shield, Banknote, ArrowRight, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    number: "100%",
    highlight: "flexível",
    desc: "Você escolhe os dias, horários e regiões. Nenhuma escala, nenhum chefe, nenhum mínimo de horas.",
  },
  {
    icon: Banknote,
    number: "4x",
    highlight: "mais ganhos",
    desc: "Profissionais ISA faturam muito acima do mercado tradicional — por chamado, com pagamento garantido.",
  },
  {
    icon: Shield,
    number: "zero",
    highlight: "burocracia",
    desc: "Contrato digital, nota fiscal automática, seguro de responsabilidade civil do COFEN e suporte jurídico — tudo incluído, você não paga nada a mais.",
  },
  {
    icon: Smartphone,
    number: "1",
    highlight: "app pra tudo",
    desc: "Aceite chamados, veja sua agenda, assine atendimentos digitalmente e acompanhe cada pagamento — tudo no celular, em tempo real.",
  },
];

export function VantagensSection() {
  return (
    <section className="bg-isa-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="inline-block bg-isa-pink-500/20 text-isa-pink-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Por que a ISA?
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            Tudo o que você<br />
            precisa para{" "}
            <span style={{
              background: "linear-gradient(135deg, #F0439E, #FF80C8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              trabalhar livre.
            </span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.highlight}
                className="bg-isa-dark hover:bg-white/5 transition-colors p-8 lg:p-10 flex flex-col gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-isa-pink-500/15 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-isa-pink-400" />
                </div>
                <div>
                  <p className="text-5xl font-black text-white leading-none mb-1">{b.number}</p>
                  <p className="text-xl font-black text-isa-pink-400 mb-4">{b.highlight}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
          <Link
            href="/trabalhe-conosco"
            className="inline-flex items-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-400 text-white font-black px-8 py-4 rounded-2xl transition-all hover:-translate-y-0.5 shadow-xl shadow-isa-pink-900/40"
          >
            Cadastrar agora — é grátis
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-white/40 text-sm">Validação do perfil em até 48h</p>
        </div>

      </div>
    </section>
  );
}
