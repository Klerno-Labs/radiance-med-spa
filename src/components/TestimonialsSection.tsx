import Image from 'next/image'
import { Quote } from 'lucide-react'
import Container from '@/components/Container'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Client since 2022",
      content: "I've been going to Radiance for over a year now, and I can't imagine going anywhere else. The atmosphere is calming, and the results are incredible.",
      image: "https://images.pexels.com/photos/11043286/pexels-photo-11043286/?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "James T.",
      role: "Client since 2023",
      content: "The Botox results were exactly what I wanted—natural and refreshed. Dr. Smith really listens to what you want.",
      image: "https://images.pexels.com/photos/11043014/pexels-photo-11043014/?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Elena R.",
      role: "Client since 2021",
      content: "Their laser hair removal service is a game-changer. The staff is professional, and the facility is top-notch.",
      image: "https://images.pexels.com/photos/11043189/pexels-photo-11043189/?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ]

  return (
    <section className="relative py-20 bg-surface">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <Image 
          src={images['testimonial-bg'].src} 
          alt="" 
          fill 
          className="object-cover"
          quality={50}
        />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="flex justify-center gap-1 text-secondary mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-card relative">
              <div className="absolute top-6 left-6 text-primary/10">
                <Quote className="w-16 h-16" />
              </div>
              <div className="relative z-10 pt-8">
                <p className="text-slate-600 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={48}
                    height={48}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}