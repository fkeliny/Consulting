import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Navbar } from "@/components/sections/navbar";
import { ServicesSection } from "@/components/sections/services";
import { ICPSection } from "@/components/sections/icp";
import { PricingSection } from "@/components/sections/pricing";
import { TeamSection } from "@/components/sections/team";
import { OurApproachSection } from "@/components/sections/our-approach";
import { HowWeWorkSection } from "@/components/sections/how-we-work";
import { FAQSection } from "@/components/sections/faqs";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroGeometric />
      <OurApproachSection />
      <ServicesSection />
      <ICPSection />
      <PricingSection />
      <HowWeWorkSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
