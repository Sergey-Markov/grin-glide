import { v4 as uuid } from "uuid";
import {
  IoGameController,
  IoHomeOutline,
  IoLanguage,
  IoWallet,
} from "react-icons/io5";
import { BsFillBarChartLineFill, BsFillInfoCircleFill } from "react-icons/bs";
import { LuCalendarHeart } from "react-icons/lu";
import { FaHandsHelping } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { GiThreeFriends } from "react-icons/gi";

export const formFirstVoteOptions = [
  {
    id: uuid(),
    name: "futureGrinG",
    valueField: "leprechaun",
    checked: false,
  },
  {
    id: uuid(),
    name: "futureGrinG",
    valueField: "investor",
    checked: false,
  },
  {
    id: uuid(),
    name: "futureGrinG",
    valueField: "pirate",
    checked: true,
  },
];

export const MENU_ITEMS = [
  {
    id: uuid(),
    label: "wallet",
    href: "/",
    icon: IoWallet,
  },
  {
    id: uuid(),
    label: "language",
    href: "/",
    icon: IoLanguage,
  },
  {
    id: uuid(),
    label: "about",
    href: "/",
    icon: BsFillInfoCircleFill,
  },
  {
    id: uuid(),
    label: "road map",
    href: "/",
    icon: LuCalendarHeart,
  },
  {
    id: uuid(),
    label: "support",
    href: "/",
    icon: FaHandsHelping,
  },
];

export const BOTTOM_NAVIGATION = [
  {
    id: uuid(),
    label: "Home",
    icon: IoHomeOutline,
    href: "/",
  },
  {
    id: uuid(),
    label: "Tasks",
    icon: GoTasklist,
    href: "/tasks",
  },
  {
    id: uuid(),
    label: "Game",
    icon: IoGameController,
    href: "/game",
  },
  {
    id: uuid(),
    label: "Friends",
    icon: GiThreeFriends,
    href: "/friends",
  },
  {
    id: uuid(),
    label: "Leaders",
    icon: BsFillBarChartLineFill,
    href: "/liderboard",
  },
];

export const investorStatus = "investor";
export const inviteBtnLabel = "Invite Friend";
export const friendsPageTitle = "Friends:";

export const COMING_SOON = "This feature will be available soon!";
