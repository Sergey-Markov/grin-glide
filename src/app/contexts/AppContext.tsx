"use client";

/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import { Locale } from "@/i18n/config";
import { useTelegramUser } from "@/hooks/useTelegramUser";
import { getUser } from "@/services/getUser";

export type TFriend = {
  telegram_id: number;
  username: string;
  status: "investor" | "user";
};

export type TUserContext = {
  telegram_id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code: string;
  selected_language?: Locale;
  friends: TFriend[];
  completedTasks: {
    id: string;
    isClaimed: boolean;
  }[];
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
  lastResetDailyTask: string | "";
};

export type TAppError = {
  message: string;
  isShow: boolean;
};

interface AppContextType {
  user: TUserContext | null;
  setUser: React.Dispatch<React.SetStateAction<TUserContext | null>>;
  updateUser: (updates: Partial<TUserContext>) => void;
  isNewUser: boolean;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
  appErrors: TAppError | null;
  setAppError: React.Dispatch<React.SetStateAction<TAppError | null>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useUser() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [user, setUser] = useState<TUserContext | null>(null);
  const [isNewUser, setIsNewUser] = useState(false);
  const [appErrors, setAppError] = useState<TAppError | null>(null);
  const { userTelegram } = useTelegramUser();

  useEffect(() => {
    if (typeof window !== "undefined" && userTelegram) {
      const { id, first_name, last_name, username } = userTelegram;
      const bodyReq = {
        id,
        first_name,
        last_name,
        username,
      };

      const getUserFromDB = async () => {
        try {
          const result = await getUser(bodyReq);

          if (result.status === 201) {
            setUser(result.data.userDB);
            setIsNewUser(true);
            return;
          }

          if (result.status === 200) {
            setUser(result.data.userDB);
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log("Failed to get user data.");
        }
      };
      getUserFromDB();
    }
  }, [userTelegram]);

  const updateUser = (updates: Partial<TUserContext>) => {
    setUser((prevUser) => {
      if (prevUser) {
        const updatedUser = { ...prevUser, ...updates };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        return updatedUser;
      }
      return prevUser;
    });
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      updateUser,
      isNewUser,
      setIsNewUser,
      appErrors,
      setAppError,
    }),
    [isNewUser, user, appErrors]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
