// src/services/api.ts
import axios from "axios";
import { IDbUser } from "@/hooks/useTelegramUser";

export async function addUser(user: IDbUser) {
  try {
    const response = await axios.post("/api/add-user-db", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add user");
  }
}
