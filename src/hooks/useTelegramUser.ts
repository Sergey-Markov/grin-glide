import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";
// import { useUserProfilePhoto } from "./useUserProfilePhoto";

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

export interface IDb_User {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code: string;
  selected_language?: string;
  friends: number[];
  completeTasks: string[];
  inviter: string;
  status: "investor" | "user";
  points: number;
  wallet: string;
  wallet_name: string;
  investment_sum: {
    id: number;
    amount: number;
    currency: "TON" | "USDT";
  }[];
}

export const useTelegramUser = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && WebApp.initDataUnsafe?.user) {
      const telegramUser = WebApp.initDataUnsafe.user as TelegramUser;

      setUser(telegramUser);
    }
  }, []);

  return user;
};
