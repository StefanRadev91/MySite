"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function About() {
  const t = useTranslations("about");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4 bg-primary">
      <div ref={ref} className="max-w-5xl mx-auto">
        <p className={`text-xs font-semibold text-accent tracking-[0.2em] text-center mb-6 uppercase reveal ${isVisible ? 'visible' : ''}`}>
          {t("label")}
        </p>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-4 max-w-3xl mx-auto leading-tight reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          {t("title")}
        </h2>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 max-w-3xl mx-auto leading-tight reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          <span className="text-accent">{t("titleHighlight")}</span>
        </h2>
        <p className={`text-white/75 text-center max-w-2xl mx-auto mb-16 leading-relaxed reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          {t("bio")}
        </p>
        <p className={`text-center text-white/60 italic max-w-2xl mx-auto leading-relaxed reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
          {t("quote")}
        </p>
      </div>
    </section>
  );
}
