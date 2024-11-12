/* eslint-disable camelcase */
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const GET = async (request: Request) => {
  try {
    const body = await request.json();

    const { telegram_id, first_name, last_name, username } = body;

    // Check for required fields
    if (!telegram_id || !username || !first_name || !last_name) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db("test_gring");
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({ telegram_id });

    if (!existingUser) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "User with this telegram_id already exists",
        userDB: existingUser,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
