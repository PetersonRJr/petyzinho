"use client";

import Link from "next/link";
import { BadgeCheck, ArrowRight, Clock, DollarSign, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">

          {/* Left */}
          <div>
            <span className="inline-block bg-isa-pink-50 text-isa-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Para profissionais de saúde
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-isa-gray-800 leading-tight mb-6">
              Trabalhe livre.<br />
              <span style={{ color: "#E91E8C" }}>Ganhe muito mais.</span>
            </h1>
            <p className="text-lg text-isa-gray-600 mb-8 leading-relaxed max-w-lg">
              A ISA conecta profissionais de saúde autônomos a chamados domiciliares
              na sua região — sem vínculo empregatício, sem mínimo de horas e com
              pagamento garantido.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/trabalhe-conosco"
                className="inline-flex items-center justify-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-semibold px-7 py-3.5 rounded-pill transition-colors text-sm"
              >
                Quero me cadastrar
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 border-2 border-isa-gray-200 text-isa-gray-700 font-semibold px-7 py-3.5 rounded-pill hover:border-isa-pink-300 hover:text-isa-pink-600 transition-colors text-sm"
              >
                Ver como funciona
              </Link>
            </div>

            <div className="flex items-center gap-2 mb-8">
              <BadgeCheck className="w-4 h-4 text-isa-green-500 flex-shrink-0" />
              <span className="text-sm text-isa-gray-500 font-medium">
                100% autônomo · Sem vínculo trabalhista · Sem mínimo de atendimentos
              </span>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 border-t border-isa-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-isa-pink-50 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-4 h-4 text-isa-pink-500" />
                </div>
                <div>
                  <p className="font-bold text-isa-gray-800 text-sm">Até 4x mais</p>
                  <p className="text-xs text-isa-gray-500">do que no modelo CLT</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-isa-green-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-isa-green-500" />
                </div>
                <div>
                  <p className="font-bold text-isa-gray-800 text-sm">Você no controle</p>
                  <p className="text-xs text-isa-gray-500">Escolha dias e horários</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-isa-teal-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-isa-teal-600" />
                </div>
                <div>
                  <p className="font-bold text-isa-gray-800 text-sm">+1.200 parceiros</p>
                  <p className="text-xs text-isa-gray-500">em 5 estados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — hero photo */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80"
                alt="Profissional de saúde atendendo paciente em casa"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card — earnings */}
            <div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-card-hover p-4 max-w-[200px]">
              <p className="text-xs text-isa-gray-500 mb-1">Ganho médio mensal</p>
              <p className="text-2xl font-black text-isa-gray-800">R$ 6.800</p>
              <p className="text-xs text-isa-green-500 font-semibold mt-0.5">↑ 4x mais que CLT</p>
            </div>

            {/* Floating badge top-left */}
            <div className="absolute top-4 left-4 bg-white rounded-xl shadow-card px-3 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-isa-gray-700">Vagas abertas agora</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
