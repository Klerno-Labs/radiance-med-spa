import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us | Radiance Med Spa',
  description: 'Learn about Radiance Med Spa\'s mission, values, and the expert team dedicated to your aesthetic health.',
}

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Emily Smith",
      role: "Medical Director",
      bio: "Dr. Smith is a board-certified dermatologist with over 15 years of experience in medical aesthetics. She founded Radiance to combine clinical excellence with a patient-first philosophy.",
      image: "https://images.pexels.com/photos/5069612/pexels-photo-5069612.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
    },
    {
      name: "Jessica Martinez, RN",
      role: "Lead Aesthetic Injector",
      bio: "Jessica brings 10 years of nursing experience specializing in injectables and laser therapies. She is known for her gentle technique and artistry.",
      image: "https://images.pexels.com/photos/11043012/pexels-photo-11043012/?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
    }
  ]

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        {/* Hero */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={images['about'].src} 
                alt="About Radiance Med Spa"
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                Elevating Aesthetics Since 2018
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Radiance Med Spa, we believe that everyone deserves to feel confident in their skin. Our mission is to provide 
                safe, effective, and luxurious medical aesthetic treatments in a serene environment. We are committed to staying at the 
                forefront of technological advancements in skincare.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our state-of-the-art facility in Houston is equipped with the latest FDA-approved technologies, and our team is 
                dedicated to providing personalized care that exceeds expectations.
              </p>
              <Link href="/book">
                <Button variant="primary">Meet Our Team</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-surface py-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Safety First</h3>
                  <p className="text-slate-600">We adhere to the highest medical standards and safety protocols.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Authentic Care</h3>
                  <p className="text-slate-600">We listen to your unique needs and provide honest, personalized advice.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Results-Oriented</h3>
                  <p className="text-slate-600">We focus on delivering measurable, long-lasting aesthetic improvements.</p>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Team */}
        <div className="py-20 bg-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Meet Our Providers</h2>
              <p className="text-lg text-slate-600">
                Our expert team is here to guide your aesthetic journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="bg-surface rounded-xl p-8 text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-slate-600 italic">{member.bio}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  )
}