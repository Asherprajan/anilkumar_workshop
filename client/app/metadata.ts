import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Transform Your Insurance Career in 90 Minutes | N S Anilkumar Online Workshop - June 22nd 2024",
  description:
    "Join N S Anilkumar's exclusive evening online workshop via Zoom (7:30 PM) to learn proven strategies to 2X your insurance client base. Early bird price ₹199 only. 34+ years experience, 1 Lakh+ professionals trained.",
  keywords:
    "online insurance workshop, insurance career growth, insurance sales training, N S Anilkumar, insurance business growth, zoom workshop, evening workshop",
  openGraph: {
    title:
      "Transform Your Insurance Career in 90 Minutes | N S Anilkumar Online Workshop",
    description:
      "Join us on June 22nd 2024 at 7:30 PM via Zoom. Early bird price ₹199 only. Learn proven strategies to 2X your insurance client base. 34+ years experience, 1 Lakh+ professionals trained.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "N S Anilkumar Insurance Online Workshop - June 22nd 2024, 7:30 PM",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Transform Your Insurance Career | N S Anilkumar Online Workshop - June 22nd 2024, 7:30 PM",
    description:
      "Join our online Zoom workshop at 7:30 PM. Early bird price ₹199 only. Learn proven strategies to 2X your insurance client base. 34+ years experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://yourdomain.com/workshop", // Replace with your actual domain
  },
}; 