import { HeroCarousel } from "@/components/hero-carousel";
import { CategoryGrid } from "@/components/category-grid";
import { BranchPreview } from "@/components/branch-preview";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <CategoryGrid />
      <BranchPreview />
    </>
  );
}
