import type { Metadata } from "next";
import ParaProfissionaisClient from "./page.client";

export const metadata: Metadata = {
  title: "Para Profissionais",
  description:
    "Trabalhe com liberdade. Junte-se a mais de 1.200 profissionais de saúde que usam a ISA para atendimentos domiciliares com flexibilidade e boa remuneração.",
  keywords: ["trabalho profissional saúde", "home care profissional", "enfermeiro autônomo", "fisioterapeuta freelancer"],
};

export default function ParaProfissionaisPage() {
  return <ParaProfissionaisClient />;
}
