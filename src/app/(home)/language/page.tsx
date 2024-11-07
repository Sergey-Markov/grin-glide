"use client";

import { useEffect } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import classNames from "classnames";
import { localesBtns } from "@/constants";
import { useTranslations } from "next-intl";
import { useTelegramUser } from "@/hooks/useTelegramUser";
import { updateUserFields } from "@/services/updateUserFields";

const Language = () => {
  const { userTelegram, setUserTelegram } = useTelegramUser();
  const t = useTranslations("LanguagePage");

  useEffect(() => {
    if (userTelegram?.selected_language) {
      const selectedLang = userTelegram.selected_language;
      setUserLocale(selectedLang);
    }
  }, [userTelegram?.selected_language]);

  const onClick = async (lg: Locale) => {
    const newLang = { selected_language: lg };
    if (userTelegram?.telegram_id) {
      const udateUserLangResult = await updateUserFields(
        userTelegram?.telegram_id,
        newLang
      );
      if (userTelegram) {
        setUserTelegram(udateUserLangResult);
      }
    }
  };

  return (
    <main className="min-h-screen p-4 md:p-8 text-white pb-24">
      <h2 className="text-primary text-4xl font-bold font-mono mb-6">
        {t("title")}
      </h2>
      <ul className="grid grid-cols-2 grid-rows-2 gap-1 sm:grid-cols-3 sm:grid-rows-3 sm:gap-2 md:grid-cols-5 md:grid-rows-5 md:gap-3">
        {localesBtns.map((btn) => {
          const isChecked = btn.value === userTelegram?.selected_language;
          return (
            <li key={btn.value}>
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
