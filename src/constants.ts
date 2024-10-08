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
    href: "/wallet",
    icon: IoWallet,
  },
  {
    id: uuid(),
    label: "investments",
    href: "/investments",
    icon: IoWallet,
  },
  {
    id: uuid(),
    label: "language",
    href: "/language",
    icon: IoLanguage,
  },
  {
    id: uuid(),
    label: "about",
    href: "/about",
    icon: BsFillInfoCircleFill,
  },
  {
    id: uuid(),
    label: "roadMap",
    href: "/roadmap",
    icon: LuCalendarHeart,
  },
  {
    id: uuid(),
    label: "support",
    href: "/support",
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

export const aboutContent = [
  {
    id: uuid(),
    title: "titleGrinG",
    text: "mainText",
  },
  {
    id: uuid(),
    title: "keyFeatures",
    text: "",
    description: [
      {
        id: uuid(),
        subTitle: "voteTitle",
        subText: "voteText",
      },
      {
        id: uuid(),
        subTitle: "rewardsTitle",
        subText: "rewardsText",
      },
      {
        id: uuid(),
        subTitle: "monetizationTitle",
        subText: "monetizationText",
      },
      {
        id: uuid(),
        subTitle: "reinvestmentTitle",
        subText: "reinvestmentText",
      },
    ],
  },
  {
    id: uuid(),
    title: "miningMechanismTitle",
    text: "",
    description: [
      {
        id: uuid(),
        subTitle: "",
        subText: "miningMechanism1Text",
      },
      {
        id: uuid(),
        subTitle: "",
        subText: "miningMechanism2Text",
      },
    ],
  },
  {
    id: uuid(),
    title: "roadMapTitle",
    text: "roadMapText",
  },
  {
    id: uuid(),
    title: "earningProfitTitle",
    text: "",
    description: [
      {
        id: uuid(),
        subTitle: "advertisingTitle",
        subText: "advertisingText",
      },
      {
        id: uuid(),
        subTitle: "premiumFeaturesTitle",
        subText: "premiumFeaturesText",
      },
      {
        id: uuid(),
        subTitle: "saleTokensTitle",
        subText: "saleTokensText",
      },
      {
        id: uuid(),
        subTitle: "collaborationsTitle",
        subText: "collaborationsText",
      },
    ],
  },
  {
    id: uuid(),
    title: "investmentAttractivenessTitle",
    text: "",
    description: [
      {
        id: uuid(),
        subTitle: "uniqueModelTitle",
        subText: "uniqueModelText",
      },
      {
        id: uuid(),
        subTitle: "possibilitiesTitle",
        subText: "possibilitiesText",
      },
      {
        id: uuid(),
        subTitle: "marketExpansionTitle",
        subText: "marketExpansionText",
      },
      {
        id: uuid(),
        subTitle: "interestForCommunitiesTitle",
        subText: "interestForCommunitiesText",
      },
    ],
  },
  {
    id: uuid(),
    text: "lookingPartnersText",
    title: "",
  },
];

export const localesBtns = [
  {
    id: 1,
    label: "English",
    value: "en",
  },
  {
    id: 2,
    label: "Українська",
    value: "uk",
  },
  {
    id: 3,
    label: "Русский",
    value: "ru",
  },
];
export type TTask = {
  id: string;
  taskTitle: string;
  points: number;
  completed: boolean;
  icon?: string;
};
export const tasks: TTask[] = [
  {
    id: "1",
    taskTitle: "connectToBlumTG",
    points: 100,
    completed: true,
    icon: "https://i.pinimg.com/1200x/56/79/39/567939f537288a8ac91acdea1e0a355c.jpg",
  },
  {
    id: "2",
    taskTitle: "sendAStars",
    points: 100,
    completed: false,
    icon: "",
  },
  {
    id: "2",
    taskTitle: "investInProject",
    points: 1000000,
    completed: false,
    icon: "",
  },
];
export type TWallet = {
  id: string;
  name: string;
  avatarSrc: string;
  linkToWallet?: string;
  isConnect: boolean;
};
export const walletsList: TWallet[] = [
  {
    id: "1",
    name: "Tonkeeper",
    avatarSrc: "https://avatars.githubusercontent.com/u/88587596?s=200&v=4",
    isConnect: true,
  },
  {
    id: "2",
    name: "Binance",
    avatarSrc:
      "https://www.logo.wine/a/logo/Binance/Binance-BNB-Icon-Logo.wine.svg",
    isConnect: false,
  },
  {
    id: "3",
    name: "Bybit",
    avatarSrc:
      "https://seeklogo.com/images/B/bybit-logo-4C31FD6A08-seeklogo.com.png",
    isConnect: false,
  },
];

export const investorStatus = "investor";
