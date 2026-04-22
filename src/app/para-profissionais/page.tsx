import type { Metadata } from "next";
import ParaProfissionaisClient from "./page.client";

export const metadata: Metadata = {
  title: "Para Profissionais de Saúde",
  description:
    "Trabalhe com liberdade e ganhe mais. Junte-se a mais de 1.200 profissionais de saúde na ISA Saúde. Horários flexíveis, pagamento rápido e suporte jurídico incluído.",
  keywords: [
    "trabalho enfermeiro",
    "oportunidades profissional saúde",
    "home care profissional",
    "enfermagem autônomo",
    "fisioterapeuta domiciliar",
  ],
};

export default function ParaProfissionaisPage() {
  return <ParaProfissionaisClient />;
}
