import { Metadata } from 'next';

export const aboutMetadata: Metadata = {
  title: "About Us | CARCARE Mobile Carwash",
  description:
    "Professional mobile car wash service in Eliozu. Learn about our commitment to quality, our experienced team, and our comprehensive auto detailing services.",
  openGraph: {
    title: "About CARCARE Mobile Carwash | Professional Auto Detailing",
    description:
      "Discover why CARCARE Mobile Carwash is your trusted choice for professional car cleaning and detailing services in Eliozu.",
    images: [
      {
        url: "/about-og.jpg", // Add your about page image
        width: 1200,
        height: 630,
        alt: "About CARCARE Mobile Carwash",
      },
    ],
  },
  keywords: [
    "about car wash",
    "car detailing company",
    "professional car cleaners",
    "mobile car wash team",
    "auto detailing experts",
    "car wash history",
    "Eliozu car wash",
    "car cleaning professionals",
  ],
  alternates: {
    canonical: "https://www.carcaremobilecarwash.com/about", // Replace with your actual domain
  },
};

export default function page() {
  return (
    <div className='min-h-screen'>page</div>
  )
}
