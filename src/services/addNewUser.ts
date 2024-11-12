// src/services/api.ts
import axios from "axios";
import { TUserContext } from "@/app/contexts/AppContext";

export async function addNewUser(user: TUserContext) {
  try {
    const response = await axios.post("/api/add-user-db", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw new Error("Failed to add user");
  }
}
