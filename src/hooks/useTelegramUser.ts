import { Locale } from "@/i18n/config";
import { addUser } from "@/services/addNewUser";
import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

export interface IDbUser {
  telegram_id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code: string;
  selected_language?: Locale;
  friends: number[];
  completeTasks: string[];
  inviterId: string;
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
  const [userTelegram, setUserTelegram] = useState<IDbUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndAddUser = async () => {
      try {
        if (typeof window !== "undefined" && WebApp.initDataUnsafe?.user) {
          const initData = WebApp.initDataUnsafe;
          const telegramUser = initData.user as TelegramUser;
          const inviterId = initData.start_param;

          // Map TelegramUser to IDbUser format
          const dbUser: IDbUser = {
            telegram_id: telegramUser.id,
            first_name: telegramUser.first_name,
            last_name: telegramUser.last_name,
            username: telegramUser.username,
            language_code: WebApp.initDataUnsafe?.user?.language_code || "en",
            selected_language: "en",
            friends: [],
            completeTasks: [],
            inviterId: inviterId || "bot_link",
            status: "user",
            points: 0,
            wallet: "",
            wallet_name: "",
            investment_sum: [],
          };

          const result = await addUser(dbUser);
          setUserTelegram(result.userDB); // Assuming addUser returns the user
        }
      } catch (err) {
        setError("Failed to add user to database.");
      }
    };

    fetchAndAddUser();
  }, []);

  return { userTelegram, error, setUserTelegram };
};
