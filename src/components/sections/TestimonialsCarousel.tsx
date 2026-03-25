import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsCarousel({ testimonials }) {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="flex overflow-x-auto space-x-4">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
}