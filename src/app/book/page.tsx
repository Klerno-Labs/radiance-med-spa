"use client"

import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Modal from '@/components/ui/Modal'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Book Now | Radiance Med Spa',
  description: 'Schedule your appointment at Radiance Med Spa. Choose your service, date, and time.',
}

export default function BookPage() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
      })
    }, 5000)
  }

  const availableTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

  if (isSuccess) {
    return (
      <div className="pt-32 pb-20 bg-white min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 text-center max-w-2xl mt-10">
          <div className="bg-green-100 text-green-800 p-8 rounded-xl mb-6">
            <svg className="w-16 h-16 mx-auto mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <h2 className="text-3xl font-bold mb-2">Appointment Requested!</h2>
            <p className="text-lg">We have received your booking request. One of our specialists will contact you within 24 hours to confirm your appointment.</p>
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
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Book Your Appointment</h1>
            <p className="text-xl text-slate-600">Fill out the form below and we&apos;ll get back to you shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="name"
                label="Full Name"
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <Input
                id="phone"
                label="Phone Number"
                type="tel"
                placeholder="(713) 555-0123"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>

            <Input
              id="email"
              label="Email Address"
              type="email"
              placeholder="jane@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">Service</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  required
                >
                  <option value="">Select a service...</option>
                  <option value="botox">Botox & Fillers</option>
                  <option value="laser">Laser Hair Removal</option>
                  <option value="facial">Chemical Peels</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date</label>
                <input
                  id="date"
                  type="date"
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Time</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData({...formData, time})}
                    className={cn(
                      "py-2 px-4 rounded-md border transition-all",
                      formData.time === time
                        ? "border-primary bg-primary text-white"
                        : "border-slate-300 text-slate-700 hover:border-primary hover:bg-slate-50"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-surface p-6 rounded-xl mt-8">
               <h3 className="font-bold text-slate-900 mb-2">Privacy Note</h3>
               <p className="text-sm text-slate-600">
                 By submitting this form, you agree to our privacy policy. Your personal information will be used solely for scheduling your appointment and will not be shared with third parties.
               </p>
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              className="w-full text-lg py-4"
              isLoading={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Submit Request"}
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
