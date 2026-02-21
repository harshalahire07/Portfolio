"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";
import { ArrowDownToLine, Mail, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/6 rounded-full blur-[80px]" />
      </div>

      <div className="section-container relative pt-24 pb-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-8">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="relative w-32 h-32 rounded-full ring-2 ring-indigo-500/40 ring-offset-4 ring-offset-[#0f172a] shadow-2xl shadow-indigo-500/20">
              <Image
                src="/Professional_Image.png"
                alt="Harshal Ahire"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            {/* Availability badge */}
            <div className="absolute -bottom-1 -right-1 flex items-center gap-1.5 bg-slate-900 border border-slate-700 rounded-full px-2.5 py-1 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium">
                Available
              </span>
            </div>
          </motion.div>

          {/* Name & tagline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-2"
            >
              <span className="tag-pill mb-4 inline-block">
                🎓 Computer Science Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4"
            >
              Hi, I&apos;m <span className="gradient-text">Harshal Ahire</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto"
            >
              Full Stack Developer specializing in{" "}
              <span className="text-slate-200 font-medium">Django</span> &{" "}
              <span className="text-slate-200 font-medium">
                Scalable Web Systems
              </span>
              . Building production-grade applications with clean architecture.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Button href={siteConfig.resumeUrl} size="lg" external>
              <ArrowDownToLine className="w-4 h-4" />
              Download Resume
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-2"
          >
            {[
              { label: "Projects Built", value: "3+" },
              { label: "Tech Stack", value: "10+" },
              { label: "Awards", value: "1st Prize" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600"
        >
          <span className="text-xs">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
