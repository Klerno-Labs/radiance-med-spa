"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Phone, Menu, X } from 'lucide-react'
import images from '@/config/images'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Specials', href: '/specials' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative w-32 h-12">
               {/* Using placeholder logo logic based on image config if needed, 
                   but for static export without assets, we use text or a stylized div.
                   Since 'logo-brand.svg' is requested in config but not defined in images.ts above,
                   I will use a textual logo for reliability in this static export context.
                */}
               <div className="relative w-full h-full flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-primary group-hover:opacity-90 transition-opacity">
                    Radiance<span className="text-slate-900">MedSpa</span>
                  </span>
               </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:7135550123" 
              className="flex items-center gap-2 text-slate-600 hover:text-primary font-medium"
            >
              <Phone className="h-5 w-5" />
              <span>(713) 555-0123</span>
            </a>
            <Link href="/book">
              <Button variant="primary">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-primary focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-slate-600 hover:text-primary py-2 border-b border-slate-50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <a 
                href="tel:7135550123" 
                className="flex items-center gap-2 text-slate-600 font-semibold"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>(713) 555-0123</span>
              </a>
              <Link href="/book" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}