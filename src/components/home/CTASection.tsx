import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">

      {/* Photo background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-isa-pink-900/95 via-isa-pink-800/85 to-black/70" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full mb-8 border border-white/20">
          <Stethoscope className="w-3.5 h-3.5" />
          +1.200 profissionais já são parceiros ISA
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] mb-8 tracking-tight">
          Pronto para<br />
          <span style={{
            background: "linear-gradient(135deg, #FFB3DE, #FF80C8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            ganhar mais?
          </span>
        </h2>

        <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">
          Cadastre-se gratuitamente. Envie seus documentos. Comece a aceitar chamados em até 48 horas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/trabalhe-conosco"
            className="inline-flex items-center justify-center gap-2 bg-white text-isa-pink-700 font-black px-10 py-4 rounded-2xl text-base hover:bg-isa-pink-50 transition-all hover:-translate-y-0.5 shadow-2xl"
          >
            Cadastrar agora — é grátis
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/portal-isa"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-2xl text-base transition-all border border-white/25"
          >
            Ver vagas abertas
          </Link>
        </div>
      </div>

    </section>
  );
}
