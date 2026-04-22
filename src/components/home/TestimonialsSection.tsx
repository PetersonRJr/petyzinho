"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priscila Mendes",
    role: "Paciente",
    location: "São Paulo, SP",
    specialty: "Internação Domiciliar",
    content: "Foi maravilhoso. Profissionais amáveis e carinhosos, minha recuperação foi muito mais rápida e tranquila do que esperava. Recomendo de coração.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 2,
    name: "Maria Silva",
    role: "Paciente",
    location: "Brasília, DF",
    specialty: "Atenção Domiciliar",
    content: "Gostei muito do atendimento, rápido e seguro, com profissional amável e seguro naquilo que faz. A praticidade de receber cuidado em casa não tem preço.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    role: "Familiar",
    location: "Belo Horizonte, MG",
    specialty: "Cuidados Paliativos",
    content: "Minha mãe precisava de cuidados e a ISA enviou uma enfermeira excelente — profissional, muito cuidadosa e atenciosa. Família inteira agradecida.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 4,
    name: "Ana Beatriz Costa",
    role: "Paciente",
    location: "Salvador, BA",
    specialty: "Hospital em Casa",
    content: "Serviço impecável! Desde o agendamento até o atendimento, tudo foi muito organizado e eficiente. Senti que estava em boas mãos o tempo todo.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 5,
    name: "Roberto Alves",
    role: "Familiar",
    location: "Goiânia, GO",
    specialty: "Internação Domiciliar",
    content: "Meu pai ficou internado em casa por 3 semanas e a equipe ISA foi incrível. Suporte 24h, comunicação clara e muito cuidado. Superou todas as expectativas.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 6,
    name: "Fernanda Lima",
    role: "Paciente",
    location: "São Paulo, SP",
    specialty: "Atenção Domiciliar",
    content: "Depois da cirurgia precisei de fisioterapia em casa. A profissional da ISA foi pontual, dedicada e me ajudou a recuperar minha mobilidade muito mais rápido.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
  },
];

export function TestimonialsSection() {
  const [start, setStart] = useState(0);
  const perPage = 3;
  const total = testimonials.length;

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(total - perPage, s + 1));
  const visible = testimonials.slice(start, start + perPage);

  return (
    <section className="py-20 bg-isa-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-isa-pink-100 text-isa-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
            Histórias reais
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">
            O que dizem nossos pacientes
          </h2>
          <p className="text-isa-gray-500">
            Mais de 10 mil famílias atendidas em todo o Brasil
          </p>
        </div>

        {/* Carousel */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            disabled={start === 0}
            className="w-10 h-10 rounded-full border-2 border-isa-pink-200 flex items-center justify-center text-isa-pink-500 hover:bg-isa-pink-50 transition-colors flex-shrink-0 disabled:opacity-30"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-3 gap-6 flex-1">
            {visible.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow flex flex-col gap-4"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-isa-pink-200 fill-current" />

                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-isa-gray-700 text-sm leading-relaxed flex-1">
                  "{t.content}"
                </p>

                {/* Specialty tag */}
                <span className="text-xs font-semibold text-isa-teal-600 bg-isa-teal-50 px-2.5 py-1 rounded-full self-start">
                  {t.specialty}
                </span>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-isa-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-isa-pink-100"
                  />
                  <div>
                    <p className="font-bold text-isa-gray-800 text-sm">{t.name}</p>
                    <p className="text-xs text-isa-gray-500">{t.role} · {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            disabled={start >= total - perPage}
            className="w-10 h-10 rounded-full border-2 border-isa-pink-200 flex items-center justify-center text-isa-pink-500 hover:bg-isa-pink-50 transition-colors flex-shrink-0 disabled:opacity-30"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: total - perPage + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              className={`h-2 rounded-full transition-all ${i === start ? "bg-isa-pink-500 w-6" : "bg-isa-gray-300 w-2"}`}
              aria-label={`Página ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
