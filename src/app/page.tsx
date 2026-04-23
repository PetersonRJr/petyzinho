import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ComoFuncionaSection } from "@/components/home/ComoFuncionaSection";
import { VantagensSection } from "@/components/home/VantagensSection";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { EarningsSimulator } from "@/components/home/EarningsSimulator";
import { VagasMapSection } from "@/components/home/VagasMapSection";
import { FAQSection } from "@/components/home/FAQSection";
import { NoticiasSection } from "@/components/home/NoticiasSection";
import { StickyMobileCTA } from "@/components/home/StickyMobileCTA";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { Divider } from "@/components/ui/Divider";

export default function HomePage() {
  return (
    <>
      <StickyMobileCTA />

      <HeroSection />

      <FadeInSection><PartnersSection /></FadeInSection>

      <FadeInSection id="como-funciona"><ComoFuncionaSection /></FadeInSection>

      <FadeInSection><VantagensSection /></FadeInSection>

      <FadeInSection><EarningsSimulator /></FadeInSection>

      <FadeInSection><VagasMapSection /></FadeInSection>

      {/* Dark section + wave transition to white */}
      <div className="bg-isa-dark">
        <AppDownloadSection />
        <Divider color="#ffffff" />
      </div>

      <FadeInSection><StatsSection /></FadeInSection>

      <FadeInSection><TestimonialsSection /></FadeInSection>

      <FadeInSection><NoticiasSection /></FadeInSection>

      <FadeInSection><FAQSection /></FadeInSection>

      <CTASection />
    </>
  );
}
