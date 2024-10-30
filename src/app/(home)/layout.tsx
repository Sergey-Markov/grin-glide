import React from "react";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import BtmNav from "@/components/BtmNav/BtmNav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <div>
      <NextIntlClientProvider messages={messages}>
        {children}
        <BtmNav />
      </NextIntlClientProvider>
    </div>
  );
}
