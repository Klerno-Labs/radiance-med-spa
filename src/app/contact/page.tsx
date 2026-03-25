"use client"

import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact | Radiance Med Spa',
  description: 'Get in touch with Radiance Med Spa. We are here to answer your questions.',
}

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '',
      })
    }, 5000)
  }

  if (isSuccess) {
    return (
      <div className="pt-32 pb-20 bg-white min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 text-center max-w-2xl mt-10">
          <div className="bg-green-100 text-green-800 p-8 rounded-xl mb-6">
            <svg className="w-16 h-16 mx-auto mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <h2 className="text-3xl font-bold mb-2">Message Sent!</h2>
            <p className="text-lg">Thank you for contacting us. We will get back to you as soon as possible.</p>
          </div>
          <Link href="/" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors">
            Return Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Contact Us</h1>
            <p className="text-xl text-slate-600 mb-12">
              Have questions about our services? We&apos;d love to hear from you. Fill out the form or reach us directly.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="p-4 bg-primary/10 rounded-lg text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h3>
                  <p className="text-slate-600">
                    4521 Westheimer Rd, Suite 200<br />
                    Houston, TX 77027
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-4 bg-primary/10 rounded-lg text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                  <a href="tel:7135550123" className="text-primary font-bold hover:underline">
                    (713) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-4 bg-primary/10 rounded-lg text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                  <a href="mailto:info@radiancemedspa.com" className="text-primary font-bold hover:underline">
                    info@radiancemedspa.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-4 bg-primary/10 rounded-lg text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Business Hours</h3>
                  <p className="text-slate-600">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="contact-name"
                  label="Name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input
                  id="contact-phone"
                  label="Phone"
                  type="tel"
                  placeholder="(713) 555-0123"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              <Input
                id="contact-email"
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />

              <div>
                <label htmlFor="contact-service" className="block text-sm font-semibold text-slate-700 mb-2">Interested In</label>
                <select
                  id="contact-service"
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Select a service...</option>
                  <option value="general">General Inquiry</option>
                  <option value="botox">Botox & Fillers</option>
                  <option value="laser">Laser Hair Removal</option>
                  <option value="facial">Skincare</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>

              {/* Honeypot */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full text-lg py-4"
                isLoading={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}