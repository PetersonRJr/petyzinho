"use client";

import { Users, Star, TrendingUp, Clock } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  {
    icon: Users,
    value: 1200,
    suffix: "+",
    label: "Profissionais parceiros ativos",
    desc: "em todo o Brasil",
  },
  {
    icon: Star,
    value: 90,
    suffix: "+",
    label: "NPS dos profissionais",
    desc: "índice de satisfação",
  },
  {
    icon: TrendingUp,
    value: 4,
    suffix: "x",
    label: "Mais ganhos",
    desc: "vs. mercado tradicional",
    prefix: "até ",
  },
  {
    icon: Clock,
    value: 48,
    suffix: "h",
    label: "Para validar seu perfil",
    desc: "e começar a receber chamados",
    prefix: "< ",
  },
];

export function StatsSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #E91E8C 0%, #9C0F61 60%, #0F2A3F 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/15 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            Números que falam por si
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            A ISA em números reais
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/15 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2 leading-none">
                {stat.prefix && <span className="text-2xl font-bold text-white/70">{stat.prefix}</span>}
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-bold text-white text-sm leading-snug">{stat.label}</p>
              <p className="text-white/50 text-xs mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
