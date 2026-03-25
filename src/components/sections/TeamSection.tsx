"use client";
import { images } from "@/config/images";

const teamMembers = [
  {
    name: "Dr. Emily Carter",
    role: "Lead Dermatologist",
    bio: "With over 15 years of experience, Dr. Carter specializes in advanced aesthetic treatments and skincare.",
    image: images["team-1"].src,
  },
];

export default function TeamSection() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-surface rounded-lg shadow-card p-6">
            <img src={member.image} alt={member.name} className="w-full h-auto object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}