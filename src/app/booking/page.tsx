import BookingWizard from "@/components/sections/BookingWizard";

export const metadata = {
  title: "Book Now | Radiance Med Spa",
  description: "Schedule your appointment at Radiance Med Spa.",
};

export default function Booking() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Book Your Appointment</h1>
      <BookingWizard />
    </div>
  );
}