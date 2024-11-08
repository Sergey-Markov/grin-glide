"use client";

import React, { useEffect, useState } from "react";
import Friend, { TFriend } from "@/components/Friend/Friend";
import { useTranslations } from "next-intl";
import { useTelegramUser } from "@/hooks/useTelegramUser";
import { createReferralLink } from "@/utils";
import WebApp from "@twa-dev/sdk";

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
  const [referralLink, setReferralLink] = useState<string>("");
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
    if (referralLink) {
      WebApp.openTelegramLink(referralLink);
    }
  };

  return (
    <main className=" min-h-screen p-4 md:p-8 text-white md:pb-24">
      <div className="max-w-md mx-auto">
        <h2 className="text-primary text-4xl font-bold font-mono mb-6">
          {t("title")}
          <span className="ml-3 text-secondary ">{friendsCount}</span>
        </h2>
        <button
          type="button"
          className="w-full btn btn-success font-bold py-3 px-4 rounded-full my-6"
          onClick={handleShare}
        >
          {t("inviteBtnLabel")}
        </button>
        <ul className="space-y-4">
          {friends.map((friend) => (
            <Friend options={friend} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default FriendsList;
