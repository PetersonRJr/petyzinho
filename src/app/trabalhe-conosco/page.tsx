import type { Metadata } from "next";
import TrabalheConoscoClient from "./page.client";

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description:
    "Faça parte da ISA Saúde. Cadastre-se como profissional de saúde autônomo e tenha mais liberdade, mais renda e mais impacto. Cadastro 100% gratuito e digital.",
  keywords: [
    "trabalhe conosco ISA Saúde",
    "vaga enfermeiro",
    "profissional saúde autônomo",
    "cadastro ISA",
    "renda extra saúde",
  ],
};

export default function TrabalheConoscoPage() {
  return <TrabalheConoscoClient />;
}
