/* eslint-disable camelcase */
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();

    const { voteName, telegram_id, updateFields } = body;

    if (!updateFields || !voteName || !telegram_id) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db("test_gring");
    const voteCollection = db.collection("votes");
    const userCollection = db.collection("users");

    // Check if the vote exists
    const existingVote = await voteCollection.findOne({ voteName });
    if (!existingVote) {
      return NextResponse.json({ message: "Vote not found" }, { status: 404 });
    }

    // Check if the user exists
    const existingUser = await userCollection.findOne({ telegram_id });
    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check if the user has already voted
    if (existingVote.users.includes(telegram_id)) {
      return NextResponse.json(
        { message: "User has already voted" },
        { status: 400 }
      );
    }

    const { voteOption } = updateFields; // Наприклад, "pirate"
    if (!voteOption) {
      return NextResponse.json(
        { message: "Missing vote option" },
        { status: 400 }
      );
    }

    // Update the vote result and add the user to the voters list
    await voteCollection.updateOne(
      { voteName },
      {
        $inc: { [`voteResult.${voteOption}`]: 1 }, // Збільшити значення
        $addToSet: { users: telegram_id }, // Додати користувача до списку
      }
    );

    const updatedVote = await voteCollection.findOne({ voteName });
    return NextResponse.json({
      message: "Vote updated successfully",
      voteDB: updatedVote, // Return the updated fields
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
};
