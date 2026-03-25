"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone.replace(/\D/g, ""));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(formData.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-green-50 rounded-xl border border-green-200">
        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 text-center">
          We have received your message and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot Field for Spam Prevention */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className={cn(
              "block w-full rounded-md border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500"
            )}
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "block w-full rounded-md border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500"
            )}
            placeholder="john@example.com"
          />
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-medium text-gray-900">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          >
            <option value="">Select a service...</option>
            <option value="consultation">Free Consultation</option>
            <option value="botox">Botox & Fillers</option>
            <option value="laser">Laser Therapy</option>
            <option value="skincare">Medical Skincare</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="block w-full rounded-md border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          placeholder="Tell us how we can help you achieve your aesthetic goals..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed",
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-primary hover:bg-primary/90 hover:shadow-md"
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};