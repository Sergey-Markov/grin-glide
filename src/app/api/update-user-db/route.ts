/* eslint-disable camelcase */
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();

    const { id: telegram_id, updateFields } = body;

    if (!telegram_id || !updateFields) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // check if Request has unupdating fields
    const unUpdatingFields = ["telegram_id"];
    const checkIncomingFieldsForUserUpdate = unUpdatingFields.every(
      (key) => key in updateFields
    );
    if (checkIncomingFieldsForUserUpdate) {
      return NextResponse.json(
        { message: "The object contains some specified key" },
        { status: 404 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db("test_gring");
    const usersCollection = db.collection("users");

    // Check if the user exists
    const existingUser = await usersCollection.findOne({ telegram_id });

    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Update the user object with the new fields
    await usersCollection.updateOne(
      { telegram_id },
      { $set: updateFields } // Use $set to update specific fields
    );

    const updatedUser = await usersCollection.findOne({ telegram_id });
    return NextResponse.json({
      message: "User updated successfully",
      userDB: updatedUser, // Return the updated fields
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
};
