/* eslint-disable camelcase */
import axios from "axios";

export const updateVoteFields = async (
  voteName: string,
  telegram_id: number,
  updateFields: any
) => {
  try {
    const response = await axios.patch("/api/update-votes-db", {
      voteName,
      telegram_id,
      updateFields,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update user");
  }
};
