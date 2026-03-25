import { images } from "@/config/images";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesGrid from "@/components/sections/ServicesGrid";

export const metadata = {
  title: "Radiance Med Spa - Services",
  description: "Explore our range of advanced aesthetic treatments.",
  openGraph: {
    title: "Radiance Med Spa - Services",
    description: "Explore our range of advanced aesthetic treatments.",
    images: [images.hero.src],
  },
};

export default function Services() {
  return (
    <>
      <Navbar />
      <ServicesGrid />
      <Footer />
    </>
  );
}