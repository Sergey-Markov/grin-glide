import { RiArrowGoBackFill } from "react-icons/ri";

interface BackBtnProps {
  onClick: () => void;
}

const BackBtn = ({ onClick }: BackBtnProps) => (
  <button
    type="button"
    onClick={onClick}
    className=" btn btn-circle "
  >
    <RiArrowGoBackFill className="text-primary" />
  </button>
);

export default BackBtn;
