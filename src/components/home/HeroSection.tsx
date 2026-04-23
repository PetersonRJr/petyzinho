"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

const stats = [
  { value: "+1.200", label: "Profissionais parceiros" },
  { value: "NPS 90+", label: "Satisfação garantida" },
  { value: "4x mais", label: "Ganhos vs. mercado" },
  { value: "<48h", label: "Para começar" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">

      {/* Background photo + overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=85"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-isa-pink-900/60" />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full mb-8 border border-white/20">
              <BadgeCheck className="w-3.5 h-3.5 text-isa-pink-300" />
              Para profissionais de saúde autônomos
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-[0.92] mb-8 tracking-tight">
              Trabalhe<br />
              livre.<br />
              <span style={{
                background: "linear-gradient(135deg, #F0439E 0%, #FF80C8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Ganhe<br />muito mais.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-6 max-w-xl leading-relaxed">
              Conectamos profissionais de saúde a <strong className="text-white/90">chamados domiciliares</strong> —
              atendimentos em domicílio na sua cidade, no seu horário, com pagamento garantido.
            </p>

            {/* Specialty chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["Enfermeiro(a)", "Téc. Enfermagem", "Fisioterapeuta", "Médico(a)", "Fonoaudiólogo(a)", "Nutricionista"].map((s) => (
                <span key={s} className="text-xs font-semibold bg-white/10 text-white/80 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/trabalhe-conosco"
                className="inline-flex items-center justify-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-400 text-white font-black px-8 py-4 rounded-2xl text-base transition-all hover:-translate-y-0.5 shadow-xl shadow-isa-pink-900/50"
              >
                Quero me cadastrar
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all border border-white/25"
              >
                Como funciona
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative bg-black/50 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">{s.value}</p>
                <p className="text-xs sm:text-sm text-white/50 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
