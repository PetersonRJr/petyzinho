import type { Metadata } from "next";
import ComoFuncionaClient from "./page.client";

export const metadata: Metadata = {
  title: "Como Funciona",
  description:
    "Entenda como a ISA Saúde conecta profissionais de saúde a pacientes. Passo a passo para profissionais e para quem precisa de atendimento domiciliar.",
  keywords: ["como funciona ISA", "plataforma home care", "atendimento domiciliar passo a passo"],
};

export default function ComoFuncionaPage() {
  return <ComoFuncionaClient />;
}
