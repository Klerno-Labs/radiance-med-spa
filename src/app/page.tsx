import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Radiance Med Spa - Home",
  description: "Unlock your radiance with our premier medical aesthetics services.",
  openGraph: {
    title: "Radiance Med Spa - Home",
    description: "Unlock your radiance with our premier medical aesthetics services.",
    images: [images.hero.src],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <TestimonialsCarousel />
      <CTASection />
      <Footer />
    </>
  );
}