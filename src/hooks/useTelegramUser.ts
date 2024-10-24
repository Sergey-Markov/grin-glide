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
    if (
      typeof window !== "undefined" &&
      window.Telegram?.WebApp?.initDataUnsafe?.user
    ) {
      const telegramUser = window.Telegram.WebApp.initDataUnsafe
        .user as TelegramUser;
      setUser(telegramUser);
    }
  }, []);

  return user;
};
