"use client";

import { FadeIn } from "@/components/ui/Animations";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  {
    icon: "🏆",
    title: "1st Prize — IoT Tech Fest",
    org: "College Technical Festival",
    year: "2024",
    description:
      "Won first prize among 40+ competing teams for building a fully automated Smart Hydroponics IoT System with real-time sensor monitoring, MQTT data streaming, and threshold-based automated plant nutrition control.",
    tags: ["IoT", "ESP32", "MQTT", "Django", "Real-time"],
  },
  {
    icon: "🎓",
    title: "B.E. Computer Science Engineering",
    org: "University",
    year: "2021–2025",
    description:
      "Pursuing Bachelor of Engineering in Computer Science with focus on backend systems, databases, and software engineering principles.",
    tags: ["Computer Science", "Software Engineering"],
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="tag-pill mb-4 inline-block">Achievements</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Recognition & <span className="gradient-text">Milestones</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {achievements.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-6 h-full"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base leading-tight">
                      {item.title}
                    </h3>
                    <div className="text-xs text-slate-500 mt-1">
                      {item.org} · {item.year}
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
