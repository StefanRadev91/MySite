import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin", "cyrillic"], display: "swap" });

export const metadata: Metadata = {
  title: "Stefan Radev — Web Developer",
  description: "Професионален уеб разработчик. Модерни уебсайтове за вашия бизнес.",
  openGraph: {
    title: "Stefan Radev — Web Developer",
    description: "Професионален уеб разработчик. Модерни уебсайтове за вашия бизнес.",
    url: "https://mysite-ten-mocha.vercel.app",
    siteName: "Stefan Radev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stefan Radev — Web Developer",
    description: "Професионален уеб разработчик. Модерни уебсайтове за вашия бизнес.",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as "bg" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`scroll-smooth ${inter.className}`}>
      <body className="bg-background text-foreground antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
