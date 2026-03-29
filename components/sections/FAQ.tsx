"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollReveal();

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const count = 6;

  return (
    <section className="py-24 px-4 bg-primary">
      <div ref={ref} className="max-w-3xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center text-white mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          {t("title")}
        </h2>
        <div className={`divide-y divide-white/10 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          {Array.from({ length: count }, (_, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="font-medium text-sm sm:text-base pr-4 text-white group-hover:text-accent transition-colors">
                  {t(`items.${i}.question`)}
                </span>
                <svg
                  className={`w-4 h-4 text-white/50 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="pb-5">
                  <p className="text-sm text-white/70 leading-relaxed">{t(`items.${i}.answer`)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
