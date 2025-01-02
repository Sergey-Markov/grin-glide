"use client";

import { getFirstAndLastLetter } from "@/utils";
import { useEffect } from "react";
import { setUserLocale } from "@/services/locale";
import { TUserContext, useUser } from "@/app/contexts/AppContext";
import PointGringImg from "../PointGringImg/PointGringImg";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

import s from "./MainHeader.module.css";
import SocLinkList from "../SocLinkList/SocLinkList";

export interface IMainHeaderProps {
  open: boolean;
  openToggler: () => void;
  userDB: TUserContext;
}

const MainHeader = ({ open, openToggler, userDB }: IMainHeaderProps) => {
  const { isNewUser } = useUser();

  useEffect(() => {
    if (userDB && userDB.selected_language) {
      setUserLocale(userDB.selected_language);
    }
  }, [userDB]);

  return (
    <header className={s.mainHeader}>
      <div className={s.user}>
        <div className={s.userAvatar}>
          <div className={s.userAvatarBox}>
            <p className="w-12 h-12 rounded-full mr-3 uppercase bg-teal-950 flex items-center justify-center">
              {getFirstAndLastLetter(userDB.username as string)}
            </p>
          </div>
        </div>
        <div>
          <h1 className={s.userName}>{userDB.username}</h1>
          <div className="flex items-center gap-1">
            <p className="">{isNewUser ? "0" : userDB.points}</p>
            <PointGringImg variant="small" />
          </div>
        </div>
      </div>
      <SocLinkList />
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
