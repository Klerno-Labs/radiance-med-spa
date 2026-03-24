import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";

export const metadata = {
  title: "Gallery | Radiance Med Spa",
  description: "View our before and after results from our aesthetic treatments.",
};

export default function Gallery() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Before & After Gallery</h1>
      <BeforeAfterSlider />
    </div>
  );
}