import { images } from "@/config/images";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Radiance Med Spa - Gallery",
  description: "Explore our gallery of treatments and results.",
  openGraph: {
    title: "Radiance Med Spa - Gallery",
    description: "Explore our gallery of treatments and results.",
    images: [images.hero.src],
  },
};

export default function Gallery() {
  return (
    <>
      <Navbar />
      <div className="py-16">
        <h1 className="text-4xl font-bold text-center">Gallery</h1>
        <p className="mt-4 text-lg text-center">
          Browse through our gallery to see the stunning results of our treatments.
        </p>
      </div>
      <Footer />
    </>
  );
}