"use client";

import React from "react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import BtmNav from "@/components/BtmNav/BtmNav";

const stringManifest =
  "https://gold-ready-angelfish-861.mypinata.cloud/files/bafkreie5wx7s76uheyfbs4mniyssir3txqztqbpcce6uadnqesnm4isahq?X-Algorithm=PINATA1&X-Date=1733403628&X-Expires=30&X-Method=GET&X-Signature=b2b75a213c15caafa7dbe2821408749a0c597d6fa2b6aa89701fe3e2ab4cb9fe";

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
