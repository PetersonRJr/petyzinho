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
import { FadeInSection } from "@/components/ui/FadeInSection";
import { Divider } from "@/components/ui/Divider";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FadeInSection><PartnersSection /></FadeInSection>

      <ProfessionalHeroSection />

      <FadeInSection><ComoFuncionaSection /></FadeInSection>

      <FadeInSection><VantagensSection /></FadeInSection>

      {/* Dark section + wave transition to white */}
      <div className="bg-isa-dark">
        <AppDownloadSection />
        <Divider color="#ffffff" />
      </div>

      <FadeInSection><ServicesSection /></FadeInSection>

      <FadeInSection><StatsSection /></FadeInSection>

      <FadeInSection><TestimonialsSection /></FadeInSection>

      <FadeInSection><NoticiasSection /></FadeInSection>

      <FadeInSection><WhereWeAreSection /></FadeInSection>

      <FadeInSection><ProfessionalsSection /></FadeInSection>

      <CTASection />
    </>
  );
}
