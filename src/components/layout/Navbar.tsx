"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center h-20">
        <Link href="/" className="text-primary font-bold text-xl">Radiance Med Spa</Link>
        <div className="flex space-x-4">
          <Link href="/services" className="text-gray-700 hover:text-primary">Services</Link>
          <Link href="/about" className="text-gray-700 hover:text-primary">About</Link>
          <Link href="/gallery" className="text-gray-700 hover:text-primary">Gallery</Link>
          <Link href="/booking" className="text-gray-700 hover:text-primary">Book Now</Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
        </div>
        <div className="flex items-center">
          <Phone className="text-primary" />
          <span className="ml-2">(512) 555-0199</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;