import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { FadeIn } from "@/components/ui/Animations";
import { Github, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Detailed breakdown of projects built by Harshal Ahire — including a disease prediction system, facility management platform, and award-winning IoT system.",
};

export default function ProjectsPage() {
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
            <span className="tag-pill mb-4 inline-block">All Projects</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Work I&apos;ve <span className="gradient-text">Shipped</span>
            </h1>
            <p className="text-slate-400 max-w-lg leading-relaxed">
              Each project represents a full engineering cycle — from
              architecture decisions to production deployment.
            </p>
          </div>
        </FadeIn>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08}>
              <article
                id={project.slug}
                className="glass-card p-6 sm:p-8 hover:border-slate-600/80 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left: Main Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="text-slate-700 font-mono text-4xl font-bold">
                        0{i + 1}
                      </div>
                      {project.badge && (
                        <span className="tag-pill text-amber-300 border-amber-500/30 bg-amber-500/10">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h2>
                    <p className="text-indigo-400 font-medium text-sm mb-4">
                      {project.subtitle}
                    </p>

                    {/* Role badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-400 mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      Role: {project.role}
                    </div>

                    <p className="text-slate-400 leading-relaxed mb-6 text-sm sm:text-base">
                      {project.longDescription}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                        Key Technical Highlights
                      </h3>
                      <div className="space-y-2.5">
                        {project.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-400 text-sm leading-relaxed">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="tag-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="lg:sticky lg:top-28 space-y-3">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`github-${project.slug}`}
                          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all text-sm font-medium"
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </a>
                      ) : (
                        <div className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-slate-700/50 text-slate-600 text-xs text-center leading-snug cursor-default">
                          Code not publicly available
                        </div>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 transition-all text-sm font-medium shadow-lg shadow-indigo-500/20"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
