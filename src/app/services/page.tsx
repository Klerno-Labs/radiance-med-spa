import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesGrid from "@/components/sections/ServicesGrid";

export const metadata = {
  title: "Services - Radiance Med Spa",
  description: "Explore our range of aesthetic services at Radiance Med Spa.",
  openGraph: {
    title: "Services - Radiance Med Spa",
    description: "Explore our range of aesthetic services at Radiance Med Spa.",
    image: "https://mfile.z.ai/1774368232436-ff51f58548fd4d648064a76b46c74440.png?ufileattname=202603250003432087531ef1be42f1_watermark.png",
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