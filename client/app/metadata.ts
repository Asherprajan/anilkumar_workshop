import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Transform Your Insurance Career in 4 Hours | N S Anilkumar Workshop - May 18th 2025",
  description:
    "Join N S Anilkumar's exclusive workshop at Hotel Dimora, Trivandrum to learn proven strategies to 2X your insurance client base. Early bird price ₹999 only. 34+ years experience, 1 Lakh+ professionals trained.",
  keywords:
    "insurance workshop, insurance career growth, insurance sales training, N S Anilkumar, insurance business growth, Trivandrum workshop",
  openGraph: {
    title:
      "Transform Your Insurance Career in 4 Hours | N S Anilkumar Workshop",
    description:
      "Join us on May 18th 2025 at Hotel Dimora, Trivandrum. Early bird price ₹999 only. Learn proven strategies to 2X your insurance client base. 34+ years experience, 1 Lakh+ professionals trained.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "N S Anilkumar Insurance Workshop - May 18th 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Transform Your Insurance Career | N S Anilkumar Workshop - May 18th 2025",
    description:
      "Join us at Hotel Dimora, Trivandrum. Early bird price ₹999 only. Learn proven strategies to 2X your insurance client base. 34+ years experience.",
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