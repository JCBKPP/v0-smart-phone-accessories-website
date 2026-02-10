import { HeroCarousel } from "@/components/hero-carousel";
import { CategoryGrid } from "@/components/category-grid";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { BranchPreview } from "@/components/branch-preview";

export default function HomePage() {
  return (
    <> 
      <HeroCarousel />
      <CategoryGrid />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <BranchPreview />
    </>
  );
}
