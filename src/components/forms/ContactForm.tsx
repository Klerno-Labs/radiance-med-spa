"use client";
import { useState } from "react";
import { cn } from "@/lib/cn";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block">Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className={cn("border rounded-md p-2 w-full")} />
      </div>
      <div>
        <label htmlFor="email" className="block">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className={cn("border rounded-md p-2 w-full")} />
      </div>
      <div>
        <label htmlFor="phone" className="block">Phone</label>
        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className={cn("border rounded-md p-2 w-full")} />
      </div>
      <div>
        <label htmlFor="message" className="block">Message</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} required className={cn("border rounded-md p-2 w-full")} />
      </div>
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <button type="submit" disabled={isSubmitting} className={cn("bg-accent text-white py-2 px-4 rounded-md")}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSuccess && <p className="text-green-500">Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}