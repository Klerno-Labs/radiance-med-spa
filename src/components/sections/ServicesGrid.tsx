import React from "react";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid({ services }) {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}