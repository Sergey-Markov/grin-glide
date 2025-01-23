import { v4 as uuid } from "uuid";
import { FaTiktok, FaFacebook } from "react-icons/fa";
import { BiLogoYoutube, BiLogoTelegram } from "react-icons/bi";

const CONTACTS_SOCIAL_INFO = [
  {
    id: uuid(),
    name: "YouTube",
    href: "https://www.youtube.com/@GrinG_Official",
    icon: BiLogoYoutube,
  },
  {
    id: uuid(),
    name: "TikTok",
    href: "https://www.tiktok.com/@gring0fficial?is_from_webapp=1&sender_device=pc",
    icon: FaTiktok,
  },
  {
    id: uuid(),
    name: "Facebook",
    href: "https://www.facebook.com/share/g/1DyRYbKZaJ/",
    icon: FaFacebook,
  },
  {
    id: uuid(),
    name: "Telegram",
    href: "https://t.me/GrinGlide",
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
