import { images } from "@/config/images";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Radiance Med Spa - Contact Us",
  description: "Get in touch with us for inquiries and appointments.",
  openGraph: {
    title: "Radiance Med Spa - Contact Us",
    description: "Get in touch with us for inquiries and appointments.",
    images: [images.hero.src],
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="py-16">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <p className="mt-4 text-lg text-center">
          Have questions? Reach out to us via phone or email, or fill out our contact form.
        </p>
      </div>
      <Footer />
    </>
  );
}