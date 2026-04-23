import type { Metadata } from "next";
import ParaPacientesClient from "./page.client";

export const metadata: Metadata = {
  title: "Para Pacientes e Familiares",
  description:
    "Profissionais de saúde validados para cuidar da sua família em casa. Enfermagem, fisioterapia, fonoaudiologia e muito mais com segurança e conforto.",
  keywords: [
    "atendimento domiciliar paciente",
    "enfermagem em casa",
    "cuidado domiciliar",
    "saúde em casa",
    "cuidador idoso",
  ],
};

export default function ParaPacientesPage() {
  return <ParaPacientesClient />;
}
