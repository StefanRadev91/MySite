"use client";

import { useTranslations } from "next-intl";
import { useScrollReveal } from "@/components/useScrollReveal";

const icons = [
  <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25h-13.5A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25h-13.5A2.25 2.25 0 013 12V5.25" />
  </svg>,
  <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function PainPoints() {
  const t = useTranslations("painPoints");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 px-4 bg-primary-dark">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center text-white mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`card-glow rounded-2xl p-6 reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              <div className="text-accent mb-5">{icons[i]}</div>
              <p className="text-sm text-white/80 leading-relaxed">
                {t(`items.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
