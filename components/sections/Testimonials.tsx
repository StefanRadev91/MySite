"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 px-4 bg-primary-dark">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center text-white mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`card-glow rounded-2xl p-6 reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              <span className="text-4xl font-serif text-accent/60 leading-none block mb-4">&ldquo;&rdquo;</span>
              <p className="text-sm text-white/80 mb-6 leading-relaxed">
                &ldquo;{t(`items.${i}.quote`)}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sm text-white">{t(`items.${i}.name`)}</p>
                <p className="text-xs text-white/50 mt-0.5">&mdash; {t(`items.${i}.role`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
