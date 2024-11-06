"use client";

import React from "react";
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
