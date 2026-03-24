"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { images } from "@/config/images";
import { Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <img src={images.logo.src} alt="Radiance Med Spa Logo" className="h-10" />
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
          <a href="/services" className="text-gray-800 hover:text-gray-600">Services</a>
          <a href="/about" className="text-gray-800 hover:text-gray-600">About</a>
          <a href="/gallery" className="text-gray-800 hover:text-gray-600">Gallery</a>
          <a href="/booking" className="text-gray-800 hover:text-gray-600">Book Now</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2">
            <a href="/" className="block text-gray-800 hover:text-gray-600">Home</a>
            <a href="/services" className="block text-gray-800 hover:text-gray-600">Services</a>
            <a href="/about" className="block text-gray-800 hover:text-gray-600">About</a>
            <a href="/gallery" className="block text-gray-800 hover:text-gray-600">Gallery</a>
            <a href="/booking" className="block text-gray-800 hover:text-gray-600">Book Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}