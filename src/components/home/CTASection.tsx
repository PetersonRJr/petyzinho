import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, #E91E8C 0%, #C4167A 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
          <Stethoscope className="w-3.5 h-3.5" />
          Junte-se a mais de 1.200 profissionais
        </div>
        <h2 className="text-4xl font-black mb-4">
          Pronto para trabalhar<br />com mais liberdade?
        </h2>
        <p className="text-pink-100 text-lg mb-10 max-w-xl mx-auto">
          Cadastre-se gratuitamente, envie seus documentos e comece a aceitar
          chamados na sua região em até 48 horas.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/trabalhe-conosco"
            className="inline-flex items-center gap-2 bg-white text-isa-pink-600 font-semibold px-8 py-3.5 rounded-pill hover:bg-pink-50 transition-colors"
          >
            Cadastrar agora — é grátis
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/portal-isa"
            className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-pill hover:bg-white/10 transition-colors"
          >
            Ver vagas abertas
          </Link>
        </div>
      </div>
    </section>
  );
}
