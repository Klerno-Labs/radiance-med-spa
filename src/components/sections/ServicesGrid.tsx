"use client";
import { images } from "@/config/images";

const services = [
  {
    title: "Botox",
    description: "Smooth out wrinkles and fine lines with our expert Botox treatments.",
    image: images["service-1"].src,
  },
  {
    title: "Fillers",
    description: "Enhance your natural beauty with our premium dermal fillers.",
    image: images["service-2"].src,
  },
  {
    title: "Laser Therapy",
    description: "Achieve clear skin with our advanced laser therapy options.",
    image: images["service-3"].src,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <div key={index} className="bg-surface rounded-lg shadow-card p-6">
            <img src={service.image} alt={service.title} className="w-full h-auto object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}