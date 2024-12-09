/* eslint-disable no-unused-vars */
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
import { GiStarsStack, GiThreeFriends } from "react-icons/gi";
import { IconType } from "react-icons";
import { FaHandPeace, FaHandshakeAngle } from "react-icons/fa6";
import { TbBrandCashapp } from "react-icons/tb";
import pointImg from "@images/coin_png_sqooshed.webp";
import { BiWallet } from "react-icons/bi";

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
  icon?: IconType;
  src?: string;
  href?: string;
  approute?: string;
};
export const tasks: TTask[] = [
  {
    id: "1",
    taskTitle: "connectToGrinGTG",
    points: 100,
    src: pointImg as any,
    href: "https://t.me/GrinGlide",
  },
  {
    id: "2",
    taskTitle: "connectWallet",
    points: 100,
    approute: "/wallet",
    icon: BiWallet,
  },
  {
    id: "3",
    taskTitle: "inviteTwoFriends",
    points: 100,
    approute: "/friends",
    icon: FaHandPeace,
  },
  {
    id: "4",
    taskTitle: "inviteTenFriends",
    points: 100,
    approute: "/friends",
    icon: FaHandshakeAngle,
  },
  // {
  //   id: "4",
  //   taskTitle: "connectToGrinGTG",
  //   points: 100,
  //   icon: "https://github.com/Sergey-Markov/meme-coin-first/blob/main/GrinGlide.png",
  // },
  // {
  //   id: "5",
  //   taskTitle: "sendAStars",
  //   points: 100,
  //   icon: GiStarsStack,
  // },
  // {
  //   id: "6",
  //   taskTitle: "investInProject",
  //   points: 1000,
  //   icon: TbBrandCashapp,
  // },
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
export const SUPPORT_CONTENT = [
  {
    id: 1,
    title: "whatIsGringTitle",
    text: "whatIsGringText",
  },
  {
    id: 2,
    title: "miningMechanismTitle",
    text: "whatIsGringText",
  },
  {
    id: 3,
    title: "voteTitle",
    text: "voteText",
  },
  {
    id: 4,
    title: "gringTokenChangeTitle",
    text: "gringTokenChangeText",
  },
  {
    id: 5,
    title: "advertisingTitle",
    text: "advertisingText",
  },
  {
    id: 6,
    title: "supportTitle",
    text: "supportText",
  },
];

export const roadStages = [
  {
    id: 1,
    title: "projStart",
    isComplete: true,
  },
  {
    id: 2,
    title: "projStartTest",
    isComplete: true,
  },
  {
    id: 3,
    title: "gamification",
    isComplete: false,
  },
  {
    id: 4,
    title: "100Users",
    isComplete: false,
  },
  {
    id: 5,
    title: "200Users",
    isComplete: false,
  },
  {
    id: 6,
    title: "500Users",
    isComplete: false,
  },
  {
    id: 7,
    title: "1mUsers",
    isComplete: false,
  },
  {
    id: 8,
    title: "investment",
    isComplete: false,
  },
  {
    id: 9,
    title: "tokenomics",
    isComplete: false,
  },
  {
    id: 10,
    title: "1auction",
    isComplete: false,
  },
  {
    id: 11,
    title: "2auction",
    isComplete: false,
  },
  {
    id: 12,
    title: "summing",
    isComplete: false,
  },
  {
    id: 13,
    title: "DEX",
    isComplete: false,
  },
  {
    id: 14,
    title: "3auction",
    isComplete: false,
  },
  {
    id: 15,
    title: "CEX",
    isComplete: false,
  },
  {
    id: 16,
    title: "diversification",
    isComplete: false,
  },
  {
    id: 17,
    title: "realSector",
    isComplete: false,
  },
  {
    id: 18,
    title: "reinvesting",
    isComplete: false,
  },
  {
    id: 18,
    title: "retrospective",
    isComplete: false,
  },
];

export const investorStatus = "investor";
