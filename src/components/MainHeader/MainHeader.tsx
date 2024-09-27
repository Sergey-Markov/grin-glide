import Image from "next/image";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

import s from "./MainHeader.module.css";

export interface IMainHeaderProps {
  open: boolean;
  openToggler: () => void;
}

const MainHeader = ({ open, openToggler }: IMainHeaderProps) => (
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
        <h1 className={s.userName}>Raduga</h1>
        <p className="">10000$</p>
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
