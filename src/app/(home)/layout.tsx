import React from "react";

// import { NextIntlClientProvider } from "next-intl";
// import { inter, merriweather } from "@/fonts";
// import { getLocale, getMessages } from "next-intl/server";
import BtmNav from "@/components/BtmNav/BtmNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <BtmNav />
    </>
  );
}
