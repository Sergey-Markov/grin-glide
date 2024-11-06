import { IDbUser } from "@/hooks/useTelegramUser";
import React from "react";

export interface UserContextType {
  user: IDbUser | null;
  setUser: React.Dispatch<React.SetStateAction<IDbUser | null>>;
}
