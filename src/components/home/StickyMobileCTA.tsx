"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrolled > 0.15);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white border-t border-isa-gray-200 shadow-[0_-4px_24px_rgba(15,23,42,0.12)] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-isa-gray-500 leading-tight">+1.200 profissionais já são ISA</p>
          <p className="text-sm font-bold text-isa-gray-800 leading-tight">Cadastre-se e ganhe mais</p>
        </div>
        <Link
          href="/trabalhe-conosco"
          className="inline-flex items-center gap-1.5 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-semibold px-5 py-2.5 rounded-pill text-sm transition-colors flex-shrink-0"
        >
          Começar
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
