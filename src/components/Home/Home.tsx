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
import Preloader from "../Preloader/Preloader";
import Toast from "../Toast/Toast";
import MiningBtnSection from "../MiningBtnSection/MiningBtnSection";
import ModalDailyGift from "../ModalDailyGift/ModalDailyGift";
import NextClaimTimer from "../NextClaimTimer/NextClaimTimer";
import SocLinkList from "../SocLinkList/SocLinkList";

const currentDate = new Date().toISOString().split("T")[0];

const HomePage = () => {
  const { user, setIsNewUser, isNewUser, updateUser, appErrors, setAppError } =
    useUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDailyRevard, setIsOpenDailyRevard] = useState(false);

  const closeModalHandler = () => {
    setIsNewUser(false);
  };

  const closeModalDailyGiftHandler = () => {
    setIsOpenDailyRevard(false);
  };
  const openModalDailyGiftHandler = () => {
    setIsOpenDailyRevard(true);
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

  const NotCheckedDailyReward = user.lastResetDailyTask !== currentDate;

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
        <div className="flex justify-between items-center">
          {!NotCheckedDailyReward && <NextClaimTimer />}
          <SocLinkList />
        </div>
        <main className="p-4">
          {isCompletedVote ? (
            <MiningBtnSection
              onOpenModalDailyGift={openModalDailyGiftHandler}
              canClaim={NotCheckedDailyReward}
            />
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
      {NotCheckedDailyReward && isOpenDailyRevard && (
        <ModalDailyGift
          closeModal={closeModalDailyGiftHandler}
          newDate={currentDate}
        />
      )}
    </div>
  );
};

export default HomePage;
