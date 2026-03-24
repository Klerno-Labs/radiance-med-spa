import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";

export const metadata = {
  title: "Gallery - Radiance Med Spa",
  description: "Explore our gallery of before and after transformations at Radiance Med Spa.",
  openGraph: {
    title: "Gallery - Radiance Med Spa",
    description: "Explore our gallery of before and after transformations at Radiance Med Spa.",
    image: "https://mfile.z.ai/1774368232436-ff51f58548fd4d648064a76b46c74440.png?ufileattname=202603250003432087531ef1be42f1_watermark.png",
  },
};

export default function GalleryPage() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center py-16">Before & After Gallery</h1>
      <BeforeAfterSlider />
    </main>
  );
}