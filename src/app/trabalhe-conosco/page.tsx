import type { Metadata } from "next";
import TrabalheConoscoClient from "./page.client";

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description:
    "Seja parte da maior plataforma de home care do Brasil. Cadastre-se gratuitamente e comece a atender com flexibilidade, segurança e boa remuneração.",
  keywords: ["trabalhe conosco ISA", "cadastro profissional saúde", "vagas home care", "enfermeiro emprego"],
};

export default function TrabalheConoscoPage() {
  return <TrabalheConoscoClient />;
}
