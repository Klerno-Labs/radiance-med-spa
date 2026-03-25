"use client";

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/Container'
import images from '@/config/images'

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: "Botox & Injectables",
      description: "Smooth fine lines and wrinkles with our expertly administered Botox and dermal filler treatments designed for natural, youthful results.",
      image: images['service-1'],
      link: "/services",
    },
    {
      id: 2,
      title: "Laser Therapy",
      description: "Advanced laser treatments for hair removal, skin rejuvenation, and acne reduction using state-of-the-art technology.",
      image: images['service-3'],
      link: "/services",
    },
    {
      id: 3,
      title: "Skincare Treatments",
      description: "Customized facials and chemical peels tailored to your skin type, focusing on hydration, radiance, and repair.",
      image: images['service-2'],
      link: "/services",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div 
          key={service.id} 
          className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="relative h-64 overflow-hidden">
            <img 
              src={service.image.src} 
              alt={service.image.alt}
              width={1200}
              height={800}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">{service.description}</p>
            <Link href={service.link} className="inline-flex items-center font-semibold text-primary hover:underline">
              Learn More 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}