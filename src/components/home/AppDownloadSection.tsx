import { CalendarCheck, DollarSign, Bell, Headphones } from "lucide-react";

const features = [
  { icon: CalendarCheck, title: "Agenda inteligente",    desc: "Gerencie todos os seus atendimentos em um só lugar"  },
  { icon: DollarSign,    title: "Pagamentos rápidos",    desc: "Receba em até 24h direto na sua conta"               },
  { icon: Bell,          title: "Alertas em tempo real", desc: "Notificações de novas vagas próximas a você"         },
  { icon: Headphones,    title: "Suporte 24h",           desc: "Time ISA sempre disponível para te apoiar"           },
];

function AppStoreBadge() {
  return (
    <a
      href="#"
      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white rounded-xl px-4 py-3 transition-colors border border-white/20"
      aria-label="Baixar na App Store"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="white">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[9px] text-white/60 uppercase tracking-wide">Disponível na</span>
        <span className="text-sm font-semibold mt-0.5">App Store</span>
      </div>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white rounded-xl px-4 py-3 transition-colors border border-white/20"
      aria-label="Baixar na Google Play"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" fill="none">
        <path d="M3.18 23.76c.36.2.8.2 1.2-.04l13.04-7.54-2.82-2.82-11.42 10.4z" fill="#EA4335"/>
        <path d="M22.06 10.28L19.04 8.5l-3.14 3.14 3.14 3.14 3.04-1.76a1.9 1.9 0 000-2.74z" fill="#FBBC05"/>
        <path d="M3.18.24A1.9 1.9 0 002 2v20c0 .76.44 1.4 1.18 1.76L14.6 12.36 3.18.24z" fill="#4285F4"/>
        <path d="M4.38.28L15.9 11.8l-2.82 2.82-9.7-14.34z" fill="#34A853"/>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[9px] text-white/60 uppercase tracking-wide">Disponível no</span>
        <span className="text-sm font-semibold mt-0.5">Google Play</span>
      </div>
    </a>
  );
}

export function AppDownloadSection() {
  return (
    <section className="py-20 bg-isa-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div className="text-white">
            <span className="inline-block bg-isa-teal-500/20 text-isa-teal-300 text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
              App ISA Saúde
            </span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
              Toda a sua carreira{" "}
              <span className="text-isa-teal-300">na palma da mão</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-md">
              Gerencie agenda, receba pagamentos e encontre novas oportunidades
              com o app ISA — gratuito para todos os profissionais cadastrados.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-isa-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-isa-teal-300" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{f.title}</p>
                      <p className="text-white/50 text-xs mt-0.5 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download badges */}
            <div className="flex flex-wrap gap-3">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>

            <p className="text-white/40 text-xs mt-4">
              Gratuito · iOS e Android · +10 mil profissionais ativos
            </p>
          </div>

          {/* Right — mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-isa-teal-500/20 blur-3xl rounded-full scale-75" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/isa-app-mockup.webp"
                alt="App ISA Saúde no celular"
                className="relative w-64 md:w-80 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
