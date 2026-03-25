import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ServicesGrid from "@/components/ServicesGrid";
import AboutPreview from "@/components/AboutPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radiance Med Spa | Premier Medical Aesthetics & Skincare",
  description: "Radiance Med Spa is Houston's premier destination for advanced aesthetic treatments including Botox, fillers, laser therapy, and medical-grade skincare. Book your consultation today.",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ServicesGrid />
      <AboutPreview />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </main>
  );
}