// src/services/api.ts
import axios from "axios";

export async function checkChannelMembers(
  telegramId: number,
  channelUsername: string
) {
  try {
    const response = await axios.post("/api/check-membership", {
      telegramId,
      channelUsername,
    });
    return response;
  } catch (error) {
    throw new Error(`Failed to check, ${error}`);
  }
}
