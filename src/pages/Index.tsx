import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection"; 
import HowToBuySection from "@/components/HowToBuySection";
import ImageSlideshow from "@/components/ImageSlideshow";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      
      {/* Pre-How to Buy Image Section */}
      <section className="relative py-16 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <img 
              src="/1000358531.jpg" 
              alt="Food Porn Community" 
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
      
      <HowToBuySection />
      <ImageSlideshow />
      <TokenomicsSection />
      <RoadmapSection />
      
      {/* Pre-Footer Image Section */}
      <section className="relative py-16 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <img 
              src="/1000358533.jpg" 
              alt="Food Porn Community" 
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
      
      <FooterSection />
    </div>
  );
};

export default Index;
