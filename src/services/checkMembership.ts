// src/services/api.ts
import axios from "axios";

export async function checkChannelMembers(
  telegramId: number,
  channelUsername: string
) {
  const body = {
    telegramId,
    channelUsername,
  };
  try {
    const response = await axios.post("/api/check-membership", body);
    return response;
  } catch (error) {
    throw new Error(`Failed to check, ${error}`);
  }
}
