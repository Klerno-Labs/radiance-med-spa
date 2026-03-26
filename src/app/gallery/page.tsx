"use client"

import { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/ui/Modal'
import { X } from 'lucide-react'

export default function GalleryPage() {
  const galleryItems = [
    { id: 1, src: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop", alt: "Spa Products" },
    { id: 2, src: "https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop", alt: "Treatment Room" },
    { id: 3, src: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop", alt: "Skincare Products" },
    { id: 4, src: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop", alt: "Spa Interior" },
    { id: 5, src: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop", alt: "Relaxing Atmosphere" },
    { id: 6, src: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop", alt: "Skincare Application" },
  ]

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Our Gallery</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Step inside our facility and see the results of our treatments.
          </p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square md:aspect-video lg:aspect-auto lg:h-[400px] overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <div className="flex flex-col h-full">
            <img 
              src={selectedImage} 
              alt="Full view"
              className="w-full h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="flex justify-between items-center mt-4">
               <p className="text-slate-500 text-sm">Click outside to close</p>
               <button 
                 onClick={() => setSelectedImage(null)}
                 className="p-2 bg-slate-100 rounded-full hover:bg-slate-200"
                 aria-label="Close image"
               >
                 <X className="h-6 w-6 text-slate-700" />
               </button>
            </div>
          </div>
        )}
      </Modal>
      <Footer />
    </>
  )
}
