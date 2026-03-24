import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Radiance Med Spa",
  description: "Read our privacy policy and data protection practices at Radiance Med Spa in Houston, TX.",
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-20 px-6 py-12 md:px-8 md:py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-lg text-gray-600 mb-8">
        At Radiance Med Spa, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
      </p>
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
        <p className="text-gray-600 leading-relaxed">
          We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for services.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
        <p className="text-gray-600 leading-relaxed">
          We use your information to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
        <p className="text-gray-600 leading-relaxed">
          You have the right to access, correct, or delete your personal data. Please contact us at info@radiancemedspa.com for requests.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 leading-relaxed">
          If you have any questions about this policy, please contact us at info@radiancemedspa.com.
        </p>
      </section>
    </main>
  );
}