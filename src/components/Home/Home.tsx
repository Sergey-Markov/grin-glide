/* eslint-disable camelcase */

"use client";

import { useState } from "react";
import VoteForm from "@/components/VoteForm/VoteForm";
import { formFirstVoteOptions } from "@/constants";
import Menu from "@/components/Menu/Menu";
import MainHeader from "@/components/MainHeader/MainHeader";
import HeroStartTask from "@/components/HeroStartTask/HeroStartTask";
import { useUser } from "@/app/contexts/AppContext";
import ModalWellcomeGift from "../ModalWellcomeGift/ModalWellcomeGift";

const HomePage = () => {
  const { user, setIsNewUser, isNewUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const closeModalHandler = () => {
    setIsNewUser(false);
  };

  const openMenuHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="font-sans text-white min-h-screen pb-12">
      <div className="relative mx-auto px-3 py-6 overflow-hidden">
        {user && (
          <MainHeader
            open={isOpen}
            openToggler={openMenuHandler}
            userDB={user}
          />
        )}
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
      {isNewUser && <ModalWellcomeGift closeModal={closeModalHandler} />}
    </div>
  );
};

export default HomePage;
