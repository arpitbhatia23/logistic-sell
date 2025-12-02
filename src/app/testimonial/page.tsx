import type { Metadata } from "next";
import Testimonials from "../../components/Testamonials";
// Note: The original component had a typo: "Testamonials".
// I have corrected the import name here to the conventional "Testimonials".
// You may need to verify the actual component file name.

/**
 * 1. Define Static Metadata
 * This object replaces the manual <title> and <meta> tags. Next.js automatically
 * handles the injection of these SEO elements into the document <head>.
 */
export const metadata: Metadata = {
  title: "Client Testimonials | Logistics & Fleet Services in North America",
  description:
    "Discover client testimonials for our logistics, fleet, dispatch, and brokerage services across North America. See how our solutions help businesses thrive.",
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
};

/**
 * 2. Define the Page Component
 * This is the Server Component that renders the content for the /testimonials route.
 * The outer <div> is unnecessary and has been removed for simplicity.
 */
const TestimonialsPage = () => {
  return <Testimonials />;
};

export default TestimonialsPage;
