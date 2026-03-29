"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/components/useScrollReveal";

const pointIcons = [
  <svg key="0" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z" />
  </svg>,
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function Different() {
  const t = useTranslations("different");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 px-4 bg-primary">
      <div ref={ref} className="max-w-5xl mx-auto text-center">
        <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-6 reveal ${isVisible ? 'visible' : ''}`}>
          {t("title")}
        </h2>
        <p className={`text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          {t("subtitle")}
        </p>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          <video
            src="/videos/subs-2.mp4"
            poster="/videos/poster-1.jpg"
            controls
            playsInline
            className="w-full rounded-2xl aspect-video object-cover"
          />
          <video
            src="/videos/subs-12.mp4"
            poster="/videos/poster-2.jpg"
            controls
            playsInline
            className="w-full rounded-2xl aspect-video object-cover"
          />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-start gap-3 text-left">
              <div className="text-accent shrink-0 mt-0.5">{pointIcons[i]}</div>
              <p className="text-sm text-white/80 leading-relaxed">
                {t(`points.${i}`)}
              </p>
            </div>
          ))}
        </div>

        <p className={`text-white font-medium reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          {t("summary")}
        </p>
      </div>
    </section>
  );
}
