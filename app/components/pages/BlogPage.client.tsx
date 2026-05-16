"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";
import { TerminalBadge } from "../shared/TerminalBadge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SearchBar } from "./blog/SearchBar";
import { TagFilter } from "./blog/TagFilter";

function formatDate(dateStr: string | undefined) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export type PostShape = {
  id: string | number;
  slug: string;
  title: string;
  description?: string;
  tags?: string[];
  readTime?: string;
  date?: string;
  featured?: boolean;
  image?: string;
};

export type TagOption = {
  id: string;
  name: string;
};

function normalizePost(post: any): PostShape {
  return {
    id: post.id ?? post._id ?? post.slug,
    slug: post.slug,
    title: post.title,
    description:
      post.description ||
      post.meta?.description ||
      post.excerpt ||
      post.lead ||
      "",
    tags: Array.isArray(post.tags)
      ? post.tags
          .map((tag: any) =>
            typeof tag === "string"
              ? tag
              : tag?.name || tag?.title || tag?.label || tag?.slug || "",
          )
          .filter(Boolean)
      : [],
    readTime:
      post.readTime ||
      post.read_time ||
      (post.readingTime ? `${post.readingTime} min` : ""),
    date: post.date || post.publishedAt || post.published_at || post.createdAt,
    featured: !!post.featured,
    image: post.image,
  };
}

export function BlogPageClient({
  posts: initialPosts,
  tags,
}: {
  posts: PostShape[];
  tags: TagOption[];
}) {
  const [posts, setPosts] = useState<PostShape[]>(initialPosts);
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Show up to three featured entries in the Featured section
  const featured = useMemo(
    () => posts.filter((p) => p.featured).slice(0, 3),
    [posts],
  );
  // RECENT_ENTRIES should include all recent posts regardless of featured status
  const rest = useMemo(() => posts, [posts]);

  useEffect(() => {
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      const trimmedSearch = search.trim();
      if (!trimmedSearch && !selectedTag) {
        setPosts(initialPosts);
        return;
      }

      try {
        setIsLoading(true);
        const params = new URLSearchParams();
        params.set("limit", "100");
        params.set("depth", "2");
        if (trimmedSearch) params.set("search", trimmedSearch);
        if (selectedTag) params.set("tag", selectedTag);

        const response = await fetch(
          `/api/payload/posts?${params.toString()}`,
          {
            signal: controller.signal,
          },
        );
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        const data = await response.json();
        const nextPosts = Array.isArray(data?.posts) ? data.posts : [];
        setPosts(nextPosts.map(normalizePost));
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Failed to load filtered posts:", error);
        }
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [search, selectedTag, initialPosts]);

  return (
    <div
      className="min-h-screen pt-24"
      style={{
        background: "#131313",
        backgroundImage:
          "linear-gradient(90deg, rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(90deg, rgb(19,19,19) 0%, rgb(19,19,19) 100%)",
      }}
    >
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16 border-b border-[rgba(225,253,255,0.1)]">
        <div className="flex flex-col gap-4">
          <SectionHeader label="/VAR/LOG/BLOG" title="System Logs // Blog" />
          <p
            className="text-[#b9cacb] text-[16px] leading-[26px] max-w-[600px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Technical deep dives, production war stories, and engineering
            insights from the trenches of cloud-native infrastructure.
          </p>
        </div>
      </section>

      {/* Search and filter */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 pt-8 pb-4 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <SearchBar value={search} onChange={setSearch} />
          <div
            className="text-[#849495] text-[12px] tracking-[0.28px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            {isLoading ? "SEARCHING..." : `${posts.length} POSTS`}
          </div>
        </div>
        <TagFilter tags={tags} value={selectedTag} onChange={setSelectedTag} />
      </section>

      {/* Featured posts */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 py-12">
        <p
          className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase mb-6"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
        >
          [FEATURED_ENTRIES]
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {featured.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] hover:border-[rgba(0,242,255,0.4)] transition-all overflow-hidden flex flex-col"
              style={{ background: "rgba(10,10,10,0.6)" }}
            >
              <div className="h-52 overflow-hidden border-b border-[rgba(0,242,255,0.15)]">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  {(post.tags || []).map((tag) => (
                    <TerminalBadge key={tag}>{tag}</TerminalBadge>
                  ))}
                </div>
                <h2
                  className="text-[#e1fdff] text-[22px] leading-[30px] tracking-[-0.4px] group-hover:text-[#00F2FF] transition-colors"
                  style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-[#b9cacb] text-[14px] leading-[22px] flex-1"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {post.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[rgba(225,253,255,0.08)]">
                  <div className="flex items-center gap-4">
                    <span
                      className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      <Calendar size={11} /> {formatDate(post.date)}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
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
          ))}
        </div>

        {/* Recent posts */}
        <p
          className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase mb-6"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
        >
          [RECENT_ENTRIES]
        </p>

        <div className="flex flex-col gap-4">
          {rest.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] hover:border-[rgba(0,242,255,0.4)] transition-all overflow-hidden flex flex-col md:flex-row"
              style={{ background: "rgba(10,10,10,0.6)" }}
            >
              <div className="w-full md:w-48 h-36 md:h-auto overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-[rgba(0,242,255,0.15)]">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1 justify-center">
                <div className="flex items-center gap-3 flex-wrap">
                  {(post.tags || []).map((tag) => (
                    <TerminalBadge key={tag}>{tag}</TerminalBadge>
                  ))}
                </div>
                <h3
                  className="text-[#e1fdff] text-[18px] leading-[26px] tracking-[-0.3px] group-hover:text-[#00F2FF] transition-colors"
                  style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-[#849495] text-[14px] leading-[22px] line-clamp-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {post.description}
                </p>
                <div className="flex items-center gap-4">
                  <span
                    className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 500,
                    }}
                  >
                    <Calendar size={11} /> {formatDate(post.date)}
                  </span>
                  <span
                    className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 500,
                    }}
                  >
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {!isLoading && featured.length === 0 && rest.length === 0 ? (
            <div className="rounded-[4px] border border-[rgba(0,242,255,0.15)] bg-[rgba(10,10,10,0.6)] px-6 py-10 text-center text-[#b9cacb]">
              No posts match your search or tag filter.
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
