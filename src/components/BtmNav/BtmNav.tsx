"use client";

import { memo } from "react";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOTTOM_NAVIGATION } from "@/constants";
import { useTranslations } from "next-intl";

const BtmNav = memo(() => {
  const pathName = usePathname();
  const t = useTranslations("BtmNav");

  return (
    <nav className="btm-nav text-primary overflow-hidden mx-auto my-0 bg-emerald-900 backdrop-blur-md rounded-full xs:btm-nav-xs sm:btm-nav-sm md:btm-nav-md bottom-4 max-w-screen-md z-40">
      {BOTTOM_NAVIGATION.map(({ id, label, icon: Icon, href }) => (
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
            <span className="btm-nav-label">{t(label)}</span>
          </Link>
        </button>
      ))}
    </nav>
  );
});

export default BtmNav;
