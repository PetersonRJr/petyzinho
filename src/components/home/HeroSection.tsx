"use client";

import Link from "next/link";
import { BadgeCheck, ArrowRight, Clock, DollarSign, MapPin, Heart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-16 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-isa-pink-50 via-white to-amber-50" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-isa-pink-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] bg-amber-100 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-isa-pink-100 text-isa-pink-700 text-xs font-bold px-4 py-2 rounded-full mb-6">
              <Heart className="w-3.5 h-3.5 fill-current" />
              Para profissionais de saúde
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-isa-gray-800 leading-[1.08] mb-6">
              Trabalhe livre.<br />
              <span style={{
                background: "linear-gradient(135deg, #E91E8C 0%, #9C0F61 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Ganhe muito mais.
              </span>
            </h1>

            <p className="text-lg text-isa-gray-600 mb-6 leading-relaxed max-w-lg">
              A ISA conecta profissionais de saúde autônomos a chamados domiciliares
              na sua região — sem vínculo empregatício, sem mínimo de horas e com
              pagamento garantido.
            </p>

            <div className="inline-flex items-center gap-2 bg-isa-green-50 border border-green-100 rounded-xl px-4 py-2.5 mb-8">
              <BadgeCheck className="w-4 h-4 text-isa-green-500 flex-shrink-0" />
              <span className="text-sm text-isa-green-600 font-semibold">
                100% autônomo · Sem vínculo · Sem mínimo de atendimentos
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/trabalhe-conosco"
                className="inline-flex items-center justify-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-bold px-7 py-3.5 rounded-pill shadow-lg shadow-isa-pink-200 hover:shadow-isa-pink-300 hover:-translate-y-0.5 transition-all text-sm"
              >
                Quero me cadastrar
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-isa-gray-200 text-isa-gray-700 font-semibold px-7 py-3.5 rounded-pill hover:border-isa-pink-300 hover:text-isa-pink-600 transition-colors text-sm"
              >
                Ver como funciona
              </Link>
            </div>

            <div className="flex flex-wrap gap-5 pt-5 border-t border-isa-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-isa-pink-100 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-isa-pink-600" />
                </div>
                <div>
                  <p className="font-black text-isa-gray-800 text-sm leading-none">Até 4x mais</p>
                  <p className="text-xs text-isa-gray-500 mt-0.5">do que no modelo CLT</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-isa-green-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-isa-green-500" />
                </div>
                <div>
                  <p className="font-black text-isa-gray-800 text-sm leading-none">Você decide</p>
                  <p className="text-xs text-isa-gray-500 mt-0.5">quando e onde trabalhar</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-isa-teal-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-isa-teal-600" />
                </div>
                <div>
                  <p className="font-black text-isa-gray-800 text-sm leading-none">+1.200 parceiros</p>
                  <p className="text-xs text-isa-gray-500 mt-0.5">em 5 estados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80"
                alt="Profissional de saúde atendendo paciente em casa"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs font-medium text-white/70 mb-1">Fernanda C. — Enfermeira</p>
                <p className="text-sm font-bold">"Triplicou minha renda em 4 meses"</p>
              </div>
            </div>

            {/* Floating card — earnings */}
            <div className="absolute -bottom-5 right-4 bg-white rounded-2xl shadow-xl p-4 min-w-[175px] border border-isa-gray-100">
              <p className="text-xs text-isa-gray-400 mb-1">Ganho médio mensal</p>
              <p className="text-2xl font-black text-isa-gray-800 leading-none">R$ 6.800</p>
              <p className="text-xs text-isa-green-500 font-bold mt-1">↑ 4x mais que CLT</p>
            </div>

            {/* Floating badge — available */}
            <div className="absolute top-5 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2 border border-isa-gray-100">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-bold text-isa-gray-700">Vagas abertas agora</span>
            </div>

            {/* Floating vagas count */}
            <div className="absolute top-28 -right-4 bg-isa-pink-500 rounded-2xl shadow-lg px-4 py-3 text-white text-center">
              <p className="text-2xl font-black leading-none">91</p>
              <p className="text-[10px] font-semibold opacity-80 mt-0.5">vagas hoje</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
