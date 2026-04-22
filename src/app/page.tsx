import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ProfessionalHeroSection } from "@/components/home/ProfessionalHeroSection";
import { ComoFuncionaSection } from "@/components/home/ComoFuncionaSection";
import { VantagensSection } from "@/components/home/VantagensSection";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";
import { NoticiasSection } from "@/components/home/NoticiasSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhereWeAreSection } from "@/components/home/WhereWeAreSection";
import { ProfessionalsSection } from "@/components/home/ProfessionalsSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ProfessionalHeroSection />
      <ComoFuncionaSection />
      <VantagensSection />
      <AppDownloadSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <NoticiasSection />
      <WhereWeAreSection />
      <ProfessionalsSection />
      <CTASection />
    </>
  );
}
