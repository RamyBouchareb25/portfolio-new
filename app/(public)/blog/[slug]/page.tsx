import { ArticlePage } from "@/app/components/pages/ArticlePage";
import { fetchPayload } from "@/lib/payload";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  try {
    const json = await fetchPayload(
      "/api/posts",
      `where[slug][equals]=${encodeURIComponent(slug)}&limit=1&depth=2`,
    );
    const docs =
      json?.docs || json?.results || json?.rows || json?.posts || json || [];
    const post = Array.isArray(docs) && docs.length ? docs[0] : null;
    if (!post) return { title: slug };

    const title = post.meta?.title || post.title || slug;
    const description =
      post.meta?.description || post.description || post.excerpt || "";
    const image =
      post.meta?.ogImage?.url ||
      post.heroImage?.url ||
      post.image?.url ||
      post.featuredImage?.url ||
      null;

    return {
      title,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/blog/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/blog/${slug}`,
        type: "article",
        images: image ? [image] : [],
        publishedTime: post.publishedAt || post.published_at || null,
      },
      twitter: { card: "summary_large_image" },
    };
  } catch (err) {
    console.error("generateMetadata error for post:", err);
    return { title: slug };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticlePage slug={slug} />;
}
