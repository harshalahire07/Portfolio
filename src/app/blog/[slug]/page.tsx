import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";
import { FadeIn } from "@/components/ui/Animations";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="section-container">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="max-w-2xl">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-2xl">
            {/* Prose content rendered from markdown-like string */}
            <div
              className="prose prose-invert prose-sm sm:prose-base max-w-none
                prose-headings:font-bold prose-headings:text-slate-100
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-slate-400 prose-p:leading-relaxed
                prose-code:text-indigo-300 prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-[#1e293b] prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-xl prose-pre:shadow-xl prose-pre:overflow-x-auto
                prose-pre:text-sm prose-pre:leading-relaxed
                prose-li:text-slate-400
                prose-strong:text-slate-200
                prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline"
            >
              <BlogContent content={post.content} />
            </div>
          </div>
        </FadeIn>

        {/* Back link */}
        <FadeIn delay={0.2}>
          <div className="max-w-2xl mt-16 pt-8 border-t border-slate-800">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              View all articles
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

/**
 * Simple markdown-to-JSX renderer for blog content.
 * Handles: headings, code blocks, inline code, bold, paragraphs.
 */
function BlogContent({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.trimStart().startsWith("```")) {
      const lang = line.trim().slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trimStart().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={key++} className="code-block">
          <code className={`language-${lang}`}>{codeLines.join("\n")}</code>
        </pre>,
      );
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++}>{inlineMarkdown(line.slice(3))}</h2>);
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(<h3 key={key++}>{inlineMarkdown(line.slice(4))}</h3>);
      i++;
      continue;
    }

    // List item
    if (line.match(/^(\d+\.|-)[ ]/)) {
      const listItems: string[] = [];
      const isOrdered = line.match(/^\d+\./);
      while (
        i < lines.length &&
        (lines[i].match(/^(\d+\.|-)[ ]/) || lines[i].startsWith("   "))
      ) {
        listItems.push(
          lines[i].replace(/^(\d+\.|-)[ ]/, "").replace(/^   /, ""),
        );
        i++;
      }
      const Tag = isOrdered ? "ol" : "ul";
      elements.push(
        <Tag key={key++}>
          {listItems.map((item, idx) => (
            <li key={idx}>{inlineMarkdown(item)}</li>
          ))}
        </Tag>,
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    elements.push(<p key={key++}>{inlineMarkdown(line)}</p>);
    i++;
  }

  return <>{elements}</>;
}

function inlineMarkdown(text: string): React.ReactNode {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}
