import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Gallery - Radiance Med Spa",
  description: "View our before and after gallery showcasing our treatments.",
  openGraph: {
    title: "Gallery - Radiance Med Spa",
    description: "View our before and after gallery showcasing our treatments.",
    image: "https://mfile.z.ai/1774368249243-01afdd2d6b5245b18eac175462a24c86.png?ufileattname=20260325000401dff5de9ac22d48c3_watermark.png",
  },
};

export default function Gallery() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}