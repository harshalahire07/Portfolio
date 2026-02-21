import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Github, Linkedin } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/config";
import { FadeIn } from "@/components/ui/Animations";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Harshal Ahire — open to internships, full-time roles, and interesting projects.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="section-container">
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
            <span className="tag-pill mb-4 inline-block">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-slate-400 max-w-lg leading-relaxed">
              Open to internships, full-time roles, freelance projects, and
              interesting conversations. I usually respond within 24 hours.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left sidebar */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              {/* Contact details */}
              <div className="glass-card p-6">
                <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                  Contact Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 mb-0.5">Email</div>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm text-slate-300 hover:text-white transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 mb-0.5">
                        Location
                      </div>
                      <span className="text-sm text-slate-300">
                        {siteConfig.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card p-6">
                <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                  Find Me Online
                </h2>
                <div className="space-y-3">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-400 hover:text-slate-200 transition-colors group"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <span className="ml-auto text-xs text-slate-700 group-hover:text-slate-500">
                      @harshalahire07
                    </span>
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-400 hover:text-slate-200 transition-colors group"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <span className="ml-auto text-xs text-slate-700 group-hover:text-slate-500">
                      @harshal-ahire07
                    </span>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="glass-card p-5 bg-gradient-to-br from-emerald-500/5 to-transparent border-emerald-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-medium text-emerald-400">
                    Available for Opportunities
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Open to internships, full-time roles, and project
                  collaborations starting immediately.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
