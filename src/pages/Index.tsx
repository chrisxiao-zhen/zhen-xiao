import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import GallerySection from "@/components/GallerySection";
import EducationSection from "@/components/EducationSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <main className="min-h-screen">
      <StickyNav />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <GallerySection />
      <EducationSection />
      <AwardsSection />
      <ContactSection />
      <BackToTop />
    </main>
  );
};

export default Index;
