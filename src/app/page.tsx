import { images } from "@/config/images";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = {
  title: "Home - Radiance Med Spa",
  description: "Discover our advanced aesthetic treatments at Radiance Med Spa.",
  openGraph: {
    title: "Home - Radiance Med Spa",
    description: "Discover our advanced aesthetic treatments at Radiance Med Spa.",
    image: images.hero.src,
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero image={images.hero} />
      <ServicesGrid />
      <Testimonials />
      <CTABanner />
      <Footer />
    </>
  );
}