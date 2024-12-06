import Gallery from "@/app/gallery/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery | CARCARE Mobile Carwash",
    description:
        "Explore our gallery to see the quality of work provided by CARCARE Mobile Carwash. View images of our car detailing and cleaning services.",
    openGraph: {
        title: "CARCARE Mobile Carwash Gallery | Quality Car Detailing",
        description:
            "Browse through our gallery to see the exceptional car detailing and cleaning services offered by CARCARE Mobile Carwash.",
        images: [
            {
                url: "/gallery-og.jpg", // Add your gallery page image
                width: 1200,
                height: 630,
                alt: "CARCARE Mobile Carwash Gallery",
            },
        ],
    },
    keywords: [
        "car care gallery",
        "car detailing images",
        "mobile car wash gallery",
        "auto detailing photos",
        "car maintenance gallery",
        "car cleaning images",
        "Eliozu car wash gallery",
        "professional car care gallery",
    ],
    alternates: {
        canonical: "https://www.carcaremobilecarwash.com/gallery",
    },
};

function page() {
  return <Gallery />;
}

export default page;
