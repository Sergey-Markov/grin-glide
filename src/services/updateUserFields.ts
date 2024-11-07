import axios from "axios";

export const updateUserFields = async (id: number, updateFields: any) => {
  try {
    const response = await axios.patch("/api/update-user-db", {
      id,
      updateFields,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update user");
  }
};
