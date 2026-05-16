import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { notFound } from "next/navigation";
import { TerminalBadge } from "../shared/TerminalBadge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { fetchPayload } from "@/lib/payload";
import React from "react";

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

function renderRichTextNodes(nodes: any[]): React.ReactNode {
  return nodes.map((node, index) => {
    if (!node) return null;

    // Handle lists (unordered / ordered) and list-like structures
    const isUnorderedList =
      node.type === "list" ||
      node.type === "unordered-list" ||
      node.type === "bulleted-list" ||
      node.type === "ul" ||
      node.tag === "ul" ||
      node.ordered === false;

    const isOrderedList =
      node.type === "ordered-list" ||
      node.type === "ol" ||
      node.ordered === true ||
      node.tag === "ol";

    if (isUnorderedList || isOrderedList) {
      const items = Array.isArray(node.children) ? node.children : [];
      const ListTag: any = isOrderedList ? "ol" : "ul";

      return (
        <ListTag
          key={index}
          className={
            "text-[#e1fdff] text-[16px] leading-[26px] pl-6 " +
            (isOrderedList ? "list-decimal" : "list-disc") +
            " marker:text-[#e1fdff] space-y-2"
          }
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          {items.map((item: any, i: number) => {
            // list item nodes can be various shapes; prefer their children
            const liChildren = item.children || item.content || [];
            return (
              <li key={i} className="mb-1">
                {renderRichTextNodes(liChildren)}
              </li>
            );
          })}
        </ListTag>
      );
    }

    // Blockquote support (match OldArticlePage styling)
    if (node.type === "blockquote" || node.tag === "blockquote") {
      return (
        <blockquote
          key={index}
          className="backdrop-blur-[6px] rounded-[2px] border border-[rgba(225,253,255,0.2)] border-l-4 border-l-[rgba(225,253,255,0.5)] px-5 py-4"
          style={{ background: "rgba(10,10,10,0.8)" }}
        >
          <p
            className="text-[#b9cacb] text-[16px] leading-[25.6px] italic"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {renderRichTextNodes(node.children || [])}
          </p>
        </blockquote>
      );
    }

    // Top-level code block / fenced code support
    if (
      node.type === "code" ||
      node.type === "pre" ||
      node.tag === "pre" ||
      node.tag === "code"
    ) {
      const codeText =
        node.text || node.code || node.value || node.fields?.code || "";
      const language =
        node.language ||
        node.lang ||
        node.fields?.language ||
        node.fields?.languageName ||
        "";

      return (
        <div
          key={index}
          className="rounded-lg border border-[rgba(0,242,255,0.2)] overflow-hidden"
        >
          <div
            className="px-4 py-2 border-b border-[rgba(0,242,255,0.15)] flex items-center justify-between"
            style={{ background: "rgba(0,10,10,0.8)" }}
          >
            <span
              className="text-[#b3c5ff] text-[12px] tracking-[1.2px]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              {(language || "code").toUpperCase()}
            </span>
          </div>
          <pre
            className="p-5 overflow-x-auto text-[#e1fdff] text-[13px] leading-5.25"
            style={{
              background: "rgba(0,5,5,0.9)",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 400,
            }}
          >
            <code>{String(codeText)}</code>
          </pre>
        </div>
      );
    }

    // Inline code (Payload CMS may represent inline code in many shapes)
    const isInlineCodeNode = (n: any) => {
      if (!n) return false;
      if (
        n.type === "inlineCode" ||
        n.type === "code_inline" ||
        n.style === "code"
      )
        return true;
      if (n.nodeType === "inlineCode" || n.markType === "code") return true;
      if (n.data?.type === "code") return true;
      if (n.attrs?.type === "code" || n.attributes?.type === "code")
        return true;
      const marks = n?.marks || n?.annotations || [];
      if (
        Array.isArray(marks) &&
        marks.some((m: any) => m === "code" || m.type === "code")
      )
        return true;
      // payload may include inline code as text nodes with a formatting mark
      if (n.format === "code" || n.format === 2) return true;
      return false;
    };

    if (
      isInlineCodeNode(node) &&
      (node.type === "text" ||
        node.type === "inlineCode" ||
        typeof node.text !== "undefined")
    ) {
      const text = node.text ?? node.value ?? node.code ?? "";
      return (
        <code
          key={index}
          className="bg-[rgba(0,10,10,0.6)] px-1 rounded text-[#e1fdff] font-mono text-[13px]"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400 }}
        >
          {text}
        </code>
      );
    }

    if (node.type === "text") {
      const text = node.text ?? "";
      const content = node.format === 1 ? <strong>{text}</strong> : text;
      return <React.Fragment key={index}>{content}</React.Fragment>;
    }

    if (node.type === "link") {
      const href = node.fields?.url || node.fields?.link?.url || "#";
      const children = renderRichTextNodes(node.children || []);
      return (
        <a
          key={index}
          href={href}
          target={node.fields?.newTab ? "_blank" : undefined}
          rel={node.fields?.newTab ? "noreferrer noopener" : undefined}
          className="text-[#00F2FF] underline underline-offset-4"
        >
          {children}
        </a>
      );
    }

    if (node.type === "paragraph") {
      return (
        <p
          key={index}
          className="text-[#e5e2e1] text-[16px] leading-[25.6px]"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          {renderRichTextNodes(node.children || [])}
        </p>
      );
    }

    if (node.type === "heading") {
      const text = renderRichTextNodes(node.children || []);

      if (node.tag === "h4") {
        return (
          <h4
            key={index}
            className="text-[#b3c5ff] text-[20px]"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400 }}
          >
            {text}
          </h4>
        );
      }

      if (node.tag === "h3") {
        return (
          <h3
            key={index}
            className="text-[#b3c5ff] text-[22px]"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400 }}
          >
            {text}
          </h3>
        );
      }

      return (
        <div key={index} className="relative pt-4">
          <div className="absolute bottom-0 left-0 right-0 h-px opacity-20 bg-[rgba(225,253,255,0.2)]" />
          <h2
            className="text-[#e1fdff] text-[24px] pb-3 border-b border-[rgba(225,253,255,0.2)]"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400 }}
          >
            {text}
          </h2>
        </div>
      );
    }

    if (node.type === "block") {
      const blockType = node.fields?.blockType;

      if (blockType === "code") {
        return (
          <div
            key={index}
            className="rounded-lg border border-[rgba(0,242,255,0.2)] overflow-hidden"
          >
            <div
              className="px-4 py-2 border-b border-[rgba(0,242,255,0.15)] flex items-center justify-between"
              style={{ background: "rgba(0,10,10,0.8)" }}
            >
              <span
                className="text-[#b3c5ff] text-[12px] tracking-[1.2px]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                }}
              >
                {(node.fields?.language || "code").toUpperCase()}
              </span>
            </div>
            <pre
              className="p-5 overflow-x-auto text-[#e1fdff] text-[13px] leading-5.25"
              style={{
                background: "rgba(0,5,5,0.9)",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 400,
              }}
            >
              <code>{node.fields?.code || ""}</code>
            </pre>
          </div>
        );
      }

      if (blockType === "mediaBlock") {
        const mediaUrl = toUrl(node.fields?.media?.url || node.fields?.media);
        return mediaUrl ? (
          <div
            key={index}
            className="rounded-lg overflow-hidden border border-[rgba(0,242,255,0.15)] my-2"
          >
            <ImageWithFallback
              src={mediaUrl}
              alt={node.fields?.blockName || "Embedded media"}
              className="w-full h-auto object-cover"
            />
          </div>
        ) : null;
      }

      if (blockType === "banner" && node.fields?.content?.root?.children) {
        return (
          <div
            key={index}
            className="backdrop-blur-[6px] rounded-[2px] border border-[rgba(225,253,255,0.2)] border-l-4 border-l-[rgba(225,253,255,0.5)] px-5 py-4"
            style={{ background: "rgba(10,10,10,0.8)" }}
          >
            <div
              className="text-[#b9cacb] text-[16px] leading-[25.6px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              {renderRichTextNodes(node.fields.content.root.children)}
            </div>
          </div>
        );
      }

      return null;
    }

    if (Array.isArray(node.children) && node.children.length) {
      return (
        <React.Fragment key={index}>
          {renderRichTextNodes(node.children)}
        </React.Fragment>
      );
    }

    return null;
  });
}

export function ArticlePage({ slug }: { slug: string }) {
  return <ArticleServer slug={slug} />;
}

async function ArticleServer({ slug }: { slug: string }) {
  // Fetch post by slug from Payload
  let post: any = null;
  let tagLookup = new Map<string, string>();
  try {
    const json = await fetchPayload(
      "/api/posts",
      `where[slug][equals]=${encodeURIComponent(slug)}&limit=1&depth=2`,
    );
    const docs = await extractDocs(json);

    try {
      const tagsJson = await fetchPayload("/api/tags", "limit=100");
      const allTags = await extractDocs(tagsJson);
      tagLookup = new Map<string, string>(
        allTags
          .map((tag: any): [string, string] => [
            String(tag.id),
            tag.name || tag.title || tag.slug || "",
          ])
          .filter((entry: [string, string]) => Boolean(entry[1])),
      );
    } catch (tagErr) {
      console.warn(
        "Failed to fetch tags from Payload; continuing without tag lookup:",
        tagErr,
      );
    }

    post = docs && docs.length ? docs[0] : null;
  } catch (err) {
    console.error("Failed to load post:", err);
  }

  if (!post) {
    notFound();
  }

  const postMeta = {
    title: post.title,
    date: post.publishedAt || post.published_at || post.date || post.createdAt,
    readTime: post.readingTime
      ? `${post.readingTime} min`
      : post.readTime || post.read_time || "",
    tags: normalizeTags(post.tags, tagLookup),
    description:
      post.meta?.description ||
      post.description ||
      post.excerpt ||
      post.lead ||
      "",
    author: post.author?.name || post.author || "",
  };

  const hero = toUrl(
    post.heroImage?.url ||
      post.image?.url ||
      post.featuredImage?.url ||
      post.heroImage,
  );

  const contentBlocks = post.content?.root?.children || post.body || [];

  return (
    <div
      className="min-h-screen pt-24"
      style={{
        background: "#131313",
        backgroundImage:
          "linear-gradient(90deg, rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(90deg, rgb(19,19,19) 0%, rgb(19,19,19) 100%)",
      }}
    >
      {/* Article Header */}
      <article className="max-w-200 mx-auto px-8 py-12">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#849495] hover:text-[#e1fdff] text-[12px] tracking-[1.2px] uppercase transition-colors mb-8"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
        >
          <ArrowLeft size={12} /> BACK_TO_LOGS
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(postMeta.tags || []).map((tag: string) => (
            <TerminalBadge key={tag}>{tag}</TerminalBadge>
          ))}
        </div>

        {/* Title */}
        <h1
          className="text-[#e1fdff] text-[36px] md:text-[48px] leading-[1.15] tracking-[-1.5px] mb-6"
          style={{ fontFamily: "'Geist', sans-serif", fontWeight: 800 }}
        >
          {postMeta.title}
        </h1>

        {postMeta.description ? (
          <p
            className="text-[#b9cacb] text-[16px] leading-6.5 mb-6 max-w-3xl"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {postMeta.description}
          </p>
        ) : null}

        {/* Meta */}
        <div className="flex items-center gap-6 pb-8 border-b border-[rgba(225,253,255,0.1)]">
          <span
            className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            <Calendar size={11} />
            {new Date(postMeta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span
            className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            <Clock size={11} /> {postMeta.readTime} read
          </span>
          <button className="flex items-center gap-1.5 text-[#849495] hover:text-[#e1fdff] text-[12px] tracking-[0.28px] transition-colors ml-auto">
            <Share2 size={11} /> Share
          </button>
        </div>

        {/* Hero image */}
        {hero && (
          <div className="h-64 md:h-80 rounded-lg overflow-hidden border border-[rgba(0,242,255,0.15)] my-8">
            <ImageWithFallback
              src={hero}
              alt={postMeta.title}
              className="w-full h-full object-cover opacity-70"
            />
          </div>
        )}

        {/* Article content */}
        <div className="flex flex-col gap-6">
          {Array.isArray(contentBlocks) && contentBlocks.length ? (
            renderRichTextNodes(contentBlocks)
          ) : (
            <div className="text-[#b9cacb]">No content available.</div>
          )}
        </div>

        {/* Bottom navigation */}
        <div className="mt-16 pt-8 border-t border-[rgba(225,253,255,0.1)] flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-[#849495] hover:text-[#e1fdff] text-[12px] tracking-[1.2px] uppercase transition-colors"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            <ArrowLeft size={12} /> ALL_POSTS
          </Link>
        </div>
      </article>
    </div>
  );
}
