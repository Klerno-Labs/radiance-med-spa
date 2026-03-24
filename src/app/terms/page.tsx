import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Radiance Med Spa",
  description: "View our terms of service and agreement for use of Radiance Med Spa website in Houston, TX.",
};

export default function TermsOfService() {
  return (
    <main className="pt-20 px-6 py-12 md:px-8 md:py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <p className="text-lg text-gray-600 mb-8">
        By accessing and using Radiance Med Spa&rsquo;s website, you agree to be bound by these Terms of Service.
      </p>
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
        <p className="text-gray-600 leading-relaxed">
          By using our website, you acknowledge that you have read, understood, and agree to be bound by these terms.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
        <p className="text-gray-600 leading-relaxed">
          The materials on Radiance Med Spa&rsquo;s website are provided on an &ldquo;as is&rdquo; basis. We make no warranties, express or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 leading-relaxed">
          In no event shall Radiance Med Spa, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the site.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
        <p className="text-gray-600 leading-relaxed">
          These terms and conditions are governed by and construed in accordance with the laws of Texas, without regard to its conflict of law provisions.
        </p>
      </section>
    </main>
  );
}