import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VenturesSection from "@/components/VenturesSection";
import TimelineSection from "@/components/TimelineSection";
import BadgesSection from "@/components/BadgesSection";
import EducationSection from "@/components/EducationSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <VenturesSection />
      <TimelineSection />
      <BadgesSection />
      <EducationSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
