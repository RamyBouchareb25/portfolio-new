import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import React from "react";
import { fetchPayload } from "@/lib/payload";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { TerminalBadge } from "@/app/components/shared/TerminalBadge";

async function extractDocs(json: any) {
  if (!json) return [];
  if (Array.isArray(json)) return json;
  if (json.docs) return json.docs;
  if (json.results) return json.results;
  if (json.rows) return json.rows;
  if (json.posts) return json.posts;
  return [];
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

export default async function BlogPostNotFound() {
  // fetch featured posts to display in Suggested_Logs
  let featured: any[] = [];
  try {
    const json = await fetchPayload(
      "/api/posts",
      "where[isFeatured][equals]=true&sort=-publishedAt&limit=3&depth=2",
    );
    const docs = await extractDocs(json);
    featured = (docs || []).map((doc: any) => ({
      id: doc.id ?? doc._id ?? doc.slug,
      slug: doc.slug,
      title: doc.title,
      description:
        doc.meta?.description ||
        doc.description ||
        doc.excerpt ||
        doc.lead ||
        "",
      tags: Array.isArray(doc.tags)
        ? doc.tags
            .map((t: any) =>
              typeof t === "string" ? t : t?.name || t?.title || t?.slug || "",
            )
            .filter(Boolean)
        : [],
      readTime: doc.readingTime
        ? `${doc.readingTime} min`
        : doc.readTime || doc.read_time || "",
      date: doc.publishedAt || doc.published_at || doc.date || doc.createdAt,
      image: toUrl(
        doc.heroImage?.url ||
          doc.image?.url ||
          doc.featuredImage?.url ||
          doc.heroImage,
      ),
    }));
  } catch (err) {
    console.warn("Failed to fetch featured posts for not-found page:", err);
  }

  return (
    <div
      className="min-h-screen pt-24 bg-background text-on-background"
      style={{ background: "#131313" }}
    >
      <main className="flex-grow z-10 flex flex-col items-center justify-center pt-32 pb-24 px-5 md:px-16 max-w-container-max mx-auto w-full">
        <div className="w-full max-w-3xl text-center flex flex-col items-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#00f2ff]/10 border"
            style={{ borderColor: "rgba(0,242,255,0.2)" }}
          >
            <span className="text-[#00f2ff] mr-2">⚠</span>
            <span className="font-label-caps text-label-caps text-[#00f2ff]">
              STATUS: 404 NOT FOUND
            </span>
          </div>

          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-[#e1fdff] mb-6">
            LOG_ENTRY_MISSING
          </h1>

          <p className="font-body-md text-body-md text-[#b9cacb] max-w-xl mx-auto mb-10">
            The technical deep dive you are looking for has been moved to a new
            cluster or archived.
          </p>

          <div className="w-full max-w-2xl bg-[#0A0A0A] border border-outline-variant/50 rounded p-4 text-left mb-8">
            <div
              className="font-code-sm text-code-sm text-[#849495] flex items-center mb-2 pb-2"
              style={{ borderBottom: "1px solid rgba(58,73,75,0.12)" }}
            >
              <span className="text-[#00f2ff] mr-2">&gt;</span> system_search
            </div>
            <div className="flex items-center font-code-sm text-code-sm text-[#00f2ff]">
              <span className="mr-2 text-[#b9cacb]">
                &gt; root@localhost search --query
              </span>
              <input
                className="terminal-input bg-transparent border-none outline-none focus:ring-0 text-[#00f2ff] w-full p-0"
                placeholder="Enter keywords..."
              />
              <span className="inline-block w-2 h-4 bg-[#00f2ff] ml-1 animate-pulse" />
            </div>
          </div>

          <Link
            className="inline-flex items-center justify-center bg-[#00f2ff] text-[#131313] font-label-caps text-label-caps px-8 py-3 rounded hover:bg-[#00e0ff] transition-colors"
            href="/blog"
          >
            Back to All Logs
          </Link>
        </div>

        <div className="w-full max-w-container-max border-t border-outline-variant/20 pt-16">
          <h2
            className="font-code-sm text-code-sm mb-8 uppercase tracking-widest text-center flex items-center justify-center gap-4"
            style={{ color: "#849495" }}
          >
            <span
              className="w-12 h-px"
              style={{ background: "rgba(58,73,75,0.12)" }}
            />
            Suggested_Logs
            <span
              className="w-12 h-px"
              style={{ background: "rgba(58,73,75,0.12)" }}
            />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured && featured.length > 0 ? (
              featured.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group backdrop-blur-[6px] relative rounded border p-6 hover:border-[rgba(0,242,255,0.4)] transition-all flex flex-col h-full"
                  style={{
                    background: "rgba(10,10,10,0.6)",
                    borderColor: "rgba(0,242,255,0.12)",
                  }}
                >
                  <div
                    className="h-40 overflow-hidden border-b"
                    style={{ borderColor: "rgba(0,242,255,0.15)" }}
                  >
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      {(post.tags || []).map((tag: any) => (
                        <TerminalBadge key={tag}>{tag}</TerminalBadge>
                      ))}
                    </div>
                    <h3 className="text-[#e1fdff] text-[18px] leading-[26px] tracking-[-0.3px] group-hover:text-[#00F2FF] transition-colors font-bold">
                      {post.title}
                    </h3>
                    <p className="text-[#b9cacb] text-[14px] leading-[22px] flex-1">
                      {post.description}
                    </p>
                    <div
                      className="flex items-center justify-between pt-2 border-t"
                      style={{ borderColor: "rgba(225,253,255,0.08)" }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]">
                          <Calendar size={11} />{" "}
                          {post.date
                            ? new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : ""}
                        </span>
                        <span className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]">
                          <Clock size={11} /> {post.readTime}
                        </span>
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-[#849495] group-hover:text-[#00F2FF] transition-colors"
                      />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="rounded-[4px] border border-[rgba(0,242,255,0.15)] bg-[rgba(10,10,10,0.6)] px-6 py-10 text-center text-[#b9cacb] col-span-3">
                No featured logs available.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
