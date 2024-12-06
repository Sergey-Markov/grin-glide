"use client";

import React from "react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import BtmNav from "@/components/BtmNav/BtmNav";

const stringManifest =
  "https://gold-ready-angelfish-861.mypinata.cloud/ipfs/bafkreifgcoyel2esliyobndxg2s66xqc5mpzax6xmjzny6q4zhkmxdms3i";

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
