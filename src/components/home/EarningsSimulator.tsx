"use client";

import { useState } from "react";
import { TrendingUp, Calculator } from "lucide-react";
import Link from "next/link";

const specialties = [
  { label: "Enfermeiro(a)",             minPerShift: 900,  maxPerShift: 1400, shiftsPerWeek: true  },
  { label: "Técnico(a) de Enfermagem",  minPerShift: 450,  maxPerShift: 700,  shiftsPerWeek: true  },
  { label: "Fisioterapeuta",            minPerVisit: 160,  maxPerVisit: 280,  visitsPerDay: 4      },
  { label: "Médico(a) Clínico Geral",   minPerVisit: 350,  maxPerVisit: 600,  visitsPerDay: 4      },
  { label: "Fonoaudiólogo(a)",          minPerVisit: 130,  maxPerVisit: 220,  visitsPerDay: 5      },
  { label: "Nutricionista",             minPerVisit: 110,  maxPerVisit: 180,  visitsPerDay: 5      },
  { label: "Terapeuta Ocupacional",     minPerVisit: 130,  maxPerVisit: 210,  visitsPerDay: 4      },
] as const;

type Specialty = typeof specialties[number];

function calcMonthly(s: Specialty, days: number): { min: number; max: number } {
  const weeks = 4.3;
  if ("shiftsPerWeek" in s) {
    const shifts = days * weeks;
    return { min: Math.round(s.minPerShift * shifts), max: Math.round(s.maxPerShift * shifts) };
  }
  const visits = s.visitsPerDay * days * weeks;
  return { min: Math.round(s.minPerVisit * visits), max: Math.round(s.maxPerVisit * visits) };
}

function fmt(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export function EarningsSimulator() {
  const [specialtyIdx, setSpecialtyIdx] = useState(0);
  const [days, setDays] = useState(3);

  const specialty = specialties[specialtyIdx];
  const { min, max } = calcMonthly(specialty, days);

  const fillPct = Math.min(100, Math.round((max / 15000) * 100));

  return (
    <section className="py-20 bg-isa-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
            Simulador de Ganhos
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">
            Quanto você pode ganhar com a ISA?
          </h2>
          <p className="text-isa-gray-500 max-w-md mx-auto">
            Selecione sua especialidade e quantos dias por semana você quer trabalhar
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-card-hover p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Controls */}
            <div className="space-y-8">
              {/* Specialty */}
              <div>
                <label className="block text-sm font-bold text-isa-gray-700 mb-3">
                  Sua especialidade
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {specialties.map((s, i) => (
                    <button
                      key={s.label}
                      onClick={() => setSpecialtyIdx(i)}
                      className={`text-sm font-semibold px-3 py-2.5 rounded-xl border transition-all text-left ${
                        specialtyIdx === i
                          ? "bg-isa-pink-500 text-white border-isa-pink-500"
                          : "bg-white text-isa-gray-600 border-isa-gray-200 hover:border-isa-pink-300"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Days slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-isa-gray-700">
                    Dias disponíveis por semana
                  </label>
                  <span className="text-2xl font-black text-isa-pink-500">{days}x</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={6}
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full accent-isa-pink-500 h-2 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-isa-gray-400 mt-1">
                  <span>1 dia</span>
                  <span>6 dias</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="flex flex-col items-center text-center bg-isa-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <Calculator className="w-7 h-7 text-green-600" />
              </div>

              <p className="text-sm font-semibold text-isa-gray-500 mb-1">Estimativa mensal</p>
              <p className="text-4xl font-black text-isa-gray-800 leading-none mb-1">
                {fmt(min)}
              </p>
              <p className="text-lg font-semibold text-isa-gray-500 mb-6">
                até {fmt(max)}
              </p>

              {/* Bar */}
              <div className="w-full bg-isa-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-isa-pink-400 to-green-500 transition-all duration-500"
                  style={{ width: `${fillPct}%` }}
                />
              </div>
              <p className="text-xs text-isa-gray-400 mb-6">
                Baseado em valores médios praticados no mercado de home care
              </p>

              <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-6">
                <TrendingUp className="w-4 h-4" />
                <span>Pagamento em até 7 dias após o atendimento</span>
              </div>

              <Link
                href="/portal-isa"
                className="w-full bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-bold py-3.5 rounded-xl transition-colors text-center"
              >
                Quero me cadastrar
              </Link>
            </div>

          </div>
        </div>

        <p className="text-center text-xs text-isa-gray-400 mt-4">
          * Os valores são estimativas baseadas em médias de mercado e podem variar conforme região e demanda.
        </p>
      </div>
    </section>
  );
}
