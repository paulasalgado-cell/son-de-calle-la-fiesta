import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LineupSection from "@/components/LineupSection";
import InfoSection from "@/components/InfoSection";
import ExperienciasSection from "@/components/ExperienciasSection";
import TicketsSection from "@/components/TicketsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LineupSection />
      <InfoSection />
      <ExperienciasSection />
      <TicketsSection />
      <FaqSection />
      <Footer />
    </>
  );
}
