/* eslint-disable no-console */
import axios from "axios";

export const checkChannelMembers = async (
  telegramId: string,
  channelUserName: string
) => {
  try {
    const response = await axios.post("/api/checkMembership", {
      telegramId,
      channelUserName,
    });
    return response.data; // Або відповідно до API
  } catch (error: any) {
    console.error("Error in checkChannelMembers:", error);
    throw new Error(
      error.response?.data?.error || "Failed to check membership"
    );
  }
};
