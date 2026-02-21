"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Animations";
import { motion } from "framer-motion";
import {
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiGithub,
  SiLinux,
  SiCplusplus,
} from "react-icons/si";
import { FaJava, FaC } from "react-icons/fa6";
import type { IconType } from "react-icons";

interface Tech {
  name: string;
  Icon: IconType;
  color: string;
  iconColor: string;
}

const techStack: Tech[] = [
  {
    name: "Python",
    Icon: SiPython,
    color: "from-yellow-500/15 to-blue-500/15",
    iconColor: "#3776ab",
  },
  {
    name: "Django",
    Icon: SiDjango,
    color: "from-emerald-500/15 to-green-500/15",
    iconColor: "#0c4b33",
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    color: "from-blue-600/15 to-sky-500/15",
    iconColor: "#336791",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    color: "from-orange-500/15 to-yellow-500/15",
    iconColor: "#4479a1",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "from-blue-500/15 to-indigo-500/15",
    iconColor: "#3178c6",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "from-yellow-400/15 to-amber-500/15",
    iconColor: "#f7df1e",
  },
  {
    name: "Java",
    Icon: FaJava,
    color: "from-red-600/15 to-orange-500/15",
    iconColor: "#f89820",
  },
  {
    name: "C",
    Icon: FaC,
    color: "from-blue-700/15 to-indigo-600/15",
    iconColor: "#6393C8",
  },
  {
    name: "C++",
    Icon: SiCplusplus,
    color: "from-violet-600/15 to-blue-600/15",
    iconColor: "#9C7DD1",
  },
  {
    name: "Git",
    Icon: SiGit,
    color: "from-red-500/15 to-orange-500/15",
    iconColor: "#f05032",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    color: "from-slate-500/15 to-gray-500/15",
    iconColor: "#e6edf3",
  },
  {
    name: "Linux",
    Icon: SiLinux,
    color: "from-slate-400/15 to-yellow-400/15",
    iconColor: "#fcc624",
  },
];

export default function TechStackSection() {
  return (
    <section id="tech" className="py-24">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="tag-pill mb-4 inline-block">Tech Stack</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Tools I <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-md mx-auto">
              Technologies I use to build, ship, and maintain production
              systems.
            </p>
          </div>
        </FadeIn>

        <Stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {techStack.map((tech) => (
            <StaggerItem key={tech.name}>
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                transition={{ duration: 0.18 }}
                className={`bg-gradient-to-br ${tech.color} border border-slate-700/60 rounded-xl p-4 flex flex-col items-center gap-3 cursor-default hover:border-slate-600 transition-colors`}
              >
                <tech.Icon
                  className="w-8 h-8 flex-shrink-0"
                  style={{ color: tech.iconColor }}
                />
                <span className="text-xs font-medium text-slate-300 text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
