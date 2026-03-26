"use client"

import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Specials | Radiance Med Spa',
  description: 'Current promotions and special offers at Radiance Med Spa.',
}

export default function SpecialsPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7) // 7 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const specials = [
    {
      title: "New Client Special",
      description: "Get 20% off your first Botox treatment when you mention this offer.",
      discount: "20% OFF",
      endDate: "Promotion ends in:",
      image: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
    },
    {
      title: "Laser Package Deal",
      description: "Buy 6 sessions of laser hair removal and get the 7th session free.",
      discount: "BOGO FREE",
      endDate: "Offer valid until:",
      image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
    },
    {
      title: "Summer Glow Facial",
      description: "Our signature hydrating facial is now $50 off during July.",
      discount: "$50 OFF",
      endDate: "Valid until:",
      image: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
    }
  ]

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Special Offers</h1>
          <p className="text-xl text-slate-600">Limited time offers to help you look and feel your best.</p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specials.map((special, index) => (
              <div key={index} className="relative group rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute top-4 right-4 z-10 bg-primary text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  {special.discount}
                </div>
                
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={special.image} 
                    alt={special.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                </div>

                <div className="relative p-8">
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">{special.title}</h3>
                  <p className="text-slate-200 mb-6">{special.description}</p>
                  
                  <div className="flex justify-between items-center text-white mb-6">
                    <span className="font-medium text-sm uppercase tracking-wide">{special.endDate}</span>
                    <div className="flex gap-2 text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded px-3 py-1 min-w-[50px]">
                        <span className="block text-xl font-bold">{timeLeft.days}</span>
                        <span className="text-[10px] uppercase">Days</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded px-3 py-1 min-w-[50px]">
                        <span className="block text-xl font-bold">{timeLeft.hours}</span>
                        <span className="text-[10px] uppercase">Hrs</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded px-3 py-1 min-w-[50px]">
                        <span className="block text-xl font-bold">{timeLeft.minutes}</span>
                        <span className="text-[10px] uppercase">Min</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded px-3 py-1 min-w-[50px]">
                        <span className="block text-xl font-bold">{timeLeft.seconds}</span>
                        <span className="text-[10px] uppercase">Sec</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/book">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-slate-900">
                      Claim Offer
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
