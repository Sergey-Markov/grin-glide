import React from "react";

import { NextIntlClientProvider } from "next-intl";
import { inter, merriweather } from "@/fonts";
import { getLocale, getMessages } from "next-intl/server";
import BtmNav from "@/components/BtmNav/BtmNav";

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
