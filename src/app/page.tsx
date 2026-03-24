import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Radiance Med Spa | Advanced Aesthetics in Houston",
  description: "Radiance Med Spa offers premier aesthetic treatments including Botox, fillers, and laser therapy. Book your consultation today.",
  openGraph: {
    title: "Radiance Med Spa | Advanced Aesthetics",
    description: "Premium medical spa services in Houston.",
    images: ["https://mfile.z.ai/1774368232436-ff51f58548fd4d648064a76b46c74440.png"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <ServicesGrid />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}