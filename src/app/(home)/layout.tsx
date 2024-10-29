import React from "react";

import BtmNav from "@/components/BtmNav/BtmNav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <BtmNav />
    </div>
  );
}
