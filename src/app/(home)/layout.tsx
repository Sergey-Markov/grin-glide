"use client";

import React from "react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import BtmNav from "@/components/BtmNav/BtmNav";

const stringManifest =
  "https://gold-ready-angelfish-861.mypinata.cloud/ipfs/bafkreievfyuvu6u5u3zx7skaamnk7e4nfqf2cltq7kikkshmcf464gploe";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TonConnectUIProvider manifestUrl={stringManifest}>
      {children}
      <BtmNav />
    </TonConnectUIProvider>
  );
}
