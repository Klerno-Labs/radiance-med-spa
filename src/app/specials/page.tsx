import { images } from "@/config/images";

export const metadata = {
  title: "Specials | Radiance Med Spa",
  description: "Check out our latest promotions and special offers.",
};

export default function Specials() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Current Specials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Special offers will be listed here */}
      </div>
    </div>
  );
}