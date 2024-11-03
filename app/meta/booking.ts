import { Metadata } from "next";

export const bookingMetadata: Metadata = {
  title: "Book Your Car Wash | CARCARE Mobile Carwash",
  description:
    "Schedule your professional car wash service online. Choose from our range of detailing packages with convenient home service options available in Eliozu.",
  openGraph: {
    title: "Book Your Professional Car Wash | CARCARE Mobile Carwash",
    description:
      "Easy online booking for professional car detailing services. Available with home service for your convenience.",
    images: [
      {
        url: "/booking-og.jpg", // Add your booking page image
        width: 1200,
        height: 630,
        alt: "Book CARCARE Mobile Carwash Services",
      },
    ],
  },
  keywords: [
    "book car wash",
    "schedule detailing",
    "car wash appointment",
    "mobile car wash booking",
    "auto detailing reservation",
    "home service booking",
    "car cleaning appointment",
    "online car wash booking",
  ],
};
