// import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
// import { useTelegramUser } from "@/hooks/useTelegramUser";
import { redirect } from "next/navigation";
import Preloader from "@/components/Preloader/Preloader";
// import { useUser } from "./context/UserContext";

export default function Home() {
  if (WebApp) {
    redirect(`/main`);
  }

  return <Preloader />;
}
