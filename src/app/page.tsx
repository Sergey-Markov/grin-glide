/* eslint-disable no-console */
/* eslint-disable no-shadow */

"use client";

import { useEffect } from "react";
// import VoteForm from "@/components/VoteForm/VoteForm";
// import { formFirstVoteOptions } from "@/constants";
// import Menu from "@/components/Menu/Menu";
// import MainHeader from "@/components/MainHeader/MainHeader";
// import HeroStartTask from "@/components/HeroStartTask/HeroStartTask";
import WebApp from "@twa-dev/sdk";
import Preloader from "@/components/Preloader/Preloader";
import { useTelegramUser } from "@/hooks/useTelegramUser";
import { redirect } from "next/navigation";
import { useUser } from "./context/UserContext";

export default function Home() {
  // const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useUser();
  const { userTelegram } = useTelegramUser();

  useEffect(() => {
    if (window && WebApp && userTelegram) {
      if (!user) {
        setUser(userTelegram);
        WebApp.showAlert("fhfhfhf");
      }
    }
  }, [user]);

  console.log("user:", user);

  // const openMenuHandler = () => {
  //   setIsOpen(!isOpen);
  // };

  if (user && WebApp.ready()) {
    redirect(`/main`);
    return <Preloader />;
  }

  return <Preloader />;
}
