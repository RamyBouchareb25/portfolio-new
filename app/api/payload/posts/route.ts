import { NextResponse } from "next/server";
import { fetchPayload } from "@/lib/payload";

function extractDocs(json: any) {
  if (!json) return [];
  if (Array.isArray(json)) return json;
  if (json.docs) return json.docs;
  if (json.results) return json.results;
  if (json.rows) return json.rows;
  if (json.posts) return json.posts;
  return [];
}

function normalizeTags(tags: any, tagLookup: Map<string, string> = new Map()) {
  if (!Array.isArray(tags)) return [];
  return tags
    .map((tag) => {
      if (typeof tag === "number") return tagLookup.get(String(tag)) || "";
      if (typeof tag === "string") return tag;
      return (
        tag?.name ||
        tag?.title ||
        tag?.label ||
        tag?.slug ||
        tag?.value?.name ||
        tag?.value?.title ||
        tag?.value?.label ||
        tag?.value?.slug ||
        tag?.fields?.name ||
        tag?.fields?.title ||
        ""
      );
    })
    .filter(Boolean);
}

function toUrl(src: any) {
  if (!src) return undefined;
  const url =
    typeof src === "string" ? src : src.url || src.path || src.filename;
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  const base = (
    process.env.PAYLOAD_SERVER_URL ||
    process.env.NEXT_PUBLIC_PAYLOAD_URL ||
    ""
  ).replace(/\/$/, "");
  return base ? `${base}${url}` : url;
}

function matchesSearch(doc: any, term: string) {
  if (!term) return true;
  const haystack = [
    doc.title,
    doc.slug,
    doc.meta?.description,
    doc.description,
    doc.excerpt,
    doc.lead,
    normalizeTags(doc.tags).join(" "),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(term);
}

function matchesTag(doc: any, tagId: string, tagLookup: Map<string, string>) {
  if (!tagId) return true;
  const tags = Array.isArray(doc.tags) ? doc.tags : [];
  return tags.some((tag: any) => {
    if (typeof tag === "number") return String(tag) === tagId;
    if (typeof tag === "string")
      return tag === tagId || tagLookup.get(tag) === tagId;
    const candidates = [
      tag?.id,
      tag?.value?.id,
      tag?.slug,
      tag?.value?.slug,
      tag?.name,
      tag?.value?.name,
      tag?.title,
      tag?.value?.title,
    ]
      .filter(Boolean)
      .map(String);
    return candidates.includes(tagId);
  });
}

function normalizePost(doc: any, tagLookup: Map<string, string>) {
  return {
    id: doc.id ?? doc._id ?? doc.id,
    slug: doc.slug,
    title: doc.title,
    description:
      doc.meta?.description || doc.description || doc.excerpt || doc.lead || "",
    tags: normalizeTags(doc.tags, tagLookup),
    readTime: doc.readingTime
      ? `${doc.readingTime} min`
      : doc.readTime || doc.read_time || "",
    date: doc.publishedAt || doc.published_at || doc.date || doc.createdAt,
    featured: !!doc.featured,
    image: toUrl(
      doc.heroImage?.url ||
        doc.image?.url ||
        doc.featuredImage?.url ||
        doc.heroImage,
    ),
  };
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const search = (url.searchParams.get("search") || "").trim().toLowerCase();
  const tag = (url.searchParams.get("tag") || "").trim();
  const limit = url.searchParams.get("limit") || "100";

  let tagLookup = new Map<string, string>();

  try {
    const [postsJson, tagsJson] = await Promise.all([
      fetchPayload("/api/posts", `limit=${encodeURIComponent(limit)}&depth=2`),
      fetchPayload("/api/tags", "limit=100"),
    ]);

    const posts = extractDocs(postsJson);
    const allTags = extractDocs(tagsJson);
    tagLookup = new Map<string, string>(
      allTags
        .map((tagItem: any): [string, string] => [
          String(tagItem.id),
          tagItem.name || tagItem.title || tagItem.slug || "",
        ])
        .filter((entry: [string, string]) => Boolean(entry[1])),
    );

    const filtered = posts
      .filter((doc: any) => matchesSearch(doc, search))
      .filter((doc: any) => matchesTag(doc, tag, tagLookup))
      .map((doc: any) => normalizePost(doc, tagLookup));

    return NextResponse.json({ posts: filtered, total: filtered.length });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch from Payload", details: String(err) },
      { status: 502 },
    );
  }
}
