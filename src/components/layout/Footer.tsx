import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold">About Us</h5>
          <p>{siteConfig.description}</p>
        </div>
        <div>
          <h5 className="font-bold">Quick Links</h5>
          <ul>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold">Contact Us</h5>
          <p className="flex items-center"><Phone className="mr-2" /> {siteConfig.phone}</p>
          <p className="flex items-center"><Mail className="mr-2" /> {siteConfig.email}</p>
          <p className="flex items-center"><MapPin className="mr-2" /> {siteConfig.address}</p>
        </div>
        <div>
          <h5 className="font-bold">Follow Us</h5>
          <ul>
            <li><a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}