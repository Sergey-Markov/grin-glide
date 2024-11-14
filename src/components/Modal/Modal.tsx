"use client";

import { ReactNode, useEffect } from "react";

interface ModalProps {
  closeModal: () => void;
  children: ReactNode;
}

const Modal = ({ closeModal, children }: ModalProps) => {
  const openModalHandler = () => {
    const modal = document?.getElementById("my_modal_5") as HTMLDialogElement;

    if (modal?.showModal) {
      modal.showModal();
    } else {
      // eslint-disable-next-line no-console
      console.error("Dialog element or showModal method is not supported.");
    }
  };

  useEffect(() => {
    openModalHandler();
  }, []);

  return (
    <dialog
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle bg-black z-50"
    >
      <div className="modal-box">
        {children}
        <div className="modal-action">
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
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
