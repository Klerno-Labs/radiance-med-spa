import React from "react";

export function TeamSection({ teamMembers }) {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="border rounded-lg p-4">
            <img src={member.photo} alt={member.name} className="rounded-xl mb-4" />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm">{member.role}</p>
            <p className="text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}