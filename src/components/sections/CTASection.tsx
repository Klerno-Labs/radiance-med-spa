import React from "react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-primary text-white py-16 md:py-24 lg:py-32 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Radiance?</h2>
      <p className="mb-6">Book your appointment today and experience the best in aesthetic treatments.</p>
      <Button variant="secondary" size="lg">Book Now</Button>
    </section>
  );
}