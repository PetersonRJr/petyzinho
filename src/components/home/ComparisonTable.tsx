"use client";

import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Status = "yes" | "no" | "partial";

type Row = {
  feature: string;
  isa: Status;
  isaNote?: string;
  clt: Status;
  agency: Status;
};

const rows: Row[] = [
  {
    feature: "Flexibilidade de horários",
    isa: "yes",
    isaNote: "Total — você escolhe",
    clt: "no",
    agency: "partial",
  },
  {
    feature: "Renda competitiva",
    isa: "yes",
    isaNote: "Maior ticket médio",
    clt: "partial",
    agency: "partial",
  },
  {
    feature: "Pagamento rápido",
    isa: "yes",
    isaNote: "Em até 7 dias úteis",
    clt: "partial",
    agency: "partial",
  },
  {
    feature: "Sem burocracia",
    isa: "yes",
    isaNote: "100% digital",
    clt: "no",
    agency: "partial",
  },
  {
    feature: "Suporte jurídico",
    isa: "yes",
    clt: "yes",
    agency: "no",
  },
  {
    feature: "Escolha seus chamados",
    isa: "yes",
    clt: "no",
    agency: "no",
  },
  {
    feature: "Sem mínimo de horas",
    isa: "yes",
    clt: "no",
    agency: "partial",
  },
  {
    feature: "Crescimento profissional",
    isa: "yes",
    clt: "partial",
    agency: "no",
  },
];

function StatusIcon({ status }: { status: Status }) {
  if (status === "yes")
    return <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />;
  if (status === "no")
    return <XCircle className="w-5 h-5 text-red-400 mx-auto" />;
  return <MinusCircle className="w-5 h-5 text-yellow-400 mx-auto" />;
}

export function ComparisonTable() {
  return (
    <section className="py-20 md:py-28 bg-isa-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Comparativo"
          title="ISA vs CLT vs Agência"
          subtitle="Veja por que cada vez mais profissionais escolhem a ISA para trabalhar com liberdade."
        />

        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 bg-isa-gray-50 border-b border-isa-gray-200">
            <div className="p-4 text-sm font-semibold text-isa-gray-500">Critério</div>
            <div className="p-4 text-center">
              <span className="inline-block bg-isa-pink-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                ISA Saúde
              </span>
            </div>
            <div className="p-4 text-center text-sm font-semibold text-isa-gray-500">
              CLT
            </div>
            <div className="p-4 text-center text-sm font-semibold text-isa-gray-500">
              Agência
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 border-b border-isa-gray-100 last:border-0 ${
                i % 2 === 0 ? "bg-white" : "bg-isa-gray-50/40"
              }`}
            >
              <div className="p-4 text-sm text-isa-gray-700 font-medium flex items-center">
                {row.feature}
              </div>
              <div className="p-4 flex flex-col items-center justify-center bg-isa-pink-50/30">
                <StatusIcon status={row.isa} />
                {row.isaNote && (
                  <span className="text-xs text-isa-pink-600 mt-1 text-center font-medium leading-tight">
                    {row.isaNote}
                  </span>
                )}
              </div>
              <div className="p-4 flex items-center justify-center">
                <StatusIcon status={row.clt} />
              </div>
              <div className="p-4 flex items-center justify-center">
                <StatusIcon status={row.agency} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-6 mt-5 justify-center text-xs text-isa-gray-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500" /> Sim
          </span>
          <span className="flex items-center gap-1.5">
            <MinusCircle className="w-4 h-4 text-yellow-400" /> Parcial
          </span>
          <span className="flex items-center gap-1.5">
            <XCircle className="w-4 h-4 text-red-400" /> Não
          </span>
        </div>
      </div>
    </section>
  );
}
