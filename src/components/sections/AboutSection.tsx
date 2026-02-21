"use client";

import { FadeIn } from "@/components/ui/Animations";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="tag-pill mb-4 inline-block">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Solving Problems,{" "}
              <span className="gradient-text">Shipping Systems</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m Harshal Ahire, a Third-year Computer Science
                Engineering student (2023–2027) with a strong passion for
                backend architecture and full-stack web development.
              </p>
              <p>
                During my internship at{" "}
                <span className="text-slate-200 font-medium">
                  SPARD Technologies
                </span>
                , I built production-ready REST APIs, designed normalized
                PostgreSQL schemas, and implemented role-based access control
                systems that real users depend on daily.
              </p>
              <p>
                I think deeply about{" "}
                <span className="text-slate-200 font-medium">
                  system design, API contracts, and database performance
                </span>
                . My goal is to join a startup or engineering-driven company
                where I can contribute from day one.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-4">
              {[
                {
                  icon: "⚡",
                  title: "Backend Engineering",
                  desc: "Django, DRF, PostgreSQL — designing APIs that scale and stay maintainable.",
                },
                {
                  icon: "🔐",
                  title: "Security-First Mindset",
                  desc: "JWT auth, RBAC, validated inputs, CSRF protection — security is never optional.",
                },
                {
                  icon: "🏗️",
                  title: "System Architecture",
                  desc: "Separation of concerns, modular design, and clear data flow across every project.",
                },
                {
                  icon: "🏆",
                  title: "Award-Winning IoT",
                  desc: "1st Prize in IoT Tech Fest for a real-time hydroponics control system.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 glass-card"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-slate-100 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
