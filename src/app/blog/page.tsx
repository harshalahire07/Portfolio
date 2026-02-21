import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Animations";
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on Django, REST APIs, IoT systems, and PostgreSQL optimization by Harshal Ahire.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="section-container">
        {/* Header */}
        <FadeIn>
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
          <div className="mb-16">
            <span className="tag-pill mb-4 inline-block">Engineering Blog</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Technical <span className="gradient-text">Writing</span>
            </h1>
            <p className="text-slate-400 max-w-lg leading-relaxed">
              Deep dives on systems I&apos;ve built, lessons learned from
              production, and engineering insights.
            </p>
          </div>
        </FadeIn>

        {/* Featured posts */}
        <Stagger className="space-y-4 mb-16">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <article className="group glass-card p-6 sm:p-7 hover:border-slate-600/80 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    {post.featured && (
                      <div className="flex-shrink-0">
                        <span className="tag-pill text-amber-300 border-amber-500/30 bg-amber-500/10">
                          ⭐ Featured
                        </span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors mb-2 leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="tag-pill">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 hidden sm:flex items-center text-slate-600 group-hover:text-indigo-400 transition-colors">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Coming soon note */}
        <FadeIn delay={0.3}>
          <div className="text-center py-10 glass-card">
            <div className="text-3xl mb-3">✍️</div>
            <h3 className="text-slate-300 font-medium mb-2">
              More Articles Coming Soon
            </h3>
            <p className="text-slate-600 text-sm">
              Working on posts about system design, Django channels, and
              database optimization.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
