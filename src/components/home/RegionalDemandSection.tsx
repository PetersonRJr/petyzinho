"use client";

import { motion } from "framer-motion";
import { TrendingUp, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";

type DemandLevel = "alta" | "crescente" | "em-breve";

type Region = {
  state: string;
  city: string;
  demand: DemandLevel;
  openCalls: number;
  professionals: number;
};

const regions: Region[] = [
  {
    state: "São Paulo",
    city: "Capital, Grande SP e Interior",
    demand: "alta",
    openCalls: 124,
    professionals: 342,
  },
  {
    state: "Distrito Federal",
    city: "Brasília e Entorno",
    demand: "alta",
    openCalls: 58,
    professionals: 89,
  },
  {
    state: "Bahia",
    city: "Salvador e Região Metropolitana",
    demand: "alta",
    openCalls: 67,
    professionals: 45,
  },
  {
    state: "Minas Gerais",
    city: "Belo Horizonte e Região",
    demand: "crescente",
    openCalls: 43,
    professionals: 67,
  },
  {
    state: "Goiás",
    city: "Goiânia e Interior",
    demand: "crescente",
    openCalls: 31,
    professionals: 52,
  },
  {
    state: "Rio de Janeiro",
    city: "Em breve",
    demand: "em-breve",
    openCalls: 0,
    professionals: 0,
  },
];

const demandConfig: Record<
  DemandLevel,
  {
    label: string;
    badge: string;
    bar: string;
    barWidth: string;
    Icon: typeof TrendingUp;
  }
> = {
  alta: {
    label: "Alta Demanda",
    badge: "bg-red-50 text-red-600 border-red-200",
    bar: "bg-red-500",
    barWidth: "w-full",
    Icon: TrendingUp,
  },
  crescente: {
    label: "Crescente",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    bar: "bg-amber-400",
    barWidth: "w-3/4",
    Icon: TrendingUp,
  },
  "em-breve": {
    label: "Em breve",
    badge: "bg-isa-gray-100 text-isa-gray-500 border-isa-gray-200",
    bar: "bg-isa-gray-300",
    barWidth: "w-1/4",
    Icon: Minus,
  },
};

export function RegionalDemandSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Demanda Regional"
          title="Onde há mais chamados abertos?"
          subtitle="Veja onde há mais oportunidades de atendimento perto de você."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {regions.map((region) => {
            const cfg = demandConfig[region.demand];
            const isComingSoon = region.demand === "em-breve";

            return (
              <motion.div
                key={region.state}
                variants={fadeUpVariant}
                className={`rounded-2xl border p-5 transition-shadow ${
                  isComingSoon
                    ? "border-isa-gray-200 bg-isa-gray-50 opacity-60"
                    : "border-isa-gray-200 bg-white hover:shadow-card-hover"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-isa-gray-900">{region.state}</p>
                    <p className="text-xs text-isa-gray-500 mt-0.5">{region.city}</p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full border flex items-center gap-1 flex-shrink-0 ${cfg.badge}`}
                  >
                    <cfg.Icon className="w-3 h-3" />
                    {cfg.label}
                  </span>
                </div>

                {!isComingSoon && (
                  <>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-isa-gray-50 rounded-xl p-3 text-center">
                        <div className="text-2xl font-black text-isa-gray-900">
                          {region.openCalls}
                        </div>
                        <div className="text-xs text-isa-gray-500 mt-0.5">
                          Chamados abertos
                        </div>
                      </div>
                      <div className="bg-isa-gray-50 rounded-xl p-3 text-center">
                        <div className="text-2xl font-black text-isa-gray-900">
                          {region.professionals}
                        </div>
                        <div className="text-xs text-isa-gray-500 mt-0.5">
                          Profissionais ativos
                        </div>
                      </div>
                    </div>

                    <div className="h-1.5 bg-isa-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${cfg.bar} ${cfg.barWidth} rounded-full`}
                      />
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <p className="text-center text-xs text-isa-gray-400 mt-6">
          Dados atualizados periodicamente. Disponibilidade pode variar.
        </p>
      </div>
    </section>
  );
}
