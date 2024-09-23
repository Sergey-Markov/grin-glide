import type { Metadata } from "next";
import { inter, merriweather } from "@/fonts";

import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  );
}
