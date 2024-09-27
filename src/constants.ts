import { v4 as uuid } from "uuid";
import { IoLanguage, IoWallet } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { LuCalendarHeart } from "react-icons/lu";
import { FaHandsHelping } from "react-icons/fa";

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
