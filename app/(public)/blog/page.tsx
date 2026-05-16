import BlogPage from "@/app/components/pages/BlogPage";
import { fetchPayload } from "@/lib/payload";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // Basic blog index metadata; could be enriched with latest post data
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  try {
    const json = await fetchPayload(
      "/api/posts",
      "sort=-publishedAt&limit=1&depth=0",
    );
    const docs =
      json?.docs || json?.results || json?.rows || json?.posts || json || [];
    const latest = Array.isArray(docs) && docs.length ? docs[0] : null;
    const description =
      latest?.meta?.description ||
      latest?.description ||
      "Technical blog and posts";
    return {
      title: "Blog - Ramy",
      description,
      alternates: { canonical: `${site}/blog` },
      openGraph: {
        title: "Blog - Ramy",
        description,
        url: `${site}/blog`,
        images: latest?.heroImage?.url ? [latest.heroImage.url] : [],
      },
      twitter: { card: "summary_large_image" },
    };
  } catch (err) {
    return { title: "Blog - Ramy", description: "Technical blog and posts" };
  }
}

export default function Page() {
  return <BlogPage />;
}
