import { UserPlus, BellRing, BadgeDollarSign } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crie seu perfil",
    desc: "Cadastre-se gratuitamente, envie seus documentos e tenha seu perfil verificado em até 24h.",
    color: "bg-isa-pink-50",
    iconColor: "text-isa-pink-500",
    ring: "ring-isa-pink-200",
  },
  {
    number: "02",
    icon: BellRing,
    title: "Receba oportunidades",
    desc: "O app notifica em tempo real sobre vagas próximas a você, de acordo com sua especialidade e disponibilidade.",
    color: "bg-isa-teal-50",
    iconColor: "text-isa-teal-600",
    ring: "ring-isa-teal-200",
  },
  {
    number: "03",
    icon: BadgeDollarSign,
    title: "Atenda e ganhe",
    desc: "Realize o atendimento, registre tudo no app e receba o pagamento em até 24h direto na sua conta.",
    color: "bg-green-50",
    iconColor: "text-green-600",
    ring: "ring-green-200",
  },
];

export function ComoFuncionaSection() {
  return (
    <section className="py-20 bg-isa-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-isa-pink-100 text-isa-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
            Simples assim
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">
            Como funciona para profissionais
          </h2>
          <p className="text-isa-gray-500 max-w-md mx-auto">
            Em 3 passos você começa a trabalhar com autonomia e receber acima da média
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-0.5 bg-gradient-to-r from-isa-pink-200 via-isa-teal-200 to-green-200" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className={`relative w-32 h-32 rounded-full ${step.color} ring-4 ${step.ring} flex items-center justify-center mb-6 z-10`}>
                    <Icon className={`w-12 h-12 ${step.iconColor}`} />
                    {/* Number badge */}
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-isa-gray-100 flex items-center justify-center text-xs font-black text-isa-gray-800 shadow-sm">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-isa-gray-800 mb-3">{step.title}</h3>
                  <p className="text-isa-gray-500 leading-relaxed text-sm max-w-xs">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/portal-isa"
            className="inline-flex items-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-bold px-8 py-3.5 rounded-pill transition-colors"
          >
            Quero começar agora
          </Link>
        </div>

      </div>
    </section>
  );
}
