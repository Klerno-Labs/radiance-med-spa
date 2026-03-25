"use client";
import { images } from "@/config/images";

const testimonials = [
  {
    name: "Maria L.",
    role: "Client",
    quote: "I had an amazing experience with the Botox treatment. The results were incredible!",
  },
  {
    name: "James T.",
    role: "Client",
    quote: "The team at Radiance Med Spa made me feel comfortable and the results were fantastic.",
  },
  {
    name: "Sophia R.",
    role: "Client",
    quote: "I love my new look! The fillers were applied perfectly and I couldn't be happier.",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
      <div className="mt-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-card p-6 mb-4">
            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            <p className="mt-2 font-semibold">{testimonial.name}</p>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}