import { Metadata } from "next";

export const servicesMetadata: Metadata = {
  title: "Our Services | CARCARE Mobile Carwash",
  description:
    "Comprehensive auto detailing services including interior vacuuming, ceramic coating, engine detailing, and more. Professional mobile car wash services with home service available.",
  openGraph: {
    title: "Professional Car Detailing Services | CARCARE Mobile Carwash",
    description:
      "From basic washing to premium detailing, explore our complete range of professional car care services. Available with home service in Eliozu.",
    images: [
      {
        url: "/services-og.jpg", // Add your services page image
        width: 1200,
        height: 630,
        alt: "CARCARE Mobile Carwash Services",
      },
    ],
  },
  keywords: [
    "car detailing services",
    "mobile car wash",
    "engine detailing",
    "ceramic coating",
    "interior cleaning",
    "leather conditioning",
    "car wash packages",
    "auto detailing services",
    "professional car cleaning",
    "home service car wash",
  ],
};
