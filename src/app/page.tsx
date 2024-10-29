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
import { TelegramUser, useTelegramUser } from "@/hooks/useTelegramUser";
import Preloader from "@/components/Preloader/Preloader";
import BtmNav from "@/components/BtmNav/BtmNav";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  // const [tgUserData, setTgUserData] = useState<TelegramUser | null>(null);
  // const user = useTelegramUser();

  // useEffect(() => {
  //   if (WebApp && user) {
  //     WebApp.showAlert("Hello bro");
  //     setTgUserData(user);
  //   }
  // }, [user]);

  // console.log("user:", tgUserData);

  const openMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  // if (!tgUserData) {
  //   return <Preloader />;
  // }

  return (
    <div className="font-sans text-white min-h-screen pb-12">
      <div className="relative mx-auto px-3 py-6 overflow-hidden">
        <MainHeader
          open={isOpen}
          openToggler={openMenuHandler}
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
          <BtmNav />
        </main>
      </div>
    </div>
  );
}
