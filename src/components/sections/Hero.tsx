import { cn } from "@/lib/cn";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export default function Hero({ title, subtitle, image, alt }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img src={image} alt={alt} className="w-full h-full object-cover" loading="eager" />
      </div>
      <div className="relative z-10 p-8 bg-white/80 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">{subtitle}</p>
        <button className="mt-6 bg-primary text-white py-2 px-4 rounded-lg">Book Now</button>
      </div>
    </section>
  );
}