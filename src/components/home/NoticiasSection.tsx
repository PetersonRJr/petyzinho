"use client";

import { useState } from "react";
import { Newspaper, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

type Category = "Todas" | "Atualizações" | "Eventos" | "Comunicados";

const noticias = [
  {
    id: 1,
    category: "Atualizações" as Category,
    date: "15 de Abril, 2026",
    title: "Nova Funcionalidade: Agendamento Inteligente",
    excerpt: "Agora você pode agendar consultas domiciliares com nossa IA que sugere os melhores horários baseados em localização e disponibilidade.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    category: "Eventos" as Category,
    date: "12 de Abril, 2026",
    title: "Webinar: O Futuro da Saúde Domiciliar",
    excerpt: "Participe do nosso webinar gratuito sobre as tendências e inovações em cuidados domiciliares. Inscrições abertas!",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    category: "Comunicados" as Category,
    date: "10 de Abril, 2026",
    title: "Expansão: Chegamos no Rio de Janeiro e Paraná",
    excerpt: "O ISa chega agora em novas regiões! Estamos expandindo nossa cobertura para levar cuidado de excelência a mais brasileiros.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    category: "Atualizações" as Category,
    date: "8 de Abril, 2026",
    title: "App ISA 3.0 Já Disponível para Download",
    excerpt: "Nova versão do aplicativo com interface redesenhada, modo escuro e melhorias de performance. Atualize agora nas lojas!",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    category: "Eventos" as Category,
    date: "5 de Abril, 2026",
    title: "Encontro Nacional ISA 2026",
    excerpt: "Venha conhecer as novidades e conectar-se com outros profissionais da rede ISA. Evento presencial em São Paulo dia 5 de maio.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    category: "Comunicados" as Category,
    date: "2 de Abril, 2026",
    title: "Novos Protocolos de Segurança Implementados",
    excerpt: "Atualizamos nossos protocolos de segurança clínica para garantir ainda mais qualidade no atendimento domiciliar.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80",
  },
];

const categories: Category[] = ["Todas", "Atualizações", "Eventos", "Comunicados"];

const categoryColors: Record<Category, string> = {
  "Todas":       "bg-isa-pink-500 text-white",
  "Atualizações":"bg-isa-pink-500 text-white",
  "Eventos":     "bg-isa-pink-500 text-white",
  "Comunicados": "bg-isa-pink-500 text-white",
};

export function NoticiasSection() {
  const [active, setActive] = useState<Category>("Todas");

  const filtered = active === "Todas" ? noticias : noticias.filter((n) => n.category === active);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-isa-pink-50 rounded-2xl mb-4">
            <Newspaper className="w-6 h-6 text-isa-pink-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">
            Notícias e Atualizações
          </h2>
          <p className="text-isa-teal-600 font-medium max-w-md mx-auto">
            Fique por dentro de todas as novidades, eventos e comunicados do ISA
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                active === cat
                  ? "bg-isa-pink-500 text-white border-isa-pink-500"
                  : "bg-white text-isa-gray-600 border-isa-gray-200 hover:border-isa-pink-300 hover:text-isa-pink-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((n) => (
            <article
              key={n.id}
              className="bg-white rounded-2xl border border-isa-gray-100 hover:shadow-card-hover transition-all overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                {/* Badge + date */}
                <div className="flex items-center gap-3">
                  <span className="bg-isa-pink-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {n.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-isa-gray-400">
                    <Calendar className="w-3 h-3" />
                    {n.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-isa-gray-800 leading-snug hover:text-isa-pink-500 transition-colors">
                  {n.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-isa-gray-500 leading-relaxed flex-1">
                  {n.excerpt}
                </p>

                {/* Ler mais */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-isa-pink-500 hover:text-isa-pink-600 transition-colors mt-auto"
                >
                  Ler mais
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 border-2 border-isa-pink-500 text-isa-pink-500 hover:bg-isa-pink-500 hover:text-white font-semibold px-8 py-3 rounded-pill transition-colors"
          >
            Ver Todas as Notícias
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
