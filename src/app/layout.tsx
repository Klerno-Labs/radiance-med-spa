import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radiance Med Spa",
  description: "Premier medical spa offering advanced aesthetic treatments including Botox, fillers, laser therapy, and skincare.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}