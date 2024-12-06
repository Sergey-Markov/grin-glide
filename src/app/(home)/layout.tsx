"use client";

import React from "react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import BtmNav from "@/components/BtmNav/BtmNav";

const stringManifest =
  "https://gold-ready-angelfish-861.mypinata.cloud/files/bafkreie5wx7s76uheyfbs4mniyssir3txqztqbpcce6uadnqesnm4isahq?X-Algorithm=PINATA1&X-Date=1733473637&X-Expires=30&X-Method=GET&X-Signature=057cda3e758eec4640cd67cce8fb7f7220b8881cccdddc36cb011689ff6eac17";

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
