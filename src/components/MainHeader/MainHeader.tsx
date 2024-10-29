/* eslint-disable import/no-cycle */
import Image from "next/image";
import { TelegramUser } from "@/hooks/useTelegramUser";
import PointGringImg from "../PointGringImg/PointGringImg";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

import s from "./MainHeader.module.css";

export interface IMainHeaderProps {
  open: boolean;
  openToggler: () => void;
  user: TelegramUser;
}

const MainHeader = ({ open, openToggler, user }: IMainHeaderProps) => (
  <header className={s.mainHeader}>
    <div className={s.user}>
      <div className={s.userAvatar}>
        <div className={s.userAvatarBox}>
          <Image
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Gringlide child"
            width={512}
            height={512}
            loading="lazy"
          />
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

export default MainHeader;
