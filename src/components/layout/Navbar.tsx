"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <Link href="/" className="text-2xl font-bold">
          {siteConfig.name}
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/gallery" className="text-gray-700 hover:text-gray-900">Gallery</Link>
          <Link href="/book" className="text-gray-700 hover:text-gray-900">Book Now</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </div>
      </div>
    </nav>
  );
}