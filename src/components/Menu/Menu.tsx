"use client";

import { memo } from "react";
import classNames from "classnames";
import Link from "next/link";
import { MENU_ITEMS } from "@/constants";

import { useTranslations } from "next-intl";
import s from "./Menu.module.css";

interface IMenu {
  open: boolean;
}

const Menu = memo(({ open }: IMenu) => {
  const t = useTranslations("Menu");

  return (
    <ul className={classNames([s.menuBox, open ? s.menuOpen : s.menuClose])}>
      {MENU_ITEMS.map(({ id, label, href, icon: Icon }) => (
        <li key={id}>
          <Link href={href}>
            <Icon className="h-5 w-5" />
            <p>{t(label)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default Menu;
