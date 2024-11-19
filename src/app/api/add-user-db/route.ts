/* eslint-disable no-console */
/* eslint-disable camelcase */
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const {
      telegram_id,
      first_name,
      last_name,
      username,
      language_code,
      inviterId,
    } = body;

    // Check for required fields
    if (!telegram_id || !username || !first_name || !language_code) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db("test_gring");
    const usersCollection = db.collection("users");

    // Create unique index for telegram_id
    await usersCollection.createIndex({ telegram_id: 1 }, { unique: true });

    if (inviterId && inviterId !== "bot_link") {
      const normalizeTelegramIdForFindUserInDB = Number(inviterId);
      const referrer = await usersCollection.findOne({
        telegram_id: normalizeTelegramIdForFindUserInDB,
      });

      if (referrer) {
        const bonusPoints = 100;
        const sumRefPoints = bonusPoints + referrer.points;
        const newFriend = {
          telegram_id,
          username,
          status: "user",
        };
        const updateReferrerFields = {
          points: sumRefPoints,
          friends: [...referrer.friends, newFriend],
        };

        await usersCollection.updateOne(
          { telegram_id: normalizeTelegramIdForFindUserInDB },
          { $set: updateReferrerFields }
        );
      }
    }

    const newUser = {
      telegram_id,
      first_name,
      last_name,
      username,
      language_code,
      selected_language: "en", // Default value if not provided
      friends: [], // Default empty array
      completeTasks: [], // Default empty array
      inviterId,
      status: "user", // Default status
      points: 1000,
      wallet: "",
      wallet_name: "",
      investment_sum: [],
    };

    await usersCollection.insertOne(newUser);

    return NextResponse.json(
      {
        message: "User added successfully",
        userDB: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
