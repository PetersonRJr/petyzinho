import type { Metadata } from "next";
import ContatoClient from "./page.client";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a ISA Saúde. Tire suas dúvidas, solicite atendimento ou fale sobre parcerias. Respondemos em horário comercial.",
  keywords: ["contato ISA Saúde", "falar com ISA", "suporte ISA"],
};

export default function ContatoPage() {
  return <ContatoClient />;
}
