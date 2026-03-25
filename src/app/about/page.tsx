import { images } from "@/config/images";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Radiance Med Spa - About Us",
  description: "Learn more about our mission and team.",
  openGraph: {
    title: "Radiance Med Spa - About Us",
    description: "Learn more about our mission and team.",
    images: [images.hero.src],
  },
};

export default function About() {
  return (
    <>
      <Navbar />
      <div className="py-16">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <p className="mt-4 text-lg text-center">
          At Radiance Med Spa, we are dedicated to providing the highest quality aesthetic treatments in a luxurious environment. Our team of experienced professionals is committed to helping you achieve your beauty goals.
        </p>
      </div>
      <Footer />
    </>
  );
}