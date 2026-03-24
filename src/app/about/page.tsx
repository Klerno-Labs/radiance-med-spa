import { images } from "@/config/images";

export const metadata = {
  title: "About Us | Radiance Med Spa",
  description: "Learn about our mission and the team behind Radiance Med Spa.",
  openGraph: {
    title: "About Us | Radiance Med Spa",
    description: "Learn about our mission and the team behind Radiance Med Spa.",
    images: [
      {
        url: images.about.src,
        width: 1200,
        height: 800,
        alt: images.about.alt,
      },
    ],
  },
};

export default function About() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold text-center mb-8">About Radiance Med Spa</h1>
      <p className="text-lg text-center mb-4">
        At Radiance Med Spa, we are committed to providing advanced aesthetic treatments that enhance your natural beauty. Our team of certified professionals is dedicated to ensuring your comfort and satisfaction.
      </p>
      <img src={images.about.src} alt={images.about.alt} className="w-full h-auto rounded-xl" />
    </div>
  );
}