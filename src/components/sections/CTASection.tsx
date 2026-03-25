"use client";
import { images } from "@/config/images";

export default function CTASection() {
  return (
    <section className="py-16 bg-accent text-white text-center">
      <h2 className="text-3xl font-bold">Ready to Unlock Your Radiance?</h2>
      <p className="mt-4">Schedule your appointment today and experience the best in aesthetic treatments.</p>
      <a href="/book" className="mt-6 inline-block bg-white text-accent py-3 px-6 rounded-lg">Book Now</a>
    </section>
  );
}