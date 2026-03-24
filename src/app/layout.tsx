import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";
import { z } from "zod";

export const metadata = {
  title: "Radiance Med Spa",
  description: "Premier medical spa offering advanced aesthetic treatments.",
  openGraph: {
    title: "Radiance Med Spa",
    description: "Premier medical spa offering advanced aesthetic treatments.",
    url: "https://example.com",
    images: [
      {
        url: "https://mfile.z.ai/1774368232436-ff51f58548fd4d648064a76b46c74440.png?ufileattname=202603250003432087531ef1be42f1_watermark.png",
        width: 1200,
        height: 800,
        alt: "A modern med spa waiting area with a sleek reception desk and potted plants",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-color-secondary">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}