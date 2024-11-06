import React from "react";

// import { NextIntlClientProvider } from "next-intl";
// import { inter, merriweather } from "@/fonts";
// import { getLocale, getMessages } from "next-intl/server";
import BtmNav from "@/components/BtmNav/BtmNav";
import { UserProvider } from "../context/UserContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      {children}
      <BtmNav />
    </UserProvider>
  );
}
