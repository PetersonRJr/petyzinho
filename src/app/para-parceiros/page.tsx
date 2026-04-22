import type { Metadata } from "next";
import ParaParceirosClient from "./page.client";

export const metadata: Metadata = {
  title: "Para Operadoras e Parceiros",
  description:
    "Soluções de home care para operadoras de saúde. Reduza custos hospitalares, melhore a satisfação dos beneficiários e amplie a cobertura com a ISA Saúde.",
  keywords: [
    "home care operadora saúde",
    "parceria ISA Saúde",
    "saúde domiciliar B2B",
    "gestão home care",
  ],
};

export default function ParaParceirosPage() {
  return <ParaParceirosClient />;
}
