import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold">
          Radiance Med Spa
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/gallery" className="hover:underline">Gallery</Link>
          <Link href="/book" className="hover:underline">Book Now</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
        <div className="flex items-center">
          <Phone className="mr-2" />
          <span>(512) 555-1234</span>
        </div>
      </div>
    </nav>
  );
}