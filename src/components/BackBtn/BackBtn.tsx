import { BsBackspace } from "react-icons/bs";

interface BackBtnProps {
  onClick: () => void;
}

const BackBtn = ({ onClick }: BackBtnProps) => (
  <button
    type="button"
    onClick={onClick}
    className=" btn btn-circle "
  >
    <BsBackspace />
  </button>
);

export default BackBtn;
