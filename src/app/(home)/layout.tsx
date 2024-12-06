"use client";

import React from "react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import BtmNav from "@/components/BtmNav/BtmNav";

const stringManifest =
  "https://gold-ready-angelfish-861.mypinata.cloud/ipfs/bafkreif63q6khjhha7ho5ofwgbc2fwm34utvh6aukiax7rczupbi2ghp5m";

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
