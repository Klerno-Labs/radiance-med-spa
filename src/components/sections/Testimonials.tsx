export default function Testimonials() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-card p-6">
          <p className="text-sm italic">"I had an amazing experience! The staff was professional and the results were incredible."</p>
          <p className="mt-4 font-semibold">Maria L.</p>
        </div>
        <div className="bg-white rounded-xl shadow-card p-6">
          <p className="text-sm italic">"The laser treatment changed my life. I feel more confident than ever!"</p>
          <p className="mt-4 font-semibold">James T.</p>
        </div>
        <div className="bg-white rounded-xl shadow-card p-6">
          <p className="text-sm italic">"Highly recommend Radiance Med Spa! The team is knowledgeable and caring."</p>
          <p className="mt-4 font-semibold">Sarah J.</p>
        </div>
      </div>
    </section>
  );
}