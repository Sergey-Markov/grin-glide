/* eslint-disable no-console */
import axios from "axios";

export const checkChannelMembers = async (
  telegramId: number,
  channelUserName: string
) => {
  const response = await axios.post("/api/check-membership", {
    telegramId,
    channelUserName,
  });
  return response.data;
};
