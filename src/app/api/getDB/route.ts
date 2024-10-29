/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const GET = async (req: Request) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("sample_mflix");

    const collections = await db.listCollections().toArray();
    // const usersColection = await db.collection("users").find().toArray();
    return NextResponse.json({ collections });
  } catch (error) {
    console.error("An error occurred while fetching data from MongoDB:", error);
    return new NextResponse(`${error}`, { status: 500 });
  }
};
