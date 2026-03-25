import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Services | Radiance Med Spa - Houston',
  description: 'Discover our premium medical aesthetic services including Botox, fillers, laser therapy, and facials in Houston, TX.',
}

export default function ServicesPage() {
  const services = [
    {
      title: "Botox & Dermal Fillers",
      description: "Non-surgical treatments to smooth wrinkles, restore volume, and enhance natural contours. Our providers use premium products for safe, effective results.",
      priceRange: "$300 - $1,200",
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      details: ["Neuromodulators", "Hydration", "Contouring", "Lip Augmentation"]
    },
    {
      title: "Laser Hair Removal",
      description: "Safe, effective hair reduction for all skin types. Experience long-lasting results with our FDA-approved laser technology.",
      priceRange: "$100 - $400 per session",
      image: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      details: ["Full Body", "Face", "Brazilian", "Underarms"]
    },
    {
      title: "Chemical Peels",
      description: "Deep exfoliation treatments to improve skin texture, tone, and clarity. Choose from light to deep peels for your specific needs.",
      priceRange: "$150 - $600",
      image: "https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      details: ["Glycolic", "Salicylic", "TCA", "Microneedling"]
    },
    {
      title: "Laser Skin Rejuvenation",
      description: "Restore youthful skin using advanced laser technology to target pigmentation, redness, and sun damage.",
      priceRange: "$250 - $800",
      image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      details: ["V-Beam", "Fractional CO2", "Laser Resurfacing"]
    },
    {
      title: "Facials & Skin Care",
      description: "Customized facials using medical-grade products to hydrate, rejuvenate, and protect your skin barrier.",
      priceRange: "$120 - $350",
      image: "https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      details: ["Hydrafacial", "Customized", "Microneedling+", "Oxygen Facials"]
    },
    {
      title: "Medical Acne Treatment",
      description: "Comprehensive solutions for active acne and acne scarring using topicals, prescriptions, and procedures.",
      priceRange: "$75 - $200",
      image: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      details: ["Clear & Brilliant", "Zeria", "Prescription Topicals"]
    }
  ]

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        {/* Hero */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Personalized aesthetic treatments tailored to your unique goals and skin type.
          </p>
        </div>

        {/* Services List */}
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.title} className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <span className="text-sm font-bold text-primary">{service.priceRange}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.details.map((detail) => (
                      <span key={detail} className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                        {detail}
                      </span>
                    ))}
                  </div>
                  <Link href="/book" className="inline-flex items-center font-semibold text-primary hover:underline">
                    Book This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* FAQ */}
        <div className="bg-surface py-20 mt-20">
          <Container>
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Is the consultation free?</h4>
                <p className="text-slate-600">Yes, your first consultation is complimentary. We will assess your goals and recommend the best treatment plan.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">How do I prepare for my appointment?</h4>
                <p className="text-slate-600">We recommend avoiding blood thinners (like aspirin or ibuprofen) 24 hours before your appointment and avoiding alcohol for 24 hours.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Is there downtime?</h4>
                <p className="text-slate-600">Most treatments have little to no downtime. You can return to work immediately after most procedures.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">What if I have sensitive skin?</h4>
                <p className="text-slate-600">We use gentle, medical-grade products and perform patch tests when necessary to ensure your safety.</p>
              </div>
            </div>
          </Container>
        </div>

        {/* CTA */}
        <div className="py-20 bg-primary text-white text-center">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Start?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Book your consultation with our expert providers today.
            </p>
            <Link href="/book">
              <Button variant="secondary" className="text-lg py-4 px-8">
                Book Appointment
              </Button>
            </Link>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  )
}