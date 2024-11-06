/* eslint-disable no-console */
/* eslint-disable no-shadow */

"use client";

import { useEffect, useState } from "react";
import VoteForm from "@/components/VoteForm/VoteForm";
import { formFirstVoteOptions } from "@/constants";
import Menu from "@/components/Menu/Menu";
import MainHeader from "@/components/MainHeader/MainHeader";
import HeroStartTask from "@/components/HeroStartTask/HeroStartTask";
import WebApp from "@twa-dev/sdk";
import { useTelegramUser } from "@/hooks/useTelegramUser";
import Preloader from "@/components/Preloader/Preloader";
import BtmNav from "@/components/BtmNav/BtmNav";
import { useUser } from "./context/UserContext";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useUser();
  const { userTelegram } = useTelegramUser();

  useEffect(() => {
    if (WebApp && userTelegram) {
      if (!user) {
        setUser(userTelegram);
        WebApp.showAlert("Hello bro");
      }
    }
  }, [user]);

  console.log("user:", user);

  const openMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  if (!user) {
    return <Preloader />;
  }

  return (
    <div className="font-sans text-white min-h-screen pb-12">
      <div className="relative mx-auto px-3 py-6 overflow-hidden">
        <MainHeader
          open={isOpen}
          openToggler={openMenuHandler}
          user={user}
        />
        <Menu open={isOpen} />
        <main className="p-4">
          <section
            id="hero-home"
            className="flex justify-center items-center mb-8"
          >
            <HeroStartTask />
          </section>
          <VoteForm options={formFirstVoteOptions} />
        </main>
      </div>
      <BtmNav />
    </div>
  );
}
