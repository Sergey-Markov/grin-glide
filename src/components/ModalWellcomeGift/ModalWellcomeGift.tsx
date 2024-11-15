"use client";

import { useEffect } from "react";
import GetMorePointsAlert from "../GetMorePointsAlert/GetMorePointsAlert";
import ConfettiWrapper from "../ConfettiWrapper/ConfettiWrapper";

interface ModalProps {
  closeModal: () => void;
}

const ModalWellcomeGift = ({ closeModal }: ModalProps) => {
  const openModalHandler = () => {
    const modal = document?.getElementById("my_modal_5") as HTMLDialogElement;
    if (modal?.showModal) {
      modal.showModal();
    }
  };
  const closeModalHandler = () => {
    const modal = document.getElementById("my_modal_5") as HTMLDialogElement;
    modal?.close();
    closeModal();
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
        <div className=" bg-slate-900 w-full h-1/3 ">
          <GetMorePointsAlert
            closeModal={closeModalHandler}
            points={1000}
          />
        </div>
      </ConfettiWrapper>
    </dialog>
  );
};

export default ModalWellcomeGift;
