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
import Preloader from "@/components/Preloader/Preloader";
import { IDbUser, useTelegramUser } from "@/hooks/useTelegramUser";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<IDbUser | null>(null);
  const { userTelegram } = useTelegramUser();

  useEffect(() => {
    if (WebApp && userTelegram) {
      if (!user) {
        setUser(userTelegram);
      }
    }
  }, [setUser, user, userTelegram]);

  console.log("user:", user);

  const openMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  if (user && WebApp.ready()) {
    return <Preloader />;
  }

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
        </main>
      </div>
    </div>
  );
}
