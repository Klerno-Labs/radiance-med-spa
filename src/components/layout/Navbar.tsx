"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Book Now", href: "/book" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary font-accent">
              Radiance Med Spa
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:5125551234"
              className="flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              (512) 555-1234
            </a>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden p-2 -mr-2 text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:5125551234"
              className="flex items-center px-3 py-3 text-base font-semibold text-primary"
            >
              <Phone className="w-5 h-5 mr-3" />
              (512) 555-1234
            </a>
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary/90"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};