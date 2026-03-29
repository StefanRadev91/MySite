"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function Process() {
  const t = useTranslations("process");
  const { ref, isVisible } = useScrollReveal();

  const watermarks = ["01", "02", "03"];

  return (
    <section className="py-24 px-4 bg-primary-dark">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center text-white mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`card-glow rounded-2xl p-6 relative overflow-hidden reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}
            >
              <span className="absolute top-2 right-4 text-[5rem] font-extrabold text-white/[0.06] leading-none select-none pointer-events-none">
                {watermarks[i]}
              </span>
              <p className="text-xs font-semibold text-accent tracking-wider mb-3 uppercase">
                {t(`steps.${i}.label`)}
              </p>
              <h3 className="text-lg font-bold text-white mb-3">
                {t(`steps.${i}.name`)}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed relative z-10">
                {t(`steps.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
