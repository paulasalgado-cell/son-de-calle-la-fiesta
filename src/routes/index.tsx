import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LineupSection from "@/components/LineupSection";
import InfoSection from "@/components/InfoSection";
import ExperienciasSection from "@/components/ExperienciasSection";
import TicketsSection from "@/components/TicketsSection";
import FaqSection from "@/components/FaqSection";
import MerchSection from "@/components/MerchSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import WillyChat from "@/components/WillyChat";
import pattern from "@/assets/pattern-salsa.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      {/* Fixed pattern background for entire page */}
      <div
        className="fixed inset-0 z-0"
        style={{ backgroundImage: `url(${pattern})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="fixed inset-0 z-0 bg-salsa-black/88" />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <LineupSection />
        <InfoSection />
        <ExperienciasSection />
        <TicketsSection />
        <FaqSection />
        <MerchSection />
        <SocialSection />
        <Footer />
      </div>
      <WillyChat />
    </div>
  );
}
