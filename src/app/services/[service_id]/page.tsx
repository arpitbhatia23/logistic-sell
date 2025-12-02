import type { Metadata } from "next";
import ServiceDetail from "../../../components/ServiceDetails";
// Assuming '@/components/' is your alias for the components folder

/**
 * 1. Define Static Metadata
 * In the Next.js App Router, you export a static 'metadata' object.
 * This object automatically generates the correct <title> and <meta> tags in the <head>
 * during server rendering for excellent SEO.
 */
export const metadata: Metadata = {
  title: "Our Services | Logistics & Fleet Solutions in North America",
  description:
    "Explore our logistics, fleet, dispatch, and brokerage services across North America. Custom solutions to streamline your business operations",
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
 * This is a standard Server Component in the Next.js App Router.
 * The fragment (<> </>) is not necessary when returning a single component.
 */
const ServicePage = async ({
  params,
}: {
  params: Promise<{ service_id: string }>;
}) => {
  const slug = await params;
  console.log(slug);
  return <ServiceDetail slug={slug.service_id} />;
};

export default ServicePage;
