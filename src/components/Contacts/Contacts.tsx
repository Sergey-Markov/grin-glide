import React from "react";
import { v4 as uuid } from "uuid";
import {
  // BiGlobe,
  BiLogoDiscordAlt,
  BiMailSend,
  BiLogoYoutube,
  BiLogoTelegram,
} from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { useTranslations } from "next-intl";

const CONTACTS_SOCIAL_INFO = [
  {
    id: uuid(),
    name: "YouTube",
    href: "+1 (555) 123-4567",
    icon: BiLogoYoutube,
  },
  {
    id: uuid(),
    name: "Discord",
    href: "investors@company.com",
    icon: BiLogoDiscordAlt,
  },
  {
    id: uuid(),
    name: "Twitter",
    href: "www.company.com",
    icon: BsTwitterX,
  },
  {
    id: uuid(),
    name: "Telegram",
    href: "www.company.com",
    icon: BiLogoTelegram,
  },
];
const CONTACTS_GENERAL_INFO = [
  {
    id: uuid(),
    name: "email",
    text: "investors@company.com",
    icon: BiMailSend,
  },
  {
    id: uuid(),
    name: "support",
    text: "investors@company.com",
    icon: BiLogoTelegram,
  },
  // {
  //   id: uuid(),
  //   name: "Website",
  //   text: "www.company.com",
  //   icon: BiGlobe,
  // },
];

const Contacts = () => {
  const t = useTranslations("Contacts");
  return (
    <div className="bg-emerald-700 rounded-lg p-6 mb-6">
      <h2 className="text-primary text-lg font-semibold font-mono mb-3">
        {t("title")}
      </h2>
      <div className="space-y-4">
        {CONTACTS_GENERAL_INFO.map(({ id, name, text, icon: Icon }) => (
          <a
            key={id}
            className="flex items-center"
            href={text}
          >
            <Icon className="w-6 h-6 mr-3 text-success" />
            <div>
              <p className="font-medium">{t(name)}</p>
              <p className="text-success">{text}</p>
            </div>
          </a>
        ))}
        <div className="flex items-center justify-end gap-2">
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
        </div>
      </div>
    </div>
  );
};

export default Contacts;
