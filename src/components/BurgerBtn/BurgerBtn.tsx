/* eslint-disable import/no-cycle */
import classNames from "classnames";
import { HiDotsHorizontal } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { IMainHeaderProps } from "../MainHeader/MainHeader";

const BurgerBtn = ({ open, openToggler }: IMainHeaderProps) => (
  <button
    type="button"
    className="btn btn-circle btn-ghost swap swap-rotate z-50"
    aria-label="menu"
    onClick={openToggler}
  >
    {!open ? (
      <HiDotsHorizontal
        className={classNames(["w-6 h-6", open ? "swap-on" : "swap-off"])}
      />
    ) : (
      <GrClose
        className={classNames(["w-6 h-6", !open ? "swap-on" : "swap-off"])}
      />
    )}
  </button>
);

export default BurgerBtn;
