import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import images from '@/config/images'

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={images.hero.src} 
          alt={images.hero.alt}
          width={1200}
          height={800}
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg animate-slide-up">
          Reveal Your Best Self
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light text-gray-100 drop-shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Experience world-class medical aesthetics in a tranquil, luxurious setting.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button href="/book" variant="primary" className="w-full sm:w-auto text-lg py-4 px-8">
            Book Consultation
          </Button>
          <Button href="/services" variant="outline" className="w-full sm:w-auto text-lg py-4 px-8 border-white text-white hover:bg-white hover:text-primary">
            View Services
          </Button>
        </div>
      </div>
    </section>
  )
}