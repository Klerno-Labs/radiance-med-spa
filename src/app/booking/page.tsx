import { z } from "zod";

import BookingWizard from "@/components/sections/BookingWizard";

export const metadata = {
  title: "Book Now - Radiance Med Spa",
  description: "Schedule your appointment at Radiance Med Spa for advanced aesthetic treatments.",
  openGraph: {
    title: "Book Now - Radiance Med Spa",
    description: "Schedule your appointment at Radiance Med Spa for advanced aesthetic treatments.",
    image: "https://mfile.z.ai/1774368232436-ff51f58548fd4d648064a76b46c74440.png?ufileattname=202603250003432087531ef1be42f1_watermark.png",
  },
};

export default function BookingPage() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center py-16">Book Your Appointment</h1>
      <BookingWizard />
    </main>
  );
}