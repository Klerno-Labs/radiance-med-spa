"use client";
import { images } from "@/config/images";

const Hero = ({ image }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold">{image.alt}</h1>
        <p className="mt-4 text-lg">Experience the best in aesthetic treatments.</p>
        <div className="mt-6">
          <button className="bg-primary text-white px-6 py-3 rounded-lg">Book Consultation</button>
          <button className="ml-4 border border-white text-white px-6 py-3 rounded-lg">View Treatments</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;