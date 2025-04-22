import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://anilkumar-workshop.com'), // Replace with your actual domain
  title: {
    default: 'Insurance Career Workshop | N S Anilkumar',
    template: '%s | N S Anilkumar'
  },
  description: 'Transform your insurance career with expert guidance from N S Anilkumar. Join 1 Lakh+ successful professionals who have mastered insurance sales and team building.',
  keywords: ['insurance workshop', 'insurance training', 'insurance career', 'N S Anilkumar', 'sales training', 'business growth'],
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
    description: 'Transform your insurance career with expert guidance from N S Anilkumar. Join 1 Lakh+ successful professionals.',
    siteName: 'N S Anilkumar Workshop',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@nsanilkumar',
    site: '@nsanilkumar',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#E11D48', // Rose-600 color for theme
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Insurance Workshop',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
