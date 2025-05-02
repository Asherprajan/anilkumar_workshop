import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

// Load Inter font with all available weights for better typography
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://anilkumar-workshop.com'), // Replace with your actual domain
  title: {
    default: 'Insurance Career Workshop | N S Anilkumar',
    template: '%s | N S Anilkumar'
  },
  description: 'Transform your insurance career with expert guidance from N S Anilkumar. Learn powerful strategies implemented by 10,000+ top insurance professionals across India. Join workshop at Hotel Dimora, Trivandrum on May 18th, 2025.',
  keywords: ['insurance workshop', 'insurance training', 'insurance career', 'N S Anilkumar', 'sales training', 'business growth', 'policy sales increase', 'insurance agents', 'LIC agents', 'HDFC life', 'insurance advisors'],
  authors: [{ name: 'N S Anilkumar' }],
  creator: 'N S Anilkumar',
  publisher: 'N S Anilkumar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://anilkumar-workshop.com',
    title: 'Insurance Career Workshop | N S Anilkumar',
    description: 'Transform your insurance career with expert guidance from N S Anilkumar. Learn proven strategies used by thousands of top-performing insurance professionals.',
    siteName: 'N S Anilkumar Workshop',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'N S Anilkumar Insurance Workshop - May 18th 2025'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@nsanilkumar',
    site: '@nsanilkumar',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#e85d3d', // Main brand color
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Insurance Workshop',
  },
  alternates: {
    canonical: 'https://anilkumar-workshop.com/workshop',
  },
  verification: {
    google: 'your-google-verification-code' // Replace with actual code
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
