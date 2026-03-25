import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Radiance Med Spa",
  description: "Privacy policy for Radiance Med Spa - how we handle your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 font-heading">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-4">
            At Radiance Med Spa, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We may collect information that you voluntarily provide to us when you complete our contact forms, book an appointment, or subscribe to our newsletter. This may include your name, email address, phone number, and treatment preferences.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to provide you with our services, communicate with you regarding appointments and treatments, and improve our website and services. We may also use your information for internal analysis and research purposes.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
          <p className="mb-4">
            We take reasonable steps to help protect information about you from loss, theft, misuse, and unauthorized access. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Your Rights</h2>
          <p className="mb-4">
            You have the right to access, update, or delete your personal information by contacting us at info@radiancemedspa.com.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at info@radiancemedspa.com.
          </p>
        </div>
        <div className="mt-12">
          <Link href="/" className="text-primary hover:text-primary/80 font-medium underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}