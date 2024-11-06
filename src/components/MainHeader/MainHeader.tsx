/* eslint-disable no-console */

"use client";

import { getFirstAndLastLetter } from "@/utils";
import { IDbUser } from "@/hooks/useTelegramUser";
import PointGringImg from "../PointGringImg/PointGringImg";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

import s from "./MainHeader.module.css";

export interface IMainHeaderProps {
  open: boolean;
  openToggler: () => void;
  user: IDbUser;
}

const MainHeader = ({ open, openToggler, user }: IMainHeaderProps) => {
  if (!user) {
    return null;
  }

  return (
    <header className={s.mainHeader}>
      <div className={s.user}>
        <div className={s.userAvatar}>
          <div className={s.userAvatarBox}>
            <p className="w-12 h-12 rounded-full mr-3 uppercase bg-teal-950 flex items-center justify-center">
              {getFirstAndLastLetter(user.username as string)}
            </p>
          </div>
        </div>
        <div>
          <h1 className={s.userName}>{user.username}</h1>
          <div className="flex items-center gap-1">
            <p className="">10000</p>
            <PointGringImg variant="small" />
          </div>
        </div>
      </div>
      <div className={s.burgerBtnView}>
        <BurgerBtn
          open={open}
          openToggler={openToggler}
        />
      </div>
    </header>
  );
};

export default MainHeader;
