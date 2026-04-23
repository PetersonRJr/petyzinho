import type { Metadata } from "next";
import ContatoClient from "./page.client";

export const metadata: Metadata = {
  title: "Fale Conosco",
  description:
    "Entre em contato com a ISA Saúde. Tire dúvidas, solicite atendimento ou fale sobre parcerias. Respondemos em horário comercial.",
  keywords: ["contato ISA Saúde", "fale conosco", "atendimento ISA", "suporte ISA Saúde"],
};

export default function ContatoPage() {
  return <ContatoClient />;
}
