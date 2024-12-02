/* eslint-disable no-console */
import axios from "axios";

export const checkChannelMembers = async (
  telegramId: number,
  channelUserName: string
) => {
  try {
    const response = await axios.post("/api/check-membership", {
      telegramId,
      channelUserName,
    });
    return response.data;
  } catch (error: any) {
    console.error("Error in checkChannelMembers:", error);
    throw new Error(
      error.response?.data?.error || "Failed to check membership"
    );
  }
};
