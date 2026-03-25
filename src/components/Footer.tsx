import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Book Appointment', href: '/book' },
    { name: 'Contact', href: '/contact' },
  ]

  const servicesLinks = [
    { name: 'Botox & Fillers', href: '/services' },
    { name: 'Laser Hair Removal', href: '/services' },
    { name: 'Skin Rejuvenation', href: '/services' },
    { name: 'Chemical Peels', href: '/services' },
    { name: 'FAQ', href: '/contact' },
  ]

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-white">
              Radiance<span className="text-secondary">MedSpa</span>
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Your premier destination for advanced medical aesthetics. 
              We combine clinical expertise with a luxurious experience to help you look and feel your best.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-slate-300 hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span>
                  4521 Westheimer Rd, Suite 200<br />
                  Houston, TX 77027
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:7135550123" className="hover:text-secondary transition-colors">
                  (713) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@radiancemedspa.com" className="hover:text-secondary transition-colors">
                  info@radiancemedspa.com
                </a>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-slate-800 rounded-lg">
              <p className="text-xs text-slate-500 italic mb-1">Hours</p>
              <p className="text-sm font-medium text-white">Mon-Fri: 8am-6pm</p>
              <p className="text-sm font-medium text-white">Sat: 9am-2pm</p>
              <p className="text-sm font-medium text-white">Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Radiance Med Spa. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}