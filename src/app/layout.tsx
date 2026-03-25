import type { Metadata } from "next";
import { Montserrat, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-accent", display: "swap" });

export const metadata: Metadata = {
  title: "Radiance Med Spa | Premier Medical Aesthetics in Houston",
  description: "Radiance Med Spa offers premier medical aesthetics treatments including Botox, fillers, laser therapy, and advanced skincare in Houston, TX.",
  keywords: ["med spa houston", "botox houston", "laser hair removal houston", "medical aesthetic clinic"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${playfairDisplay.variable}`}>
      <body className={`${openSans.className} antialiased text-gray-900 bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedSpa",
            name: "Radiance Med Spa",
            image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4521 Westheimer Rd",
              addressLocality: "Houston",
              addressRegion: "TX",
              postalCode: "77027",
              addressCountry: "US"
            },
            telephone: "(512) 555-1234",
            priceRange: "$$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday"],
                opens: "09:00",
                closes: "14:00"
              }
            ]
          })
        }}
      />
    </html>
  );
}