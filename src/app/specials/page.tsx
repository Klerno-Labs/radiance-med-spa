import { images } from "@/config/images";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Radiance Med Spa - Specials",
  description: "Check out our latest promotions and offers.",
  openGraph: {
    title: "Radiance Med Spa - Specials",
    description: "Check out our latest promotions and offers.",
    images: [images.hero.src],
  },
};

export default function Specials() {
  return (
    <>
      <Navbar />
      <div className="py-16">
        <h1 className="text-4xl font-bold text-center">Specials</h1>
        <p className="mt-4 text-lg text-center">
          Discover our latest promotions and special offers designed to help you look and feel your best.
        </p>
      </div>
      <Footer />
    </>
  );
}