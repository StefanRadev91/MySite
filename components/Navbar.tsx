"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchLocale = () => {
    const next = locale === "bg" ? "en" : "bg";
    router.replace(pathname, { locale: next });
  };

  const navLinks = [
    { href: "#services", label: t("services") },
    { href: "#portfolio", label: t("portfolio") },
    { href: "#about", label: t("about") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — white on green */}
          <a href="#" className="flex items-center gap-2.5 group">
            <svg className="h-9 w-9 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 50 60" fill="none">
              <path d="M18 12L6 30L18 48" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32 48L44 30L32 12" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="28" y1="8" x2="22" y2="52" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            </svg>
            <div className="leading-tight">
              <span className="block text-sm font-bold tracking-wide text-white">STEFAN RADEV</span>
              <span className="block text-[10px] tracking-wider"><span className="text-primary">Web Development</span></span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white hover:text-white/80 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={switchLocale}
              className="text-xs font-medium px-2.5 py-1 rounded border border-white/50 text-white hover:border-white transition-colors"
            >
              {t("langToggle")}
            </button>
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-2 rounded-full bg-white text-accent hover:bg-white/90 transition-colors shadow-sm"
            >
              {t("cta")}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={switchLocale}
              className="text-xs font-medium px-2.5 py-1 rounded border border-white/30 text-white"
            >
              {t("langToggle")}
            </button>
            <a href="#contact" className="text-xs font-semibold px-4 py-2 rounded-full bg-white text-accent">
              {t("cta")}
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-sm text-white/80 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
