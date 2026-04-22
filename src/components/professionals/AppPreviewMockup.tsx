"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, DollarSign, CheckCircle2, Star, ChevronLeft, Bell } from "lucide-react";

const screens = [
  {
    id: "chamado",
    label: "Receba chamados",
    description: "Notificação em tempo real de atendimentos na sua região",
  },
  {
    id: "detalhes",
    label: "Aceite com 1 toque",
    description: "Veja todos os detalhes antes de confirmar",
  },
  {
    id: "pagamento",
    label: "Receba na hora",
    description: "Pagamento garantido após cada atendimento",
  },
];

function ScreenChamado() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Status bar */}
      <div className="h-8" />
      {/* App header */}
      <div className="bg-isa-pink-600 px-4 py-3 flex items-center justify-between">
        <span className="text-white font-bold text-sm">ISA Saúde</span>
        <div className="relative">
          <Bell className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-isa-green-400 rounded-full text-[8px] text-white flex items-center justify-center font-bold">1</span>
        </div>
      </div>

      {/* Greeting */}
      <div className="px-4 py-3 bg-white border-b border-gray-100">
        <p className="text-xs text-gray-500">Boa tarde,</p>
        <p className="text-sm font-bold text-gray-900">Ana Silva, COREN 123456</p>
      </div>

      {/* Notification card */}
      <div className="flex-1 px-3 py-4">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Novo chamado</p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-isa-pink-100 overflow-hidden"
        >
          <div className="bg-isa-pink-600 px-3 py-2 flex items-center gap-1.5">
            <span className="w-2 h-2 bg-isa-green-400 rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-semibold">CHAMADO DISPONÍVEL AGORA</span>
          </div>
          <div className="p-3 space-y-2">
            <p className="font-bold text-gray-900 text-sm">Curativo pós-cirúrgico</p>
            <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <MapPin className="w-3 h-3 text-isa-pink-500" />
              <span>2,3 km de você · Moema, SP</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <Clock className="w-3 h-3 text-isa-pink-500" />
              <span>Hoje, 14h00 – 16h00</span>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-3 h-3 text-isa-green-500" />
              <span className="font-bold text-isa-green-600 text-sm">R$ 180,00</span>
            </div>
          </div>
          <div className="flex border-t border-gray-100">
            <button className="flex-1 py-2.5 text-[11px] font-semibold text-gray-400">
              Recusar
            </button>
            <button className="flex-1 py-2.5 bg-isa-pink-600 text-white text-[11px] font-bold rounded-br-2xl">
              Aceitar
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ScreenDetalhes() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="h-8" />
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-2">
        <ChevronLeft className="w-5 h-5 text-gray-600" />
        <span className="font-bold text-gray-900 text-sm">Detalhes do chamado</span>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-3 space-y-3">
        {/* Map placeholder */}
        <div className="h-24 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{backgroundImage: "radial-gradient(circle, #00BCD4 1px, transparent 1px)", backgroundSize: "16px 16px"}} />
          <div className="bg-isa-pink-600 rounded-full p-2 shadow-lg">
            <MapPin className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Info cards */}
        <div className="bg-gray-50 rounded-xl p-3 space-y-2">
          <Row label="Paciente" value="M.S., 72 anos" />
          <Row label="Endereço" value="R. das Flores, 123" />
          <Row label="Tipo" value="Curativo + Troca dreno" />
          <Row label="Materiais" value="Fornecidos pelo paciente" />
        </div>

        {/* Value */}
        <div className="bg-isa-green-50 rounded-xl p-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-gray-600">Você vai receber</span>
          <span className="text-lg font-extrabold text-isa-green-600">R$ 180,00</span>
        </div>

        {/* CTA */}
        <button className="w-full bg-isa-pink-600 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Aceitar chamado
        </button>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[10px] text-gray-400 uppercase tracking-wide">{label}</span>
      <span className="text-[11px] font-semibold text-gray-800">{value}</span>
    </div>
  );
}

function ScreenPagamento() {
  return (
    <div className="flex flex-col h-full">
      <div className="h-8" />
      {/* Success area */}
      <div className="flex-1 bg-gradient-to-b from-isa-green-500 to-teal-600 flex flex-col items-center justify-center px-4 pb-6 gap-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl"
        >
          <CheckCircle2 className="w-9 h-9 text-isa-green-500" />
        </motion.div>
        <div className="text-center">
          <p className="text-white/80 text-xs font-medium">Atendimento concluído</p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white font-extrabold text-3xl mt-1"
          >
            R$ 180,00
          </motion.p>
          <p className="text-white/70 text-[11px] mt-1">creditado na sua carteira</p>
        </div>

        {/* Rating */}
        <div className="bg-white/15 backdrop-blur rounded-xl p-3 w-full">
          <div className="flex justify-center gap-0.5 mb-1">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
            ))}
          </div>
          <p className="text-white text-[11px] text-center italic">
            &ldquo;Profissional incrível, muito cuidadosa!&rdquo;
          </p>
          <p className="text-white/60 text-[10px] text-center mt-1">— Família do paciente</p>
        </div>

        {/* Balance */}
        <div className="bg-white/15 backdrop-blur rounded-xl p-3 w-full flex justify-between items-center">
          <span className="text-white/70 text-[11px]">Saldo disponível</span>
          <span className="text-white font-bold text-sm">R$ 1.240,00</span>
        </div>
      </div>
    </div>
  );
}

const screenComponents = [ScreenChamado, ScreenDetalhes, ScreenPagamento];

export function AppPreviewMockup() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % screens.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const ActiveScreen = screenComponents[active];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-isa-dark via-isa-gray-900 to-isa-pink-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <div>
            <p className="text-isa-pink-300 font-semibold text-sm uppercase tracking-wider mb-3">
              App ISA Saúde
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4 leading-tight">
              Tudo no seu bolso.
              <br />
              <span className="text-isa-pink-300">Do chamado ao pagamento.</span>
            </h2>
            <p className="text-isa-gray-300 text-lg mb-8 leading-relaxed">
              Receba notificações de atendimentos próximos, veja todos os detalhes, aceite com um toque e o pagamento cai direto na sua conta.
            </p>

            {/* Step indicators */}
            <div className="space-y-4">
              {screens.map((screen, i) => (
                <button
                  key={screen.id}
                  onClick={() => setActive(i)}
                  className="flex items-start gap-4 w-full text-left group"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm transition-all duration-300 ${
                    active === i
                      ? "bg-isa-pink-500 text-white shadow-lg shadow-isa-pink-500/40"
                      : "bg-white/10 text-white/40 group-hover:bg-white/20"
                  }`}>
                    {i + 1}
                  </div>
                  <div className="pt-0.5">
                    <p className={`font-bold text-sm transition-colors duration-300 ${active === i ? "text-white" : "text-white/50"}`}>
                      {screen.label}
                    </p>
                    <p className={`text-xs mt-0.5 transition-colors duration-300 ${active === i ? "text-isa-gray-300" : "text-white/30"}`}>
                      {screen.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-isa-pink-500/20 blur-3xl rounded-full scale-75" />

              {/* Phone frame */}
              <div className="relative w-[260px] h-[540px] bg-gray-900 rounded-[44px] border-[5px] border-gray-700 shadow-2xl overflow-hidden">
                {/* Dynamic island / notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-20" />

                {/* Screen */}
                <div className="absolute inset-0 rounded-[39px] overflow-hidden bg-gray-50">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <ActiveScreen />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full z-20" />
              </div>

              {/* Screen progress dots */}
              <div className="flex justify-center gap-2 mt-5">
                {screens.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      active === i ? "w-6 h-2 bg-isa-pink-400" : "w-2 h-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
