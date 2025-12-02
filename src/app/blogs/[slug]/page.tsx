// src/app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { client } from "../../../sanity"; // Adjust path as needed
import BlogDetailsClient from "../../../components/BlogDetails"; // Adjust path as needed

// Define the shape of the data needed for metadata and the client component
interface PostData {
  title: string;
  body: any;
  _createdAt: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  // Include other fields needed for SEO
}

// 🛑 1. Dynamic Metadata Function
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { slug } = await params;

  console.log(slug);

  // Fetch the necessary data for SEO tags
  const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      _createdAt,
      author->{name, image, bio},
      mainImage { asset->{url} },
      "estimatedReadTime": length(pt::text(body)) / 5 / 180
    }`;

  const data = await client.fetch(query, { slug });
  if (!data) {
    return {};
  }

  // Use the first block's text as a rough description if no explicit description field exists
  const description =
    data.body?.children?.[0]?.text ||
    `Read this expert blog on logistics, shipping, and supply chain.`;

  const imageUrl =
    data.mainImage?.asset?.url || "https://example.com/default-thumbnail.jpg";

  return {
    title: data.title,
    description: description,
    keywords: [
      "logistics",
      "supply chain",
      "freight",
      "shipping",
      "transportation",
    ],
    openGraph: {
      title: data.title,
      description: description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 600,
          alt: data.title,
        },
      ],
      type: "article",
    },
  };
}

// 🛑 2. Server Component Page
export default function BlogDetailsPage() {
  return (
    // The Client Component handles all the actual rendering and interaction
    <BlogDetailsClient />
  );
}
