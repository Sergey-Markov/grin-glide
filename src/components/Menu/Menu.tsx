import { memo } from "react";
import classNames from "classnames";
import Link from "next/link";
import { MENU_ITEMS } from "@/constants";

import s from "./Menu.module.css";

interface IMenu {
  open: boolean;
}

const Menu = memo(({ open }: IMenu) => (
  <ul className={classNames([s.menuBox, open ? s.menuOpen : s.menuClose])}>
    {MENU_ITEMS.map(({ id, label, href, icon: Icon }) => (
      <li key={id}>
        <Link href={href}>
          <Icon className="h-5 w-5" />
          <p>{label}</p>
        </Link>
      </li>
    ))}
  </ul>
));

export default Menu;
