"use client";

import { useState } from "react";
import { Calendar, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

type Category = "Todas" | "Atualizações" | "Eventos" | "Comunicados";

const noticias = [
  {
    id: 1, category: "Atualizações" as Category, date: "15 de Abril, 2026",
    title: "Nova Funcionalidade: Agendamento Inteligente",
    excerpt: "Agora você pode agendar consultas domiciliares com nossa IA que sugere os melhores horários baseados em localização e disponibilidade.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2, category: "Eventos" as Category, date: "12 de Abril, 2026",
    title: "Webinar: O Futuro da Saúde Domiciliar",
    excerpt: "Participe do nosso webinar gratuito sobre as tendências e inovações em cuidados domiciliares. Inscrições abertas!",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3, category: "Comunicados" as Category, date: "10 de Abril, 2026",
    title: "Expansão: Chegamos no Rio de Janeiro e Paraná",
    excerpt: "O ISA chega agora em novas regiões! Estamos expandindo nossa cobertura para levar cuidado de excelência a mais brasileiros.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4, category: "Atualizações" as Category, date: "8 de Abril, 2026",
    title: "App ISA 3.0 Já Disponível para Download",
    excerpt: "Nova versão do aplicativo com interface redesenhada, modo escuro e melhorias de performance. Atualize agora nas lojas!",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5, category: "Eventos" as Category, date: "5 de Abril, 2026",
    title: "Encontro Nacional ISA 2026",
    excerpt: "Venha conhecer as novidades e conectar-se com outros profissionais da rede ISA. Evento presencial em São Paulo dia 5 de maio.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6, category: "Comunicados" as Category, date: "2 de Abril, 2026",
    title: "Novos Protocolos de Segurança Implementados",
    excerpt: "Atualizamos nossos protocolos de segurança clínica para garantir ainda mais qualidade no atendimento domiciliar.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7, category: "Atualizações" as Category, date: "28 de Março, 2026",
    title: "ISA Saúde recebe certificação de qualidade ISO 9001",
    excerpt: "Mais um marco na nossa trajetória. A certificação reforça nosso compromisso com a excelência nos cuidados domiciliares.",
    image: "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8, category: "Eventos" as Category, date: "20 de Março, 2026",
    title: "ISA participa do Congresso Brasileiro de Home Care",
    excerpt: "Nossa equipe estará presente no maior evento de saúde domiciliar do Brasil. Venha nos visitar no estande ISA!",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9, category: "Comunicados" as Category, date: "15 de Março, 2026",
    title: "Parceria estratégica com Unimed e Bradesco Saúde",
    excerpt: "Ampliamos nossa rede de convênios para oferecer ainda mais opções de cobertura aos nossos pacientes e familiares.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
];

const categories: Category[] = ["Todas", "Atualizações", "Eventos", "Comunicados"];

export default function NoticiasPage() {
  const [active, setActive] = useState<Category>("Todas");
  const [search, setSearch] = useState("");

  const filtered = noticias.filter((n) => {
    const matchCat = active === "Todas" || n.category === active;
    const matchSearch = !search || n.title.toLowerCase().includes(search.toLowerCase()) || n.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="py-16 bg-isa-gray-50 border-b border-isa-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-isa-pink-100 text-isa-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Blog ISA Saúde
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-isa-gray-800 mb-4">
            Notícias e Atualizações
          </h1>
          <p className="text-isa-gray-500 text-lg max-w-xl mx-auto mb-8">
            Fique por dentro de tudo que acontece no universo da ISA Saúde
          </p>

          {/* Search */}
          <div className="flex items-center gap-2 max-w-md mx-auto bg-white border border-isa-gray-200 rounded-2xl px-4 py-3 shadow-sm">
            <Search className="w-4 h-4 text-isa-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Buscar notícia..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 text-sm text-isa-gray-800 placeholder-isa-gray-400 outline-none"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
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

          {filtered.length === 0 && (
            <div className="text-center py-20 text-isa-gray-400">
              <p className="text-lg font-semibold">Nenhuma notícia encontrada.</p>
              <p className="text-sm mt-1">Tente outro filtro ou termo de busca.</p>
            </div>
          )}

          {/* Featured (first card big) */}
          {featured && (
            <div className="mb-10 group cursor-pointer">
              <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-isa-gray-100 hover:shadow-card-hover transition-all overflow-hidden">
                <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-isa-pink-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-isa-gray-400">
                      <Calendar className="w-3 h-3" /> {featured.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black text-isa-gray-800 mb-3 leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-isa-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                  <Link href="#" className="inline-flex items-center gap-2 font-semibold text-isa-pink-500 hover:text-isa-pink-600 transition-colors">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Rest of cards */}
          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((n) => (
                <article key={n.id} className="bg-white rounded-2xl border border-isa-gray-100 hover:shadow-card-hover transition-all overflow-hidden flex flex-col group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={n.image}
                      alt={n.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <div className="flex items-center gap-3">
                      <span className="bg-isa-pink-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                        {n.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-isa-gray-400">
                        <Calendar className="w-3 h-3" /> {n.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-isa-gray-800 leading-snug">{n.title}</h3>
                    <p className="text-sm text-isa-gray-500 leading-relaxed flex-1">{n.excerpt}</p>
                    <Link href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-isa-pink-500 hover:text-isa-pink-600 transition-colors mt-auto">
                      Ler mais <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
