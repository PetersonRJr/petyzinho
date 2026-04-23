"use client";

import { useState, useEffect } from "react";
import { MapPin, Clock, DollarSign, Users, Zap, ArrowRight, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Urgency = "urgent" | "today" | "tomorrow" | "week";

type Opportunity = {
  id: number;
  specialty: string;
  title: string;
  bairro: string;
  city: string;
  distance: string;
  duration: string;
  payMin: number;
  payMax: number;
  urgency: Urgency;
  urgencyLabel: string;
  viewers: number;
  colorBg: string;
  colorText: string;
  isNew: boolean;
};

const base: Opportunity[] = [
  {
    id: 1,
    specialty: "Enfermagem",
    title: "Curativo e troca de sonda",
    bairro: "Moema",
    city: "SP",
    distance: "3,2 km",
    duration: "2h",
    payMin: 180,
    payMax: 240,
    urgency: "urgent",
    urgencyLabel: "Urgente — agora",
    viewers: 2,
    colorBg: "bg-isa-pink-50",
    colorText: "text-isa-pink-600",
    isNew: true,
  },
  {
    id: 2,
    specialty: "Fisioterapia",
    title: "Fisioterapia respiratória",
    bairro: "Pinheiros",
    city: "SP",
    distance: "5,1 km",
    duration: "1h",
    payMin: 160,
    payMax: 210,
    urgency: "today",
    urgencyLabel: "Hoje às 14h",
    viewers: 1,
    colorBg: "bg-teal-50",
    colorText: "text-teal-600",
    isNew: false,
  },
  {
    id: 3,
    specialty: "Enfermagem",
    title: "Medicação EV domiciliar",
    bairro: "Vila Olímpia",
    city: "SP",
    distance: "1,8 km",
    duration: "1h30",
    payMin: 220,
    payMax: 290,
    urgency: "urgent",
    urgencyLabel: "Urgente — agora",
    viewers: 3,
    colorBg: "bg-isa-pink-50",
    colorText: "text-isa-pink-600",
    isNew: true,
  },
  {
    id: 4,
    specialty: "Cuidador",
    title: "Cuidado pós-cirúrgico 12h",
    bairro: "Perdizes",
    city: "SP",
    distance: "6,4 km",
    duration: "12h",
    payMin: 350,
    payMax: 480,
    urgency: "tomorrow",
    urgencyLabel: "Amanhã às 8h",
    viewers: 0,
    colorBg: "bg-purple-50",
    colorText: "text-purple-600",
    isNew: false,
  },
  {
    id: 5,
    specialty: "Téc. Enfermagem",
    title: "Aferição de sinais vitais",
    bairro: "Lapa",
    city: "SP",
    distance: "4,0 km",
    duration: "1h",
    payMin: 130,
    payMax: 170,
    urgency: "today",
    urgencyLabel: "Hoje às 16h",
    viewers: 1,
    colorBg: "bg-orange-50",
    colorText: "text-orange-600",
    isNew: false,
  },
  {
    id: 6,
    specialty: "Fisioterapia",
    title: "Reabilitação ortopédica",
    bairro: "Mooca",
    city: "SP",
    distance: "8,2 km",
    duration: "1h",
    payMin: 175,
    payMax: 235,
    urgency: "week",
    urgencyLabel: "Esta semana",
    viewers: 0,
    colorBg: "bg-teal-50",
    colorText: "text-teal-600",
    isNew: true,
  },
];

const urgencyStyle: Record<Urgency, string> = {
  urgent:   "bg-red-100 text-red-600",
  today:    "bg-amber-100 text-amber-700",
  tomorrow: "bg-blue-100 text-blue-600",
  week:     "bg-isa-gray-100 text-isa-gray-600",
};

const urgencyDot: Record<Urgency, string> = {
  urgent:   "bg-red-500 animate-pulse",
  today:    "bg-amber-500",
  tomorrow: "bg-blue-400",
  week:     "bg-isa-gray-400",
};

export function OportunidadesSection() {
  const [newIds, setNewIds] = useState<number[]>(
    base.filter((o) => o.isNew).map((o) => o.id)
  );
  const [total, setTotal] = useState(91);

  // Rotate "novo" badge and increment counter
  useEffect(() => {
    const interval = setInterval(() => {
      const randomId = base[Math.floor(Math.random() * base.length)].id;
      setNewIds((prev) => {
        const next = prev.includes(randomId)
          ? prev.filter((id) => id !== randomId)
          : [...prev.slice(-2), randomId];
        return next;
      });
      setTotal((n) => n + Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Ao vivo agora</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-2">
              Chamados abertos na sua região
            </h2>
            <p className="text-isa-gray-500 max-w-lg">
              Esses são chamados reais disponíveis no app ISA — aceite com um toque e comece a ganhar hoje.
            </p>
          </div>

          {/* Live counter */}
          <div className="flex items-center gap-3 bg-isa-green-50 border border-green-100 rounded-2xl px-5 py-3 self-start md:self-auto flex-shrink-0">
            <Activity className="w-5 h-5 text-isa-green-500" />
            <div>
              <p className="text-2xl font-black text-isa-gray-800 leading-none">{total}</p>
              <p className="text-xs text-isa-gray-500 mt-0.5">chamados disponíveis</p>
            </div>
          </div>
        </div>

        {/* Feed grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {base.map((op) => {
            const isNew = newIds.includes(op.id);
            return (
              <motion.div
                key={op.id}
                layout
                className="relative bg-white rounded-2xl border border-isa-gray-100 hover:border-isa-pink-200 hover:shadow-card-hover transition-all p-5 flex flex-col gap-4 group"
              >
                {/* Novo badge */}
                <AnimatePresence>
                  {isNew && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute -top-2.5 -right-2.5 bg-isa-pink-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-md flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      NOVO
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${op.colorBg} ${op.colorText} mb-2`}>
                      {op.specialty}
                    </span>
                    <h3 className="font-black text-isa-gray-800 text-base leading-snug group-hover:text-isa-pink-600 transition-colors">
                      {op.title}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${urgencyDot[op.urgency]}`} />
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-isa-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {op.bairro}, {op.city} · {op.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {op.duration}
                  </span>
                </div>

                {/* Pay */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 bg-isa-green-50 rounded-xl px-3 py-2">
                    <DollarSign className="w-4 h-4 text-isa-green-500" />
                    <span className="font-black text-isa-gray-800 text-sm">
                      R$ {op.payMin} — R$ {op.payMax}
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-isa-gray-100">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${urgencyStyle[op.urgency]}`}>
                    <Zap className="w-3 h-3" />
                    {op.urgencyLabel}
                  </span>
                  {op.viewers > 0 && (
                    <span className="flex items-center gap-1 text-[10px] text-isa-gray-400">
                      <Users className="w-3 h-3" />
                      {op.viewers} visualizando
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm text-isa-gray-500 mb-4">
            Esses chamados são visíveis apenas para profissionais cadastrados na ISA
          </p>
          <Link
            href="/trabalhe-conosco"
            className="inline-flex items-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-bold px-8 py-3.5 rounded-pill shadow-lg shadow-isa-pink-200 hover:-translate-y-0.5 transition-all"
          >
            Cadastrar e ver todos os chamados
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
