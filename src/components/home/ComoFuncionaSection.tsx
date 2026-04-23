import { UserPlus, BellRing, BadgeDollarSign } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crie seu perfil",
    desc: "Cadastre-se gratuitamente, envie seus documentos e tenha seu perfil verificado em até 48h.",
    gradient: "from-isa-pink-400 to-isa-pink-600",
    glow: "shadow-isa-pink-200",
    photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    number: "02",
    icon: BellRing,
    title: "Receba oportunidades",
    desc: "O app notifica em tempo real sobre chamados próximos a você, de acordo com sua especialidade.",
    gradient: "from-isa-teal-500 to-isa-teal-700",
    glow: "shadow-teal-200",
    photo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80",
  },
  {
    number: "03",
    icon: BadgeDollarSign,
    title: "Atenda e ganhe",
    desc: "Realize o atendimento, registre no app e receba o pagamento em até 7 dias direto na sua conta.",
    gradient: "from-isa-green-400 to-isa-green-600",
    glow: "shadow-green-200",
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
  },
];

export function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-isa-pink-100 text-isa-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
            Simples assim
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">
            Do cadastro ao primeiro pagamento
          </h2>
          <p className="text-isa-gray-500 max-w-md mx-auto">
            Em 3 passos você começa a trabalhar com autonomia e receber acima da média
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="group relative bg-white rounded-3xl border border-isa-gray-100 hover:border-isa-pink-200 hover:shadow-card-hover transition-all overflow-hidden">

                {/* Photo strip */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={step.photo}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-black/20 to-transparent" />
                </div>

                {/* Step number badge */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center">
                  <span className="text-xs font-black text-isa-gray-700">{step.number}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg ${step.glow} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-isa-gray-800 mb-2">{step.title}</h3>
                  <p className="text-isa-gray-500 leading-relaxed text-sm">{step.desc}</p>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/portal-isa"
            className="inline-flex items-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-bold px-8 py-3.5 rounded-pill shadow-lg shadow-isa-pink-200 hover:-translate-y-0.5 transition-all"
          >
            Quero começar agora
          </Link>
        </div>

      </div>
    </section>
  );
}
