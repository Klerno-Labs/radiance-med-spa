import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";

export default function Home() {
  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={images.hero.src}
              alt={images.hero.alt}
              width={images.hero.width}
              height={images.hero.height}
              priority
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 drop-shadow-md">
              Reveal Your Best Self
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-sm opacity-95">
              Premier aesthetic treatments tailored to your unique beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button variant="primary" className="w-full sm:w-auto">
                  Book Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                  View Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
            <svg
              className="w-6 h-6 text-white opacity-80"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Our Expert Treatments
              </h2>
              <p className="text-lg text-gray-600">
                Discover our range of medical-grade skincare and aesthetic procedures designed to enhance your natural radiance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="overflow-hidden h-64">
                  <img
                    src={images["service-1"].src}
                    alt="Advanced skincare treatment in a serene spa environment"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Skincare Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Customized facials and medical-grade peels to address acne, aging, and pigmentation.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="overflow-hidden h-64">
                  <img
                    src={images["service-2"].src}
                    alt="Relaxing laser therapy session"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Laser Therapy</h3>
                  <p className="text-gray-600 mb-4">
                    Safe and effective hair removal, skin tightening, and pigmentation correction.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="overflow-hidden h-64">
                  <img
                    src={images["service-3"].src}
                    alt="Professional injectable treatments by our certified providers"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Botox & Fillers</h3>
                  <p className="text-gray-600 mb-4">
                    Subtle enhancements to restore volume and smooth dynamic wrinkles.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={images.cta.src}
              alt="Modern spa interior"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to Transform Your Look?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our list of satisfied clients and experience the Radiance difference.
            </p>
            <Link href="/book">
              <Button variant="secondary" className="text-lg px-8 py-3 bg-secondary hover:bg-yellow-400">
                Schedule Your Visit
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}