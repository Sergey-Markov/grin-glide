// context/UserContext.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from "react";
import WebApp from "@twa-dev/sdk";
import { IDbUser, useTelegramUser } from "@/hooks/useTelegramUser";
import { UserContextType } from "./types";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IDbUser | null>(null);
  const { userTelegram } = useTelegramUser();

  useEffect(() => {
    if (WebApp && userTelegram) {
      if (!user) {
        setUser(userTelegram);
        WebApp.showAlert("Hello bro");
      }
    }
  }, [user]);

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
