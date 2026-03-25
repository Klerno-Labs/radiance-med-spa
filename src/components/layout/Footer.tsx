import React from "react";
import { cn } from "@/lib/cn";
import { Facebook, Instagram, Twitter } from "lucide-react";

import Link from "next/link";
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold">About Us</h5>
            <p className="text-sm">Radiance Med Spa is dedicated to providing the highest quality aesthetic treatments.</p>
          </div>
          <div>
            <h5 className="font-bold">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold">Contact Us</h5>
            <p className="text-sm">4521 Westheimer Rd, Suite 200, Houston, TX 77027</p>
            <p className="text-sm">(512) 555-1234</p>
          </div>
          <div>
            <h5 className="font-bold">Follow Us</h5>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                <Facebook />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
                <Instagram />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">© {new Date().getFullYear()} Radiance Med Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}