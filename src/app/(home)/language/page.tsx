"use client";

/* eslint-disable no-console */

import { useEffect } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import classNames from "classnames";
import { localesBtns } from "@/constants";
import { useTranslations } from "next-intl";
import { updateUserFields } from "@/services/updateUserFields";
import { useUser } from "@/app/contexts/AppContext";
import Link from "next/link";
import BackBtn from "@/components/BackBtn/BackBtn";

const Language = () => {
  const { user, updateUser } = useUser();
  const t = useTranslations("LanguagePage");

  useEffect(() => {
    if (user?.selected_language) {
      setUserLocale(user.selected_language);
    }
  }, [user?.selected_language]);

  const onClick = async (lg: Locale) => {
    if (user?.telegram_id) {
      const newLang = { selected_language: lg };
      try {
        const updatedUserLangResult = await updateUserFields(
          user.telegram_id,
          newLang
        );
        updateUser(updatedUserLangResult.userDB);
        await setUserLocale(lg);
      } catch (error) {
        console.error("Failed to update user language:", error);
      }
    }
  };

  return (
    <main className="min-h-screen p-4 md:p-8 text-white pb-24 space-y-6">
      <div className="mb-7 flex flex-row justify-between items-center">
        <Link href="/">
          <BackBtn />
        </Link>
        <h2 className="text-primary text-4xl font-mono font-bold">
          {t("title")}
        </h2>
      </div>
      <ul className="grid grid-cols-2 grid-rows-2 gap-1 sm:grid-cols-3 sm:grid-rows-3 sm:gap-2 md:grid-cols-5 md:grid-rows-5 md:gap-3">
        {localesBtns.map((btn) => {
          const isChecked = btn.value === user?.selected_language;
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
