// src/services/api.ts
import axios from "axios";
import { TelegramUser } from "@/hooks/useTelegramUser";

export async function getUser(user: TelegramUser) {
  try {
    const response = await axios.get("/api/get-user-db", {
      params: {
        telegram_id: user.id,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw new Error("Failed to get user");
  }
}
