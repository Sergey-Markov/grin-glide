"use client";

import { useEffect, useState } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import classNames from "classnames";

const localesBtns = [
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
    id: 1,
    label: "Русский",
    value: "ru",
  },
];

const Language = () => {
  const [userLg, setUserLg] = useState<Locale>("uk");

  useEffect(() => {
    setUserLocale(userLg);
  }, [userLg]);

  const onClick = (lg: Locale) => {
    setUserLg(lg);
  };
  return (
    <main>
      <ul className="flex ">
        {localesBtns.map((btn) => {
          const isChecked = btn.value === userLg;
          return (
            <li>
              <button
                type="button"
                className={classNames([
                  "btn btn-secondary",
                  isChecked && "btn-accent",
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
