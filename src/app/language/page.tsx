"use client";

import { useEffect, useState } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import classNames from "classnames";
import { localesBtns } from "@/constants";
import { useTranslations } from "next-intl";

const Language = () => {
  const [userLg, setUserLg] = useState<Locale>("uk");
  const t = useTranslations("LanguagePage");

  useEffect(() => {
    setUserLocale(userLg);
  }, [userLg]);

  const onClick = (lg: Locale) => {
    setUserLg(lg);
  };
  return (
    <main className=" min-h-screen p-4 md:p-8 text-white pb-24">
      <h2 className="text-primary text-4xl font-bold font-mono mb-6">
        {t("title")}
      </h2>
      <ul className="grid grid-cols-2 grid-rows-2 gap-1 sm:grid-cols-3 sm:grid-rows-3 sm:gap-2  md:grid-cols-5 md:grid-rows-5 md:gap-3">
        {localesBtns.map((btn) => {
          const isChecked = btn.value === userLg;
          return (
            <li>
              <button
                type="button"
                className={classNames([
                  "btn w-full",
                  isChecked && "btn-primary",
                ])}
                onClick={() => onClick(btn.value as Locale)}
              >
                {btn.label}
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Language;
