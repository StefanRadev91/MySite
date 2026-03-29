"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/components/useScrollReveal";

const projectImages = [
  "https://www.darotzemqta.bg/assets/logo-DWHC4D1D.png",
  "https://www.tsplaywright.blog/og-image.png",
];

const projectLinks = [
  "https://darotzemqta.bg",
  "https://tsplaywright.blog",
];

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="portfolio" className="py-24 px-4 bg-primary-dark">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center text-white mb-4 reveal ${isVisible ? 'visible' : ''}`}>
          {t("title")}
        </h2>
        <p className={`text-white/70 text-center max-w-2xl mx-auto mb-16 leading-relaxed reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          {t("subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[0, 1].map((i) => (
            <a
              key={i}
              href={projectLinks[i]}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-glow rounded-2xl overflow-hidden group block reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}
            >
              <div className="h-56 bg-gradient-to-br from-primary/5 via-white to-primary-light flex items-center justify-center border-b border-primary/10 p-6 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={projectImages[i]}
                  alt={t(`projects.${i}.title`)}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t(`projects.${i}.title`)}
                </h3>
                <p className="text-sm text-muted mb-5 leading-relaxed">
                  {t(`projects.${i}.description`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[0, 1].map((j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1.5 rounded-full border border-primary/20 text-primary"
                    >
                      {t(`projects.${i}.tags.${j}`)}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
