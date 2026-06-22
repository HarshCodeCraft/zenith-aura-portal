import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { MargTrust } from "@/components/landing/MargTrust";
import { MargComparison } from "@/components/landing/MargComparison";
import { MargEcosystem } from "@/components/landing/MargEcosystem";
import { MargBento } from "@/components/landing/MargBento";
import { MargStats } from "@/components/landing/MargStats";
import { MargCTA } from "@/components/landing/MargCTA";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Stats } from "@/components/landing/Stats";
import { Reviews } from "@/components/landing/Reviews";
import { VideoTestimonials } from "@/components/landing/VideoTestimonials";
import { WhyUs } from "@/components/landing/WhyUs";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { CursorGlow } from "@/components/landing/CursorGlow";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <Hero />
      <MargTrust />
      <MargEcosystem />
      <MargComparison />
      <MargBento />
      <MargStats />
      <MargCTA />
      <WhyChooseUs />
      <Stats />
      <Reviews />
      <VideoTestimonials />
      <WhyUs />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
