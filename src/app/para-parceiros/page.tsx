import type { Metadata } from "next";
import ParaParceirosClient from "./page.client";

export const metadata: Metadata = {
  title: "Para Parceiros",
  description:
    "Soluções de home care para operadoras de saúde. Reduza custos, amplie cobertura e melhore a satisfação dos beneficiários com a ISA Saúde.",
  keywords: ["operadora de saúde", "home care B2B", "parceria ISA", "gestão home care"],
};

export default function ParaParceirosPage() {
  return <ParaParceirosClient />;
}
