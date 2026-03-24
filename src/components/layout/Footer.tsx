"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary">Radiance Med Spa</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your premier destination for advanced aesthetic treatments in Houston, TX. Experience the difference of professional care.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-primary">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/booking" className="text-gray-400 hover:text-white transition-colors text-sm">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link href="/specials" className="text-gray-400 hover:text-white transition-colors text-sm">
                Special Offers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-primary">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
              <span className="text-gray-400 text-sm"> (713) 555-0123</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary flex-shrink-0" />
              <Link
                href="mailto:info@radiancemedspa.com"
                className="text-gray-400 text-sm hover:text-primary transition-colors"
              >
                info@radiancemedspa.com
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
              <span className="text-gray-400 text-sm">
                4521 Westheimer Rd, Suite 200
                <br />
                Houston, TX 77027
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-primary">Business Hours</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex justify-between">
              <span>Mon - Fri</span>
              <span className="text-white">8:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span className="text-white">9:00 AM - 2:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="text-white">Closed</span>
            </li>
          </ul>

          <div className="mt-8 border-t border-gray-800 pt-6">
            <Link
              href="/privacy"
              rel="noopener noreferrer"
              className="block text-gray-500 hover:text-gray-300 text-xs mb-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              rel="noopener noreferrer"
              className="block text-gray-500 hover:text-gray-300 text-xs"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Radiance Med Spa. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="mt-4 bg-gray-800 hover:bg-primary text-white p-2 rounded-full transition-all duration-300 opacity-0 pointer-events-none"
          style={{ opacity: isAtTop ? 0 : 1, pointerEvents: isAtTop ? "none" : "auto" }}
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}