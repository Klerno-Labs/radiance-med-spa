import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Book Now - Radiance Med Spa",
  description: "Schedule your appointment at Radiance Med Spa.",
  openGraph: {
    title: "Book Now - Radiance Med Spa",
    description: "Schedule your appointment at Radiance Med Spa.",
    image: "https://mfile.z.ai/1774368256672-fac9f35ffd6041968477c0850cda7d21.png?ufileattname=2026032500040951b6b393e37244a8_watermark.png",
  },
};

export default function Booking() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}