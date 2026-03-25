"use client";

import { useState } from "react";
import { Image as ImageIcon, X } from "lucide-react";
import { images } from "@/config/images";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const galleryImages = [
    { key: "gallery-1", alt: "Luxury spa bottles with essential oils arranged on marble" },
    { key: "gallery-2", alt: "Relaxing spa treatment room with soft lighting and towels" },
    { key: "gallery-3", alt: "Professional skincare products displayed on glass shelves" },
    { key: "about", alt: "Elegant spa interior waiting area with calming decor" },
  ];

  return (
    <>
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4 font-heading">
              Our Studio
            </h1>
            <p className="text-lg text-gray-600">
              Step into a world of tranquility and beauty. Our clinic is designed to provide a relaxing experience from the moment you walk in.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedImage({ src: images[item.key].src, alt: item.alt })
                }
                className="relative aspect-square rounded-xl overflow-hidden bg-gray-200 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <img
                  src={images[item.key].src}
                  alt={item.alt}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
          aria-modal="true"
          role="dialog"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white p-2 bg-black/50 rounded-full hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}