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
    href: "/",
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
    label: "road map",
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
    title: "GrinG",
    text: "це інноваційний міні застосунок у Telegram, що дозволяє створити ком'юніті, яке самостійно вирішує шляхом голосування, як буде розвиватися платформа. GrinG використовує власний токен на блокчейні TON, який служить засобом для голосування, винагород і монетизації.",
  },
  {
    id: uuid(),
    title: "Ключові особливості проекту",
    text: "",
    description: [
      {
        id: uuid(),
        subTitle: "Голосування за розвиток:",
        subText:
          "Користувачі використовують токени GrinG для голосування, визначаючи напрямки розвитку застосунку.",
      },
      {
        id: uuid(),
        subTitle: "Винагороди:",
        subText:
          "Учасники отримують токени за активність у ком'юніті (голосування, створення контенту, участь у конкурсах та інше)",
      },
      {
        id: uuid(),
        subTitle: "Монетизація:",
        subText:
          "Доходи будуть отримуватися від реклами в застосунку, зокрема реклами соцмереж, профілів та інших додатків",
      },
      {
        id: uuid(),
        subTitle: "Реінвестування:",
        subText:
          "Частина прибутку з реклами буде реінвестована в токен GrinG, що сприятиме стабільності його вартості.",
      },
    ],
  },
  {
    id: uuid(),
    title: "Механізм майнінгу:",
    text: "",
    description: [
      {
        id: uuid(),
        subTitle: "",
        subText: "Токени можна отримати через виконання завдань у застосунку.",
      },
      {
        id: uuid(),
        subTitle: "",
        subText:
          "Буде встановлено ліміти майнінгу для контролю інфляції та залучення нових користувачів.",
      },
    ],
  },
  {
    id: uuid(),
    title: "Дорожня карта:",
    text: "викладена у одному з основних пунктів меню, з нею можливо ознайомитись окремо",
  },
  {
    id: uuid(),
    title: "Шляхи отримання прибутку:",
    text: "",
    description: [
      {
        id: uuid(),
        subTitle: "Реклама:",
        subText:
          "Відображення реклами інших застосунків, профілів соцмереж, блогів та інших продуктів.",
      },
      {
        id: uuid(),
        subTitle: "Преміум-функції:",
        subText: "Додаткові опції в застосунку для користувачів та їх груп",
      },
      {
        id: uuid(),
        subTitle: "Продаж токенів:",
        subText:
          "Після лістингу на біржах користувачі зможуть торгувати токенами.",
      },
      {
        id: uuid(),
        subTitle: "Бізнес-колоборації:",
        subText:
          "Спеціальні пропозиції від реального бізнесу для учасників проекту та інвестиції у розвиток",
      },
    ],
  },
  {
    id: uuid(),
    title: "Інвестиційна привабливість:",
    text: "",
    description: [
      {
        id: uuid(),
        subTitle: "Унікальна модель:",
        subText:
          "Система голосування за розвиток надає користувачам контроль і збільшує їхню залученість.",
      },
      {
        id: uuid(),
        subTitle: "Широкі можливості для монетизації:",
        subText: "Різноманітні рекламні та преміум-сервіси.",
      },
      {
        id: uuid(),
        subTitle: "Розширення ринку:",
        subText:
          "Лістинг на нових біржах та інтеграція з TON надають можливість для глобального розширення.",
      },
      {
        id: uuid(),
        subTitle: "Зростаючий інтерес до спільнот:",
        subText:
          "Популярність застосунків з ком'юніті-управлінням стрімко зростає. Ми у цьому сегменті перші",
      },
    ],
  },
  {
    id: uuid(),
    text: "Ми шукаємо стратегічних партнерів та інвесторів, які допоможуть нам розширити застосунок і залучити капітал для лістингу токена GrinG на біржі. Наша мета – зробити GrinG ключовим інструментом для децентралізованого управління нашого ком'юніті і платформою для інвестиційного заробітку реальних коштів використовуючи можливості сучасних та майбутніх технології. GrinG має на меті масштабування не лише в межах цифрової економіки, але й розширення в реальний сектор для диверсифікації активів.",
    title: "",
  },
];

export const investorStatus = "investor";
export const inviteBtnLabel = "Invite Friend";
export const friendsPageTitle = "Friends:";
export const walletsPageTitle = "Wallets";

export const COMING_SOON = "This feature will be available soon!";
