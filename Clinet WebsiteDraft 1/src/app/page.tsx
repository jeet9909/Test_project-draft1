import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import PlatformAdvantage from "@/components/home/PlatformAdvantage";
import ServiceTeaser from "@/components/home/ServiceTeaser";
import StatsBar from "@/components/home/StatsBar";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import PublicationSpotlight from "@/components/home/PublicationSpotlight";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "WormEra Research Lab — C. elegans Bioassay Services",
  description:
    "WormEra Research Lab offers C. elegans-based in vivo screening services for toxicity, antimicrobial, aging, and functional ingredient evaluation. Fast. Affordable. Scientifically validated.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PlatformAdvantage />
      <ServiceTeaser />
      <StatsBar />
      <IndustriesGrid />
      <PublicationSpotlight />
      <CTABanner />
    </>
  );
}
