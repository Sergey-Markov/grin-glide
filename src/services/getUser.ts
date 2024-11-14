// src/services/api.ts
import axios from "axios";
import { TelegramUser } from "@/hooks/useTelegramUser";

export async function getUser(user: TelegramUser) {
  const response = await axios.get("/api/get-user-db", {
    params: {
      telegram_id: user.id,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}
