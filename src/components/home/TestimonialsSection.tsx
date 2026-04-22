"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
  avatarColor: string;
  verified: boolean;
};

const patientTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priscila Mendes",
    role: "Paciente — São Paulo, SP",
    content:
      "Foi maravilhoso! Profissionais amáveis e carinhosos. Nunca pensei que encontraria um atendimento tão humanizado em casa.",
    rating: 5,
    initials: "PM",
    avatarColor: "bg-isa-pink-100 text-isa-pink-600",
    verified: true,
  },
  {
    id: 2,
    name: "Maria Aparecida",
    role: "Paciente — Distrito Federal",
    content:
      "Atendimento rápido e seguro. A profissional foi amável e muito segura no que faz. Recomendo demais!",
    rating: 5,
    initials: "MA",
    avatarColor: "bg-teal-100 text-teal-600",
    verified: true,
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    role: "Familiar — Belo Horizonte, MG",
    content:
      "Minha mãe precisava de cuidados especiais e a ISA enviou uma enfermeira excelente. Profissional e muito atenciosa.",
    rating: 5,
    initials: "CE",
    avatarColor: "bg-blue-100 text-blue-600",
    verified: true,
  },
  {
    id: 4,
    name: "Ana Beatriz Lima",
    role: "Paciente — Salvador, BA",
    content:
      "Serviço impecável! Desde o agendamento até o atendimento, tudo foi organizado e eficiente. Voltarei a usar com certeza.",
    rating: 5,
    initials: "AB",
    avatarColor: "bg-purple-100 text-purple-600",
    verified: true,
  },
  {
    id: 5,
    name: "Roberto Figueiredo",
    role: "Familiar — Goiânia, GO",
    content:
      "Meu pai pós-cirurgia precisava de cuidados em casa. A ISA atendeu em menos de 4 horas. Profissional incrível!",
    rating: 5,
    initials: "RF",
    avatarColor: "bg-orange-100 text-orange-600",
    verified: true,
  },
];

const professionalTestimonials: Testimonial[] = [
  {
    id: 101,
    name: "Fernanda Costa",
    role: "Enfermeira — São Paulo, SP",
    content:
      "Trabalhar com a ISA mudou minha vida. Escolho meus horários, ganho bem e ainda consigo cuidar dos meus filhos.",
    rating: 5,
    initials: "FC",
    avatarColor: "bg-isa-pink-100 text-isa-pink-600",
    verified: true,
  },
  {
    id: 102,
    name: "Marcos Andrade",
    role: "Fisioterapeuta — Brasília, DF",
    content:
      "Em 3 meses já superei o que ganhava na clínica com CLT. A plataforma é fácil de usar e o suporte é excelente.",
    rating: 5,
    initials: "MA",
    avatarColor: "bg-teal-100 text-teal-600",
    verified: true,
  },
  {
    id: 103,
    name: "Renata Oliveira",
    role: "Técnica em Enfermagem — Belo Horizonte, MG",
    content:
      "Nunca imaginei ter tanta liberdade de horários e ainda assim ganhar mais. A ISA me deu qualidade de vida de verdade.",
    rating: 5,
    initials: "RO",
    avatarColor: "bg-green-100 text-green-600",
    verified: true,
  },
  {
    id: 104,
    name: "João Paulo",
    role: "Enfermeiro — Salvador, BA",
    content:
      "O que mais gosto é poder escolher onde e quando trabalhar. Pagamentos no prazo e suporte que resolve rápido.",
    rating: 5,
    initials: "JP",
    avatarColor: "bg-blue-100 text-blue-600",
    verified: true,
  },
];

const VISIBLE = 2;

export function TestimonialsSection() {
  const [tab, setTab] = useState<"patients" | "professionals">("patients");
  const [start, setStart] = useState(0);

  const list =
    tab === "patients" ? patientTestimonials : professionalTestimonials;
  const maxStart = list.length - VISIBLE;

  const handleTab = (next: typeof tab) => {
    setTab(next);
    setStart(0);
  };

  const visible = list.slice(start, start + VISIBLE);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-isa-gray-800 text-center mb-2">
          O que dizem sobre a ISA
        </h2>
        <p className="text-isa-gray-500 text-center mb-8">
          Histórias reais de quem já usa nossa plataforma
        </p>

        {/* Tabs */}
        <div className="flex gap-2 justify-center mb-10">
          {(
            [
              { key: "patients", label: "Pacientes e Familiares" },
              { key: "professionals", label: "Profissionais de Saúde" },
            ] as const
          ).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleTab(key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                tab === key
                  ? "bg-isa-pink-600 text-white shadow-sm"
                  : "bg-isa-gray-100 text-isa-gray-600 hover:bg-isa-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={start === 0}
            className="w-10 h-10 rounded-full border-2 border-isa-pink-200 flex items-center justify-center text-isa-pink-500 hover:bg-isa-pink-50 transition-colors flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-2 gap-6 flex-1 min-h-[200px]">
            <AnimatePresence mode="popLayout">
              {visible.map((t) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-isa-gray-200 rounded-2xl p-6 shadow-card"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-isa-pink-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-isa-gray-700 text-sm leading-relaxed mb-5">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-sm font-bold flex-shrink-0`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <p className="font-bold text-isa-gray-800 text-sm">
                          {t.name}
                        </p>
                        {t.verified && (
                          <BadgeCheck className="w-4 h-4 text-isa-teal-500" />
                        )}
                      </div>
                      <p className="text-xs text-isa-gray-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setStart((s) => Math.min(maxStart, s + 1))}
            disabled={start >= maxStart}
            className="w-10 h-10 rounded-full border-2 border-isa-pink-200 flex items-center justify-center text-isa-pink-500 hover:bg-isa-pink-50 transition-colors flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: maxStart + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === start ? "w-6 bg-isa-pink-500" : "w-1.5 bg-isa-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
