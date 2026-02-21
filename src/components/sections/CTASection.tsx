"use client";

import { FadeIn } from "@/components/ui/Animations";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";
import { Mail, ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="py-24">
      <div className="section-container">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card p-10 sm:p-14 relative overflow-hidden">
              {/* Background glow */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/10 rounded-xl" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
              </div>

              <div className="relative">
                <span className="text-4xl mb-4 block">🚀</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Let&apos;s Build Something{" "}
                  <span className="gradient-text">Together</span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8 max-w-md mx-auto">
                  I&apos;m actively looking for full-time roles and internship
                  opportunities. If you&apos;re building something interesting,
                  let&apos;s talk.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button href="/contact" size="lg">
                    <Mail className="w-4 h-4" />
                    Get In Touch
                  </Button>
                  <Button
                    href={siteConfig.github}
                    variant="secondary"
                    size="lg"
                    external
                  >
                    View GitHub
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for opportunities · Response within 24h</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
