"use client";
import ServiceCard from "@/components/ui/ServiceCard";

const ServicesGrid = () => {
  const services = [
    { title: "Botox", description: "Smooth out wrinkles and fine lines.", price: "$250 - $600" },
    { title: "Fillers", description: "Add volume and fullness to your face.", price: "$400 - $800" },
    { title: "Laser Therapy", description: "Advanced laser treatments for skin rejuvenation.", price: "$300 - $700" },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} price={service.price} />
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;