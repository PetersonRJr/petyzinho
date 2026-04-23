import type { Metadata } from "next";
import SobreClient from "./page.client";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a ISA Saúde — tecnologia e humanidade a serviço do cuidado domiciliar. Nossa missão é democratizar o acesso a cuidados de saúde de qualidade em casa.",
  keywords: ["ISA Saúde", "quem somos", "sobre ISA", "home care Brasil", "saúde domiciliar"],
};

export default function SobrePage() {
  return <SobreClient />;
}
