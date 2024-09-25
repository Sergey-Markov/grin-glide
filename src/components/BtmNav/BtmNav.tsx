"use client";

import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import { IoHomeOutline } from "react-icons/io5";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
import { GiThreeFriends } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const btmNavigationArr = [
  {
    id: uuidv4(),
    label: "Home",
    icon: IoHomeOutline,
    href: "/",
  },
  {
    id: uuidv4(),
    label: "Liderboard",
    icon: BsFillBarChartLineFill,
    href: "/liderboard",
  },
  {
    id: uuidv4(),
    label: "Tasks",
    icon: GoTasklist,
    href: "/tasks",
  },
  {
    id: uuidv4(),
    label: "Friends",
    icon: GiThreeFriends,
    href: "/friends",
  },
];

const BtmNav = () => {
  const pathName = usePathname();

  // const t = useTranslations("HomePage");
  return (
    <nav className="btm-nav text-primary overflow-hidden mx-auto my-0 bg-emerald-900 backdrop-blur-md rounded-full xs:btm-nav-xs sm:btm-nav-sm md:btm-nav-md w-11/12 bottom-4">
      {btmNavigationArr.map(({ id, label, icon: Icon, href }) => (
        <button
          key={id}
          type="button"
          className={classNames([
            pathName === href && "active bg-emerald-950 text-info",
          ])}
        >
          <Link
            href={href}
            className="flex flex-col items-center py-4"
          >
            <Icon className=" h-5 w-5" />
            <span className="btm-nav-label">{label}</span>
          </Link>
        </button>
      ))}
    </nav>
  );
};

export default BtmNav;
