/* eslint-disable camelcase */

"use client";

import { useState } from "react";
import VoteForm from "@/components/VoteForm/VoteForm";
import { formFirstVoteOptions } from "@/constants";
import Menu from "@/components/Menu/Menu";
import MainHeader from "@/components/MainHeader/MainHeader";
import HeroStartTask from "@/components/HeroStartTask/HeroStartTask";
import { useUser } from "@/app/contexts/AppContext";
import { updateVoteFields } from "@/services/updateVoteFields";
import { updateUserFields } from "@/services/updateUserFields";
import ModalWellcomeGift from "../ModalWellcomeGift/ModalWellcomeGift";
import LogoIcon from "../LogoIcon/LogoIcon";
import Preloader from "../Preloader/Preloader";

const HomePage = () => {
  const { user, setIsNewUser, isNewUser, updateUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const closeModalHandler = () => {
    setIsNewUser(false);
  };

  const openMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  const sendFirstVouteFormHandler = async (value: string) => {
    const newUpdatesObj = {
      voteResult: value,
    };
    try {
      if (user) {
        const result = await updateVoteFields(
          "becomeGring",
          user.telegram_id,
          newUpdatesObj
        );
        if (result) {
          const newCompletedTask = { id: "becomeGring", isClaimed: false };
          const completedTasks = user?.completedTasks || [];
          const resultOfAddCompletedTask = await updateUserFields(
            user.telegram_id,
            {
              completedTasks: [...completedTasks, newCompletedTask],
            }
          );
          if (resultOfAddCompletedTask) {
            updateUser(result.userDB);
          }
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  if (!user) {
    return <Preloader />;
  }
  const isCompletedVote = user?.completedTasks.some(
    (task) => task.id === "becomeGring"
  );

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
          {isCompletedVote ? (
            <LogoIcon />
          ) : (
            <div>
              <section
                id="hero-home"
                className="flex justify-center items-center mb-8"
              >
                <HeroStartTask />
              </section>
              <VoteForm
                onSend={sendFirstVouteFormHandler}
                options={formFirstVoteOptions}
              />
            </div>
          )}
        </main>
      </div>
      {isNewUser && <ModalWellcomeGift closeModal={closeModalHandler} />}
    </div>
  );
};

export default HomePage;
