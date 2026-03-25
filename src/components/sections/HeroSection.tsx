"use client";
import { images } from "@/config/images";
import { cn } from "@/lib/cn";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${images.hero.src})` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Unlock Your Radiance</h1>
        <p className="mt-4 text-lg">Premier medical aesthetics services tailored for you.</p>
        <div className="mt-8">
          <a href="/book" className="bg-accent text-white py-3 px-6 rounded-lg">Book Now</a>
          <a href="/services" className="border border-white text-white py-3 px-6 rounded-lg ml-4">Learn More</a>
        </div>
      </div>
    </section>
  );
}