"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const professionalTypes = [
  { label: "Técnico em Enfermagem", baseHourly: 35 },
  { label: "Enfermeiro(a)", baseHourly: 65 },
  { label: "Fisioterapeuta", baseHourly: 70 },
  { label: "Fonoaudiólogo(a)", baseHourly: 75 },
  { label: "Nutricionista", baseHourly: 60 },
  { label: "Cuidador(a) de Idosos", baseHourly: 28 },
];

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export function EarningsCalculator() {
  const [typeIndex, setTypeIndex] = useState(1);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);

  const prof = professionalTypes[typeIndex];
  const weeksPerMonth = 4.3;
  const isaEarnings = Math.round(prof.baseHourly * hoursPerWeek * weeksPerMonth);
  const cltEarnings = Math.round(isaEarnings * 0.62);
  const agencyEarnings = Math.round(isaEarnings * 0.78);
  const percentAboveCLT = Math.round(((isaEarnings - cltEarnings) / cltEarnings) * 100);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-isa-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Calculadora de Ganhos"
          title="Quanto você pode ganhar com a ISA?"
          subtitle="Simule sua renda mensal com base no seu perfil e disponibilidade."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Inputs */}
          <div className="bg-white rounded-2xl shadow-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-isa-pink-50 rounded-xl flex items-center justify-center">
                <Calculator className="w-5 h-5 text-isa-pink-500" />
              </div>
              <h3 className="font-bold text-isa-gray-900">Configure sua simulação</h3>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-isa-gray-700 mb-3">
                Sua especialidade
              </label>
              <div className="grid grid-cols-2 gap-2">
                {professionalTypes.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setTypeIndex(i)}
                    className={`text-left p-3 rounded-xl border-2 text-sm transition-all ${
                      typeIndex === i
                        ? "border-isa-pink-500 bg-isa-pink-50 text-isa-pink-700 font-semibold"
                        : "border-isa-gray-200 text-isa-gray-600 hover:border-isa-pink-200"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center justify-between text-sm font-semibold text-isa-gray-700 mb-3">
                <span>Horas por semana</span>
                <span className="text-isa-pink-600 text-xl font-bold">{hoursPerWeek}h</span>
              </label>
              <input
                type="range"
                min={5}
                max={40}
                step={5}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-isa-gray-200 rounded-lg appearance-none cursor-pointer accent-isa-pink-500"
              />
              <div className="flex justify-between text-xs text-isa-gray-400 mt-1.5">
                <span>5h</span>
                <span>20h</span>
                <span>40h</span>
              </div>
            </div>

            <p className="text-xs text-isa-gray-400 leading-relaxed border-t border-isa-gray-100 pt-4">
              * Valores estimados com base nos dados históricos da plataforma. A renda real
              pode variar conforme disponibilidade de chamados na sua região.
            </p>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <p className="text-xs font-semibold text-isa-gray-500 uppercase tracking-wider">
              Renda mensal estimada
            </p>

            {/* ISA highlight */}
            <motion.div
              key={`${typeIndex}-${hoursPerWeek}`}
              initial={{ scale: 0.97, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="bg-gradient-to-r from-isa-pink-700 to-isa-pink-500 rounded-2xl p-6 text-white relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-semibold opacity-90">ISA Saúde</span>
                <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full font-bold">
                  +{percentAboveCLT}% vs CLT
                </span>
              </div>
              <div className="text-4xl font-black mt-1">{formatBRL(isaEarnings)}</div>
              <div className="text-sm opacity-75 mt-1">por mês · sem abrir CNPJ</div>
            </motion.div>

            {/* CLT */}
            <div className="bg-white rounded-2xl shadow-card p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-isa-gray-700">Regime CLT</p>
                <p className="text-xs text-isa-gray-400">Salário líquido estimado após impostos</p>
              </div>
              <div className="text-2xl font-bold text-isa-gray-500">{formatBRL(cltEarnings)}</div>
            </div>

            {/* Agency */}
            <div className="bg-white rounded-2xl shadow-card p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-isa-gray-700">Via Agência</p>
                <p className="text-xs text-isa-gray-400">Após a comissão média da agência</p>
              </div>
              <div className="text-2xl font-bold text-isa-gray-500">{formatBRL(agencyEarnings)}</div>
            </div>

            <a
              href="/trabalhe-conosco"
              className="flex items-center justify-center gap-2 w-full bg-isa-pink-600 text-white font-bold py-4 rounded-xl hover:bg-isa-pink-700 transition-colors"
            >
              Quero ganhar mais com a ISA
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
