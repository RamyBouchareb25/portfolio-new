import { NextResponse } from "next/server";
import { fetchPayload } from "@/lib/payload";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  try {
    // static public pages to include
    const staticPages = [
      "/",
      "/about",
      "/blog",
      "/contact",
      "/projects",
      "/skills",
    ];

    // fetch posts from Payload (proxied API)
    let posts: any[] = [];
    try {
      const json = await fetchPayload(
        "/api/posts",
        "sort=-publishedAt&limit=100&depth=0",
      );
      // payload responses may vary shape
      posts =
        json?.docs || json?.results || json?.rows || json?.posts || json || [];
      if (!Array.isArray(posts)) posts = [];
    } catch (err) {
      // If Payload is not reachable, continue with static pages only
      console.error("sitemap: failed to fetch posts from Payload:", err);
      posts = [];
    }

    const urls: string[] = [];

    for (const p of staticPages) {
      urls.push(`${SITE_URL.replace(/\/$/, "")}${p}`);
    }

    for (const post of posts) {
      const slug = post.slug || post.fields?.slug;
      if (!slug) continue;
      const loc = `${SITE_URL.replace(/\/$/, "")}/blog/${slug}`;
      const lastmod =
        post.publishedAt ||
        post.published_at ||
        post.updatedAt ||
        post.updated_at ||
        post.modifiedAt ||
        post.modified_at ||
        post.createdAt ||
        post.created_at ||
        null;
      urls.push({ loc, lastmod });
    }

    // build xml
    const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    const footer = `</urlset>`;

    const body = urls
      .map((u: any) => {
        if (typeof u === "string") {
          return `  <url>\n    <loc>${escapeXml(u)}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>`;
        }
        return (
          `  <url>\n    <loc>${escapeXml(u.loc)}</loc>` +
          (u.lastmod
            ? `\n    <lastmod>${new Date(u.lastmod).toISOString()}</lastmod>`
            : ``) +
          `\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`
        );
      })
      .join("\n");

    const xml = header + body + "\n" + footer;

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control":
          "public, max-age=0, s-maxage=86400, stale-while-revalidate=3600",
      },
    });
  } catch (err) {
    console.error("sitemap generation error", err);
    return new NextResponse("", { status: 500 });
  }
}
