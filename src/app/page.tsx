import { HeroSection } from "@/components/home/HeroSection";
import { ProfessionalHeroSection } from "@/components/home/ProfessionalHeroSection";
import { VantagensSection } from "@/components/home/VantagensSection";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";
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
      <ProfessionalHeroSection />
      <VantagensSection />
      <AppDownloadSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <WhereWeAreSection />
      <ProfessionalsSection />
      <CTASection />
    </>
  );
}
