"use client";

/* eslint-disable camelcase */

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
import Toast from "../Toast/Toast";

const HomePage = () => {
  const { user, setIsNewUser, isNewUser, updateUser, appErrors, setAppError } =
    useUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
        setIsLoading(true);
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
            updateUser(resultOfAddCompletedTask.userDB);
          }
        }
      }
    } catch (error: any) {
      setAppError({
        message: !error.message ? `NotCompleted` : "TryLater",
        isShow: true,
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setAppError(null), 3500);
    }
  };

  if (!user || isLoading) {
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
            <section
              id="hero-home"
              className="flex justify-center items-center mb-8 bg-transparent min-h-screen p-4 md:p-8"
            >
              <LogoIcon />
            </section>
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
      {appErrors && <Toast message={appErrors.message} />}
      {isNewUser && <ModalWellcomeGift closeModal={closeModalHandler} />}
    </div>
  );
};

export default HomePage;
