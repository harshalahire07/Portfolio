"use client";

import { FadeIn } from "@/components/ui/Animations";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="tag-pill mb-4 inline-block">Experience</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Where I&apos;ve <span className="gradient-text">Worked</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-indigo-500/50 before:to-transparent">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>

              <div className="glass-card p-6 ml-2">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Full Stack Web Developer Intern
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-indigo-400 font-medium text-sm">
                        SPARD Technologies
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-xs text-slate-500 sm:text-right">
                    <div className="flex items-center gap-1 sm:justify-end">
                      <Calendar className="w-3 h-3" />
                      <span>2024 – Present</span>
                    </div>
                    <div className="flex items-center gap-1 sm:justify-end">
                      <MapPin className="w-3 h-3" />
                      <span>India (Remote / Hybrid)</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Working on the{" "}
                  <span className="text-slate-200">
                    EdgeMakers Facility Management System
                  </span>{" "}
                  — a production-deployed platform for managing facility assets,
                  work orders, and maintenance staff. Leading API development
                  and database design.
                </p>

                {/* Responsibilities */}
                <div className="space-y-2 mb-5">
                  {[
                    "Designed and implemented RESTful APIs with DRF ViewSets, custom serializers, and permission classes",
                    "Architected normalized PostgreSQL schema for assets, work orders, and facility hierarchies",
                    "Implemented JWT authentication with role-based access control (Admin, Staff, Viewer roles)",
                    "Built automated email notification system using Django signals for work order assignments",
                    "Optimized API query performance using select_related, prefetch_related, and database indexes",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                      <span className="text-slate-400">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {[
                    "Python",
                    "Django",
                    "DRF",
                    "PostgreSQL",
                    "JWT",
                    "REST API",
                    "JavaScript",
                    "Bootstrap",
                  ].map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="relative pl-8 mt-8 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-px before:bg-slate-800">
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
              </div>

              <div className="glass-card p-6 ml-2">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      B.E. Computer Science & Engineering
                    </h3>
                    <p className="text-slate-400 text-sm mt-0.5">
                      Bachelor of Engineering — Pimpri Chinchwad University
                    </p>
                  </div>
                  <div className="text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>2023 – 2027</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-4 pt-3 border-t border-slate-700/50">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span className="text-xs text-slate-400">
                      FY CGPA:{" "}
                      <span className="text-slate-200 font-semibold">8.26</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span className="text-xs text-slate-400">
                      SY CGPA:{" "}
                      <span className="text-slate-200 font-semibold">8.8</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
