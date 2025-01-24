import React from "react";
import { v4 as uuid } from "uuid";
import { BiMailSend, BiLogoTelegram } from "react-icons/bi";
import { useTranslations } from "next-intl";
import SocLinkList from "../SocLinkList/SocLinkList";

const CONTACTS_GENERAL_INFO = [
  {
    id: uuid(),
    name: "email",
    text: "grinGlide.official@gmail.com",
    icon: BiMailSend,
    href: "mailto:grinGlide.official@gmail.com",
  },
  {
    id: uuid(),
    name: "support",
    text: "grinGlide.official@gmail.com",
    icon: BiLogoTelegram,
    href: "mailto:grinGlide.official@gmail.com",
  },
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
        <div className="flex items-center justify-end">
          <SocLinkList />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
