"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  { title: "Atendimento Personalizado", desc: "Entramos em contato em até 24 horas" },
  { title: "Sem Compromisso",           desc: "Tire suas dúvidas sem nenhuma obrigação" },
  { title: "Segurança de Dados",        desc: "Suas informações estão protegidas" },
];

export function ProfessionalHeroSection() {
  const [form, setForm] = useState({
    nome: "", email: "", telefone: "", cidade: "", interesse: "", mensagem: "", aceito: false,
  });
  const [sent, setSent] = useState(false);

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #E91E8C 0%, #C4167A 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-5">
                Aumente seus ganhos{" "}
                <span className="text-isa-teal-300">com a ISA</span>
              </h2>
              <p className="text-pink-100 text-lg mb-8 leading-relaxed max-w-md">
                Flexibilidade, segurança e oportunidades todos os dias.
                Trabalhe com autonomia e receba acima da média do mercado.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#cadastro-profissional"
                  className="bg-white text-isa-pink-600 font-bold px-7 py-3.5 rounded-pill hover:bg-pink-50 transition-colors"
                >
                  Começar agora
                </a>
                <a
                  href="/portal-isa#vantagens"
                  className="border-2 border-white/50 text-white font-semibold px-7 py-3.5 rounded-pill hover:bg-white/10 transition-colors"
                >
                  Ver vantagens
                </a>
              </div>
            </div>

            {/* Right — image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Profissional de saúde ISA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4">
                <p className="text-2xl font-black text-isa-gray-800 leading-none">+10 mil</p>
                <p className="text-xs text-isa-gray-500 mt-0.5">profissionais cadastrados</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Formulário ──────────────────────────────────────────────────── */}
      <section
        id="cadastro-profissional"
        style={{ background: "linear-gradient(135deg, #C4167A 0%, #A0116A 100%)" }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — copy */}
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-black leading-tight mb-5">
                Cadastre-se e Receba Mais Informações
              </h2>
              <p className="text-pink-100 mb-8 leading-relaxed">
                Preencha o formulário e nossa equipe entrará em contato para apresentar
                as melhores soluções de saúde domiciliar para você.
              </p>
              <div className="space-y-5">
                {highlights.map((h) => (
                  <div key={h.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-isa-teal-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">{h.title}</p>
                      <p className="text-pink-200 text-sm">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-black text-isa-gray-800 mb-2">Cadastro enviado!</h3>
                  <p className="text-isa-gray-500">Nossa equipe entrará em contato em até 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <h3 className="text-xl font-black text-isa-gray-800 mb-2">Preencha seus dados</h3>

                  <div>
                    <label className="text-sm font-medium text-isa-gray-700 block mb-1">Nome Completo *</label>
                    <input
                      name="nome" value={form.nome} onChange={handle} required
                      placeholder="Digite seu nome completo"
                      className="w-full border border-isa-gray-200 rounded-xl px-4 py-2.5 text-sm text-isa-gray-800 placeholder-isa-gray-400 outline-none focus:border-isa-pink-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-isa-gray-700 block mb-1">E-mail *</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handle} required
                      placeholder="seu@email.com"
                      className="w-full border border-isa-gray-200 rounded-xl px-4 py-2.5 text-sm text-isa-gray-800 placeholder-isa-gray-400 outline-none focus:border-isa-pink-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-isa-gray-700 block mb-1">Telefone *</label>
                    <input
                      type="tel" name="telefone" value={form.telefone} onChange={handle} required
                      placeholder="(11) 99999-9999"
                      className="w-full border border-isa-gray-200 rounded-xl px-4 py-2.5 text-sm text-isa-gray-800 placeholder-isa-gray-400 outline-none focus:border-isa-pink-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-isa-gray-700 block mb-1">Cidade / Estado *</label>
                    <input
                      name="cidade" value={form.cidade} onChange={handle} required
                      placeholder="São Paulo - SP"
                      className="w-full border border-isa-gray-200 rounded-xl px-4 py-2.5 text-sm text-isa-gray-800 placeholder-isa-gray-400 outline-none focus:border-isa-pink-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-isa-gray-700 block mb-1">Interesse em</label>
                    <select
                      name="interesse" value={form.interesse} onChange={handle}
                      className="w-full border border-isa-gray-200 rounded-xl px-4 py-2.5 text-sm text-isa-gray-700 outline-none focus:border-isa-pink-400 transition-colors bg-white"
                    >
                      <option value="">Selecione uma opção</option>
                      <option>Enfermagem</option>
                      <option>Fisioterapia</option>
                      <option>Medicina</option>
                      <option>Fonoaudiologia</option>
                      <option>Nutrição</option>
                      <option>Terapia Ocupacional</option>
                      <option>Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-isa-gray-700 block mb-1">Mensagem (opcional)</label>
                    <textarea
                      name="mensagem" value={form.mensagem} onChange={handle} rows={3}
                      placeholder="Conte-nos um pouco sobre sua necessidade..."
                      className="w-full border border-isa-gray-200 rounded-xl px-4 py-2.5 text-sm text-isa-gray-800 placeholder-isa-gray-400 outline-none focus:border-isa-pink-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox" name="aceito"
                      checked={form.aceito} onChange={handle} required
                      id="aceito-prof"
                      className="mt-1 accent-isa-pink-500"
                    />
                    <label htmlFor="aceito-prof" className="text-xs text-isa-gray-500 leading-relaxed">
                      Aceito receber comunicações da Isa e concordo com a{" "}
                      <a href="/privacidade" className="text-isa-pink-500 hover:underline">Política de Privacidade</a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-bold py-3.5 rounded-xl transition-colors"
                  >
                    Enviar Cadastro
                  </button>

                  <p className="text-xs text-isa-gray-400 text-center">* Campos obrigatórios</p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
