import FAQPage from '@/ui/FAQPage';
import { Metadata } from 'next';

export const faqMetadata: Metadata = {
  title: "Frequently Asked Questions | CARCARE Mobile Carwash",
  description:
    "Find answers to common questions about our car wash services, booking process, pricing, and home service options. Learn more about our professional auto detailing services.",
  openGraph: {
    title: "Car Wash FAQs | CARCARE Mobile Carwash",
    description:
      "Everything you need to know about our mobile car wash services. Get answers to common questions about bookings, services, and more.",
    images: [
      {
        url: "/faq-og.jpg", // Add your FAQ page image
        width: 1200,
        height: 630,
        alt: "CARCARE Mobile Carwash FAQs",
      },
    ],
  },
  keywords: [
    "car wash FAQ",
    "car detailing questions",
    "mobile car wash services",
    "car wash pricing",
    "auto detailing FAQ",
    "car cleaning services",
    "home service questions",
    "car wash booking",
  ],
};


export default function page() {
  return (
    <div className='min-h-screen'>
      <FAQPage />
    </div>
  )
}
