import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VenturesSection from "@/components/VenturesSection";
import TimelineSection from "@/components/TimelineSection";
import BadgesSection from "@/components/BadgesSection";
import EducationSection from "@/components/EducationSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import Preloader from "@/components/motion/Preloader";
import Cursor from "@/components/motion/Cursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain">
      <Preloader />
      <Cursor />
      <Navigation />
      <main>
        <HeroSection />
        <VenturesSection />
        <TimelineSection />
        <BadgesSection />
        <EducationSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
