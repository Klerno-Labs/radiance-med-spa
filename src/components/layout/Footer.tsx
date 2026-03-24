import { images } from "@/config/images";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold">Radiance Med Spa</h2>
          <p className="text-sm">Your trusted partner in aesthetic treatments.</p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Quick Links</h3>
          <ul>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold">Contact Us</h3>
          <p className="flex items-center"><Phone className="mr-2" /> (512) 555-1234</p>
          <p className="flex items-center"><Mail className="mr-2" /> info@radiancemedspa.com</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>© {new Date().getFullYear()} Radiance Med Spa. All rights reserved.</p>
      </div>
    </footer>
  );
}