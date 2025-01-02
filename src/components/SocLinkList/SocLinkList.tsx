import { v4 as uuid } from "uuid";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import {
  // BiGlobe,
  BiLogoYoutube,
  BiLogoTelegram,
} from "react-icons/bi";

const CONTACTS_SOCIAL_INFO = [
  {
    id: uuid(),
    name: "YouTube",
    href: "+1 (555) 123-4567",
    icon: BiLogoYoutube,
  },
  {
    id: uuid(),
    name: "TikTok",
    href: "+1 (555) 123-4567",
    icon: FaTiktok,
  },
  {
    id: uuid(),
    name: "Instagram",
    href: "investors@company.com",
    icon: FaInstagram,
  },
  {
    id: uuid(),
    name: "Telegram",
    href: "www.company.com",
    icon: BiLogoTelegram,
  },
];

const SocLinkList = () => (
  <ul className="flex items-center justify-between gap-2">
    {CONTACTS_SOCIAL_INFO.map(({ id, href, icon: Icon }) => (
      <a
        key={id}
        className="flex items-center justify-center bg-primary p-2 rounded-full"
        href={href}
        target="_blank"
        aria-label={href}
        rel="noreferrer"
      >
        <Icon className="w-6 h-6" />
      </a>
    ))}
  </ul>
);

export default SocLinkList;
