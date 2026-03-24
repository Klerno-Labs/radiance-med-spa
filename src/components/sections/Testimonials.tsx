"use client";
const Testimonials = () => {
  const testimonials = [
    { name: "Maria L.", text: "I had an amazing experience with the Botox treatment. The staff was professional and the results were fantastic!" },
    { name: "James T.", text: "The laser therapy helped rejuvenate my skin. I feel so much more confident now!" },
    { name: "Sophia R.", text: "I love the fillers! The team made me feel comfortable and the results exceeded my expectations." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-card p-6">
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
            <p className="text-right font-bold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;