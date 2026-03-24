import { images } from "@/config/images";

export default function ServicesGrid() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-card p-6">
          <img src={images.service-1.src} alt={images.service-1.alt} className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold mt-4">Laser Treatments</h3>
          <p className="text-sm text-muted">Advanced laser technology for skin rejuvenation.</p>
        </div>
        <div className="bg-white rounded-xl shadow-card p-6">
          <img src={images.service-2.src} alt={images.service-2.alt} className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold mt-4">Botox Injections</h3>
          <p className="text-sm text-muted">Smooth out wrinkles with our expert Botox treatments.</p>
        </div>
        <div className="bg-white rounded-xl shadow-card p-6">
          <img src={images.service-3.src} alt={images.service-3.alt} className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold mt-4">Facial Treatments</h3>
          <p className="text-sm text-muted">Revitalize your skin with our luxurious facials.</p>
        </div>
      </div>
    </section>
  );
}