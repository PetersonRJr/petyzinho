import type { Metadata } from "next";
import ComoFuncionaClient from "./page.client";

export const metadata: Metadata = {
  title: "Como Funciona",
  description:
    "Entenda como a ISA Saúde funciona para profissionais de saúde e pacientes. Cadastro simples, validação em 48h e atendimentos domiciliares com tecnologia e segurança.",
  keywords: ["como funciona ISA Saúde", "plataforma saúde domiciliar", "home care como funciona"],
};

export default function ComoFuncionaPage() {
  return <ComoFuncionaClient />;
}
