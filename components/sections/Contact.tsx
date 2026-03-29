"use client";

import { useTranslations } from "next-intl";
import { useState, FormEvent } from "react";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function Contact() {
  const t = useTranslations("contact");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const { ref, isVisible } = useScrollReveal();

  const validate = (form: HTMLFormElement) => {
    const newErrors: { name?: string; phone?: string } = {};
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    if (!name) newErrors.name = "Моля, въведи своето име.";
    if (!phone) newErrors.phone = "Моля, въведи телефонен номер.";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSending(true);
    setStatus("idle");

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      hasSite: (form.elements.namedItem("hasSite") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus("success"); form.reset(); }
      else { setStatus("error"); }
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  const inputClasses =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1a2744] placeholder:text-gray-400 focus:outline-none focus:border-primary/60 transition-colors";

  const inputError =
    "w-full bg-white border border-red-400 rounded-xl px-4 py-3.5 text-sm text-[#1a2744] placeholder:text-gray-400 focus:outline-none focus:border-red-400 transition-colors";

  return (
    <section id="contact" className="py-24 px-4 bg-primary">
      <div ref={ref} className="max-w-xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-4 leading-tight reveal ${isVisible ? 'visible' : ''}`}>
          {t("title")}
        </h2>
        <p className={`text-white/70 text-center text-sm mb-8 leading-relaxed max-w-md mx-auto reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          {t("subtitle")}
        </p>

        <div className={`border-l-2 border-accent pl-4 mb-8 reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          <p className="text-sm text-white/80 italic">{t("note")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className={`bg-white rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-[#1a2744] mb-2">
              {t("name")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={errors.name ? inputError : inputClasses}
              onChange={() => errors.name && setErrors(e => ({ ...e, name: undefined }))}
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-[#1a2744] mb-2">
              {t("phone")} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={t("phonePlaceholder")}
              className={errors.phone ? inputError : inputClasses}
              onChange={() => errors.phone && setErrors(e => ({ ...e, phone: undefined }))}
            />
            {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#1a2744] mb-2">{t("email")}</label>
            <input type="email" id="email" name="email" placeholder={t("emailPlaceholder")} className={inputClasses} />
          </div>

          <div>
            <label htmlFor="business" className="block text-sm font-semibold text-[#1a2744] mb-2">{t("business")}</label>
            <input type="text" id="business" name="business" placeholder={t("businessPlaceholder")} className={inputClasses} />
          </div>

          <div>
            <label htmlFor="hasSite" className="block text-sm font-semibold text-[#1a2744] mb-2">{t("hasSite")}</label>
            <select id="hasSite" name="hasSite" className={inputClasses}>
              <option value="">{t("hasSiteDefault")}</option>
              <option value="no">{t("hasSiteOptions.no")}</option>
              <option value="yes">{t("hasSiteOptions.yes")}</option>
              <option value="outdated">{t("hasSiteOptions.outdated")}</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[#1a2744] mb-2">{t("message")}</label>
            <textarea id="message" name="message" rows={4} placeholder={t("messagePlaceholder")} className={inputClasses + " resize-none"} />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full btn-gradient disabled:opacity-50 text-white font-semibold px-8 py-4 rounded-full text-sm"
          >
            {sending ? t("sending") : t("submit")} {!sending && <>&rarr;</>}
          </button>

          <p className="text-xs text-gray-400 text-center">{t("privacy")}</p>

          {status === "success" && <p className="text-green-600 text-sm text-center">{t("success")}</p>}
          {status === "error" && <p className="text-red-500 text-sm text-center">{t("error")}</p>}
        </form>
      </div>
    </section>
  );
}
