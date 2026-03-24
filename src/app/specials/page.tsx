import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Specials - Radiance Med Spa",
  description: "Check out our latest specials and promotions.",
  openGraph: {
    title: "Specials - Radiance Med Spa",
    description: "Check out our latest specials and promotions.",
    image: "https://mfile.z.ai/1774368256672-fac9f35ffd6041968477c0850cda7d21.png?ufileattname=2026032500040951b6b393e37244a8_watermark.png",
  },
};

export default function Specials() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}