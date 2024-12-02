/* eslint-disable no-console */
// src/services/api.ts
import axios from "axios";

export async function checkChannelMembers(
  telegramId: number,
  channelUsername: string
) {
  const response = await axios.post("/api/check-membership", {
    telegramId,
    channelUsername,
  });
  return response.data;
}
