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
      
      {/* Pre-How to Buy Video Section (replaced image with video) */}
      <section className="relative py-16 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <video
              src="/videooo.mp4"
              className="max-w-full h-auto rounded-lg shadow-2xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>
      
      <HowToBuySection />
      <ImageSlideshow />
      <TokenomicsSection />
      <RoadmapSection />
      
      {/* Pre-Footer Video Section (replaced image with video) */}
      <section className="relative py-16 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <video
              src="/videooo.mp4"
              className="max-w-full h-auto rounded-lg shadow-2xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>
      
      <FooterSection />
    </div>
  );
};

export default Index;
