import type { Metadata } from "next";
import Blog from "../../components/Blog"; // Use @/ alias for better pathing

/**
 * 1. Define Static Metadata
 * This object replaces the manual <title> and <meta> tags. Next.js handles injecting these
 * into the document <head> automatically for optimal SEO.
 */
export const metadata: Metadata = {
  title: "Blog | Logistics & Fleet Services Insights in North America",
  description:
    "Stay updated with the latest insights on logistics, fleet management, dispatch, and brokerage services across North America. Expert tips and industry trends.",
  keywords: [
    "logistics blog",
    "fleet management tips",
    "dispatch blog",
    "transportation trends",
    "freight news",
    "trucking articles",
  ],
};

/**
 * 2. Define the Page Component
 * This is a standard React component (Server Component by default in Next.js App Router).
 * It will be saved as 'page.tsx' inside the route folder (e.g., app/blog/page.tsx).
 */
const Blogspage = () => {
  return (
    // The main Blog component will contain the logic to fetch and display posts.
    <Blog />
  );
};

export default Blogspage;
