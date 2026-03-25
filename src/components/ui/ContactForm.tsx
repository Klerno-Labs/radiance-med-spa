"use client";

import { useState } from "react";
import type { ContactFormData } from "@/types/contact"; // Fixed: Import missing type
import { cn } from "@/lib/utils";

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Honeypot check (Critical: Fixed)
    const honeypot = (e.currentTarget as HTMLFormElement).elements.namedItem(
      "_gotcha"
    ) as HTMLInputElement;
    if (honeypot && honeypot.value !== "") {
      return; // Bot detected
    }

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
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
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        if (onSuccess) onSuccess();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg flex items-start gap-3">
        <span className="text-2xl">✓</span>
        <div>
          <h3 className="font-bold">Thank You!</h3>
          <p className="text-sm">We&apos;ll be in touch within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          required
          className={cn(
            "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all",
            error && "border-red-500 focus:ring-red-500"
          )}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          required
          className={cn(
            "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all",
            error && "border-red-500 focus:ring-red-500"
          )}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message || ""}
          onChange={handleChange}
          required
          rows={4}
          className={cn(
            "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none",
            error && "border-red-500 focus:ring-red-500"
          )}
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full py-3 px-4 rounded-md font-medium text-white transition-all duration-200 flex justify-center items-center gap-2",
          isSubmitting
            ? "bg-primary/50 cursor-not-allowed"
            : "bg-primary hover:bg-[#3d6b4a] shadow-sm hover:shadow-md"
        )}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}