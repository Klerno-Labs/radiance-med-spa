import ContactForm from "@/components/ui/ContactForm";

export const metadata = {
  title: "Contact Us | Radiance Med Spa",
  description: "Get in touch with us for inquiries or to book an appointment.",
};

export default function Contact() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <ContactForm />
    </div>
  );
}