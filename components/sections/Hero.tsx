"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen bg-primary flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full bg-white/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white opacity-0 animate-fade-up"
        >
          {t("title")}
        </h1>
        <p
          className="text-lg sm:text-xl text-white/80 font-medium mb-6 leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {t("subtitle")}
        </p>
        <p
          className="text-white/65 text-base mb-10 leading-relaxed max-w-lg mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {t("description")}
        </p>
        <div
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#contact"
            className="btn-gradient inline-block text-white font-semibold px-8 py-4 rounded-full text-base"
          >
            {t("cta")} &rarr;
          </a>
        </div>
        <p
          className="mt-6 text-sm text-white/50 italic max-w-md mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {t("note")}
        </p>
      </div>
    </section>
  );
}
