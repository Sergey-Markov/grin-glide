/* eslint-disable no-console */

"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Preloader from "@/components/Preloader/Preloader";
import { useTranslations } from "next-intl";
import { useTelegramUser } from "@/hooks/useTelegramUser";
import { createReferralLink, TRefferalLink } from "@/utils";
import { TFriend } from "@/components/Friend/Friend";
import Toast from "@/components/Toast/Toast";

const WebApp =
  typeof window !== "undefined" ? require("@twa-dev/sdk").default : null;

const FriendDynamicImport = dynamic(
  () => import("@/components/Friend/Friend"),
  {
    ssr: false,
    loading: () => <Preloader />,
  }
);

const friends: TFriend[] = [
  {
    id: "1",
    name: "feil_nail",
    avatar: "",
    points: 200,
    investor: true,
  },
  {
    id: "2",
    name: "Ivvike week",
    avatar: "",
    points: 256,
    investor: false,
  },
  {
    id: "3",
    name: "qt-tr",
    avatar: "",
    points: 277000000,
    investor: true,
  },
];

const friendsCount = friends.length;

const FriendsList = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isToastVisible, setIsToastVisible] = useState<boolean>(false);
  const [referralLink, setReferralLink] = useState<TRefferalLink>({
    link: "",
    linkForCopy: "",
  });
  const { userTelegram } = useTelegramUser();
  const t = useTranslations("FriendsList");

  useEffect(() => {
    if (userTelegram) {
      const userId = userTelegram?.telegram_id;
      const sharedRefferalLink = createReferralLink(userId);
      setReferralLink(sharedRefferalLink);
    }
  }, [userTelegram]);

  const handleShare = () => {
    if (referralLink.link) {
      WebApp.openTelegramLink(referralLink.link);
    }
  };

  const handleCopy = async () => {
    if (referralLink.linkForCopy) {
      try {
        // Копируем текст в буфер обмена
        await navigator.clipboard.writeText(referralLink.linkForCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        setIsToastVisible(true);
        setTimeout(() => setIsToastVisible(false), 3500);
      }
    }
  };

  return (
    <main className=" min-h-screen p-4 md:p-8 text-white md:pb-24">
      <div className="max-w-md mx-auto">
        <h2 className="text-primary text-4xl font-bold font-mono mb-6">
          {t("title")}
          <span className="ml-3 text-secondary ">{friendsCount}</span>
        </h2>
        <div className="my-6 space-y-2">
          <button
            type="button"
            className="w-full btn btn-success font-bold py-3 px-4 rounded-full"
            onClick={handleShare}
          >
            {t("inviteBtnLabel")}
          </button>
          <button
            type="button"
            className="w-full btn btn-success font-bold py-3 px-4 rounded-full"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy Referral Link"}
          </button>
        </div>
        <ul className="space-y-4 pb-24">
          {friends.map((friend) => (
            <FriendDynamicImport options={friend} />
          ))}
        </ul>
      </div>
      {isToastVisible && <Toast />}
    </main>
  );
};

export default FriendsList;
