import { images } from "@/config/images";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Radiance Med Spa - Book Now",
  description: "Schedule your appointment with us today.",
  openGraph: {
    title: "Radiance Med Spa - Book Now",
    description: "Schedule your appointment with us today.",
    images: [images.hero.src],
  },
};

export default function BookNow() {
  return (
    <>
      <Navbar />
      <div className="py-16">
        <h1 className="text-4xl font-bold text-center">Book Now</h1>
        <p className="mt-4 text-lg text-center">
          Ready to unlock your radiance? Schedule your appointment today!
        </p>
      </div>
      <Footer />
    </>
  );
}