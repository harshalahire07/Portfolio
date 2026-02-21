"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Animations";
import { projects } from "@/lib/projects";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="tag-pill mb-4 inline-block">Featured Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Projects I&apos;ve <span className="gradient-text">Built</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-md mx-auto">
              End-to-end systems built with production-quality architecture.
            </p>
          </div>
        </FadeIn>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {projects.map((project, i) => (
            <StaggerItem key={project.slug}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="group glass-card p-6 flex flex-col h-full hover:border-slate-600/80 transition-colors"
              >
                {/* Badge */}
                {project.badge && (
                  <span className="tag-pill mb-3 self-start">
                    {project.badge}
                  </span>
                )}

                {/* Number indicator */}
                <div className="text-5xl font-bold text-slate-800 mb-3 font-mono">
                  0{i + 1}
                </div>

                <h3 className="text-lg font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-indigo-400 font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="tag-pill">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tag-pill">+{project.tech.length - 4}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-700/50">
                  <Link
                    href={`/projects#${project.slug}`}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-400 transition-colors font-medium"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    Details
                  </Link>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors ml-auto"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  ) : (
                    <span className="ml-auto text-xs text-slate-600 italic">
                      Code not public
                    </span>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors border border-slate-700 hover:border-slate-600 px-5 py-2.5 rounded-xl"
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
