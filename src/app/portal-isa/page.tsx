import type { Metadata } from "next";
import PortalISAClient from "./page.client";

export const metadata: Metadata = {
  title: "Portal do Profissional ISA",
  description:
    "Encontre vagas de atendimento domiciliar na sua região. Mais de 90 oportunidades abertas em SP, MG, GO, DF e BA. Cadastre-se e comece a ganhar.",
  keywords: [
    "portal profissional ISA",
    "vagas home care",
    "oportunidades enfermagem",
    "vagas fisioterapia domiciliar",
  ],
};

export default function PortalISAPage() {
  return <PortalISAClient />;
}
