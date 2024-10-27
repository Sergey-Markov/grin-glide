/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// import { NextRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const GET = async (req: Request) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("users");

    // const collections = await db.listCollections().toArray();
    return NextResponse.json({ db });
  } catch (error) {
    console.error("An error occurred while fetching data from MongoDB:", error);
    return new NextResponse(`${error}`, { status: 500 });
  }
};
