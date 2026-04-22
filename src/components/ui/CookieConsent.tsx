"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("isa_cookie_consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("isa_cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-isa-gray-800 text-white px-4 py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 leading-relaxed">
          Usamos cookies para melhorar sua experiência e analisar o uso do site, conforme nossa{" "}
          <Link href="/privacidade" className="text-isa-teal-300 hover:underline">
            Política de Privacidade
          </Link>
          . Ao continuar navegando, você concorda com o uso de cookies.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="text-sm text-gray-400 hover:text-white px-4 py-2 transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="text-sm font-bold bg-isa-pink-500 hover:bg-isa-pink-600 text-white px-6 py-2 rounded-xl transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
