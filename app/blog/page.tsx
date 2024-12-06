import React from "react";
import Blog from "@/app/blog/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | CARCARE Mobile Carwash",
  description:
    "Stay updated with the latest news, tips, and insights from CARCARE Mobile Carwash. Explore our blog for expert advice on car care and maintenance.",
  openGraph: {
    title: "CARCARE Mobile Carwash Blog | Tips and Insights",
    description:
      "Read the latest articles from CARCARE Mobile Carwash. Get expert advice on car care, maintenance, and detailing services.",
    images: [
      {
        url: "/blog-og.jpg", // Add your blog page image
        width: 1200,
        height: 630,
        alt: "CARCARE Mobile Carwash Blog",
      },
    ],
  },
  keywords: [
    "car care blog",
    "car detailing tips",
    "mobile car wash news",
    "auto detailing advice",
    "car maintenance insights",
    "car cleaning tips",
    "Eliozu car wash blog",
    "professional car care articles",
  ],
  alternates: {
    canonical: "https://www.carcaremobilecarwash.com/blog",
  },
};

function page() {
  return <Blog />;
}

export default page;
