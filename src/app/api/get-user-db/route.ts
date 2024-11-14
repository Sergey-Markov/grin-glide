/* eslint-disable camelcase */
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const telegram_id = searchParams.get("telegram_id");
    const normalizeId = Number(telegram_id);

    // Check for required fields
    if (!telegram_id) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db("test_gring");
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({ normalizeId });

    if (!existingUser) {
      return NextResponse.json(
        {
          message: "User not found",
          existingUser,
          normalizeId,
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
