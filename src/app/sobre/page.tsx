import type { Metadata } from "next";
import SobreClient from "./page.client";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a ISA Saúde — tecnologia e humanidade a serviço do cuidado domiciliar no Brasil. Nossa missão, valores e história.",
  keywords: ["ISA Saúde", "quem somos", "sobre ISA", "home care Brasil", "saúde domiciliar"],
};

export default function SobrePage() {
  return <SobreClient />;
}
