import type { Metadata } from "next";
import Contact from "../../components/Contact"; // Use @/ alias for better pathing

/**
 * 1. Define Static Metadata
 * In Next.js App Router, SEO tags are defined by exporting a 'metadata' object.
 * This is a Server Component convention and automatically manages <head> elements.
 */
export const metadata: Metadata = {
  title: "Contact Us | Logistics & Fleet Services in North America",
  description:
    "Contact us for logistics, fleet, dispatch, and brokerage services across North America. Our team is here to help your business succeed.",
  keywords: [
    "Walia Group",
    "logistics company",
    "dispatch services",
    "fleet maintenance",
    "freight brokerage",
    "warehousing",
    "container drayage",
    "intermodal logistics",
    "24/7 roadside assistance",
  ],
  // Add other useful metadata here like openGraph, icons, etc.
};

/**
 * 2. Define the Page Component
 * In Next.js, the page component is usually exported directly from a file named 'page.tsx'
 * inside a route folder (e.g., app/contact/page.tsx).
 * Note: You do not need the <></> fragment if you only return one component.
 */
const Contactpage = () => {
  return (
    // Your Contact component contains the main form/UI
    <Contact />
  );
};

export default Contactpage;
