/* eslint-disable no-console */
import Image from "next/image";
import { IDbUser } from "@/hooks/useTelegramUser";
import { useUserProfilePhoto } from "@/hooks/useUserProfilePhoto";
import { getFirstAndLastLetter } from "@/utils";
import PointGringImg from "../PointGringImg/PointGringImg";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

import s from "./MainHeader.module.css";

export interface IMainHeaderProps {
  open: boolean;
  openToggler: () => void;
  user: IDbUser;
}
const loaderProp = ({ src }: { src: string }) => src;

const MainHeader = ({ open, openToggler, user }: IMainHeaderProps) => {
  const { photoUrl, error } = useUserProfilePhoto(user.telegram_id);
  const imgDescription = `${user.username}'s profile`;
  console.log("photoUrl:", photoUrl);

  return (
    <header className={s.mainHeader}>
      <div className={s.user}>
        <div className={s.userAvatar}>
          <div className={s.userAvatarBox}>
            {!photoUrl || error ? (
              <p className="w-12 h-12 rounded-full mr-3 uppercase bg-teal-950 flex items-center justify-center">
                {getFirstAndLastLetter(user.username as string)}
              </p>
            ) : (
              <Image
                src={photoUrl}
                alt={imgDescription}
                width={512}
                height={512}
                loading="lazy"
                unoptimized
                loader={loaderProp}
              />
            )}
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
