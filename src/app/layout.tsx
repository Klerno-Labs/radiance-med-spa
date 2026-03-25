import type { Metadata } from 'next'
import { Inter, Montserrat, Open_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700'], display: 'swap' })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Radiance Med Spa | Premier Medical Aesthetics in Houston, TX',
  description: 'Experience the best in medical aesthetics at Radiance Med Spa. Expert Botox, fillers, laser therapy, and skincare treatments in a luxury environment.',
  keywords: 'med spa Houston, botox near me, aesthetic clinic, laser hair removal, radiance med spa',
  authors: [{ name: 'Radiance Med Spa' }],
  creator: 'Pegrio',
  metadataBase: new URL('https://radiancemedspa.com'),
  openGraph: {
    title: 'Radiance Med Spa | Premier Medical Aesthetics',
    description: 'Experience the best in medical aesthetics at Radiance Med Spa.',
    url: 'https://radiancemedspa.com',
    siteName: 'Radiance Med Spa',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Placeholder, usually configured in component
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radiance Med Spa | Premier Medical Aesthetics',
    description: 'Experience the best in medical aesthetics at Radiance Med Spa.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} ${montserrat.variable} ${openSans.variable} ${playfair.variable}`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}