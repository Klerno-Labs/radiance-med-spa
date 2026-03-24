import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About Us - Radiance Med Spa",
  description: "Learn more about Radiance Med Spa and our expert team.",
  openGraph: {
    title: "About Us - Radiance Med Spa",
    description: "Learn more about Radiance Med Spa and our expert team.",
    image: "https://mfile.z.ai/1774368231991-f2be17b6516846498329f9f687b160c2.png?ufileattname=20260325000344bc89cac665024163_watermark.png",
  },
};

export default function About() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}