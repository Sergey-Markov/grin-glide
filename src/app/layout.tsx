import React from "react";
import type { Metadata } from "next";
import { inter, merriweather } from "@/fonts";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import BtmNav from "@/components/BtmNav/BtmNav";

import "./globals.css";

const ogDescription = "Покращення добробуту в Україні через петиції";
const ogImage = "/public/assets/images/newLogologo.png";
const siteTitle = "Gring";

export const metadata: Metadata = {
  title: siteTitle,
  description: ogDescription,
  keywords: "GrinG, GrinGlide, mini App, token",
  authors: [{ name: "Serhii Markov" }],
  creator: "GrinG",

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
          <BtmNav />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
