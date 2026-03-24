"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

const galleryImages = [
  images["gallery-1"],
  images["gallery-2"],
  images["gallery-3"],
  images["gallery-4"],
];

interface LightboxProps {
  index?: number;
  onClose?: () => void;
}

export function Lightbox({ index = 0, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(index);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true">
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50 bg-black/50 p-2 rounded-full"
      >
        <X size={28} />
      </button>

      <button
        onClick={prevImage}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors bg-black/50 p-3 rounded-full z-50"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <img
        src={galleryImages[currentIndex].src}
        alt={galleryImages[currentIndex].alt}
        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        loading="eager"
      />

      <button
        onClick={nextImage}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors bg-black/50 p-3 rounded-full z-50"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}