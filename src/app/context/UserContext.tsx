// context/UserContext.tsx
import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { IDbUser } from "@/hooks/useTelegramUser";
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
  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
