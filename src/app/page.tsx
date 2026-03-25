import Image from 'next/image'
import { HeroSection } from '@/components/HeroSection'
import { ServicesGrid } from '@/components/ServicesGrid'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { CTASection } from '@/components/CTASection'
import { Container } from '@/components/Container'
import { ArrowDown } from 'lucide-react'

export default function Home() {
  return (
    <main className="page-enter">
      <HeroSection />
      
      <div className="absolute top-[85vh] left-1/2 transform -translate-x-1/2 z-10 animate-bounce-slow text-primary">
        <ArrowDown className="h-8 w-8" />
      </div>

      <Container className="bg-surface rounded-xl p-6 md:p-8 lg:p-12 shadow-sm -mt-20 relative z-20 mb-20">
        <ServicesGrid />
      </Container>

      <TestimonialsSection />
      
      <CTASection />
    </main>
  )
}