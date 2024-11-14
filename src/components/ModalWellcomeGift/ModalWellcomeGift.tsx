"use client";

import { useEffect } from "react";
import GetMorePointsAlert from "../GetMorePointsAlert/GetMorePointsAlert";

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
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <GetMorePointsAlert
          closeModal={closeModalHandler}
          points={1000}
        />
        {/* <div className="modal-action">
          <button
            type="button"
            className="btn"
            onClick={() => {
              const modal = document.getElementById(
                "my_modal_5"
              ) as HTMLDialogElement;
              modal?.close();
              closeModal();
            }}
          >
            Close
          </button>
        </div> */}
      </div>
    </dialog>
  );
};

export default ModalWellcomeGift;
