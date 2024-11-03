import Explore from "@/ui/Explore";
import FAQSection from "@/ui/FAQSection";
import Hero from "@/ui/Hero";
import MissionValues from "@/ui/MissionValues";
import PricingPlan from "@/ui/PricingPlan";
import Testimonials from "@/ui/Teastimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Explore />
      <Testimonials />
      <MissionValues />
      <FAQSection />
      <PricingPlan />
    </>
  );
}
