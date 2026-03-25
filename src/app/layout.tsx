import "./globals.css";

export const metadata = {
  title: "Radiance Med Spa",
  description: "Premier medical spa offering advanced aesthetic treatments.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}