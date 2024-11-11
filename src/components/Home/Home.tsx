/* eslint-disable no-unused-vars */

"use client";

import { useState } from "react";
import { useTelegramUser } from "@/hooks/useTelegramUser";
import VoteForm from "@/components/VoteForm/VoteForm";
import { formFirstVoteOptions } from "@/constants";
import Menu from "@/components/Menu/Menu";
import MainHeader from "@/components/MainHeader/MainHeader";
import HeroStartTask from "@/components/HeroStartTask/HeroStartTask";
import Modal from "../Modal/Modal";
import GetMorePointsAlert from "../GetMorePointsAlert/GetMorePointsAlert";

const HomePage = () => {
  const { isNewUser, setIsNewUser } = useTelegramUser();
  // eslint-disable-next-line indent, no-console
  console.log("isNewUser:", isNewUser);
  const [isOpen, setIsOpen] = useState(isNewUser);

  const closeModalHandler = () => {
    setIsNewUser(false);
  };

  const openMenuHandler = () => {
    setIsOpen(!isOpen);
  };

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
      {/* {!isNewUser && ( */}
      {/* <Modal closeModal={closeModalHandler}> */}
      <GetMorePointsAlert points={1000} />
      {/* </Modal> */}
      {/* )} */}
    </div>
  );
};

export default HomePage;
