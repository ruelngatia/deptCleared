import HeroSection from "../pageSections/HeroSection";
import FeaturesSection from "../pageSections/FeaturesSection";
import AboutSection from "../pageSections/AboutSection";
import CTASection from "../pageSections/CTASection";
import PricingSection from "../pageSections/PricingSection";
import FAQSection from "../pageSections/FAQSection";
import ContactSection from "../pageSections/ContactSection";
import TeamSection from "../pageSections/TeamSection";


export default function IndexPage() {

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CTASection />
      <PricingSection />
      {/* testimonials */}
      <FAQSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
