import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import { images } from "@/config/images";
import { metadata } from "./layout";

export const metadata = {
  ...metadata,
  title: "Home | Radiance Med Spa",
  description: "Discover our advanced aesthetic treatments at Radiance Med Spa.",
};

export default function Home() {
  return (
    <>
      <Hero
        title="Welcome to Radiance Med Spa"
        subtitle="Your journey to beauty and confidence starts here."
        image={images.hero.src}
        alt={images.hero.alt}
      />
      <ServicesGrid />
      <Testimonials />
      <CTABanner />
    </>
  );
}