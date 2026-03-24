"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white/80 backdrop-blur-sm py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src={images["hero"].src}
            alt="Radiance Med Spa Logo"
            className="h-10 w-auto"
            width={100}
            height={40}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-primary font-medium transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
            About
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-primary font-medium transition-colors">
            Gallery
          </Link>
          <Link
            href="/booking"
            className="bg-primary hover:bg-[#3d6b4a] text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm hover:shadow-md"
          >
            Book Now
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-gray-900"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col p-4 gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary font-medium py-2"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary font-medium py-2"
            >
              About
            </Link>
            <Link
              href="/gallery"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary font-medium py-2"
            >
              Gallery
            </Link>
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white text-center py-3 rounded-md font-medium"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}