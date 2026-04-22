import type { Metadata } from "next";
import NoticiasClient from "./page.client";

export const metadata: Metadata = {
  title: "Notícias e Atualizações",
  description:
    "Fique por dentro das novidades da ISA Saúde. Atualizações da plataforma, expansões regionais, eventos e parceiros estratégicos.",
  keywords: ["notícias ISA Saúde", "blog saúde domiciliar", "home care novidades"],
};

export default function NoticiasPage() {
  return <NoticiasClient />;
}
