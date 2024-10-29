import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
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
