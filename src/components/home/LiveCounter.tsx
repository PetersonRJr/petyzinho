"use client";

import { useEffect, useState } from "react";
import { Users, Activity, MapPin, Clock } from "lucide-react";

type Metric = {
  icon: typeof Users;
  label: string;
  base: number;
  variance: number;
  suffix: string;
};

const metrics: Metric[] = [
  {
    icon: Users,
    label: "Profissionais online agora",
    base: 47,
    variance: 8,
    suffix: "",
  },
  {
    icon: Activity,
    label: "Atendimentos realizados hoje",
    base: 234,
    variance: 12,
    suffix: "",
  },
  {
    icon: MapPin,
    label: "Chamados em aberto",
    base: 18,
    variance: 5,
    suffix: "",
  },
  {
    icon: Clock,
    label: "Tempo médio de resposta",
    base: 8,
    variance: 2,
    suffix: " min",
  },
];

export function LiveCounter() {
  const [values, setValues] = useState(metrics.map((m) => m.base));

  useEffect(() => {
    const id = setInterval(() => {
      setValues(
        metrics.map(
          (m) => m.base + Math.round((Math.random() * 2 - 1) * m.variance)
        )
      );
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-16 bg-isa-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-green-400 uppercase tracking-wider">
            Ao vivo agora
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <m.icon className="w-6 h-6 text-white/70" />
              </div>
              <div
                className="text-4xl font-black text-white tabular-nums transition-all duration-700"
              >
                {values[i].toLocaleString("pt-BR")}
                {m.suffix}
              </div>
              <p className="text-sm text-white/50 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
