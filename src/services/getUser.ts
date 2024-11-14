/* eslint-disable no-console */
// src/services/api.ts
import axios from "axios";
import { TelegramUser } from "@/hooks/useTelegramUser";
import WebApp from "@twa-dev/sdk";
import { TUserContext } from "@/app/contexts/AppContext";
import { addNewUser } from "./addNewUser";

export async function getUser(user: TelegramUser) {
  try {
    const response = await axios.get("/api/get-user-db", {
      params: {
        telegram_id: user.id,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response.status:", response.status);
    if (response.status === 404 && WebApp) {
      try {
        const initData = WebApp.initDataUnsafe;
        const userFromTelegram = initData.user;
        const inviterId = initData?.start_param;

        const dbUser: TUserContext = {
          telegram_id: user.id,
          first_name: userFromTelegram?.first_name,
          last_name: userFromTelegram?.last_name,
          username: userFromTelegram?.username,
          language_code: WebApp.initDataUnsafe?.user?.language_code || "en",
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
        return resultOfAddNewUser;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log("Failed to add user to database.");
      }
    }
    return response;
  } catch (error) {
    throw new Error("Failed to get user");
  }
}
