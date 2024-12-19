"use client";

import { useEffect } from "react";
import { updateUserFields } from "@/services/updateUserFields";
import { useUser } from "@/app/contexts/AppContext";
import GetMorePointsAlert from "../GetMorePointsAlert/GetMorePointsAlert";
import ConfettiWrapper from "../ConfettiWrapper/ConfettiWrapper";

interface ModalDailyGiftProps {
  reward?: number;
  closeModal: () => void;
  newDate: string;
}

const ModalDailyGift = ({
  newDate,
  reward = 50,
  closeModal,
}: ModalDailyGiftProps) => {
  const { user, updateUser, setAppError } = useUser();

  const openModalHandler = () => {
    const modal = document?.getElementById("my_modal_5") as HTMLDialogElement;
    if (modal?.showModal) {
      modal.showModal();
    }
  };
  const closeModalHandler = async () => {
    if (user) {
      const newPointCount = user.points + reward;
      try {
        const result = await updateUserFields(user.telegram_id, {
          points: newPointCount,
          lastResetDailyTask: newDate,
        });
        if (result) {
          updateUser(result.userDB);
        }
      } catch (error) {
        setAppError({
          message: "TryLater",
          isShow: true,
        });
      } finally {
        const modal = document.getElementById(
          "my_modal_5"
        ) as HTMLDialogElement;
        modal?.close();
        closeModal();
      }
    }
  };

  useEffect(() => {
    openModalHandler();
  }, []);

  return (
    <dialog
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle flex flex-col justify-end items-center"
    >
      <ConfettiWrapper>
        <div className=" bg-slate-900 w-full h-fit rounded-t-2xl pb-12 pt-8 ">
          <GetMorePointsAlert
            closeModal={closeModalHandler}
            points={reward}
          />
        </div>
      </ConfettiWrapper>
    </dialog>
  );
};

export default ModalDailyGift;
