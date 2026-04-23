"use client";

import { Users, Star, TrendingUp, Clock } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { icon: Users, value: 1200, suffix: "+", label: "Profissionais parceiros ativos" },
  { icon: Star, value: 90, suffix: "+", label: "NPS — Satisfação dos profissionais" },
  { icon: TrendingUp, value: 4, suffix: "x mais", label: "Ganhos médios vs. modelo CLT" },
  { icon: Clock, value: 48, suffix: "h", label: "Validação do perfil em até", prefix: "< " },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-isa-gray-50 border-y border-isa-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-isa-pink-50 flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-isa-pink-500" />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-isa-gray-800 mb-1">
                {stat.prefix && <span>{stat.prefix}</span>}
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-isa-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
