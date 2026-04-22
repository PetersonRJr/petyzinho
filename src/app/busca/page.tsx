import type { Metadata } from "next";
import BuscaClient from "./page.client";

export const metadata: Metadata = {
  title: "Busca",
  description: "Pesquise páginas, serviços e informações no site da ISA Saúde.",
};

export default function BuscaPage() {
  return <BuscaClient />;
}
