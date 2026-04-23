import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.isasaude.com";

  const routes: { path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "",                                   priority: 1.0, changeFreq: "daily"   },
    { path: "/para-pacientes",                    priority: 0.9, changeFreq: "weekly"  },
    { path: "/para-profissionais",                priority: 0.9, changeFreq: "weekly"  },
    { path: "/portal-isa",                        priority: 0.9, changeFreq: "daily"   },
    { path: "/trabalhe-conosco",                  priority: 0.9, changeFreq: "weekly"  },
    { path: "/servicos/atendimento-domiciliar",   priority: 0.8, changeFreq: "weekly"  },
    { path: "/servicos/exames-laboratoriais",     priority: 0.8, changeFreq: "weekly"  },
    { path: "/servicos/vacinas",                  priority: 0.8, changeFreq: "weekly"  },
    { path: "/servicos/testes-rapidos",           priority: 0.8, changeFreq: "weekly"  },
    { path: "/para-parceiros",                    priority: 0.8, changeFreq: "weekly"  },
    { path: "/como-funciona",                     priority: 0.7, changeFreq: "monthly" },
    { path: "/sobre",                             priority: 0.7, changeFreq: "monthly" },
    { path: "/noticias",                          priority: 0.7, changeFreq: "weekly"  },
    { path: "/contato",                           priority: 0.6, changeFreq: "monthly" },
    { path: "/busca",                             priority: 0.4, changeFreq: "monthly" },
  ];

  return routes.map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
