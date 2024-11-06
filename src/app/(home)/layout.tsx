import React from "react";
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
