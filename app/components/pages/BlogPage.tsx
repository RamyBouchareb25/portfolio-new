// Server side BlogPage: fetch posts from Payload and render client UI component.
import { fetchPayload } from "@/lib/payload";
import { BlogPageClient, PostShape } from "./BlogPage.client";

async function extractDocs(json: any) {
  if (!json) return [];
  if (Array.isArray(json)) return json;
  if (json.docs) return json.docs;
  if (json.results) return json.results;
  if (json.rows) return json.rows;
  if (json.posts) return json.posts;
  return [];
}

function normalizeTags(
  tags: any,
  tagLookup: Map<string, string> = new Map(),
): string[] {
  if (!Array.isArray(tags)) return [];
  return tags
    .map((tag) => {
      if (typeof tag === "number") {
        return tagLookup.get(String(tag)) || "";
      }
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

type TagOption = {
  id: string;
  name: string;
};

export default async function BlogPage() {
  // fetch featured
  let posts: PostShape[] = [];
  let availableTags: TagOption[] = [];
  try {
    const [featuredJson, allJson] = await Promise.all([
      fetchPayload(
        "/api/posts",
        "where[isFeatured][equals]=true&sort=-publishedAt&limit=3&depth=2",
      ),
      fetchPayload("/api/posts", "sort=-publishedAt&limit=100&depth=2"),
    ]);

    const featuredDocs = await extractDocs(featuredJson);
    const all = await extractDocs(allJson);
    let tagLookup = new Map<string, string>();

    try {
      const tagsJson = await fetchPayload("/api/tags", "limit=100");
      const allTags = await extractDocs(tagsJson);
      availableTags = allTags
        .map((tag: any) => ({
          id: String(tag.id),
          name: tag.name || tag.title || tag.slug || "",
        }))
        .filter((entry: TagOption) => Boolean(entry.name));
      tagLookup = new Map<string, string>(
        availableTags
          .map((tag: TagOption): [string, string] => [tag.id, tag.name])
          .filter((entry: [string, string]) => Boolean(entry[1])),
      );
    } catch (tagErr) {
      console.warn(
        "Failed to fetch tags from Payload; continuing without tag lookup:",
        tagErr,
      );
    }

    const allDocs = all || [];

    // Recent entries should include all posts regardless of featured status.
    // Use the full `allDocs` as the canonical source of posts; the client
    // will derive the featured subset for the featured UI.
    posts = allDocs.map((doc: any) => ({
      id: doc.id ?? doc._id ?? doc.id,
      slug: doc.slug,
      title: doc.title,
      description:
        doc.meta?.description ||
        doc.description ||
        doc.excerpt ||
        doc.lead ||
        "",
      tags: normalizeTags(doc.tags, tagLookup),
      readTime: doc.readingTime
        ? `${doc.readingTime} min`
        : doc.readTime || doc.read_time || "",
      date: doc.publishedAt || doc.published_at || doc.date || doc.createdAt,
      featured: !!doc.isFeatured,
      image: toUrl(
        doc.heroImage?.url ||
          doc.image?.url ||
          doc.featuredImage?.url ||
          doc.heroImage,
      ),
    }));
  } catch (err) {
    console.error("Failed to fetch posts from Payload:", err);
  }

  return <BlogPageClient posts={posts} tags={availableTags} />;
}
