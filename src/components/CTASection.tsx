import Image from 'next/image'
import Button from '@/components/ui/Button'
import Container from '@/components/Container'
import images from '@/config/images'

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={images['cta'].src} 
          alt={images['cta'].alt}
          width={1200}
          height={800}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
          Ready to Elevate Your Beauty?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-primary-foreground/90">
          Schedule your consultation today and take the first step towards a more confident you. 
          Our team is ready to create your personalized treatment plan.
        </p>
        <Button href="/book" variant="secondary" className="w-full sm:w-auto text-lg py-4 px-8">
          Book Now
        </Button>
      </Container>
    </section>
  )
}