import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Crie seu perfil gratuitamente",
    desc: "Baixe o app, cadastre seus dados e envie seus documentos. 100% digital, sem papelada.",
    photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    dark: false,
  },
  {
    number: "02",
    title: "Receba chamados na sua região",
    desc: "Um chamado é uma solicitação de atendimento domiciliar: curativo, medicação, fisioterapia, acompanhamento pós-cirurgia e mais. O app notifica você com valor, distância e horário — aceite ou recuse, você decide sempre.",
    photo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    dark: true,
  },
  {
    number: "03",
    title: "Atenda e receba em até 7 dias",
    desc: "Realize o atendimento, confirme no app com a assinatura digital do paciente e o pagamento cai direto na sua conta em até 7 dias. Sem intermediários, sem taxa surpresa.",
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80",
    dark: false,
  },
];

export function ComoFuncionaSection() {
  return (
    <div id="como-funciona">
      {steps.map((step, i) => (
        <div
          key={step.number}
          className={`grid lg:grid-cols-2 ${step.dark ? "bg-isa-dark" : "bg-white"}`}
        >
          {/* Photo */}
          <div className={`relative h-72 sm:h-96 lg:h-auto min-h-[400px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
            <img
              src={step.photo}
              alt={step.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${step.dark ? "bg-isa-pink-900/30" : "bg-black/10"}`} />
          </div>

          {/* Text */}
          <div className={`flex items-center px-8 py-16 sm:px-12 lg:px-20 lg:py-24 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
            <div>
              <span
                className="block font-black leading-none mb-6 select-none"
                style={{
                  fontSize: "clamp(80px, 15vw, 140px)",
                  color: step.dark ? "rgba(233,30,140,0.18)" : "rgba(233,30,140,0.10)",
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>
              <h3 className={`text-3xl sm:text-4xl font-black leading-tight mb-5 ${step.dark ? "text-white" : "text-isa-gray-800"}`}>
                {step.title}
              </h3>
              <p className={`text-lg leading-relaxed max-w-md ${step.dark ? "text-white/60" : "text-isa-gray-500"}`}>
                {step.desc}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom CTA */}
      <div className="bg-isa-gray-50 py-14 text-center border-t border-isa-gray-100">
        <Link
          href="/trabalhe-conosco"
          className="inline-flex items-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-black px-10 py-4 rounded-2xl text-base shadow-lg shadow-isa-pink-200 hover:-translate-y-0.5 transition-all"
        >
          Quero começar agora
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
