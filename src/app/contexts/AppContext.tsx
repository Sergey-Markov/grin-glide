"use client";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale } from "@/i18n/config";
import { useTelegramUser } from "@/hooks/useTelegramUser";
import { getUser } from "@/services/getUser";
import WebApp from "@twa-dev/sdk";
import { addNewUser } from "@/services/addNewUser";

export type TUserContext = {
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
};

interface AppContextType {
  user: TUserContext | null;
  setUser: React.Dispatch<React.SetStateAction<TUserContext | null>>;
  updateUser: (updates: Partial<TUserContext>) => void;
  isNewUser: boolean;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
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
  const { userTelegram, setUserTelegram } = useTelegramUser();

  useEffect(() => {
    const getUserFromDB = async () => {
      try {
        if (typeof window !== "undefined" && userTelegram) {
          const { id, first_name, last_name, username } = userTelegram;

          const bodyReq = {
            id,
            first_name,
            last_name,
            username,
          };
          const result = await getUser(bodyReq);

          // eslint-disable-next-line no-console
          console.log("result.status200:", result.status);
          if (result.status === 200) {
            setUser(result.data.userDB);
            return;
          }
          // eslint-disable-next-line no-console
          console.log("result.status:", result.status);
          if (result.status === 404) {
            try {
              const inviterId = WebApp.initDataUnsafe?.start_param;

              const dbUser: TUserContext = {
                telegram_id: userTelegram.id,
                first_name: userTelegram.first_name,
                last_name: userTelegram.last_name,
                username: userTelegram.username,
                language_code:
                  WebApp.initDataUnsafe?.user?.language_code || "en",
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

              const resultOfAddNewUser = await addNewUser(dbUser);
              if (resultOfAddNewUser.status === 201) {
                setUser(resultOfAddNewUser.data.userDB);
                setIsNewUser(true);
              }
            } catch (err) {
              // eslint-disable-next-line no-console
              console.log("Failed to add user to database.");
            }
          }
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log("Failed to get user data.");
      }
    };
    getUserFromDB();
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

  return (
    <AppContext.Provider
      value={{ user, setUser, updateUser, isNewUser, setIsNewUser }}
    >
      {children}
    </AppContext.Provider>
  );
}
