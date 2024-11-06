"use client";

import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { useTelegramUser } from "@/hooks/useTelegramUser";
import { redirect } from "next/navigation";
import Preloader from "@/components/Preloader/Preloader";
import { useUser } from "./context/UserContext";

export default function Home() {
  const { user, setUser } = useUser();
  const { userTelegram } = useTelegramUser();

  useEffect(() => {
    if (WebApp && userTelegram) {
      if (!user) {
        setUser(userTelegram);
        WebApp.showAlert("fhfhfhf");
      }
    }
  }, [setUser, user, userTelegram]);

  if (user && WebApp) {
    redirect(`/main`);
  }

  return <Preloader />;
}
