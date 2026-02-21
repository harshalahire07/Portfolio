import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Harshal Ahire — Full Stack Engineer",
  description:
    "Computer Science Engineer specializing in Django, REST APIs, and scalable web systems. View my projects, experience, and skills.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection />
      <AchievementsSection />
      <CTASection />
    </>
  );
}
