import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

export const useTelegramUser = () => {
  const [userTelegram, setUserTelegram] = useState<TelegramUser | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && WebApp.initDataUnsafe?.user) {
      const initData = WebApp.initDataUnsafe;
      const telegramUser = initData.user as TelegramUser;
      if (!userTelegram) {
        setUserTelegram(telegramUser);
      }
    }
  }, [userTelegram]);

  return { userTelegram, setUserTelegram };
};
