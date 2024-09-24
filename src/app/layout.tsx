import React from "react";
import type { Metadata } from "next";
import { inter, merriweather } from "@/fonts";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "./globals.css";
import Footer from "@/components/Footer/Footer";

const ogDescription = "Покращення добробуту в Україні через петиції";
const ogImage = "/public/assets/images/newLogologo.png";
const siteTitle = "The Petition";

export const metadata: Metadata = {
  title: siteTitle,
  description: ogDescription,
  keywords: "Україна, петиції, добробут, державні органи, активізм",
  authors: [{ name: "Serhii Markov" }],
  creator: "Serhii Markov",

  icons: {
    icon: ogImage,
    shortcut: ogImage,
    apple: ogImage,
    other: {
      rel: "apple-touch-icon",
      url: ogImage,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": 1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html
      data-theme="cupcake"
      lang={locale}
    >
      <body className={`${inter.variable} ${merriweather.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
