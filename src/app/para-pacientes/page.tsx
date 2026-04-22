import type { Metadata } from "next";
import ParaPacientesClient from "./page.client";

export const metadata: Metadata = {
  title: "Para Pacientes",
  description:
    "Solicite atendimento domiciliar com profissionais de saúde validados. Enfermagem, fisioterapia, fonoaudiologia e mais no conforto da sua casa.",
  keywords: ["atendimento domiciliar", "home care paciente", "enfermagem em casa", "fisioterapia domiciliar"],
};

export default function ParaPacientesPage() {
  return <ParaPacientesClient />;
}
