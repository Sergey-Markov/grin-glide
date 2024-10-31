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
      selected_language = "en", // Default value if not provided
      friends = [], // Default empty array
      completeTasks = [], // Default empty array
      inviter = "",
      status = "user", // Default status
      points = 0,
      wallet = "",
      wallet_name = "",
      investment_sum = [], // Default empty array
    } = body;

    console.log("body:", body);

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

    // Check if the user already exists
    const existingUser = await usersCollection.findOne({ telegram_id });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "User with this telegram_id already exists",
          userDB: existingUser,
        },
        { status: 200 }
      );
    }

    // Create the new user object
    const newUser = {
      telegram_id,
      first_name,
      last_name,
      username,
      language_code,
      selected_language,
      friends,
      completeTasks,
      inviter,
      status,
      points,
      wallet,
      wallet_name,
      investment_sum,
    };

    // Insert the new user into the database
    const result = await usersCollection.insertOne(newUser);
    const userDB_id = result.insertedId;
    const userFromDB = await usersCollection.findOne({ userDB_id });

    return NextResponse.json(
      {
        message: "User added successfully",
        userDB: userFromDB, // Return the inserted document
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
