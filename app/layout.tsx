import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import { Dancing_Script } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });


const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "CARCARE Mobile Carwash | Professional Auto Detailing Services",
  description: "Expert mobile car wash services in Eliozu including interior vacuuming, engine detailing, ceramic coating, and complete auto detailing. Professional home service available.",
  keywords: [
    "mobile car wash",
    "auto detailing",
    "car detailing",
    "ceramic coating",
    "engine detailing",
    "Interior Vacuuming",
    "Boot Detailing",
    "AC / Vent Steaming",
    "Leather Washing & Conditioning",
    "Fabric Washing",
    "Roof Cleaning",
    "Door Jamb Cleaning",
    "Dashboard Shine",
    "Engine Detailing",
    "Exterior Washing with Snow Foam",
    "Rim & Tyre Shine",
    "Seat Belt Washing",
    "Machine Buffing",
    "Interior Trim Restoration",
    "Exterior Trim Restoration",
    "Ceramic Coating",
    "interior cleaning",
    "car wash services",
    "Eliozu",
    "leather conditioning",
    "home service car wash",
    "professional car cleaning"
  ],
  openGraph: {
    title: "CARCARE Mobile Carwash | Professional Auto Detailing Services",
    description: "Professional mobile car wash service offering complete auto detailing, ceramic coating, engine detailing, and interior deep cleaning with home service available in Eliozu.",
    type: "website",
    locale: "en_NG",
    siteName: "CARCARE Mobile Carwash",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add your actual OG image path
        width: 1200,
        height: 630,
        alt: "CARCARE Mobile Carwash Services"
      }
    ]
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual Google verification code
  },
  alternates: {
    canonical: 'https://www.carcaremobilecarwash.com', // Replace with your actual domain
  },
  icons: {
    icon: '/favicon.ico', // Add your actual favicon path
    apple: '/apple-icon.png', // Add your actual Apple icon path
  },
  category: 'Automotive Services',
  // contacts: [
  //   {
  //     phone: '+234-704-682-0507',
  //     address: '2 Unity Close, Off Chief G U Ake Road, After Unity Oil And Gas, Eliozu',
  //     instagram: '@carcare_mobile_carwash'
  //   }
  // ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-50`}>
        <Providers>
          <Navbar />
          <main className='pt-10'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
