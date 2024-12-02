/* eslint-disable no-console */
import axios from "axios";

export const checkChannelMembers = async (
  telegramId: number,
  channelUserName: string
) => {
  const response = await axios.post("/api/checkMembership", {
    telegramId,
    channelUserName,
  });
  return response.data; // Або відповідно до API
};
