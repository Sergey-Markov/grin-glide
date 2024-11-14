import { ReactNode } from "react";

interface ModalProps {
  closeModal: () => void;
  children: ReactNode;
}

const Modal = ({ closeModal, children }: ModalProps) => (
  <dialog
    id="my_modal_5"
    className="modal modal-bottom sm:modal-middle bg-black z-50"
  >
    <div className="modal-box">
      {children}
      <div className="modal-action">
        <form method="dialog">
          <button
            type="button"
            className="btn"
            onClick={closeModal}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  </dialog>
);

export default Modal;
